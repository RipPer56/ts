import { HttpClient } from '@angular/common/http';
import { Injectable, Optional, SkipSelf } from '@angular/core';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/concat';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/merge';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/retry';
import 'rxjs/add/operator/retryWhen';
import 'rxjs/add/operator/shareReplay';
import 'rxjs/add/operator/take';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { RequestDetails } from './request-details.model';
import { of } from "rxjs/observable/of";

@Injectable()
export class AppStore {

  private retryInMs = 5000;
  private maxRetries = 1;
  private exposedStreams = new Map<string, Observable<any>>();
  private emittableStreams = new Map<string, Subject<any>>();

  constructor(@Optional() @SkipSelf() parent: AppStore, private http: HttpClient) {
    if (parent) {
      throw new Error(
        'AppStore is already instantiated. This can happen when provided in a module that injects/instantiates multiple times ' +
        'its provided services, for example with lazy loading. Check how the module provides the services. Maybe we need to move it to ' +
        'CoreModule.forRoot().');
    }
  }

  get<T>(details: RequestDetails | string): Observable<T> {
    return this.doRequest(details,
      (_details) => this.http.get<T>(_details.url, _details.options).retryWhen(error => this.handleRetries(error, _details)));
  }

  // Doc:
  // Share/memcache requests: https://stackoverflow.com/a/36291681/4717408
  // Cache HTTP responses:
  //      https://stackoverflow.com/documentation/rxjs/8247/common-recipes/26490/caching-http-responses#t=201612161544428695958

  post(details: RequestDetails | string){
    return this.doRequest(details,
      (_details) => this.http.post(_details.url, _details.body, _details.options).retryWhen(error => this.handleRetries(error, _details)));
  }

  put(details: RequestDetails | string) {
    return this.doRequest(details,
      (_details) => this.http.put(_details.url, _details.body, _details.options).retryWhen(error => this.handleRetries(error, _details)));
  }

  delete(details: RequestDetails | string) {
    return this.doRequest(details,
      (_details) => this.http.delete(_details.url, _details.options).retryWhen(error => this.handleRetries(error, _details)));
  }

  head(details: RequestDetails | string) {
    return this.doRequest(details,
      (_details) => this.http.head(_details.url, _details.options).retryWhen(error => this.handleRetries(error, _details)));
  }

  options(details: RequestDetails | string) {
    return this.doRequest(details,
      (_details) => this.http.options(_details.url, _details.options).retryWhen(error => this.handleRetries(error, _details)));
  }

  patch(details: RequestDetails | string) {
    return this.doRequest(details,
      (_details) => this.http.patch(_details.url, _details.body, _details.options).retryWhen(error => this.handleRetries(error, _details)));
  }

  /**
   * If the first parameter is a string, it is considered a method name and it will use the same signature as other methods (URL, body...
   * from the details parameter). Otherwise, it is considered to be an HttpRequest<any> type and is the unique parameter passed through
   * to HttpClient service to define the URL, body...
   * @param method
   * @param details
   * @returns {Observable<any>}
   */
  request<T>(method: string, details: RequestDetails | string) {
    return this.doRequest<T>(details,
      (_details) => this.http.request<T>(method as string, _details.url, _details.options));
  }

  public exposedStreamsSize() {
    return this.exposedStreams.size;
  }

  // HttpRequest is used to follow the progress of the request. The usage is quite different and not covered yet by the application specs.
  // It is disabled for now, until we plan to cover progress events and include it in the specs.
  // /**
  //  * If the first parameter is a string, it is considered a method name and it will use the same signature as other methods (URL, body...
  //  * from the details parameter). Otherwise, it is considered to be an HttpRequest<any> type and is the unique parameter passed through
  //  * to HttpClient service to define the URL, body...
  //  * @param method
  //  * @param details
  //  * @returns {Observable<any>}
  //  */
  // requestWithHttpRequest<T>(method: string | HttpRequest<any>, details?: RequestDetails | string) {
  //   const isHttpRequest = typeof method !== 'string';
  //   if (isHttpRequest && !details) {
  //     details = {} as RequestDetails;
  //   }
  //   return this.doRequest<T>(details,
  //     (_details) => isHttpRequest
  //       ? this.http.request(method as HttpRequest<any>)
  //       : this.http.request(method as string, _details.url, _details.options));
  // }

  // The 2 following methods should be strictly equivalents, but they are not at all. maybe because HttpRequest is experimental.
  // request2(request: HttpRequest<any>) {
  //   return this.http.request(request).do(res => console.log(res));
  // }
  //
  // request3(request: HttpRequest<any>) {
  //   return this.http.request(request.method, request.url).do(res => console.log(res));
  // }

  handleRetries(error: any, details: RequestDetails) {

    return error
      .flatMap((err: any) => {
        if (err.status >= 400 && err.status < 500) {
          return Observable.throw(err.error);
        }
        return of(err).delay(this.retryInMs);
      })
      .take(this.maxRetries)
      .concat((err: any) => {
        Observable.throw({
          error: err.error,
          msg: `Sorry, there was an error trying ${details.url} ${this.maxRetries} times`,
        });
      });
  }

  private doRequest<T>(details: RequestDetails | string, call: (details: RequestDetails) => Observable<T>): Observable<T> {
    if (typeof details === 'string') {
      details = {url: details} as RequestDetails;
    }

    if (details.useCache === false) {

      return call(details);

    } else {
      const key = this.detailsToCacheKey(details);

      // Cache-first strategy: if the observable is found (request already sent), it is returned.
      if (!details.force && this.exposedStreams.has(key)) {
        return this.exposedStreams.get(key) as Observable<T>;
      }

      // Otherwise, the observable is initialized from a newly sent request and the cache.
      // The observables are cached in memory, and newly emitted values are stored in local storage
      const httpStream = call(details);

      // The emittable stream collects and re-emit new values provided by the application, via actions.
      // It is initialized with an eventual cached value in local storage
      const emittableStream = this.emittableStreamForKey<T>(key);

      // The final stream will emit the initial value (local storage/cache), the remote value from HTTP and new values
      // provided by the application through actions.
      return this.makeExposedStream(key, httpStream, emittableStream);
    }
  }

  private detailsToCacheKey(details: RequestDetails): string {
    if (details.key) {
      return details.key;
    }
    return details.url + '_' + JSON.stringify(details.params);
  }

  private emittableStreamForKey<T>(key: string): Observable<T> {
    // For the values emitted by the app, we reuse eventually existing emitters.
    if (this.emittableStreams.has(key)) {
      return this.emittableStreams.get(key) as Observable<T>;
    }
    const cachedValue: T | undefined = this.getFromCache(key) as T;
    const emittableStream = new BehaviorSubject(cachedValue);
    this.emittableStreams.set(key, emittableStream);
    return emittableStream;
  }

  private makeExposedStream<T>(key: string, httpStream: Observable<T>, emittableStream: Observable<T>): Observable<T> {
    const exposedStream = httpStream
      .merge(emittableStream)
      .do(res => {
        this.setCache(key, res);
      })
      .shareReplay(1);
    this.exposedStreams.set(key, exposedStream);
    return exposedStream;
  }

  private getFromCache<T>(key: string): T | undefined {
    const cachedValue: T | undefined = undefined; // TODO get from local storage or other persistent local cache
    return cachedValue;
  }

  private setCache<T>(key: string, value: T) {
    // TODO store in cache
  }
}

