import * as authenticatieActions from '../../vollo-kern-store/authenticatie-store/actions';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { of as observableOf } from 'rxjs';

export function inloggen(action: authenticatieActions.InloggenAction, http: HttpClient) {
  return http
    .post<any>(
      '/api/public/inloggen',
      {
        gebruikersnaam: action.gebruikersnaam,
        wachtwoord: action.wachtwoord
      },
      { headers: new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) }
    )
    .pipe(
      map(() => new authenticatieActions.InloggenSuccesAction(action.gebruikersnaam)),
      catchError(error => observableOf(new authenticatieActions.InloggenMisluktAction(error)))
    );
}
