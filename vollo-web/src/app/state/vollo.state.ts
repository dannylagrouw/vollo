import { State, StateContext } from '@ngxs/store';
import { InloggenService } from '../service/inloggen.service';
import { Action } from '@ngxs/store';
import { tap } from 'rxjs/operators';

export interface GebruikerState {
  ingelogd: boolean;
  gebruikersnaam: string;
}

export interface VolloStateModel {
  gebruiker: GebruikerState;
}

export class InloggenAction {
  static readonly type = '[Vollo] Inloggen';
  constructor(public gebruikersnaam: string, public wachtwoord: string) {}
}

@State<VolloStateModel>({
  name: 'vollo',
  defaults: {
    gebruiker: {
      ingelogd: false,
      gebruikersnaam: null
    }
  }
})
export class VolloState {
  constructor(private inloggenService: InloggenService) {}

  @Action(InloggenAction)
  inloggen(ctx: StateContext<VolloStateModel>, action: InloggenAction) {
    return this.inloggenService.inloggen(action.gebruikersnaam, action.wachtwoord).pipe(
      tap(() => {
        const state = ctx.getState();
        ctx.setState({
          ...state,
          gebruiker: {
            ingelogd: true,
            gebruikersnaam: action.gebruikersnaam
          }
        });
      })
    );
  }
}
