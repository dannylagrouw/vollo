import { Leerling } from '../../groep/leerling.model';
import { Score } from '../../common/model/score.model';

export interface State {
  geselecteerd?: number;
  leerling?: Leerling;
  scores?: Score[];
}

export const initialState: State = {
  geselecteerd: undefined,
  leerling: undefined,
  scores: undefined
};
