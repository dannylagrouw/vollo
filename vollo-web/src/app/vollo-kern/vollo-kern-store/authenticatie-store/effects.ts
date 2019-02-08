import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import * as authenticatieActions from './actions';
import { AbstractEffects } from '../../common/abstract-effects.model';
import { HttpClient } from '@angular/common/http';
import { inloggen } from '../../common/api-clients/inloggen.client';

@Injectable()
export class AuthenticatieStoreEffects extends AbstractEffects {
  constructor(private http: HttpClient, private actions$: Actions) {
    super(http);
  }

  @Effect()
  inloggen$ = this.createEffect(this.actions$, authenticatieActions.ActionTypes.INLOGGEN, inloggen);
}
