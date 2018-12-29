import { Component, Input } from '@angular/core';
import { Adres } from '../../common/model/adres.model';

@Component({
  selector: 'vollo-contact-adresregel',
  templateUrl: './adresregel.component.html',
  styleUrls: ['./adresregel.component.scss']
})
export class AdresregelComponent {
  @Input() muted: boolean = false;

  @Input() title: string = 'Adres';

  @Input() divider: boolean = false;

  @Input() adres: Adres;

  constructor() {}
}
