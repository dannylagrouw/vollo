import { createFeatureSelector, createSelector, MemoizedSelector } from '@ngrx/store';
import { State } from './state';
import { Groep } from '../../groep/groep.model';

const getGroep = (state: State): any => state.groep;

export const selectGroepState: MemoizedSelector<object, State> = createFeatureSelector<State>(
  'groep'
);

export const selectGroep: MemoizedSelector<object, Groep> = createSelector(
  selectGroepState,
  getGroep
);
