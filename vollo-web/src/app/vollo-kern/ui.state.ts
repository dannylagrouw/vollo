import { Action } from '@ngrx/store';

export interface UiState {
  paginaTitel: string;
}

const initialState: UiState = {
  paginaTitel: undefined
};

export const TOON_PAGINA_ACTION = '[vollo.kern.ui] toon pagina';

export class ToonPaginaAction implements Action {
  type = TOON_PAGINA_ACTION;
  constructor(public paginaTitel: string) {}
}

type UiActions = ToonPaginaAction;

export function uiReducer(state: UiState = initialState, action: UiActions) {
  switch (action.type) {
    case TOON_PAGINA_ACTION:
      return {
        ...state,
        paginaTitel: action.paginaTitel
      };
    default:
      return state;
  }
}
