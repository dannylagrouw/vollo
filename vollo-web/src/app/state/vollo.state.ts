import { State, StateContext } from '@ngxs/store';
import { InloggenService } from '../service/inloggen.service';
import { Action } from '@ngxs/store';
import { tap } from 'rxjs/operators';

export interface GebruikerState {
  ingelogd: boolean;
  gebruikersnaam: string;
}

export interface UiState {
  paginaTitel: string;
}

export interface VolloStateModel {
  gebruiker: GebruikerState;
  uiState: UiState;
}

export class InloggenAction {
  static readonly type = '[vollo.gebruiker] Inloggen';
  constructor(public gebruikersnaam: string, public wachtwoord: string) {}
}

export class ToonPaginaAction {
  static readonly type = '[vollo.ui] ToonPagina';
  constructor(public paginaTitel: string) {}
}

@State<VolloStateModel>({
  name: 'vollo',
  defaults: {
    gebruiker: {
      ingelogd: false,
      gebruikersnaam: null
    },
    uiState: {
      paginaTitel: undefined
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

  @Action(ToonPaginaAction)
  toonPagina(ctx: StateContext<VolloStateModel>, action: ToonPaginaAction) {
    const state = ctx.getState();
    ctx.patchState({
      uiState: {
        ...state.uiState,
        paginaTitel: action.paginaTitel
      }
    });
    console.info('new state', ctx.getState());
  }
}
