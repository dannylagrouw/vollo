import { Action } from '@ngrx/store';
import { Melding } from '../../common/melding.model';
import { FoutAction } from '../../common/fout-action.model';

export enum ActionTypes {
  TOON_PAGINA = '[vollo.kern.ui] Toon pagina',
  TOON_MELDING = '[vollo.kern.ui] Toon melding'
}

export class ToonPaginaAction implements Action {
  readonly type = ActionTypes.TOON_PAGINA;
  constructor(public paginatitel: string) {}
}

export class ToonMeldingAction implements Action {
  readonly type = ActionTypes.TOON_MELDING;
  constructor(public melding: Melding) {}
}

export type Actions = ToonPaginaAction | ToonMeldingAction | FoutAction;
