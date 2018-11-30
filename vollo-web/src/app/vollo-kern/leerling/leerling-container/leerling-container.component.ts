import { Component, OnInit } from '@angular/core';
import { LeerlingStoreService } from '../../vollo-kern-store/leerling-store';

@Component({
  selector: 'vollo-leerling-container',
  templateUrl: './leerling-container.component.html',
  styleUrls: ['./leerling-container.component.scss']
})
export class LeerlingContainerComponent {
  leerling$ = this.leerlingStoreService.leerling$;
  scores$ = this.leerlingStoreService.scores$;

  constructor(private leerlingStoreService: LeerlingStoreService) {}
}
