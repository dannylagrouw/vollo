import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { UiStoreActions, VolloKernState } from '../vollo-kern-store';

@Component({
  selector: 'vollo-pagina-titel',
  templateUrl: 'pagina-titel.component.html'
})
export class PaginaTitelComponent {
  @Input()
  set titel(value: string) {
    this.store.dispatch(new UiStoreActions.ToonPaginaAction(value));
  }

  constructor(private store: Store<VolloKernState.State>) {}
}
