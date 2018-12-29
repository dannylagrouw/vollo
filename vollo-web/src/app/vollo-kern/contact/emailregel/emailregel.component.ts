import { Component, Input } from '@angular/core';

@Component({
  selector: 'vollo-contact-emailregel',
  templateUrl: './emailregel.component.html',
  styleUrls: ['./emailregel.component.scss']
})
export class EmailregelComponent {
  @Input() muted: boolean = false;

  @Input() title: string = 'Emailadres';

  @Input() divider: boolean = false;

  @Input() email: string;

  constructor() {}
}
