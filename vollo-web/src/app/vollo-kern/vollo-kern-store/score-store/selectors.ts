import { createFeatureSelector, createSelector, MemoizedSelector } from '@ngrx/store';
import { State } from './state';
import { GroepScore } from '../../common/model/groep-score.model';

const getScores = (state: State): any => state.scores;

export const selectScoreState: MemoizedSelector<object, State> = createFeatureSelector<State>(
  'score'
);

export const selectScores: MemoizedSelector<object, GroepScore[]> = createSelector(
  selectScoreState,
  getScores
);
