import * as authenticatieActions from '../../vollo-kern-store/authenticatie-store/actions';
import { HttpClient } from '@angular/common/http';
import { Gebruiker } from '../model/gebruiker.model';
import { catchError, map } from 'rxjs/operators';
import { of as observableOf } from 'rxjs';

export function uitloggen(action: authenticatieActions.InloggenAction, http: HttpClient) {
  return http.post('/api/gebruiker/uitloggen', null);
}

export function ingelogdeGebruiker(
  action: authenticatieActions.OphalenIngelogdeGebruikerAction,
  http: HttpClient
) {
  return http.get<Gebruiker>('/api/gebruiker/ingelogd').pipe(
    map(gebruiker => new authenticatieActions.OphalenIngelogdeGebruikerSuccesAction(gebruiker)),
    catchError(error =>
      observableOf(new authenticatieActions.OphalenIngelogdeGebruikerMisluktAction(error))
    )
  );
}
