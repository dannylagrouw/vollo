import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { InloggenAction, InloggenState } from '../vollo-kern/inloggen/inloggen.state';
import { select, Store } from '@ngrx/store';

@Injectable({
  providedIn: 'root'
})
export class InloggenService {
  inloggenState$ = this.store.pipe(select('inloggen'));

  constructor(private http: HttpClient, private store: Store<InloggenState>) {}

  inloggen(gebruikersnaam: string, wachtwoord: string) {
    this.store.dispatch(new InloggenAction(gebruikersnaam, wachtwoord));
  }

  inloggenRequest(gebruikersnaam: string, wachtwoord: string): Observable<string> {
    return this.http.post<any>(
      '/api/public/inloggen',
      {
        gebruikersnaam,
        wachtwoord
      },
      { headers: new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) }
    );
  }
}
