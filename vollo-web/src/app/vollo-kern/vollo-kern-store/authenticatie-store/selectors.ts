import { createFeatureSelector, createSelector, MemoizedSelector, select } from '@ngrx/store';

import { State } from './state';

const getIngelogd = (state: State): boolean => state.ingelogd;

const getGebruikersnaam = (state: State): any => state.gebruikersnaam;

export const selectAuthenticatieState: MemoizedSelector<object, State> = createFeatureSelector<
  State
>('authenticatie');

export const selectAuthenticatieIngelogd: MemoizedSelector<object, boolean> = createSelector(
  selectAuthenticatieState,
  getIngelogd
);

export const selectAuthenticatieGebruikersnaam: MemoizedSelector<object, string> = createSelector(
  selectAuthenticatieState,
  getGebruikersnaam
);
