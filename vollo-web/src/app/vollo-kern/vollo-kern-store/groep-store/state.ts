import { Groep } from '../../groep/groep.model';

export interface State {
  groep?: Groep;
}

export const initialState: State = {
  groep: undefined
};
