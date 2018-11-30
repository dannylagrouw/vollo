import { Action } from '@ngrx/store';
import { Leerling } from '../../groep/leerling.model';
import { Score } from '../../common/model/score.model';

export enum ActionTypes {
  SELECTEREN = '[vollo.kern.leerling] Selecteren',
  OPHALEN = '[vollo.kern.leerling] Ophalen',
  OPHALEN_SUCCES = '[vollo.kern.leerling] Ophalen succes',
  OPHALEN_MISLUKT = '[vollo.kern.leerling] Ophalen mislukt',
  OPHALEN_SCORES = '[vollo.kern.leerling] Ophalen scores',
  OPHALEN_SCORES_SUCCES = '[vollo.kern.leerling] Ophalen scores succes',
  OPHALEN_SCORES_MISLUKT = '[vollo.kern.leerling] Ophalen scores mislukt'
}

export class SelecterenAction implements Action {
  readonly type = ActionTypes.SELECTEREN;
  constructor(public id: number) {}
}

export class OphalenAction implements Action {
  readonly type = ActionTypes.OPHALEN;
  constructor(public id: number) {}
}

export class OphalenSuccesAction implements Action {
  readonly type = ActionTypes.OPHALEN_SUCCES;
  constructor(public leerling: Leerling) {}
}

export class OphalenMisluktAction implements Action {
  readonly type = ActionTypes.OPHALEN_MISLUKT;
  constructor(public foutmelding: string) {}
}

export class OphalenScoresAction implements Action {
  readonly type = ActionTypes.OPHALEN_SCORES;
  constructor(public leerlingId: number) {}
}

export class OphalenScoresSuccesAction implements Action {
  readonly type = ActionTypes.OPHALEN_SCORES_SUCCES;
  constructor(public scores: Score[]) {}
}

export class OphalenScoresMisluktAction implements Action {
  readonly type = ActionTypes.OPHALEN_SCORES_MISLUKT;
  constructor(public foutmelding: string) {}
}

export type Actions =
  | SelecterenAction
  | OphalenAction
  | OphalenSuccesAction
  | OphalenMisluktAction
  | OphalenScoresAction
  | OphalenScoresSuccesAction
  | OphalenScoresMisluktAction;
