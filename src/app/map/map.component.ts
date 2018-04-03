import { Component, OnInit } from '@angular/core';
import { MapService } from '../services/map.service';
import * as L from 'leaflet';   // import all components of leaflet and not just 
                                // exported 'namespace'
// remember to put the access tokens into the productions enviroment when deploying
import { environment } from '../../environments/environment';
import * as fromModels from '../models';
import 'leaflet-draw';

@Component({
  selector: "app-map",
  templateUrl: "./map.component.html",
  styleUrls: ["./map.component.css"]
})
export class MapComponent implements OnInit {
  private map: L.Map;
  private basemaps: L.TileLayer[];
  private layers: { [key: string]: fromModels.OverlayFactoryPattern.Overlay[] }; //the key groups the overlays
  private drawControl: L.Control.Draw;
  private editableLayers = new L.FeatureGroup();
  private drawControlOptions: L.Control.DrawConstructorOptions = {
    position: "topleft",
    draw: {
      polyline: {
        shapeOptions: {
          color: "#f357a1",
          weight: 2
        }
      }
    },
    edit: {
      featureGroup: this.editableLayers,
      remove: false
    }
  };

  /* TODO: utilize MapService to fetch shape files */
  constructor(private mapService: MapService) {
    this.basemaps = [
      L.tileLayer(
        "https://api.mapbox.com/v4/mapbox.streets-satellite/{z}/{x}/{y}.png?access_token={accessToken}",
        {
          accessToken: environment.accessTokens.mapbox,
          name: "streets-satellite",
          attribution:
            '© <a href="https://www.mapbox.com/map-feedback/">Mapbox</a> © <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        }
      ),
      L.tileLayer(
        "https://api.mapbox.com/v4/mapbox.outdoors/{z}/{x}/{y}.png?access_token={accessToken}",
        {
          accessToken: environment.accessTokens.mapbox,
          name: "outdoors",
          attribution:
            '© <a href="https://www.mapbox.com/map-feedback/">Mapbox</a> © <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        }
      ),
      L.tileLayer(
        "https://api.mapbox.com/v4/mapbox.run-bike-hike/{z}/{x}/{y}.png?access_token={accessToken}",
        {
          accessToken: environment.accessTokens.mapbox,
          name: "run-bike-hike",
          attribution:
            '© <a href="https://www.mapbox.com/map-feedback/">Mapbox</a> © <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        }
      )
    ];

    this.layers = {};
  }

  ngOnInit() {
    // instantiate the map object in leaflet
    this.map = new L.Map('map', {
      center: [13.624633438236152, 125.63964843750001],
      zoom: 6
    });

    // create the draw object 
    this.drawControl = new L.Control.Draw(this.drawControlOptions);

    // add the draw object into the map
    this.map.addControl(this.drawControl);

    // add the layer when created from the draw plugin
    this.map.on(L.Draw.Event.CREATED, (e: any) => {
      let layer = (e as L.DrawEvents.Created).layer;
      this.editableLayers.addLayer(layer);
      this.map.addLayer(layer);
    });

    this.basemaps[0].addTo(this.map);
  }

  private addBaseLayer(layer: L.TileLayer[]): void {
    console.log(layer);
    this.map.removeLayer(layer["old"]);

    layer["new"].addTo(this.map);
  }

  private overlayHandler(overlay: fromModels.OverlayAction): void {
    if (overlay.action == fromModels.ADD) {
      overlay.overlay.data.addTo(this.map);
    } else {
      this.map.removeLayer(overlay.overlay.data);
    }
  }

  private flyToHandler(bounds: L.LatLngBounds): void {
    this.map.flyToBounds(bounds);
  }

  private addToOverlayStorage(overlay: {
    [key: string]: fromModels.OverlayFactoryPattern.Overlay[];
  }): void {
    this.layers = Object.assign({}, this.layers, overlay);
  }
}
