import { Component } from '@angular/core';
import { InloggenService } from './service/inloggen.service';

@Component({
  selector: 'vollo-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'vollo';
  gebruiker$ = this.inloggenService.inloggenState$;

  constructor(private inloggenService: InloggenService) {}
}
