import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs/Observable';
import { ErrorObservable } from 'rxjs/observable/ErrorObservable';
import { fromPromise } from 'rxjs/observable/fromPromise';
import { catchError } from 'rxjs/operators/catchError';
import { first } from 'rxjs/operators/first';
import { switchMap } from 'rxjs/operators/switchMap';
import { tap } from 'rxjs/operators/tap';
import { AuthService } from '../shared/services/auth.service';

@Injectable()
export class HttpsRequestInterceptor implements HttpInterceptor {

  private forceRefreshPromise: (Promise<string> | null);
  private reAuthenticatedPromise: (Promise<any> | null);

  constructor(private authService: AuthService) {

  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return this.authService.userChangesSnapshotObs().pipe(
      switchMap((user: firebase.User | null) => {
        if (user) {
          return this.getToken(user).pipe(
            switchMap((userToken: string) => this.sendRequestWithToken(req, next, userToken)),
            catchError((err: any) => {
              if (err.status === 401) {
                return fromPromise(this.forceRefreshToken(user)).pipe(
                  switchMap((userToken: string) => this.sendRequestWithToken(req, next, userToken)),
                );
              }
              return ErrorObservable.create(err);
            }),
            catchError((err: any) => {
              if (err.status === 401) {
                return fromPromise(this.reAuthenticatedPassword(user)).pipe(
                  switchMap((userToken: string) => this.sendRequestWithToken(req, next, userToken)),
                );
              }
              return ErrorObservable.create(err);
            }), tap(() => {
              this.deleteAllPromises();
            }),
          );
        }
        return next.handle(req);
      }),
    );
  }

  private getToken(identity: firebase.User, forceRefresh?: boolean): Observable<string> {
    return fromPromise(identity.getIdToken(forceRefresh));
  }

  private sendRequestWithToken(req: HttpRequest<any>, next: HttpHandler, userToken: string): Observable<HttpEvent<any>> {
    let req2 = req.clone({
      setHeaders: {
        'Authorization': 'Bearer ' + userToken,
      },
    });
    return next.handle(req2);
  }

  private forceRefreshToken(user: firebase.User): Promise<string> {
    if (!this.forceRefreshPromise) {
      this.forceRefreshPromise = this.getToken(user, true).pipe(first()).toPromise();
    }
    return this.forceRefreshPromise;
  }

  private reAuthenticatedPassword(user: firebase.User): Promise<any> {
    if (!this.reAuthenticatedPromise)
      this.reAuthenticatedPromise = this.authService.reAuthenticate(user)
        .then(() => user.getIdToken()).catch(error => {
          if (!error)
            error = {};
          error.status = 401;
          throw error;
        });
    return this.reAuthenticatedPromise;
  }

  private deleteAllPromises() {
    if (this.reAuthenticatedPromise)
      this.reAuthenticatedPromise = null;
    if (this.forceRefreshPromise)
      this.forceRefreshPromise = null;
  }

}

