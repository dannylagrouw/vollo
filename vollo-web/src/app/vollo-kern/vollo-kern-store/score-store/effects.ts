import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable, of as observableOf } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import * as scoreActions from './actions';
import { HttpClient } from '@angular/common/http';
import { GroepScore } from '../../common/model/groep-score.model';

@Injectable()
export class ScoreStoreEffects {
  constructor(private http: HttpClient, private actions$: Actions) {}

  @Effect()
  ophalen$: Observable<Action> = this.actions$.pipe(
    ofType(scoreActions.ActionTypes.OPHALEN),
    mergeMap((action: scoreActions.OphalenAction) =>
      this.http.get<GroepScore[]>(`/api/score`).pipe(
        map(scores => new scoreActions.OphalenSuccesAction(scores)),
        catchError(error => observableOf(new scoreActions.OphalenMisluktAction(error)))
      )
    )
  );
}
