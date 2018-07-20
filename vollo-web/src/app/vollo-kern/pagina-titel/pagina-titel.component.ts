import { Component, OnInit, Input } from '@angular/core';
import { Store } from '@ngxs/store';
import { ToonPaginaAction } from '../../state/vollo.state';

@Component({
  selector: 'vollo-pagina-titel',
  templateUrl: 'pagina-titel.component.html'
})
export class PaginaTitelComponent {
  @Input()
  set titel(value: string) {
    this.store.dispatch(new ToonPaginaAction(value));
  }

  constructor(private store: Store) {}
}
