import { Component, OnInit } from '@angular/core';
import { InloggenService } from '../../service/inloggen.service';

@Component({
  selector: 'vollo-inloggen',
  templateUrl: './inloggen.component.html',
  styleUrls: ['./inloggen.component.scss']
})
export class InloggenComponent implements OnInit {
  gebruiker$ = this.inloggenService.inloggenState$;

  form = {
    gebruikersnaam: '',
    wachtwoord: ''
  };

  constructor(private inloggenService: InloggenService) {}

  ngOnInit() {}

  inloggen() {
    this.inloggenService.inloggen(this.form.gebruikersnaam, this.form.wachtwoord);
  }
}
