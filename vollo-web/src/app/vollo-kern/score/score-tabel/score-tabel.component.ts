import { Component, Input } from '@angular/core';
import { Score } from '../../common/model/score.model';
import { ColDef, GridOptions } from 'ag-grid';

@Component({
  selector: 'vollo-score-tabel',
  templateUrl: './score-tabel.component.html',
  styleUrls: ['./score-tabel.component.scss']
})
export class ScoreTabelComponent {
  _scores: Score[];
  @Input()
  set scores(value: Score[]) {
    this._scores = value;
    this.rowData = value;
  }
  get scores() {
    return this._scores;
  }

  gridOptions = <GridOptions>{
    enableColResize: true,
    enableSorting: true,
    enableFilter: true
  };
  columnDefs = <ColDef[]>[
    { headerName: 'Toets', field: 'toetsafname.toets.omschrijving', width: 170 },
    { headerName: 'Datum', field: 'toetsafname.datum', width: 130, sort: 'desc' },
    { headerName: 'Score', field: 'cijferScore', width: 100, cellStyle: { textAlign: 'right' } }
  ];
  rowData: any;

  constructor() {}
}
