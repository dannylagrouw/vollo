import * as groepActions from '../../vollo-kern-store/groep-store/actions';
import * as mijnGroepenActions from '../../vollo-kern-store/mijn-groepen-store/actions';
import { HttpClient } from '@angular/common/http';
import { Groep } from '../../groep/groep.model';
import { Groep as MijnGroep } from '../../mijn-groepen/groep.model';
import { catchError, map } from 'rxjs/operators';
import { of as observableOf } from 'rxjs';

export function ophalenMijnGroepenLeerlingen(action: groepActions.OphalenAction, http: HttpClient) {
  return http.get<Groep>(`/api/mijn-groepen/${action.id}/leerlingen`).pipe(
    map(groep => new groepActions.OphalenSuccesAction(groep)),
    catchError(error => observableOf(new groepActions.OphalenMisluktAction(error)))
  );
}

export function ophalenMijnGroepen(action: mijnGroepenActions.OphalenAction, http: HttpClient) {
  return http.get<MijnGroep[]>('/api/mijn-groepen').pipe(
    map(groepen => new mijnGroepenActions.OphalenSuccesAction(groepen)),
    catchError(error => observableOf(new mijnGroepenActions.OphalenMisluktAction(error)))
  );
}
