import { Component, OnInit } from '@angular/core';
import { MapService } from '../services/map.service';
import * as L from 'leaflet';   // import all components of leaflet and not just 
                                // exported 'namespace'
// remember to put the access tokens into the productions enviroment when deploying
import { environment } from '../../environments/environment';
import * as fromModels from '../models';

@Component({
  selector: "app-map",
  templateUrl: "./map.component.html",
  styleUrls: ["./map.component.css"]
})
export class MapComponent implements OnInit {
  private map: L.Map;
  private basemaps: L.TileLayer[];
  private layers: { [key: string]: fromModels.OverlayFactoryPattern.Overlay[] }; //the key groups the overlays

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
    this.map = new L.Map("map", {
      center: [13.624633438236152, 125.63964843750001],
      zoom: 6
    });

    this.basemaps[0].addTo(this.map);
  }

  private addBaseLayer(layer: L.TileLayer[]): void {
    console.log(layer);
    this.map.removeLayer(layer["old"]);

    layer["new"].addTo(this.map);
  }

  private overlayHandler(overlay: fromModels.OverlayAction): void {
    var myStyle = { color: "#ff7800", weight: 5, opacity: 0.65 };

    if(overlay.action == fromModels.ADD) {
      overlay.overlay.data.addTo(this.map);
    } else {
      this.map.removeLayer(overlay.overlay.data);
    }

  }

  private addToOverlayStorage(overlay: {
    [key: string]: fromModels.OverlayFactoryPattern.Overlay[];
  }): void {
    this.layers = overlay;
  }
}
