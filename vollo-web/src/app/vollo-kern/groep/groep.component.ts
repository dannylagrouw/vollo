import { Component, OnInit, ViewChild } from '@angular/core';
import { AgGridNg2 } from 'ag-grid-angular';
import { GridOptions, RowClickedEvent, ColDef } from 'ag-grid';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap, map, tap } from 'rxjs/operators';
import { Groep } from './groep.model';
import { of } from 'rxjs';
import { GroepStoreService } from '../vollo-kern-store/groep-store';

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
  leerlingColDefs = <ColDef[]>[
    { headerName: 'ID', field: 'leerling.id', hide: true },
    { headerName: 'Roepnaam', field: 'leerling.roepnaam', width: 200 },
    { headerName: 'Tussenvoegsel', field: 'leerling.tussenvoegsel', width: 100 },
    { headerName: 'Achternaam', field: 'leerling.achternaam', width: 300 },
    {
      headerName: 'Geslacht',
      field: 'leerling.geslacht',
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
  columnDefs = <ColDef[]>[];
  rowData: any;

  constructor(private groepStoreService: GroepStoreService, private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.paramMap
      .pipe(switchMap((params: ParamMap) => of(params.get('groepId'))))
      .subscribe(groepId => this.groepStoreService.ophalen(parseInt(groepId)));

    this.rowData = this.groepStoreService.groep$.pipe(
      tap((groep: Groep) => {
        this.columnDefs = groep
          ? [
              ...this.leerlingColDefs,
              ...groep.toetsen.map(toetsafname => {
                return <ColDef>{
                  headerName: toetsafname.toets.omschrijving,
                  headerTooltip: `${toetsafname.toets.soort} ${toetsafname.datum}`,
                  field: 'scores.' + toetsafname.id,
                  width: 100
                };
              })
            ]
          : [];
      }),
      map((groep: Groep) => (groep ? groep.leerlingen : []))
    );
  }
}
