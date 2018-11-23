import { Component, OnInit } from '@angular/core';
import { LeerlingStoreService } from '../vollo-kern-store/leerling-store';

@Component({
  selector: 'vollo-leerling',
  templateUrl: './leerling.component.html',
  styleUrls: ['./leerling.component.scss']
})
export class LeerlingComponent implements OnInit {
  leerling$ = this.leerlingStoreService.leerling$;

  constructor(private leerlingStoreService: LeerlingStoreService) {}

  ngOnInit() {}
}
