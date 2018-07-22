import { Component, OnInit, ViewChild } from '@angular/core';
import { GroepService } from './groep.service';
import { AgGridNg2 } from 'ag-grid-angular';
import { GridOptions, RowClickedEvent, ColDef } from 'ag-grid';
import { Router, ActivatedRoute } from '../../../../node_modules/@angular/router';
import { ValueFormatterParams } from '../../../../node_modules/ag-grid/dist/lib/entities/colDef';

@Component({
  selector: 'vollo-groep',
  templateUrl: './groep.component.html',
  styleUrls: ['./groep.component.scss']
})
export class GroepComponent implements OnInit {
  @ViewChild('agGrid') agGrid: AgGridNg2;

  gridOptions = <GridOptions>{
    enableColResize: true,
    enableSorting: true,
    enableFilter: true,
    onRowClicked: (event: RowClickedEvent) => {
      console.log('leerling id', event.data.id);
    }
  };
  columnDefs = <ColDef[]>[
    { headerName: 'ID', field: 'id', hide: true },
    { headerName: 'Roepnaam', field: 'roepnaam', width: 100 },
    { headerName: 'Tussenvoegsel', field: 'tussenvoegsel', width: 100 },
    { headerName: 'Achternaam', field: 'achternaam', width: 200 },
    {
      headerName: 'Geslacht',
      field: 'geslacht',
      width: 100,
      valueFormatter: () => '',
      cellClass: params =>
        'fa ' +
        (params.value === 'MAN'
          ? 'fa-mars'
          : params.value === 'VROUW'
            ? 'fa-venus'
            : 'fa-genderless')
    }
  ];
  rowData: any;

  constructor(private groepService: GroepService, private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.params.subscribe(
      params => (this.rowData = this.groepService.ophalen(params.groepId))
    );
  }
}
