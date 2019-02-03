import { Component, Input, OnInit } from '@angular/core';
import { circle, latLng, tileLayer } from 'leaflet';
import { GroepScore } from '../../common/model/groep-score.model';

const gradient1 = [
  '#E62222',
  '#CF3122',
  '#B94123',
  '#A25024',
  '#8C6025',
  '#766F26',
  '#5F7F27',
  '#498E28',
  '#329E29',
  '#1CAD2A',
  '#06BD2B'
];

@Component({
  selector: 'vollo-map-view',
  templateUrl: './map-view.component.html',
  styleUrls: ['./map-view.component.scss']
})
export class MapViewComponent implements OnInit {
  @Input()
  set scores(values: GroepScore[]) {
    this.layers = values
      ? values.filter(score => score.toetsSoortScore === 'CIJFER_1_10').map(score =>
          circle([score.latitude, score.longitude], {
            radius: 3,
            color: gradient1[Math.floor(score.cijferScore)]
          })
        )
      : [];
  }

  options = {
    layers: [
      tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 18,
        attribution: '...'
      })
    ],
    zoom: 10,
    center: latLng(52.5241985008471, 6.08963369356409)
  };

  layers = [];

  constructor() {}

  ngOnInit() {}
}
