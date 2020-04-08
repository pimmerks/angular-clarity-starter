import { Pipe, PipeTransform } from '@angular/core';
import { isObservable, of } from 'rxjs';
import { map, startWith, catchError } from 'rxjs/operators';

/**
 * Example:
 * <div *ngIf="obs$ | withLoading | async as obs">
 *   <ng-template [ngIf]="obs.value">Value: {{ obs.value }}</ng-template>
 *   <ng-template [ngIf]="obs.error">Error {{ obs.error }}</ng-template>
 *   <ng-template [ngIf]="obs.loading">Loading...</ng-template>
 * </div>
 */
@Pipe({
  name: 'withLoading',
})
export class WithLoadingPipe implements PipeTransform {
  transform(val) {
    return isObservable(val)
      ? val.pipe(
        map((value: any) => ({
          loading: value.type === 'start',
          value: value.type ? value.value : value
        })),
        startWith({ loading: true }),
        catchError(error => of({ loading: false, error }))
      )
      : val;
  }
}
