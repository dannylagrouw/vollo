import { Component } from '@angular/core';
import { ActivationEnd, Router } from '@angular/router';
import { distinctUntilChanged, filter, map, tap } from 'rxjs/operators';
import { KruimelService } from './kruimel.service';
import { UiState } from '../ui.state';
import { select, Store } from '@ngrx/store';

@Component({
  selector: 'vollo-kruimelpad',
  templateUrl: 'kruimelpad.component.html',
  styleUrls: ['kruimelpad.component.scss']
})
export class KruimelpadComponent {
  paginaTitel$ = this.store.pipe(
    select('ui'),
    map(state => state.paginaTitel)
  );

  kruimels$ = this.router.events.pipe(
    filter(event => event instanceof ActivationEnd),
    distinctUntilChanged(),
    map((event: ActivationEnd) =>
      this.kruimelService.maakKruimelpad(event.snapshot.root.firstChild.data, this.router)
    ),
    tap(k => console.info('kruimel', k))
  );

  constructor(
    private router: Router,
    private kruimelService: KruimelService,
    private store: Store<UiState>
  ) {}
}
