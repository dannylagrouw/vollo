import { Component, Input } from '@angular/core';
import { UiStoreService } from '../vollo-kern-store';

@Component({
  selector: 'vollo-pagina-titel',
  templateUrl: 'pagina-titel.component.html'
})
export class PaginaTitelComponent {
  @Input()
  set titel(value: string) {
    this.uiStoreService.toonPagina(value);
  }

  constructor(private uiStoreService: UiStoreService) {}
}
