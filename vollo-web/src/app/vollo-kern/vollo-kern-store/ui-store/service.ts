import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { select, Store } from '@ngrx/store';
import { VolloKernState } from '..';
import * as uiActions from './actions';
import * as UiStoreSelectors from './selectors';

@Injectable()
export class UiStoreService {
  ui$ = this.store.pipe(select(UiStoreSelectors.selectUiState));
  paginatitel$ = this.store.pipe(select(UiStoreSelectors.selectPaginatitel));

  constructor(private store: Store<VolloKernState.State>) {}

  toonPagina(paginatitel: string) {
    this.store.dispatch(new uiActions.ToonPaginaAction(paginatitel));
  }
}
