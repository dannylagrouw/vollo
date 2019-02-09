import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { filter, map, tap } from 'rxjs/operators';
import { Action } from '@ngrx/store';
import { ErrorAction } from '../../common/error-action.model';
import { MatSnackBar } from '@angular/material';
import * as uiActions from './actions';
import * as authActions from '../authenticatie-store/actions';

@Injectable()
export class UiStoreEffects {
  constructor(private actions$: Actions, private snackBar: MatSnackBar) {}

  @Effect()
  foutOpgetreden$ = this.actions$.pipe(
    filter((action: Action) => action instanceof ErrorAction),
    filter(
      (action: ErrorAction) =>
        action.fout.status !== 401 || action instanceof authActions.InloggenMisluktAction
    ),
    map(
      (action: ErrorAction) =>
        action.fout.headers.get('x-vollo-error') ||
        action.fout.message ||
        `${action.fout.status} ${action.fout.statusText}`
    ),
    map(
      (foutmelding: string) =>
        new uiActions.ToonMeldingAction({ aanleiding: 'Serverfout', foutmelding })
    )
  );

  @Effect({ dispatch: false })
  toonMelding$ = this.actions$.pipe(
    ofType(uiActions.ActionTypes.TOON_MELDING),
    tap((action: uiActions.ToonMeldingAction) =>
      this.snackBar.open(action.melding.foutmelding, action.melding.aanleiding, {
        panelClass: 'error',
        duration: 5000
      })
    )
  );
}
