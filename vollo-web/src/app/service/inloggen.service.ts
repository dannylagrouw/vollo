import { Injectable } from "@angular/core";
import { of, Observable } from "rxjs";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class InloggenService {
  constructor(private http: HttpClient) {}

  inloggen(gebruikersnaam: string, wachtwoord: string): Observable<string> {
    return this.http
      .post<any>(
        "/api/public/inloggen",
        {
          gebruikersnaam,
          wachtwoord
        },
        { headers: new HttpHeaders({ "Content-Type": "application/json;charset=UTF-8" }) }
      )
      .pipe(map(data => data.token));
  }
}
