import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { VolloKernState } from '..';
import * as leerlingActions from './actions';
import * as LeerlingStoreSelectors from './selectors';
import { Notitie } from '../../common/model/notitie.model';

@Injectable()
export class LeerlingStoreService {
  leerling$ = this.store.pipe(select(LeerlingStoreSelectors.selectLeerling));
  geselecteerd$ = this.store.pipe(select(LeerlingStoreSelectors.selectGeselecteerd));
  scores$ = this.store.pipe(select(LeerlingStoreSelectors.selectScores));
  notities$ = this.store.pipe(select(LeerlingStoreSelectors.selectNotities));

  constructor(private store: Store<VolloKernState.State>) {}

  selecteren(id: number) {
    this.store.dispatch(new leerlingActions.SelecterenAction(id));
  }

  ophalen(id: number) {
    this.store.dispatch(new leerlingActions.OphalenAction(id));
  }

  deselecteren() {
    this.store.dispatch(new leerlingActions.DeselecterenAction());
  }

  ophalenNotities(id: number) {
    this.store.dispatch(new leerlingActions.OphalenNotitiesAction(id));
  }

  opslaanNotitie(leerlingId: number, notitie: Notitie) {
    this.store.dispatch(new leerlingActions.OpslaanNotitieAction(leerlingId, notitie));
  }
}
