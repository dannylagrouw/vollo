import { Melding } from '../../common/melding.model';

export interface State {
  paginatitel?: string;
  foutmeldingen: Melding[];
}

export const initialState: State = {
  paginatitel: undefined,
  foutmeldingen: []
};
