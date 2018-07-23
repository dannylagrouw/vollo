import { Component, OnInit, ViewChild } from '@angular/core';
import { GroepService } from './groep.service';
import { AgGridNg2 } from 'ag-grid-angular';
import { GridOptions, RowClickedEvent, ColDef } from 'ag-grid';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';

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
    this.route.paramMap
      .pipe(switchMap((params: ParamMap) => params.get('groepId')))
      .subscribe(groepId => (this.rowData = this.groepService.ophalen(groepId)));
  }
}
