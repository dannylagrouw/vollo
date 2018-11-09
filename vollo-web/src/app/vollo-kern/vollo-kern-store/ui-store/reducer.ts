import { Actions, ActionTypes } from './actions';
import { initialState, State } from './state';

export function uiReducer(state = initialState, action: Actions): State {
  switch (action.type) {
    case ActionTypes.TOON_PAGINA:
      return { ...state, paginatitel: action.paginatitel };
    default: {
      return state;
    }
  }
}
