import { Injectable } from '@angular/core';
import {  HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpResponse} from '@angular/common/http';

import { Observable,BehaviorSubject } from 'rxjs';
import { finalize, catchError, map ,startWith,delay} from 'rxjs/operators';

@Injectable()
export class HTTPStatus {
  private requestInFlight$: BehaviorSubject<boolean>;
  constructor() {
    this.requestInFlight$ = new BehaviorSubject(false);
  }

  setHttpStatus(inFlight: boolean) {
    this.requestInFlight$.next(inFlight);
  }

  getHttpStatus(): Observable<boolean> {
    return this.requestInFlight$.asObservable();
  }
}

/** Pass untouched request through to the next request handler. */
@Injectable()
export class HTTPListener implements HttpInterceptor {

  constructor(private status: HTTPStatus) {}

  intercept(req: HttpRequest<any>, next: HttpHandler):
    Observable<HttpEvent<any>> {
        this.status.setHttpStatus(true);
    return next.handle(req)
    .pipe(
          startWith(null),
          delay(0),
          map(event => {
            return event;
          }),
          catchError(error => { console.log("error en interceptor")
            return Observable.throw(error);
          }),
          finalize(() => {
            this.status.setHttpStatus(false);
          })
      );
  }
}