import * as scoreActions from '../../vollo-kern-store/score-store/actions';
import { HttpClient } from '@angular/common/http';
import { GroepScore } from '../model/groep-score.model';
import { catchError, map } from 'rxjs/operators';
import { of as observableOf } from 'rxjs';

export function ophalenScores(action: scoreActions.OphalenAction, http: HttpClient) {
  return http.get<GroepScore[]>(`/api/score`).pipe(
    map(scores => new scoreActions.OphalenSuccesAction(scores)),
    catchError(error => observableOf(new scoreActions.OphalenMisluktAction(error)))
  );
}
