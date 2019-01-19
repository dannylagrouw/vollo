import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { VolloKernState } from '..';
import * as scoreActions from './actions';
import * as ScoreStoreSelectors from './selectors';

@Injectable()
export class ScoreStoreService {
  scores$ = this.store.pipe(select(ScoreStoreSelectors.selectScores));

  constructor(private store: Store<VolloKernState.State>) {}

  ophalen() {
    this.store.dispatch(new scoreActions.OphalenAction());
  }
}
