import { Component } from '@angular/core';
import { ActivationEnd, Router } from '@angular/router';
import { distinctUntilChanged, filter, map } from 'rxjs/operators';
import { KruimelService } from './kruimel.service';
import { UiStoreService } from '../vollo-kern-store';

@Component({
  selector: 'vollo-kruimelpad',
  templateUrl: 'kruimelpad.component.html',
  styleUrls: ['kruimelpad.component.scss']
})
export class KruimelpadComponent {
  paginatitel$ = this.uiStoreService.paginatitel$;

  kruimels$ = this.router.events.pipe(
    filter(event => event instanceof ActivationEnd),
    distinctUntilChanged(),
    map((event: ActivationEnd) =>
      this.kruimelService.maakKruimelpad(event.snapshot.root.firstChild.data, this.router)
    )
  );

  constructor(
    private router: Router,
    private kruimelService: KruimelService,
    private uiStoreService: UiStoreService
  ) {}
}
