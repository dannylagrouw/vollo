import { Action } from '@ngrx/store';
import { Melding } from '../../common/melding.model';
import { FoutAction } from '../../common/fout-action.model';

export enum ActionTypes {
  TOON_PAGINA = '[vollo.kern.ui] Toon pagina',
  TOON_MELDING = '[vollo.kern.ui] Toon melding',
  REQUEST_ERBIJ = '[vollo.kern.ui] Request erbij',
  REQUEST_ERAF = '[vollo.kern.ui] Request eraf'
}

export class ToonPaginaAction implements Action {
  readonly type = ActionTypes.TOON_PAGINA;
  constructor(public paginatitel: string) {}
}

export class ToonMeldingAction implements Action {
  readonly type = ActionTypes.TOON_MELDING;
  constructor(public melding: Melding) {}
}

export class RequestErbijAction implements Action {
  readonly type = ActionTypes.REQUEST_ERBIJ;
  constructor() {}
}

export class RequestErafAction implements Action {
  readonly type = ActionTypes.REQUEST_ERAF;
  constructor() {}
}

export type Actions =
  | ToonPaginaAction
  | ToonMeldingAction
  | FoutAction
  | RequestErbijAction
  | RequestErafAction;
