import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable, of as observableOf } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import * as authenticatieActions from './actions';
import { InloggenService } from '../../../service/inloggen.service';

@Injectable()
export class AuthenticatieStoreEffects {
  constructor(private inloggenService: InloggenService, private actions$: Actions) {}

  @Effect()
  inloggen$: Observable<Action> = this.actions$.pipe(
    ofType(authenticatieActions.ActionTypes.INLOGGEN),
    mergeMap((action: authenticatieActions.InloggenAction) =>
      this.inloggenService.inloggen(action.gebruikersnaam, action.wachtwoord).pipe(
        map(() => new authenticatieActions.InloggenSuccesAction(action.gebruikersnaam)),
        catchError(error => observableOf(new authenticatieActions.InloggenMisluktAction(error)))
      )
    )
  );
}
