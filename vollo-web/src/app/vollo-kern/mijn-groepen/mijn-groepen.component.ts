import { Component, OnInit, ViewChild } from '@angular/core';
import { AgGridNg2 } from 'ag-grid-angular';
import { GridOptions, RowClickedEvent, ColDef } from 'ag-grid';
import { Router } from '@angular/router';
import { MijnGroepenStoreService } from '../vollo-kern-store';

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
      this.router.navigate(['mijn-groepen', 'groep', event.data.id]);
    }
  };
  columnDefs = <ColDef[]>[
    { headerName: 'ID', field: 'id', hide: true },
    { headerName: 'School', field: 'school.naam', width: 300 },
    { headerName: 'Groep', field: 'naam', width: 200 }
  ];
  rowData: any;

  constructor(private mijnGroepenStoreService: MijnGroepenStoreService, private router: Router) {}

  ngOnInit() {
    this.rowData = this.mijnGroepenStoreService.groepen$;
    this.mijnGroepenStoreService.ophalen();
  }
}
