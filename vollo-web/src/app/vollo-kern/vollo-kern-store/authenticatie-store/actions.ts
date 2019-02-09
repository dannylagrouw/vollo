import { Action } from '@ngrx/store';
import { ErrorAction } from '../../common/error-action.model';
import { HttpErrorResponse } from '@angular/common/http';
import { Gebruiker } from '../../common/model/gebruiker.model';

export enum ActionTypes {
  INLOGGEN = '[vollo.kern.authenticatie] Inloggen',
  INLOGGEN_SUCCES = '[vollo.kern.authenticatie] Inloggen succes',
  INLOGGEN_MISLUKT = '[vollo.kern.authenticatie] Inloggen mislukt',
  UITLOGGEN = '[vollo.kern.authenticatie] Uitloggen',
  OPHALEN_INGELOGDE_GEBRUIKER = '[vollo.kern.authenticatie] Ophalen ingelogde gebruiker',
  OPHALEN_INGELOGDE_GEBRUIKER_SUCCES = '[vollo.kern.authenticatie] Ophalen ingelogde gebruiker succes',
  OPHALEN_INGELOGDE_GEBRUIKER_MISLUKT = '[vollo.kern.authenticatie] Ophalen ingelogde gebruiker mislukt'
}

export class InloggenAction implements Action {
  readonly type = ActionTypes.INLOGGEN;
  constructor(public gebruikersnaam: string, public wachtwoord: string) {}
}

export class InloggenSuccesAction implements Action {
  readonly type = ActionTypes.INLOGGEN_SUCCES;
  constructor(public gebruikersnaam: string) {}
}

export class InloggenMisluktAction extends ErrorAction {
  readonly type = ActionTypes.INLOGGEN_MISLUKT;
  constructor(public fout: HttpErrorResponse) {
    super();
  }
}

export class UitloggenAction implements Action {
  readonly type = ActionTypes.UITLOGGEN;
  constructor() {}
}

export class OphalenIngelogdeGebruikerAction implements Action {
  readonly type = ActionTypes.OPHALEN_INGELOGDE_GEBRUIKER;
  constructor() {}
}

export class OphalenIngelogdeGebruikerSuccesAction implements Action {
  readonly type = ActionTypes.OPHALEN_INGELOGDE_GEBRUIKER_SUCCES;
  constructor(public gebruiker: Gebruiker) {}
}

export class OphalenIngelogdeGebruikerMisluktAction extends ErrorAction {
  readonly type = ActionTypes.OPHALEN_INGELOGDE_GEBRUIKER_MISLUKT;
  constructor(public fout: HttpErrorResponse) {
    super();
  }
}

export type Actions =
  | InloggenAction
  | InloggenSuccesAction
  | InloggenMisluktAction
  | UitloggenAction
  | OphalenIngelogdeGebruikerAction
  | OphalenIngelogdeGebruikerSuccesAction
  | OphalenIngelogdeGebruikerMisluktAction;
