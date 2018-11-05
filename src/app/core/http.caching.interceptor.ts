import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { filter, tap } from 'rxjs/operators';
import { CacheService } from '../shared/services/cache-service';

@Injectable()
export class HttpCachingInterceptor implements HttpInterceptor {

  constructor(private cachService: CacheService) {

  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (request.method !== 'GET') {
      return next.handle(request);
    }

    const cachedResponse = this.cachService.getRequestfromCache(request);
    if (cachedResponse) {
      return cachedResponse;
    }

    return next.handle(request).pipe(
      filter(event => event instanceof HttpResponse)
      , tap(event => {
        this.cachService.setRequestIntoCache(request, of(event));
      }),
    );
  }
}
