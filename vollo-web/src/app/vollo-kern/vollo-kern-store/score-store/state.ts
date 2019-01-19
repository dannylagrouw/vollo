import { GroepScore } from '../../common/model/groep-score.model';

export interface State {
  scores?: GroepScore[];
}

export const initialState: State = {
  scores: undefined
};
