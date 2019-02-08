import { Action } from '@ngrx/store';
import { Leerling } from '../../groep/leerling.model';
import { Score } from '../../common/model/score.model';
import { Notitie } from '../../common/model/notitie.model';
import { LeerlingHistorieRecord } from '../../common/model/leerling-historie-record.model';
import { Ouder } from '../../common/model/ouder.model';
import { ErrorAction } from '../../common/error-action.model';
import { HttpErrorResponse } from '@angular/common/http';

export enum ActionTypes {
  SELECTEREN = '[vollo.kern.leerling] Selecteren',
  DESELECTEREN = '[vollo.kern.leerling] Deselecteren',
  OPHALEN = '[vollo.kern.leerling] Ophalen',
  OPHALEN_SUCCES = '[vollo.kern.leerling] Ophalen succes',
  OPHALEN_MISLUKT = '[vollo.kern.leerling] Ophalen mislukt',
  OPHALEN_SCORES = '[vollo.kern.leerling] Ophalen scores',
  OPHALEN_SCORES_SUCCES = '[vollo.kern.leerling] Ophalen scores succes',
  OPHALEN_SCORES_MISLUKT = '[vollo.kern.leerling] Ophalen scores mislukt',
  OPHALEN_OUDERS = '[vollo.kern.leerling] Ophalen ouders',
  OPHALEN_OUDERS_SUCCES = '[vollo.kern.leerling] Ophalen ouders succes',
  OPHALEN_OUDERS_MISLUKT = '[vollo.kern.leerling] Ophalen ouders mislukt',
  OPHALEN_HISTORIE = '[vollo.kern.leerling] Ophalen historie',
  OPHALEN_HISTORIE_SUCCES = '[vollo.kern.leerling] Ophalen historie succes',
  OPHALEN_HISTORIE_MISLUKT = '[vollo.kern.leerling] Ophalen historie mislukt',
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

export class OphalenMisluktAction extends ErrorAction {
  readonly type = ActionTypes.OPHALEN_MISLUKT;
  constructor(public fout: HttpErrorResponse) {
    super();
  }
}

export class OphalenScoresAction implements Action {
  readonly type = ActionTypes.OPHALEN_SCORES;
  constructor(public leerlingId: number) {}
}

export class OphalenScoresSuccesAction implements Action {
  readonly type = ActionTypes.OPHALEN_SCORES_SUCCES;
  constructor(public scores: Score[]) {}
}

export class OphalenScoresMisluktAction extends ErrorAction {
  readonly type = ActionTypes.OPHALEN_SCORES_MISLUKT;
  constructor(public fout: HttpErrorResponse) {
    super();
  }
}

export class OphalenOudersAction implements Action {
  readonly type = ActionTypes.OPHALEN_OUDERS;
  constructor(public leerlingId: number) {}
}

export class OphalenOudersSuccesAction implements Action {
  readonly type = ActionTypes.OPHALEN_OUDERS_SUCCES;
  constructor(public ouders: Ouder[]) {}
}

export class OphalenOudersMisluktAction extends ErrorAction {
  readonly type = ActionTypes.OPHALEN_OUDERS_MISLUKT;
  constructor(public fout: HttpErrorResponse) {
    super();
  }
}

export class OphalenHistorieAction implements Action {
  readonly type = ActionTypes.OPHALEN_HISTORIE;
  constructor(public leerlingId: number) {}
}

export class OphalenHistorieSuccesAction implements Action {
  readonly type = ActionTypes.OPHALEN_HISTORIE_SUCCES;
  constructor(public historie: LeerlingHistorieRecord[]) {}
}

export class OphalenHistorieMisluktAction extends ErrorAction {
  readonly type = ActionTypes.OPHALEN_HISTORIE_MISLUKT;
  constructor(public fout: HttpErrorResponse) {
    super();
  }
}

export class OphalenNotitiesAction implements Action {
  readonly type = ActionTypes.OPHALEN_NOTITIES;
  constructor(public leerlingId: number) {}
}

export class OphalenNotitiesSuccesAction implements Action {
  readonly type = ActionTypes.OPHALEN_NOTITIES_SUCCES;
  constructor(public notities: Notitie[]) {}
}

export class OphalenNotitiesMisluktAction extends ErrorAction {
  readonly type = ActionTypes.OPHALEN_NOTITIES_MISLUKT;
  constructor(public fout: HttpErrorResponse) {
    super();
  }
}

export class OpslaanNotitieAction implements Action {
  readonly type = ActionTypes.OPSLAAN_NOTITIE;
  constructor(public leerlingId: number, public notitie: Notitie) {}
}

export class OpslaanNotitieSuccesAction implements Action {
  readonly type = ActionTypes.OPSLAAN_NOTITIE_SUCCES;
  constructor(public notitie: Notitie) {}
}

export class OpslaanNotitieMisluktAction extends ErrorAction {
  readonly type = ActionTypes.OPSLAAN_NOTITIE_MISLUKT;
  constructor(public fout: HttpErrorResponse) {
    super();
  }
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
  | OphalenOudersAction
  | OphalenOudersSuccesAction
  | OphalenOudersMisluktAction
  | OphalenHistorieAction
  | OphalenHistorieSuccesAction
  | OphalenHistorieMisluktAction
  | OphalenNotitiesAction
  | OphalenNotitiesSuccesAction
  | OphalenNotitiesMisluktAction
  | OpslaanNotitieAction
  | OpslaanNotitieSuccesAction
  | OpslaanNotitieMisluktAction
  | NotitieFormZichtbaarAction;
