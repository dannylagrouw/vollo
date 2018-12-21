import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { EMPTY, Observable, of as observableOf } from 'rxjs';
import { catchError, delay, filter, map, mergeMap, tap } from 'rxjs/operators';
import * as leerlingActions from './actions';
import { HttpClient } from '@angular/common/http';
import { fromServer, Leerling } from '../../groep/leerling.model';
import { Score } from '../../common/model/score.model';

@Injectable()
export class LeerlingStoreEffects {
  constructor(private http: HttpClient, private actions$: Actions) {}

  @Effect()
  selecteren$: Observable<Action> = this.actions$.pipe(
    ofType(leerlingActions.ActionTypes.SELECTEREN),
    mergeMap((action: leerlingActions.SelecterenAction) => [
      new leerlingActions.OphalenAction(action.id),
      new leerlingActions.OphalenScoresAction(action.id)
    ])
  );

  @Effect()
  ophalen$: Observable<Action> = this.actions$.pipe(
    ofType(leerlingActions.ActionTypes.OPHALEN),
    mergeMap((action: leerlingActions.OphalenAction) =>
      this.http.get<Leerling>(`/api/leerling/${action.id}`).pipe(
        map(leerling => fromServer(leerling)),
        map(leerling => new leerlingActions.OphalenSuccesAction(leerling)),
        catchError(error => observableOf(new leerlingActions.OphalenMisluktAction(error)))
      )
    )
  );

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
  ophalenScores$: Observable<Action> = this.actions$.pipe(
    ofType(leerlingActions.ActionTypes.OPHALEN_SCORES),
    mergeMap((action: leerlingActions.OphalenScoresAction) =>
      this.http.get<Score[]>(`/api/leerling/${action.leerlingId}/scores`).pipe(
        map(scores => new leerlingActions.OphalenScoresSuccesAction(scores)),
        catchError(error => observableOf(new leerlingActions.OphalenScoresMisluktAction(error)))
      )
    )
  );
}
