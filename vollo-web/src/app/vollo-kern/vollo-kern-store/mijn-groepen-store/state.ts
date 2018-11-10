import { Groep } from '../../mijn-groepen/groep.model';

export interface State {
  groepen: Groep[];
}

export const initialState: State = {
  groepen: []
};
