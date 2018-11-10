import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable, of as observableOf } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import * as mijnGroepenActions from './actions';
import { HttpClient } from '@angular/common/http';
import { Groep } from '../../mijn-groepen/groep.model';

@Injectable()
export class MijnGroepenStoreEffects {
  constructor(private http: HttpClient, private actions$: Actions) {}

  @Effect()
  ophalen$: Observable<Action> = this.actions$.pipe(
    ofType(mijnGroepenActions.ActionTypes.OPHALEN),
    mergeMap((action: mijnGroepenActions.OphalenAction) =>
      this.http.get<Groep[]>('/api/mijn-groepen').pipe(
        map(groepen => new mijnGroepenActions.OphalenSuccesAction(groepen)),
        catchError(error => observableOf(new mijnGroepenActions.OphalenMisluktAction(error)))
      )
    )
  );
}
