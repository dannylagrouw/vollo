import { Actions, ActionTypes } from './actions';
import { initialState, State } from './state';
import { CommonActionTypes } from '../../common/fout-action.model';

export function mijnGroepenReducer(state = initialState, action: Actions): State {
  switch (action.type) {
    case ActionTypes.OPHALEN:
      return state;
    case ActionTypes.OPHALEN_SUCCES:
      return {
        ...state,
        groepen: action.groepen
      };
    case CommonActionTypes.FOUT:
      return {
        ...state,
        groepen: []
      };
    default: {
      return state;
    }
  }
}
