import { Action } from '@ngrx/store';

export enum ActionTypes {
  TOON_PAGINA = '[vollo.kern.ui] Toon pagina'
}

export class ToonPaginaAction implements Action {
  readonly type = ActionTypes.TOON_PAGINA;
  constructor(public paginatitel: string) {}
}

export type Actions = ToonPaginaAction;
