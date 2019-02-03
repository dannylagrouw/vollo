import { Component, OnInit } from '@angular/core';
import { ScoreStoreService } from '../../vollo-kern-store/score-store';
import { GridOptions, ColDef, FilterChangedEvent } from 'ag-grid';
import { GroepScore } from '../../common/model/groep-score.model';

@Component({
  selector: 'vollo-groep-scores',
  templateUrl: './groep-scores.component.html',
  styleUrls: ['./groep-scores.component.scss']
})
export class GroepScoresComponent {
  scores$ = this.scoreStoreService.scores$;
  filteredScores: GroepScore[] = [];
  tabIndex: number = 0;

  gridOptions = <GridOptions>{
    enableColResize: true,
    enableSorting: true,
    enableFilter: true,
    onFilterChanged: (event: FilterChangedEvent) => {
      this.filteredScores = (<any>event.api.getModel()).rootNode.childrenAfterFilter.map(
        n => n.data
      );
    }
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

  setTabIndex(index: number) {
    this.tabIndex = index;
  }
}
