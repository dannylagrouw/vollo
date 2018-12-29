import { Component, Input } from '@angular/core';

@Component({
  selector: 'vollo-contact-telefoonregel',
  templateUrl: './telefoonregel.component.html',
  styleUrls: ['./telefoonregel.component.scss']
})
export class TelefoonregelComponent {
  @Input() muted: boolean = false;

  @Input() title: string = 'Emailadres';

  @Input() divider: boolean = false;

  @Input() telefoon: string;

  constructor() {}
}
