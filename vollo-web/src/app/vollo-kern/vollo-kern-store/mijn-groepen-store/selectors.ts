import { createFeatureSelector, createSelector, MemoizedSelector } from '@ngrx/store';
import { State } from './state';
import { Groep } from '../../mijn-groepen/groep.model';

const getGroepen = (state: State): any => state.groepen;

export const selectMijnGroepenState: MemoizedSelector<object, State> = createFeatureSelector<State>(
  'mijnGroepen'
);

export const selectMijnGroepen: MemoizedSelector<object, Groep[]> = createSelector(
  selectMijnGroepenState,
  getGroepen
);
