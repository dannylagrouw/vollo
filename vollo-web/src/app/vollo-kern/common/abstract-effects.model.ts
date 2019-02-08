import { Actions, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { mergeMap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export abstract class AbstractEffects {
  protected constructor(private _http: HttpClient) {}

  createEffect<T>(
    actions$: Actions<Action>,
    actionType: string,
    callback: (a: Action, http: HttpClient) => Observable<T>
  ) {
    return actions$.pipe(
      ofType(actionType),
      mergeMap(action => callback(action, this._http))
    );
  }
}
