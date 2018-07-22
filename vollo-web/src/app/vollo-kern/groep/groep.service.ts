import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Leerling } from './leerling.model';
import { tap } from '../../../../node_modules/rxjs/operators';

@Injectable()
export class GroepService {
  constructor(private http: HttpClient) {}

  ophalen(groepId: any): Observable<Leerling[]> {
    return this.http.get<Leerling[]>(`/api/mijn-groepen/${groepId}/leerlingen`);
  }
}
