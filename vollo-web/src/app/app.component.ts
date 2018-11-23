import { Component } from '@angular/core';
import {
  AuthenticatieStoreService,
  LeerlingStoreService,
  UiStoreService
} from './vollo-kern/vollo-kern-store';
import { map } from 'rxjs/operators';

@Component({
  selector: 'vollo-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'vollo';
  authenticatie$ = this.authenticatieStoreService.authenticatie$;
  foutmeldingen$ = this.uiStoreService.foutmeldingen$;
  toonLeerlingPaneel$ = this.leerlingStoreService.geselecteerd$.pipe(map(id => !!id));

  constructor(
    private authenticatieStoreService: AuthenticatieStoreService,
    private uiStoreService: UiStoreService,
    private leerlingStoreService: LeerlingStoreService
  ) {
    uiStoreService.toonFoutmelding('test', 'Dit is een foutmelding');
  }
}
