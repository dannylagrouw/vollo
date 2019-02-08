import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { filter, map, tap } from 'rxjs/operators';
import { Action } from '@ngrx/store';
import { ErrorAction } from '../../common/error-action.model';
import { MatSnackBar } from '@angular/material';

@Injectable()
export class UiStoreEffects {
  constructor(private actions$: Actions, private snackBar: MatSnackBar) {}

  @Effect({ dispatch: false })
  foutOpgetreden$ = this.actions$.pipe(
    filter((action: Action) => action instanceof ErrorAction),
    map(
      (action: ErrorAction) =>
        action.fout.headers.get('x-vollo-error') ||
        action.fout.message ||
        `${action.fout.status} ${action.fout.statusText}`
    ),
    tap((foutmelding: string) =>
      this.snackBar.open(foutmelding, 'Serverfout', { panelClass: 'error', duration: 5000 })
    )
  );
}
