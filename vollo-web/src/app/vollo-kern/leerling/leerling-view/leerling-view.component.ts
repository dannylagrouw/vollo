import { Component, Input } from '@angular/core';
import { Leerling } from '../../groep/leerling.model';
import { Score } from '../../common/model/score.model';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'vollo-leerling-view',
  templateUrl: './leerling-view.component.html',
  styleUrls: ['./leerling-view.component.scss']
})
export class LeerlingViewComponent {
  fotoData: SafeResourceUrl;

  _leerling: Leerling;
  @Input()
  set leerling(value: Leerling) {
    this._leerling = value;
    if (value && value.foto) {
      this.fotoData = this.sanitizer.bypassSecurityTrustResourceUrl(value.foto);
    } else {
      this.fotoData = undefined;
    }
  }
  get leerling() {
    return this._leerling;
  }

  @Input() scores: Score[];

  constructor(private sanitizer: DomSanitizer) {}
}
