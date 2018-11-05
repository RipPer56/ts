import { HttpHeaders, HttpParams } from '@angular/common/http';
import { HttpObserve } from '@angular/common/http/src/client';
import { Dict } from './dict.model';

export interface RequestDetails {
  /**
   * Main parameter: the URL to fetch the original data from.
   */
  url: string;
  /**
   * Body parameters that will be encoded as JSON. Only used for post(), put() and patch().
   */
  body?: any | null;
  /**
   * If true, the request is sent to the back-end and refreshes the cache. If false, a cache-first strategy is applied.
   * TODO: expose multiple strategies (cache-first, network-first, etc).
   */
  force?: boolean;
  /**
   * If true, the cache will be used.
   */
  useCache?: boolean;
  /**
   * URL parameters that will be encoded in the format ?param1=value1&param2=value2 (from an object {param1: "value1", param2: "value2"})
   * TODO: implement. In the meanwhile, include manually in the URL.
   */
  params?: Dict<any>;
  /**
   * Optional: the key to store in cache. The default will use the URL, body and params to generate a key.
   * A provided key will be used instead.
   * TODO: implement cache
   */
  key?: string;
  options?: {
    /** for request() only */
    body?: any;
    headers?: HttpHeaders;
    observe?: HttpObserve | any; // `| any` because it fails to detect the types well in Store service otherwise
    params?: HttpParams;
    reportProgress?: boolean;
    responseType?: 'json'/*'arraybuffer' | 'blob' | 'json' | 'text'*/;
    withCredentials?: boolean;
  }
}
