import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { VolloKernState } from '..';
import * as groepActions from './actions';
import * as GroepStoreSelectors from './selectors';

@Injectable()
export class GroepStoreService {
  groep$ = this.store.pipe(select(GroepStoreSelectors.selectGroep));

  constructor(private store: Store<VolloKernState.State>) {}

  ophalen(id: number) {
    this.store.dispatch(new groepActions.OphalenAction(id));
  }
}
