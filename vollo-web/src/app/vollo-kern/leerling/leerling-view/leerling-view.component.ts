import { Component, Input, OnInit } from '@angular/core';
import { Leerling } from '../../groep/leerling.model';
import { Score } from '../../common/model/score.model';
import { AvatarService } from '../../common/avatar.service';

@Component({
  selector: 'vollo-leerling-view',
  templateUrl: './leerling-view.component.html',
  styleUrls: ['./leerling-view.component.scss']
})
export class LeerlingViewComponent {
  avatarUrl: string;

  _leerling: Leerling;
  @Input()
  set leerling(value: Leerling) {
    this._leerling = value;
    this.avatarUrl = value ? this.avatarService.generate(value.id, value.geslacht) : undefined;
  }
  get leerling() {
    return this._leerling;
  }

  @Input() scores: Score[];

  constructor(private avatarService: AvatarService) {}
}
