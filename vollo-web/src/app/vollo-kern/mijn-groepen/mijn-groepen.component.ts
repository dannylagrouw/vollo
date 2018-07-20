import { Component, OnInit, ViewChild } from '@angular/core';
import { MijnGroepenService } from './mijn-groepen.service';
import { AgGridNg2 } from 'ag-grid-angular';

@Component({
  selector: 'vollo-mijn-groepen',
  templateUrl: './mijn-groepen.component.html',
  styleUrls: ['./mijn-groepen.component.scss']
})
export class MijnGroepenComponent implements OnInit {
  @ViewChild('agGrid') agGrid: AgGridNg2;

  columnDefs = [
    { headerName: 'School', field: 'school.naam' },
    { headerName: 'Groep', field: 'naam' }
  ];
  rowData: any;

  constructor(private mijnGroepenService: MijnGroepenService) {}

  ngOnInit() {
    this.rowData = this.mijnGroepenService.ophalen();
  }
}
