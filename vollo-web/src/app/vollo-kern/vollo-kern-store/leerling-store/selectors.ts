import { createFeatureSelector, createSelector, MemoizedSelector } from '@ngrx/store';
import { State } from './state';
import { Leerling } from '../../groep/leerling.model';

const getLeerling = (state: State): any => state.leerling;

const getGeselecteerd = (state: State): any => state.geselecteerd;

export const selectLeerlingState: MemoizedSelector<object, State> = createFeatureSelector<State>(
  'leerling'
);

export const selectLeerling: MemoizedSelector<object, Leerling> = createSelector(
  selectLeerlingState,
  getLeerling
);

export const selectGeselecteerd: MemoizedSelector<object, number> = createSelector(
  selectLeerlingState,
  getGeselecteerd
);
