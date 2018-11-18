import { createFeatureSelector, createSelector, MemoizedSelector, select } from '@ngrx/store';

import { State } from './state';
import { Melding } from '../../common/melding.model';

const getPaginatitel = (state: State): string => state.paginatitel;

const getMeldingen = (state: State): Melding[] => state.foutmeldingen;

export const selectUiState: MemoizedSelector<object, State> = createFeatureSelector<State>('ui');

export const selectPaginatitel: MemoizedSelector<object, string> = createSelector(
  selectUiState,
  getPaginatitel
);

export const selectFoutmeldingen = createSelector(selectUiState, getMeldingen);
