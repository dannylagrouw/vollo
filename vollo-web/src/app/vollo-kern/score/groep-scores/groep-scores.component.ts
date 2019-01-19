import { Component, OnInit } from '@angular/core';
import { ScoreStoreService } from '../../vollo-kern-store/score-store';
import { GridOptions, ColDef } from 'ag-grid';

@Component({
  selector: 'vollo-groep-scores',
  templateUrl: './groep-scores.component.html',
  styleUrls: ['./groep-scores.component.scss']
})
export class GroepScoresComponent {
  scores$ = this.scoreStoreService.scores$;

  gridOptions = <GridOptions>{
    enableColResize: true,
    enableSorting: true,
    enableFilter: true
  };
  columnDefs = <ColDef[]>[
    { headerName: 'Achternaam', field: 'achternaam', width: 170 },
    { headerName: 'Toets', field: 'toetsOmschrijving', width: 170 },
    { headerName: 'Datum', field: 'datum', width: 130, sort: 'desc' },
    { headerName: 'Score', field: 'cijferScore', width: 100, cellStyle: { textAlign: 'right' } }
  ];

  constructor(private scoreStoreService: ScoreStoreService) {
    this.scoreStoreService.ophalen();
  }
}
