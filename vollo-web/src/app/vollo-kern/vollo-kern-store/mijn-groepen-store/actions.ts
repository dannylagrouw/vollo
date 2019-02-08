import { Action } from '@ngrx/store';
import { Groep } from '../../mijn-groepen/groep.model';
import { ErrorAction } from '../../common/error-action.model';
import { HttpErrorResponse } from '@angular/common/http';

export enum ActionTypes {
  OPHALEN = '[vollo.kern.mijnGroepen] Ophalen',
  OPHALEN_SUCCES = '[vollo.kern.mijnGroepen] Ophalen succes',
  OPHALEN_MISLUKT = '[vollo.kern.mijnGroepen] Ophalen mislukt'
}

export class OphalenAction implements Action {
  readonly type = ActionTypes.OPHALEN;
  constructor() {}
}

export class OphalenSuccesAction implements Action {
  readonly type = ActionTypes.OPHALEN_SUCCES;
  constructor(public groepen: Groep[]) {}
}

export class OphalenMisluktAction extends ErrorAction {
  readonly type = ActionTypes.OPHALEN_MISLUKT;
  constructor(public fout: HttpErrorResponse) {
    super();
  }
}

export type Actions = OphalenAction | OphalenSuccesAction | OphalenMisluktAction;
