import { Melding } from '../../common/melding.model';

export interface State {
  paginatitel?: string;
  foutmeldingen: Melding[];
  aantalUitstaandeRequests?: number;
}

export const initialState: State = {
  paginatitel: undefined,
  foutmeldingen: [],
  aantalUitstaandeRequests: 0
};
