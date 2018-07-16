import { Component, OnInit } from '@angular/core';
import { MijnGroepenService } from './mijn-groepen.service';

@Component({
  selector: 'vollo-mijn-groepen',
  templateUrl: './mijn-groepen.component.html',
  styleUrls: ['./mijn-groepen.component.scss']
})
export class MijnGroepenComponent implements OnInit {
  constructor(private mijnGroepenService: MijnGroepenService) {}

  ngOnInit() {
    this.mijnGroepenService.ophalen().subscribe(data => console.info('mijn groepen', data));
  }
}
