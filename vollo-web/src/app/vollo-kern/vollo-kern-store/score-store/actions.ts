import { Action } from '@ngrx/store';
import { GroepScore } from '../../common/model/groep-score.model';

export enum ActionTypes {
  OPHALEN = '[vollo.kern.score] Ophalen',
  OPHALEN_SUCCES = '[vollo.kern.score] Ophalen succes',
  OPHALEN_MISLUKT = '[vollo.kern.score] Ophalen mislukt'
}

export class OphalenAction implements Action {
  readonly type = ActionTypes.OPHALEN;
  constructor() {}
}

export class OphalenSuccesAction implements Action {
  readonly type = ActionTypes.OPHALEN_SUCCES;
  constructor(public scores: GroepScore[]) {}
}

export class OphalenMisluktAction implements Action {
  readonly type = ActionTypes.OPHALEN_MISLUKT;
  constructor(public foutmelding: string) {}
}

export type Actions = OphalenAction | OphalenSuccesAction | OphalenMisluktAction;
