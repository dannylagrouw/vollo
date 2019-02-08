import { Action } from '@ngrx/store';
import { ErrorAction } from '../../common/error-action.model';
import { HttpErrorResponse } from '@angular/common/http';

export enum ActionTypes {
  INLOGGEN = '[vollo.kern.authenticatie] Inloggen',
  INLOGGEN_SUCCES = '[vollo.kern.authenticatie] Inloggen succes',
  INLOGGEN_MISLUKT = '[vollo.kern.authenticatie] Inloggen mislukt',
  UITLOGGEN = '[vollo.kern.authenticatie] Uitloggen'
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

export type Actions =
  | InloggenAction
  | InloggenSuccesAction
  | InloggenMisluktAction
  | UitloggenAction;
