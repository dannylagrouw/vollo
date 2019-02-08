import * as leerlingActions from '../../vollo-kern-store/leerling-store/actions';
import { HttpClient } from '@angular/common/http';
import { fromServer, Leerling } from '../../groep/leerling.model';
import { catchError, map } from 'rxjs/operators';
import { of as observableOf } from 'rxjs';
import { Score } from '../model/score.model';
import { Ouder } from '../model/ouder.model';
import { Notitie } from '../model/notitie.model';
import * as moment from 'moment';
import { LeerlingHistorieRecord } from '../model/leerling-historie-record.model';

export function ophalenLeerling(action: leerlingActions.OphalenAction, http: HttpClient) {
  return http.get<Leerling>(`/api/leerling/${action.id}`).pipe(
    map(leerling => fromServer(leerling)),
    map(leerling => new leerlingActions.OphalenSuccesAction(leerling)),
    catchError(error => observableOf(new leerlingActions.OphalenMisluktAction(error)))
  );
}

export function ophalenScores(action: leerlingActions.OphalenScoresAction, http: HttpClient) {
  return http.get<Score[]>(`/api/leerling/${action.leerlingId}/scores`).pipe(
    map(scores => new leerlingActions.OphalenScoresSuccesAction(scores)),
    catchError(error => observableOf(new leerlingActions.OphalenScoresMisluktAction(error)))
  );
}

export function ophalenOuders(action: leerlingActions.OphalenOudersAction, http: HttpClient) {
  return http.get<Ouder[]>(`/api/leerling/${action.leerlingId}/ouders`).pipe(
    map(ouders => new leerlingActions.OphalenOudersSuccesAction(ouders)),
    catchError(error => observableOf(new leerlingActions.OphalenOudersMisluktAction(error)))
  );
}

export function ophalenNotities(action: leerlingActions.OphalenNotitiesAction, http: HttpClient) {
  return http.get<Notitie[]>(`/api/notitie/leerling/${action.leerlingId}`).pipe(
    map(notities => notities.sort((a, b) => moment(b.datum).diff(a.datum))),
    map(notities => new leerlingActions.OphalenNotitiesSuccesAction(notities)),
    catchError(error => observableOf(new leerlingActions.OphalenNotitiesMisluktAction(error)))
  );
}

export function ophalenHistorie(action: leerlingActions.OphalenHistorieAction, http: HttpClient) {
  return http.get<LeerlingHistorieRecord[]>(`/api/leerling/${action.leerlingId}/historie`).pipe(
    map(historie => new leerlingActions.OphalenHistorieSuccesAction(historie)),
    catchError(error => observableOf(new leerlingActions.OphalenHistorieMisluktAction(error)))
  );
}

export function opslaanNotitie(action: leerlingActions.OpslaanNotitieAction, http: HttpClient) {
  return http.post<Notitie>(`/api/notitie/leerling/${action.leerlingId}`, action.notitie).pipe(
    map(notitie => new leerlingActions.OpslaanNotitieSuccesAction(notitie)),
    catchError(error => observableOf(new leerlingActions.OpslaanNotitieMisluktAction(error)))
  );
}
