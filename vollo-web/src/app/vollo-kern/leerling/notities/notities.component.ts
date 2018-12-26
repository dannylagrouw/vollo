import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LeerlingStoreService } from '../../vollo-kern-store/leerling-store';
import { Notitie } from '../../common/model/notitie.model';
import { Leerling } from '../../groep/leerling.model';
import { animate, keyframes, style, transition, trigger } from '@angular/animations';

const nieuweNotitieAnimation = trigger('nieuweNotitie', [
  transition(
    'void => *',
    animate(
      '300ms',
      keyframes([
        style({ transform: 'translate3d(0, -200px, 0)', opacity: 0, height: 0, offset: 0 }),
        style({ transform: 'translate3d(0, 0, 0)', opacity: 1, height: '72px', offset: 1 })
      ])
    )
  ),
  transition(
    '* => void',
    animate(
      '200ms',
      keyframes([
        style({ transform: 'translate3d(0, 0, 0)', opacity: 1, offset: 0 }),
        style({ transform: 'translate3d(0, -200px, 0)', height: 0, opacity: 0, offset: 1 })
      ])
    )
  )
]);

@Component({
  selector: 'vollo-notities',
  templateUrl: './notities.component.html',
  styleUrls: ['./notities.component.scss'],
  animations: [nieuweNotitieAnimation]
})
export class NotitiesComponent implements OnInit {
  _leerling: Leerling;
  @Input()
  set leerling(value: Leerling) {
    if (this.form && value && this._leerling && value.id !== this._leerling.id) {
      this.resetForm();
    }
    this._leerling = value;
    this.leerlingStoreService.ophalenNotities(value.id);
  }
  get leerling() {
    return this._leerling;
  }

  notities$ = this.leerlingStoreService.notities$;

  notitieFormZichtbaar$ = this.leerlingStoreService.notitieFormZichtbaar$;

  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private leerlingStoreService: LeerlingStoreService
  ) {}

  ngOnInit() {
    this.resetForm();
  }

  resetForm() {
    this.form = this.formBuilder.group({
      tekst: [null, Validators.required],
      notitieNiveau: [null, Validators.required]
    });
  }

  opslaan() {
    this.leerlingStoreService.opslaanNotitie(
      this.leerling.id,
      new Notitie({
        tekst: this.form.get('tekst').value,
        notitieNiveau: this.form.get('notitieNiveau').value
      })
    );
    this.resetForm();
  }

  toggleZichtbaar(zichtbaar: boolean) {
    this.leerlingStoreService.notitieFormZichtbaar(zichtbaar);
  }
}
