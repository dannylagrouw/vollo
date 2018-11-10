import { Actions, ActionTypes } from './actions';
import { initialState, State } from './state';

export function mijnGroepenReducer(state = initialState, action: Actions): State {
  switch (action.type) {
    case ActionTypes.OPHALEN:
      return state;
    case ActionTypes.OPHALEN_SUCCES:
      return {
        ...state,
        groepen: action.groepen
      };
    case ActionTypes.OPHALEN_MISLUKT:
      return {
        ...state,
        groepen: []
      };
    default: {
      return state;
    }
  }
}
