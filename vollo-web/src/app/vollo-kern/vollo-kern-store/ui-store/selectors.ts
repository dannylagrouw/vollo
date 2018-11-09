import { createFeatureSelector, createSelector, MemoizedSelector, select } from '@ngrx/store';

import { State } from './state';

const getPaginatitel = (state: State): string => state.paginatitel;

export const selectUiState: MemoizedSelector<object, State> = createFeatureSelector<State>('ui');

export const selectPaginatitel: MemoizedSelector<object, string> = createSelector(
  selectUiState,
  getPaginatitel
);
