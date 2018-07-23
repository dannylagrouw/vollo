import { Component } from '@angular/core';
import { Router, ActivationEnd } from '@angular/router';
import { filter, distinctUntilChanged, map, tap } from 'rxjs/operators';
import { KruimelService } from './kruimel.service';
import { Select } from '@ngxs/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'vollo-kruimelpad',
  templateUrl: 'kruimelpad.component.html',
  styleUrls: ['kruimelpad.component.scss']
})
export class KruimelpadComponent {
  @Select(state => state.vollo.uiState.paginaTitel)
  paginaTitel$: Observable<string>;

  kruimels$ = this.router.events.pipe(
    filter(event => event instanceof ActivationEnd),
    distinctUntilChanged(),
    map((event: ActivationEnd) =>
      this.kruimelService.maakKruimelpad(event.snapshot.root.firstChild.data, this.router)
    ),
    tap(k => console.info('kruimel', k))
  );

  constructor(private router: Router, private kruimelService: KruimelService) {}
}
