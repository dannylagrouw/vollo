import { AuthenticatieStoreState } from './authenticatie-store';
import { MijnGroepenStoreState } from './mijn-groepen-store';
import { GroepStoreState } from './groep-store';
import { LeerlingStoreState } from './leerling-store';
import { UiStoreState } from './ui-store';

export interface State {
  authenticatie: AuthenticatieStoreState.State;
  mijnGroepen: MijnGroepenStoreState.State;
  groep: GroepStoreState.State;
  leerling: LeerlingStoreState.State;
  ui: UiStoreState.State;
}
