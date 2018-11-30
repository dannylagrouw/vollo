import { Actions, ActionTypes } from './actions';
import { initialState, State } from './state';

export function leerlingReducer(state = initialState, action: Actions): State {
  switch (action.type) {
    case ActionTypes.SELECTEREN:
      return {
        ...state,
        geselecteerd: action.id
      };
    case ActionTypes.OPHALEN:
      return state;
    case ActionTypes.OPHALEN_SUCCES:
      return {
        ...state,
        leerling: action.leerling
      };
    case ActionTypes.OPHALEN_MISLUKT:
      return {
        ...state,
        leerling: undefined
      };
    case ActionTypes.OPHALEN_SCORES:
      return state;
    case ActionTypes.OPHALEN_SCORES_SUCCES:
      return {
        ...state,
        scores: action.scores
      };
    case ActionTypes.OPHALEN_SCORES_MISLUKT:
      return {
        ...state,
        scores: undefined
      };
    default: {
      return state;
    }
  }
}
