import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { VolloKernState } from '..';
import * as uiActions from './actions';
import * as UiStoreSelectors from './selectors';
import { Melding } from '../../common/melding.model';

@Injectable()
export class UiStoreService {
  ui$ = this.store.pipe(select(UiStoreSelectors.selectUiState));
  paginatitel$ = this.store.pipe(select(UiStoreSelectors.selectPaginatitel));
  foutmeldingen$ = this.store.pipe(select(UiStoreSelectors.selectFoutmeldingen));
  aantalUitstaandeRequests$ = this.store.pipe(
    select(UiStoreSelectors.selectAantalUitstaandeRequests)
  );

  constructor(private store: Store<VolloKernState.State>) {}

  toonPagina(paginatitel: string) {
    this.store.dispatch(new uiActions.ToonPaginaAction(paginatitel));
  }

  toonFoutmelding(aanleiding: string, foutmelding: string) {
    this.store.dispatch(new uiActions.ToonMeldingAction(new Melding(aanleiding, foutmelding)));
  }

  requestErbij() {
    this.store.dispatch(new uiActions.RequestErbijAction());
  }

  requestEraf() {
    this.store.dispatch(new uiActions.RequestErafAction());
  }
}
