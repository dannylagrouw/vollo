import { Actions, ActionTypes } from './actions';
import { initialState, State } from './state';

export function authenticatieReducer(state = initialState, action: Actions): State {
  switch (action.type) {
    case ActionTypes.INLOGGEN:
      return state;
    case ActionTypes.INLOGGEN_SUCCES:
      return {
        ...state,
        gebruikersnaam: action.gebruikersnaam,
        ingelogd: true
      };
    case ActionTypes.INLOGGEN_MISLUKT:
    case ActionTypes.UITLOGGEN:
      return {
        ...state,
        gebruikersnaam: null,
        ingelogd: false
      };
    default: {
      return state;
    }
  }
}
