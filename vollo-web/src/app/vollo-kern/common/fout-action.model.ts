import { Action } from '@ngrx/store';
import { Melding } from './melding.model';

export enum CommonActionTypes {
  FOUT = '[vollo.kern.common] Fout'
}

export class FoutAction implements Action {
  readonly type = CommonActionTypes.FOUT;
  constructor(public melding: Melding) {}
}
