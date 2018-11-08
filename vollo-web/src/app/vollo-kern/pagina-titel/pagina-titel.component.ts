import { Component, Input } from '@angular/core';
import { ToonPaginaAction, UiState } from '../ui.state';
import { Store } from '@ngrx/store';

@Component({
  selector: 'vollo-pagina-titel',
  templateUrl: 'pagina-titel.component.html'
})
export class PaginaTitelComponent {
  @Input()
  set titel(value: string) {
    this.store.dispatch(new ToonPaginaAction(value));
  }

  constructor(private store: Store<UiState>) {}
}
