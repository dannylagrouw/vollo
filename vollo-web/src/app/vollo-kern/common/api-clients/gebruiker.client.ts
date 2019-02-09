import * as authenticatieActions from '../../vollo-kern-store/authenticatie-store/actions';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { of as observableOf } from 'rxjs';

export function uitloggen(action: authenticatieActions.InloggenAction, http: HttpClient) {
  return http.post('/api/gebruiker/uitloggen', null);
}
