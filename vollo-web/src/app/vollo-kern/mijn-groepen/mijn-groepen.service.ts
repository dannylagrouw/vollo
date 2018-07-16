import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class MijnGroepenService {
  constructor(private http: HttpClient) {}

  ophalen(): Observable<any> {
    return this.http.get('/api/mijn-groepen');
  }
}
