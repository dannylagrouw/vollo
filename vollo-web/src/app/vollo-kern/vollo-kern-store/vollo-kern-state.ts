import { AuthenticatieStoreState } from './authenticatie-store';
import { MijnGroepenStoreState } from './mijn-groepen-store';
import { UiStoreState } from './ui-store';

export interface State {
  authenticatie: AuthenticatieStoreState.State;
  mijnGroepen: MijnGroepenStoreState.State;
  ui: UiStoreState.State;
}
