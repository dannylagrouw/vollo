import { Action } from '@ngrx/store';
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map, mergeMap, tap } from 'rxjs/operators';
import { InloggenService } from '../../service/inloggen.service';
import { HttpHeaders } from '../../../../node_modules/@angular/common/http';

export interface InloggenState {
  ingelogd: boolean;
  gebruikersnaam: string;
}

const initialState: InloggenState = {
  ingelogd: false,
  gebruikersnaam: null
};

export const INLOGGEN_ACTION = '[vollo.kern.inloggen] inloggen';
export const INLOGGEN_SUCCES_ACTION = '[vollo.kern.inloggen] inloggen succes';

export class InloggenAction implements Action {
  type = INLOGGEN_ACTION;
  constructor(public gebruikersnaam: string, public wachtwoord: string) {}
}

export class InloggenSuccesAction implements Action {
  type = INLOGGEN_SUCCES_ACTION;
  constructor(public gebruikersnaam: string) {}
}

type InloggenActions = InloggenAction | InloggenSuccesAction;

export function inloggenReducer(state: InloggenState = initialState, action: InloggenActions) {
  switch (action.type) {
    case INLOGGEN_ACTION:
      return state;
    case INLOGGEN_SUCCES_ACTION:
      return {
        ...state,
        ingelogd: true,
        gebruikersnaam: action.gebruikersnaam
      };
    default:
      return state;
  }
}

@Injectable()
export class InloggenEffects {
  @Effect()
  inloggen$: Observable<Action> = this.actions$.pipe(
    ofType(INLOGGEN_ACTION),
    mergeMap((action: InloggenAction) =>
      this.inloggen(action.gebruikersnaam, action.wachtwoord).pipe(
        map(() => new InloggenSuccesAction(action.gebruikersnaam))
      )
    )
  );

  private inloggen(gebruikersnaam: string, wachtwoord: string): Observable<string> {
    return this.http.post<any>(
      '/api/public/inloggen',
      {
        gebruikersnaam,
        wachtwoord
      },
      { headers: new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) }
    );
  }

  constructor(private http: HttpClient, private actions$: Actions) {}
}
