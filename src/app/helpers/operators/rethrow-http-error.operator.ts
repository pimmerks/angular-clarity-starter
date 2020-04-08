import { MonoTypeOperatorFunction, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { IError } from '@models/token.model';
import { HttpErrorResponse } from '@angular/common/http';

/**
 * Converts an HttpErrorResponse to an IError and rethrows it.
 */
export function rethrowHttpError<T>(): MonoTypeOperatorFunction<T> {
  return input$ => {
    return input$
      .pipe(catchError((err, caught) => {
        const e = {} as IError;

        if (err instanceof HttpErrorResponse) {
          e.message = err.message;
          e.title = err.statusText;
          e.details = err;
        } else {
          e.title = 'Unknown error received.';
          e.message = 'Check console for details.';
          e.details = err;
          console.warn('unknown Error', err);
        }

        return throwError(e);
      }));
  };
}
