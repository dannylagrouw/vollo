import { Component, OnInit } from '@angular/core';
import {
  AuthenticatieStoreSelectors,
  AuthenticatieStoreActions,
  VolloKernState
} from '../vollo-kern-store';
import { select, Store } from '@ngrx/store';

@Component({
  selector: 'vollo-inloggen',
  templateUrl: './inloggen.component.html',
  styleUrls: ['./inloggen.component.scss']
})
export class InloggenComponent implements OnInit {
  gebruiker$ = this.store.pipe(select(AuthenticatieStoreSelectors.selectAuthenticatieState));

  form = {
    gebruikersnaam: '',
    wachtwoord: ''
  };

  constructor(private store: Store<VolloKernState.State>) {}

  ngOnInit() {}

  inloggen() {
    this.store.dispatch(
      new AuthenticatieStoreActions.InloggenAction(this.form.gebruikersnaam, this.form.wachtwoord)
    );
  }
}
