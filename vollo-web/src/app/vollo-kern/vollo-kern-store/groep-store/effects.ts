import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import * as groepActions from './actions';
import { HttpClient } from '@angular/common/http';
import { AbstractEffects } from '../../common/abstract-effects.model';
import { ophalenMijnGroepenLeerlingen } from '../../common/api-clients/mijn-groepen.client';

@Injectable()
export class GroepStoreEffects extends AbstractEffects {
  constructor(private http: HttpClient, private actions$: Actions) {
    super(http);
  }

  @Effect()
  ophalen$ = this.createEffect(
    this.actions$,
    groepActions.ActionTypes.OPHALEN,
    ophalenMijnGroepenLeerlingen
  );
}
