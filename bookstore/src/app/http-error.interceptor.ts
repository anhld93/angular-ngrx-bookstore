// import * as Rollbar from 'rollbar';
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import {Injectable, Injector} from "@angular/core";
import {RollbarService} from "./app.module";

@Injectable({ providedIn: 'root'})
export class HttpErrorInterceptor implements HttpInterceptor {

  constructor(private injector: Injector) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req)
      .pipe(
        retry(1),
        catchError((error: HttpErrorResponse) => {
          const rollbar = this.injector.get(RollbarService);
          let errorMessage = '';
          if (error.error instanceof ErrorEvent) {
            // Client-side error
            errorMessage = `Error: ${error.error.message}`;
          } else {
            errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
          }

          window.alert(errorMessage);
          rollbar.error(error);
          return throwError(errorMessage);

        })
      );
  }

}
