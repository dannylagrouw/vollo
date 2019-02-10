import { Injectable } from '@angular/core';
import { Actions, Effect, OnInitEffects } from '@ngrx/effects';
import * as authenticatieActions from './actions';
import { AbstractEffects } from '../../common/abstract-effects.model';
import { HttpClient } from '@angular/common/http';
import { inloggen } from '../../common/api-clients/inloggen.client';
import { ingelogdeGebruiker, uitloggen } from '../../common/api-clients/gebruiker.client';
import { tap } from 'rxjs/operators';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';
import { Action } from '@ngrx/store';

@Injectable()
export class AuthenticatieStoreEffects extends AbstractEffects implements OnInitEffects {
  constructor(
    private http: HttpClient,
    private actions$: Actions,
    private router: Router,
    private snackBar: MatSnackBar
  ) {
    super(http);
  }

  ngrxOnInitEffects(): Action {
    return new authenticatieActions.OphalenIngelogdeGebruikerAction();
  }

  @Effect()
  ophalenIngelogdeGebruiker$ = this.createEffect(
    this.actions$,
    authenticatieActions.ActionTypes.OPHALEN_INGELOGDE_GEBRUIKER,
    ingelogdeGebruiker
  );

  @Effect()
  inloggen$ = this.createEffect(this.actions$, authenticatieActions.ActionTypes.INLOGGEN, inloggen);

  @Effect({ dispatch: false })
  uitloggen$ = this.createEffect(
    this.actions$,
    authenticatieActions.ActionTypes.UITLOGGEN,
    uitloggen
  ).pipe(
    tap(() => this.router.navigate(['/inloggen'])),
    tap(() => this.snackBar.open('U bent uitgelogd', '', { panelClass: 'info', duration: 3000 }))
  );
}
