import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { VolloKernState } from '..';
import * as authenticatieActions from './actions';
import * as AuthenticatieStoreSelectors from './selectors';

@Injectable()
export class AuthenticatieStoreService {
  authenticatie$ = this.store.pipe(select(AuthenticatieStoreSelectors.selectAuthenticatieState));

  constructor(private store: Store<VolloKernState.State>) {}

  inloggen(gebruikersnaam: string, wachtwoord: string) {
    this.store.dispatch(new authenticatieActions.InloggenAction(gebruikersnaam, wachtwoord));
  }

  uitloggen() {
    this.store.dispatch(new authenticatieActions.UitloggenAction());
  }
}
