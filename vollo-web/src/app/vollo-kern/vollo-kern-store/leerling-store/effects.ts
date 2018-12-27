import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action, Store } from '@ngrx/store';
import { Observable, of as observableOf } from 'rxjs';
import { catchError, delay, filter, map, mergeMap } from 'rxjs/operators';
import * as leerlingActions from './actions';
import { HttpClient } from '@angular/common/http';
import { fromServer, Leerling } from '../../groep/leerling.model';
import { Score } from '../../common/model/score.model';
import { Notitie } from '../../common/model/notitie.model';
import { VolloKernState } from '../index';
import * as moment from 'moment';
import { LeerlingHistorieRecord } from '../../common/model/leerling-historie-record.model';

@Injectable()
export class LeerlingStoreEffects {
  constructor(
    private http: HttpClient,
    private actions$: Actions,
    private store: Store<VolloKernState.State>
  ) {}

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

  @Effect()
  ophalenNotities$: Observable<Action> = this.actions$.pipe(
    ofType(leerlingActions.ActionTypes.OPHALEN_NOTITIES),
    mergeMap((action: leerlingActions.OphalenNotitiesAction) =>
      this.http.get<Notitie[]>(`/api/notitie/leerling/${action.leerlingId}`).pipe(
        map(notities => notities.sort((a, b) => moment(b.datum).diff(a.datum))),
        map(notities => new leerlingActions.OphalenNotitiesSuccesAction(notities)),
        catchError(error => observableOf(new leerlingActions.OphalenNotitiesMisluktAction(error)))
      )
    )
  );

  @Effect()
  ophalenHistorie$: Observable<Action> = this.actions$.pipe(
    ofType(leerlingActions.ActionTypes.OPHALEN_HISTORIE),
    mergeMap((action: leerlingActions.OphalenHistorieAction) =>
      this.http.get<LeerlingHistorieRecord[]>(`/api/leerling/${action.leerlingId}/historie`).pipe(
        map(historie => new leerlingActions.OphalenHistorieSuccesAction(historie)),
        catchError(error => observableOf(new leerlingActions.OphalenHistorieMisluktAction(error)))
      )
    )
  );

  @Effect()
  opslaanNotitie$: Observable<Action> = this.actions$.pipe(
    ofType(leerlingActions.ActionTypes.OPSLAAN_NOTITIE),
    mergeMap((action: leerlingActions.OpslaanNotitieAction) =>
      this.http.post<Notitie>(`/api/notitie/leerling/${action.leerlingId}`, action.notitie).pipe(
        map(notitie => new leerlingActions.OpslaanNotitieSuccesAction(notitie)),
        catchError(error => observableOf(new leerlingActions.OpslaanNotitieMisluktAction(error)))
      )
    )
  );
}
