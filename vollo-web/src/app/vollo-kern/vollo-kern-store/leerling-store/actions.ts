import { Action } from '@ngrx/store';
import { Leerling } from '../../groep/leerling.model';
import { Score } from '../../common/model/score.model';
import { Notitie } from '../../common/model/notitie.model';

export enum ActionTypes {
  SELECTEREN = '[vollo.kern.leerling] Selecteren',
  DESELECTEREN = '[vollo.kern.leerling] Deselecteren',
  OPHALEN = '[vollo.kern.leerling] Ophalen',
  OPHALEN_SUCCES = '[vollo.kern.leerling] Ophalen succes',
  OPHALEN_MISLUKT = '[vollo.kern.leerling] Ophalen mislukt',
  OPHALEN_SCORES = '[vollo.kern.leerling] Ophalen scores',
  OPHALEN_SCORES_SUCCES = '[vollo.kern.leerling] Ophalen scores succes',
  OPHALEN_SCORES_MISLUKT = '[vollo.kern.leerling] Ophalen scores mislukt',
  OPHALEN_NOTITIES = '[vollo.kern.leerling] Ophalen notities',
  OPHALEN_NOTITIES_SUCCES = '[vollo.kern.leerling] Ophalen notities succes',
  OPHALEN_NOTITIES_MISLUKT = '[vollo.kern.leerling] Ophalen notities mislukt',
  OPSLAAN_NOTITIE = '[vollo.kern.leerling] Opslaan notitie',
  OPSLAAN_NOTITIE_SUCCES = '[vollo.kern.leerling] Opslaan notitie succes',
  OPSLAAN_NOTITIE_MISLUKT = '[vollo.kern.leerling] Opslaan notitie mislukt',
  NOTITIE_FORM_ZICHTBAAR = '[vollo.kern.leerling] NotitieForm zichtbaar'
}

export class SelecterenAction implements Action {
  readonly type = ActionTypes.SELECTEREN;
  constructor(public id: number) {}
}

export class DeselecterenAction implements Action {
  readonly type = ActionTypes.DESELECTEREN;
  constructor() {}
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

export class OphalenNotitiesAction implements Action {
  readonly type = ActionTypes.OPHALEN_NOTITIES;
  constructor(public leerlingId: number) {}
}

export class OphalenNotitiesSuccesAction implements Action {
  readonly type = ActionTypes.OPHALEN_NOTITIES_SUCCES;
  constructor(public notities: Notitie[]) {}
}

export class OphalenNotitiesMisluktAction implements Action {
  readonly type = ActionTypes.OPHALEN_NOTITIES_MISLUKT;
  constructor(public foutmelding: string) {}
}

export class OpslaanNotitieAction implements Action {
  readonly type = ActionTypes.OPSLAAN_NOTITIE;
  constructor(public leerlingId: number, public notitie: Notitie) {}
}

export class OpslaanNotitieSuccesAction implements Action {
  readonly type = ActionTypes.OPSLAAN_NOTITIE_SUCCES;
  constructor(public notitie: Notitie) {}
}

export class OpslaanNotitieMisluktAction implements Action {
  readonly type = ActionTypes.OPSLAAN_NOTITIE_MISLUKT;
  constructor(public foutmelding: string) {}
}

export class NotitieFormZichtbaarAction implements Action {
  readonly type = ActionTypes.NOTITIE_FORM_ZICHTBAAR;
  constructor(public zichtbaar: boolean) {}
}

export type Actions =
  | SelecterenAction
  | DeselecterenAction
  | OphalenAction
  | OphalenSuccesAction
  | OphalenMisluktAction
  | OphalenScoresAction
  | OphalenScoresSuccesAction
  | OphalenScoresMisluktAction
  | OphalenNotitiesAction
  | OphalenNotitiesSuccesAction
  | OphalenNotitiesMisluktAction
  | OpslaanNotitieAction
  | OpslaanNotitieSuccesAction
  | OpslaanNotitieMisluktAction
  | NotitieFormZichtbaarAction;
