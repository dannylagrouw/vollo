import { Component, OnInit, ViewChild } from '@angular/core';
import { MijnGroepenService } from './mijn-groepen.service';
import { AgGridNg2 } from 'ag-grid-angular';
import { GridOptions, RowClickedEvent, ColDef } from 'ag-grid';
import { Router } from '../../../../node_modules/@angular/router';

@Component({
  selector: 'vollo-mijn-groepen',
  templateUrl: './mijn-groepen.component.html',
  styleUrls: ['./mijn-groepen.component.scss']
})
export class MijnGroepenComponent implements OnInit {
  @ViewChild('agGrid') agGrid: AgGridNg2;

  gridOptions = <GridOptions>{
    enableColResize: true,
    enableSorting: true,
    enableFilter: true,
    onRowClicked: (event: RowClickedEvent) => {
      this.router.navigate(['groep', event.data.id]);
    }
  };
  columnDefs = <ColDef[]>[
    { headerName: 'ID', field: 'id', hide: true },
    { headerName: 'School', field: 'school.naam', width: 300 },
    { headerName: 'Groep', field: 'naam', width: 200 }
  ];
  rowData: any;

  constructor(private mijnGroepenService: MijnGroepenService, private router: Router) {}

  ngOnInit() {
    this.rowData = this.mijnGroepenService.ophalen();
  }
}
