import { Component } from '@angular/core';
import { AuthenticatieStoreService, UiStoreService } from './vollo-kern/vollo-kern-store';

@Component({
  selector: 'vollo-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'vollo';
  authenticatie$ = this.authenticatieStoreService.authenticatie$;
  foutmeldingen$ = this.uiStoreService.foutmeldingen$;

  constructor(
    private authenticatieStoreService: AuthenticatieStoreService,
    private uiStoreService: UiStoreService
  ) {
    this.foutmeldingen$.subscribe(m => console.info(m));
    uiStoreService.toonFoutmelding('test', 'Dit is een foutmelding');
  }
}
