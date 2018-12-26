import { Component, Input } from '@angular/core';

@Component({
  selector: 'vollo-notitie-niveau-icon',
  templateUrl: './notitie-niveau-icon.component.html',
  styleUrls: ['./notitie-niveau-icon.component.scss']
})
export class NotitieNiveauIconComponent {
  @Input() notitieNiveau: string;

  @Input() roepnaam: string;

  constructor() {}
}
