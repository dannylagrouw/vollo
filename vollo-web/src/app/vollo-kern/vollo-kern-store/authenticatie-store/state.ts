export interface State {
  gebruikersnaam?: string;
  ingelogd: boolean;
}

export const initialState: State = {
  gebruikersnaam: null,
  ingelogd: false
};
