import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable, of as observableOf } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import * as groepActions from './actions';
import { HttpClient } from '@angular/common/http';
import { Groep } from '../../groep/groep.model';

@Injectable()
export class GroepStoreEffects {
  constructor(private http: HttpClient, private actions$: Actions) {}

  @Effect()
  ophalen$: Observable<Action> = this.actions$.pipe(
    ofType(groepActions.ActionTypes.OPHALEN),
    mergeMap((action: groepActions.OphalenAction) =>
      this.http.get<Groep>(`/api/mijn-groepen/${action.id}/leerlingen`).pipe(
        map(groep => new groepActions.OphalenSuccesAction(groep)),
        catchError(error => observableOf(new groepActions.OphalenMisluktAction(error)))
      )
    )
  );
}
