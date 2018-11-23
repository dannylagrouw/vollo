import { Leerling } from '../../groep/leerling.model';

export interface State {
  geselecteerd?: number;
  leerling?: Leerling;
}

export const initialState: State = {
  geselecteerd: undefined,
  leerling: undefined
};
