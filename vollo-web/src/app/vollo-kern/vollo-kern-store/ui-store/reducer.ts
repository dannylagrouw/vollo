import { Actions, ActionTypes } from './actions';
import { initialState, State } from './state';
import { CommonActionTypes } from '../../common/fout-action.model';

export function uiReducer(state = initialState, action: Actions): State {
  switch (action.type) {
    case ActionTypes.TOON_PAGINA:
      return { ...state, paginatitel: action.paginatitel };
    case ActionTypes.TOON_MELDING:
      return {
        ...state,
        foutmeldingen: [...state.foutmeldingen, action.melding]
      };
    case CommonActionTypes.FOUT:
      return {
        ...state,
        foutmeldingen: [...state.foutmeldingen, action.melding]
      };
    default:
      return state;
  }
}
