import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import * as scoreActions from './actions';
import { HttpClient } from '@angular/common/http';
import { AbstractEffects } from '../../common/abstract-effects.model';
import { ophalenScores } from '../../common/api-clients/score.client';

@Injectable()
export class ScoreStoreEffects extends AbstractEffects {
  constructor(private http: HttpClient, private actions$: Actions) {
    super(http);
  }

  @Effect()
  ophalen$ = this.createEffect(this.actions$, scoreActions.ActionTypes.OPHALEN, ophalenScores);
}
