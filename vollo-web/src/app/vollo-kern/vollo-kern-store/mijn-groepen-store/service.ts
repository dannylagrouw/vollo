import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { VolloKernState } from '..';
import * as mijnGroepenActions from './actions';
import * as MijnGroepenStoreSelectors from './selectors';

@Injectable()
export class MijnGroepenStoreService {
  groepen$ = this.store.pipe(select(MijnGroepenStoreSelectors.selectMijnGroepen));

  constructor(private store: Store<VolloKernState.State>) {}

  ophalen() {
    this.store.dispatch(new mijnGroepenActions.OphalenAction());
  }
}
