import { Actions, ActionTypes } from './actions';
import { initialState, State } from './state';

export function groepReducer(state = initialState, action: Actions): State {
  switch (action.type) {
    case ActionTypes.OPHALEN:
      return state;
    case ActionTypes.OPHALEN_SUCCES:
      return {
        ...state,
        groep: action.groep
      };
    case ActionTypes.OPHALEN_MISLUKT:
      return {
        ...state,
        groep: undefined
      };
    default: {
      return state;
    }
  }
}
