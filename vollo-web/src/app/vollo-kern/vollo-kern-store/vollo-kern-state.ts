import { AuthenticatieStoreState } from './authenticatie-store';
import { UiStoreState } from './ui-store';

export interface State {
  authenticatie: AuthenticatieStoreState.State;
  ui: UiStoreState.State;
}
