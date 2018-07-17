import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Groep } from './groep.model';

@Injectable()
export class MijnGroepenService {
  constructor(private http: HttpClient) {}

  ophalen(): Observable<Groep[]> {
    return this.http.get<Groep[]>('/api/mijn-groepen');
  }
}
