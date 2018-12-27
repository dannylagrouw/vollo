import { Component, Input, OnInit } from '@angular/core';
import { Leerling } from '../../groep/leerling.model';
import { LeerlingStoreService } from '../../vollo-kern-store/leerling-store';

@Component({
  selector: 'vollo-leerling-ouders',
  templateUrl: './leerling-ouders.component.html',
  styleUrls: ['./leerling-ouders.component.scss']
})
export class LeerlingOudersComponent {
  ouders$ = this.leerlingStoreService.ouders$;

  _leerling: Leerling;
  @Input()
  set leerling(value: Leerling) {
    this._leerling = value;
    this.leerlingStoreService.ophalenOuders(value.id);
  }

  constructor(private leerlingStoreService: LeerlingStoreService) {}
}
