import { Actions, ActionTypes } from './actions';
import { initialState, State } from './state';

export function scoreReducer(state = initialState, action: Actions): State {
  switch (action.type) {
    case ActionTypes.OPHALEN:
      return state;
    case ActionTypes.OPHALEN_SUCCES:
      return {
        ...state,
        scores: action.scores
      };
    case ActionTypes.OPHALEN_MISLUKT:
      return {
        ...state,
        scores: undefined
      };
    default: {
      return state;
    }
  }
}
