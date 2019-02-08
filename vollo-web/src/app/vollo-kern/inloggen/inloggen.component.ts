import { Component, OnInit } from '@angular/core';
import { AuthenticatieStoreService } from '../vollo-kern-store';

@Component({
  selector: 'vollo-inloggen',
  templateUrl: './inloggen.component.html',
  styleUrls: ['./inloggen.component.scss']
})
export class InloggenComponent implements OnInit {
  authenticatie$ = this.authenticatieStoreService.authenticatie$;

  form = {
    gebruikersnaam: '',
    wachtwoord: ''
  };

  constructor(private authenticatieStoreService: AuthenticatieStoreService) {}

  ngOnInit() {}

  inloggen() {
    this.authenticatieStoreService.inloggen(this.form.gebruikersnaam, this.form.wachtwoord);
    this.form.gebruikersnaam = '';
    this.form.wachtwoord = '';
  }
}
