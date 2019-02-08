import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { delay, filter, map, mergeMap } from 'rxjs/operators';
import * as leerlingActions from './actions';
import { HttpClient } from '@angular/common/http';
import { VolloKernState } from '../index';
import { AbstractEffects } from '../../common/abstract-effects.model';
import {
  ophalenHistorie,
  ophalenLeerling,
  ophalenNotities,
  ophalenOuders,
  ophalenScores,
  opslaanNotitie
} from '../../common/api-clients/leerling.client';

@Injectable()
export class LeerlingStoreEffects extends AbstractEffects {
  constructor(
    private http: HttpClient,
    private actions$: Actions,
    private store: Store<VolloKernState.State>
  ) {
    super(http);
  }

  @Effect()
  selecteren$: Observable<Action> = this.actions$.pipe(
    ofType(leerlingActions.ActionTypes.SELECTEREN),
    mergeMap((action: leerlingActions.SelecterenAction) => [
      new leerlingActions.OphalenAction(action.id),
      new leerlingActions.OphalenScoresAction(action.id)
    ])
  );

  @Effect()
  ophalen$ = this.createEffect(this.actions$, leerlingActions.ActionTypes.OPHALEN, ophalenLeerling);

  @Effect()
  ophalenSucces$: Observable<Action> = this.actions$.pipe(
    ofType(leerlingActions.ActionTypes.OPHALEN_SUCCES),
    filter((action: leerlingActions.OphalenSuccesAction) => !action.leerling.foto),
    delay(1000),
    map(
      (action: leerlingActions.OphalenSuccesAction) =>
        new leerlingActions.OphalenAction(action.leerling.id)
    )
  );

  @Effect()
  ophalenScores$ = this.createEffect(
    this.actions$,
    leerlingActions.ActionTypes.OPHALEN_SCORES,
    ophalenScores
  );

  @Effect()
  ophalenOuders$ = this.createEffect(
    this.actions$,
    leerlingActions.ActionTypes.OPHALEN_OUDERS,
    ophalenOuders
  );

  @Effect()
  ophalenNotities$ = this.createEffect(
    this.actions$,
    leerlingActions.ActionTypes.OPHALEN_NOTITIES,
    ophalenNotities
  );

  @Effect()
  ophalenHistorie$ = this.createEffect(
    this.actions$,
    leerlingActions.ActionTypes.OPHALEN_HISTORIE,
    ophalenHistorie
  );

  @Effect()
  opslaanNotitie$ = this.createEffect(
    this.actions$,
    leerlingActions.ActionTypes.OPSLAAN_NOTITIE,
    opslaanNotitie
  );
}
