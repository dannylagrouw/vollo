import { createFeatureSelector, createSelector, MemoizedSelector, select } from '@ngrx/store';

import { State } from './state';

const getGroepen = (state: State): any => state.groepen;

export const selectMijnGroepenState: MemoizedSelector<object, State> = createFeatureSelector<State>(
  'mijnGroepen'
);

export const selectMijnGroepen: MemoizedSelector<object, boolean> = createSelector(
  selectMijnGroepenState,
  getGroepen
);
