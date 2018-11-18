import { Action } from '@ngrx/store';
import { Groep } from '../../groep/groep.model';

export enum ActionTypes {
  OPHALEN = '[vollo.kern.groep] Ophalen',
  OPHALEN_SUCCES = '[vollo.kern.groep] Ophalen succes',
  OPHALEN_MISLUKT = '[vollo.kern.groep] Ophalen mislukt'
}

export class OphalenAction implements Action {
  readonly type = ActionTypes.OPHALEN;
  constructor(public id: number) {}
}

export class OphalenSuccesAction implements Action {
  readonly type = ActionTypes.OPHALEN_SUCCES;
  constructor(public groep: Groep) {}
}

export class OphalenMisluktAction implements Action {
  readonly type = ActionTypes.OPHALEN_MISLUKT;
  constructor(public foutmelding: string) {}
}

export type Actions = OphalenAction | OphalenSuccesAction | OphalenMisluktAction;
