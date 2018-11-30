import { Component, Input, OnInit } from '@angular/core';
import { Leerling } from '../../groep/leerling.model';

@Component({
  selector: 'vollo-leerling-view',
  templateUrl: './leerling-view.component.html',
  styleUrls: ['./leerling-view.component.scss']
})
export class LeerlingViewComponent {
  @Input() leerling: Leerling;

  constructor() {}
}
