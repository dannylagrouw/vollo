import { Component, OnInit, ViewChild } from '@angular/core';
import { GroepService } from './groep.service';
import { AgGridNg2 } from 'ag-grid-angular';
import { GridOptions, RowClickedEvent, ColDef } from 'ag-grid';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap, map, tap } from 'rxjs/operators';
import { Groep } from './groep.model';
import { of } from 'rxjs';

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
    { headerName: 'ID', field: 'id', hide: true },
    { headerName: 'Roepnaam', field: 'roepnaam', width: 200 },
    { headerName: 'Tussenvoegsel', field: 'tussenvoegsel', width: 100 },
    { headerName: 'Achternaam', field: 'achternaam', width: 300 },
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
  columnDefs = <ColDef[]>[];
  rowData: any;

  constructor(private groepService: GroepService, private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.paramMap.pipe(switchMap((params: ParamMap) => of(params.get('groepId')))).subscribe(
      groepId =>
        (this.rowData = this.groepService.ophalen(groepId).pipe(
          tap((groep: Groep) => {
            this.columnDefs = [
              ...this.leerlingColDefs,
              ...groep.toetsen.map(toets => {
                return <ColDef>{
                  headerName: toets.omschrijving,
                  headerTooltip: `${toets.soort} ${toets.datum}`,
                  field: 'scores.' + toets.id,
                  width: 100
                };
              })
            ];
          }),
          map((groep: Groep) => groep.leerlingen)
        ))
    );
  }
}
