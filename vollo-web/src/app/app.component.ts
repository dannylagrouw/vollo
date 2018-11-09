import { Component } from '@angular/core';
import { AuthenticatieStoreSelectors, VolloKernState } from './vollo-kern/vollo-kern-store';
import { select, Store } from '@ngrx/store';

@Component({
  selector: 'vollo-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'vollo';
  gebruiker$ = this.store.pipe(select(AuthenticatieStoreSelectors.selectAuthenticatieState));

  constructor(private store: Store<VolloKernState.State>) {}
}
