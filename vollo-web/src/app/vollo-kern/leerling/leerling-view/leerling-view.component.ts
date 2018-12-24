import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Leerling } from '../../groep/leerling.model';
import { Score } from '../../common/model/score.model';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { animate, keyframes, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'vollo-leerling-view',
  templateUrl: './leerling-view.component.html',
  styleUrls: ['./leerling-view.component.scss'],
  animations: [
    trigger('leerling', [
      transition(
        '* => *',
        animate(
          '300ms',
          keyframes([style({ opacity: 0, offset: 0 }), style({ opacity: 1, offset: 1 })])
        )
      )
    ])
  ]
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

  @Output() onClose = new EventEmitter();

  constructor(private sanitizer: DomSanitizer) {}

  close() {
    this.onClose.emit();
  }
}
