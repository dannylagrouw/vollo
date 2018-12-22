import { Component, Input } from '@angular/core';
import { Score } from '../../common/model/score.model';
import * as moment from 'moment';
import * as localeNL from 'plotly.js-locales/nl';
import { PlotlyService } from 'angular-plotly.js';

function normalize(score: Score): number {
  return score.toetsafname.toets.soortScore === 'SCORE_500'
    ? score.cijferScore / 100
    : score.cijferScore;
}

const colors = [
  '#1f77b4', // muted blue
  '#ff7f0e', // safety orange
  '#2ca02c', // cooked asparagus green
  '#d62728', // brick red
  '#9467bd', // muted purple
  '#8c564b', // chestnut brown
  '#e377c2', // raspberry yogurt pink
  '#7f7f7f', // middle gray
  '#bcbd22', // curry yellow-green
  '#17becf' // blue-teal
];

function linearRegression(y, x) {
  const lr: any = {};
  const n = y.length;
  let sum_x = 0;
  let sum_y = 0;
  let sum_xy = 0;
  let sum_xx = 0;
  let sum_yy = 0;

  for (let i = 0; i < y.length; i++) {
    sum_x += x[i];
    sum_y += y[i];
    sum_xy += x[i] * y[i];
    sum_xx += x[i] * x[i];
    sum_yy += y[i] * y[i];
  }

  lr.slope = (n * sum_xy - sum_x * sum_y) / (n * sum_xx - sum_x * sum_x);
  lr.intercept = (sum_y - lr.slope * sum_x) / n;
  lr.r2 = Math.pow(
    (n * sum_xy - sum_x * sum_y) /
      Math.sqrt((n * sum_xx - sum_x * sum_x) * (n * sum_yy - sum_y * sum_y)),
    2
  );

  return lr;
}

@Component({
  selector: 'vollo-score-grafiek',
  templateUrl: './score-grafiek.component.html',
  styleUrls: ['./score-grafiek.component.scss'],
  providers: [PlotlyService]
})
export class ScoreGrafiekComponent {
  _scores: Score[];
  @Input()
  set scores(value: Score[]) {
    this._scores = value;

    if (value) {
      const scoresPerSoort: { [key: string]: Score[] } = value.reduce((prev, curr) => {
        const subscores = prev[curr.toetsafname.toets.soortScore] || [];
        prev[curr.toetsafname.toets.soortScore] = subscores.concat(curr);
        return prev;
      }, {});
      this.graph.data = [].concat(
        ...Object.keys(scoresPerSoort).map((key, index) => {
          const subscores = scoresPerSoort[key].sort((a, b) =>
            moment(a.toetsafname.datum).diff(b.toetsafname.datum)
          );

          let minDatum = subscores[0].toetsafname.datum;
          let maxDatum = subscores[subscores.length - 1].toetsafname.datum;
          const lr = linearRegression(
            subscores.map(s => normalize(s)),
            subscores.map(s => moment(s.toetsafname.datum).diff(minDatum))
          );
          const y1 = lr.intercept;
          const y2 = moment(maxDatum).diff(minDatum) * lr.slope + lr.intercept;

          return [
            {
              name: key === 'SCORE_500' ? '500-scores' : 'cijfers 1-10',
              x: subscores.map(score => score.toetsafname.datum),
              y: subscores.map(score => normalize(score)),
              hoverinfo: 'x+text',
              text: subscores.map(score => score.cijferScore),
              mode: 'markers',
              type: 'scatter',
              marker: {
                color: colors[index],
                size: 8
              }
            },
            {
              x: [minDatum, maxDatum],
              y: [y1, y2],
              hoverinfo: 'none',
              mode: 'lines',
              type: 'scatter',
              showlegend: false,
              line: {
                color: colors[index]
              }
            }
          ];
        })
      );
    } else {
      this.graph.data = [];
    }
  }
  get scores() {
    return this._scores;
  }

  graph = {
    data: [],
    layout: {
      margin: {
        l: 20,
        r: 20,
        t: 20,
        b: 20
      },
      font: {
        family: `'Muli', sans-serif`
      },
      xaxis: {
        hoverformat: '%d-%m-%Y'
      },
      yaxis: {
        range: [0, 10]
      },
      legend: {
        orientation: 'h'
      },
      hoverlabel: {
        font: {
          family: `'Muli', sans-serif`
        }
      }
    },
    config: {
      displayModeBar: false,
      locale: 'nl'
    }
  };

  constructor(private plotlyService: PlotlyService) {
    localeNL.format.decimal = ',';
    localeNL.format.thousands = '.';
    localeNL.format.separators = ',.';
    this.plotlyService.getPlotly().register(localeNL);
  }
}
