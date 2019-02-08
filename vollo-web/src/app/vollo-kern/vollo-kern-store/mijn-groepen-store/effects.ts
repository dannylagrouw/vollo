import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import * as mijnGroepenActions from './actions';
import { HttpClient } from '@angular/common/http';
import { AbstractEffects } from '../../common/abstract-effects.model';
import { ophalenMijnGroepen } from '../../common/api-clients/mijn-groepen.client';

@Injectable()
export class MijnGroepenStoreEffects extends AbstractEffects {
  constructor(private http: HttpClient, private actions$: Actions) {
    super(http);
  }

  @Effect()
  ophalen$ = this.createEffect(
    this.actions$,
    mijnGroepenActions.ActionTypes.OPHALEN,
    ophalenMijnGroepen
  );
}
