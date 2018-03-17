import { Component, OnInit } from '@angular/core';
import { MapService } from '../services/map.service';
import * as L from 'leaflet';   // import all components of leaflet and not just 
                                // exported 'namespace'
// remember to put the access tokens into the productions enviroment when deploying
import { environment } from 'environments/environment';
import * as fromModels from '../models';
import { Overlay } from '../models';


@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css'],
})
export class MapComponent implements OnInit {
  private map: L.Map;
  private basemaps: L.TileLayer[];
  private layers: {[key: string]: fromModels.Overlay[]};

  /* TODO: utilize MapService to fetch shape files */
  constructor(private mapService: MapService) {
    this.basemaps = [
      L.tileLayer('https://api.mapbox.com/v4/mapbox.streets-satellite/{z}/{x}/{y}.png?access_token={accessToken}', {
        accessToken: environment.accessTokens.mapbox,
        name: 'streets-satellite',
        attribution: '© <a href="https://www.mapbox.com/map-feedback/">Mapbox</a> © <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
      }),
      L.tileLayer('https://api.mapbox.com/v4/mapbox.outdoors/{z}/{x}/{y}.png?access_token={accessToken}', {
        accessToken: environment.accessTokens.mapbox,
        name: 'outdoors',
        attribution: '© <a href="https://www.mapbox.com/map-feedback/">Mapbox</a> © <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
      }),
      L.tileLayer('https://api.mapbox.com/v4/mapbox.run-bike-hike/{z}/{x}/{y}.png?access_token={accessToken}', {
        accessToken: environment.accessTokens.mapbox,
        name: 'run-bike-hike',
        attribution: '© <a href="https://www.mapbox.com/map-feedback/">Mapbox</a> © <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
      }),
    ]

    this.layers = {};
  }

  ngOnInit() {
    this.map = new L.Map('map', {
      center: [13.624633438236152, 125.63964843750001],
      zoom: 6
    });

    this.basemaps[0].addTo(this.map);

    let sample: fromModels.Overlay = {
      id: '1',
      name: 'Balogo',
      type: 'something',
      data: [1,2,3,4]
    }

    let sample2: fromModels.Overlay = {
      id: '1',
      name: 'Balogogo',
      type: 'something',
      data: [1,2,3,4]
    }

    let sample3: fromModels.Overlay = {
      id: '1',
      name: 'fuckme',
      type: 'something new',
      data: [1,2,3,4,5]
    }

    this.layers = {
      ...this.layers,
      'shapefiles': [sample, sample2],
      'random': [sample3]
    }
  }

  private addBaseLayer(layer: L.TileLayer[]): void {
    this.map.removeLayer(layer['old']);

    layer['new'].addTo(this.map);
  }

  private addOverlay(overlay: fromModels.OverlayAction): void {
    console.log(overlay);
  }

  // TODO: try to construct a datastructure that fits a parameter
  // this exposes a function for the child component overlay-chooser to use 
  // for the emit event
  // private addOverlay(overlay: {[key: string]: fromModels.Overlay[]}) {
  //   this.layers = {...this.layers, overlay}
  // }
}
