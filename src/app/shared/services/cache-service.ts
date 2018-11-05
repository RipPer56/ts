import { HttpEvent, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class CacheService {
  private fixedDelay = 30;
  private cache: { [name: string]: { httpEvent: Observable<HttpEvent<any>>, start: Date } } = {};

  getRequestfromCache(request: HttpRequest<any>): (Observable<HttpEvent<any>> | null) {
    const cachedResponse = this.cache[request.urlWithParams] || null;
    if (cachedResponse) {
      let date = new Date();
      let diff = (date.getTime() - cachedResponse.start.getTime()) / 1000;
      if (diff < this.fixedDelay)
        return cachedResponse.httpEvent;
      else {
        delete this.cache[request.urlWithParams];
        return null;
      }
    }
    return null;
  }

  setRequestIntoCache(request: HttpRequest<any>, responceEvent: Observable<HttpEvent<any>>): Observable<HttpEvent<any>> {
    let date = new Date();
    this.cache[request.urlWithParams] = {httpEvent: responceEvent, start: date};
    return this.cache[request.urlWithParams].httpEvent;
  }

  refreshGlobalCache() {
    this.cache = {};
  }

  refreshSpecifiqueCache(url: string): void {
    for (let key of url)
      delete this.cache[key];
  }

  getSpecifiqueKeys(key: string): string[] {
    var s = this.cache;
    var keys = [];
    for (var k in s) {
      if (this.isKeyInsideCache(key, k))
        keys.push(k);
    }
    return keys;
  }

  isKeyInsideCache(key: string, cacheKey: string): boolean {
    if (cacheKey.substr(0, key.length) === key)
      return true;
    return false;
  }
}
