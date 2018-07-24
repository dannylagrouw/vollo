import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Groep } from './groep.model';

@Injectable()
export class GroepService {
  constructor(private http: HttpClient) {}

  ophalen(groepId: any): Observable<Groep> {
    return this.http.get<Groep>(`/api/mijn-groepen/${groepId}/leerlingen`);
  }
}
