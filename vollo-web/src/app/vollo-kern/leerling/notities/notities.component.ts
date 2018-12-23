import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LeerlingStoreService } from '../../vollo-kern-store/leerling-store';
import { Notitie } from '../../common/model/notitie.model';
import { Leerling } from '../../groep/leerling.model';

@Component({
  selector: 'vollo-notities',
  templateUrl: './notities.component.html',
  styleUrls: ['./notities.component.scss']
})
export class NotitiesComponent implements OnInit {
  @Input() leerling: Leerling;

  notities$ = this.leerlingStoreService.notities$;

  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private leerlingStoreService: LeerlingStoreService
  ) {}

  ngOnInit() {
    this.leerlingStoreService.ophalenNotities(this.leerling.id);
    this.form = this.formBuilder.group({
      notitie: [null, Validators.required]
    });
  }

  opslaan() {
    this.leerlingStoreService.opslaanNotitie(
      this.leerling.id,
      new Notitie(this.form.get('notitie').value)
    );
    this.form.reset();
  }
}
