import { Component, OnInit } from '@angular/core';
import { MijnGroepenService } from './mijn-groepen.service';
import { School } from './groep.model';
import { map } from 'rxjs/operators';

@Component({
  selector: 'vollo-mijn-groepen',
  templateUrl: './mijn-groepen.component.html',
  styleUrls: ['./mijn-groepen.component.scss']
})
export class MijnGroepenComponent implements OnInit {
  constructor(private mijnGroepenService: MijnGroepenService) {}

  ngOnInit() {
    this.mijnGroepenService
      .ophalen()
      .pipe(map((scholen: School[]) => scholen.map(school => school.naam)))
      .subscribe(data => console.debug('mijn groepen', data));
  }
}
