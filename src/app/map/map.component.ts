import { 
  Component, 
  OnInit 
} from '@angular/core';
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
  private layers$: { [key: string]: fromModels.OverlayFactoryPattern.Overlay[] }; //the key groups the overlays
  private editableLayers = new L.FeatureGroup();

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

    /* should be fetched from an api */
    let sample1: fromModels.OverlayFactoryPattern.Overlay = { id: "1", name: "Aborlan", type: "L.GeoJSON", link: "https://www.googleapis.com/storage/v1/b/modecera-geojson-files/o/Aborlan.geojson?alt=media" };
    let sample2: fromModels.OverlayFactoryPattern.Overlay = { id: "1", name: "Balogo", type: "L.GeoJSON", link: "https://www.googleapis.com/storage/v1/b/modecera-geojson-files/o/Balogo.geojson?alt=media" };
    let sample3: fromModels.OverlayFactoryPattern.Overlay = { id: "1", name: "Carranglan", type: "L.GeoJSON", link: "https://www.googleapis.com/storage/v1/b/modecera-geojson-files/o/Carranglan.geojson?alt=media" };
    let sample4: fromModels.OverlayFactoryPattern.Overlay = { id: "1", name: "Catubig", type: "L.GeoJSON", link: "https://www.googleapis.com/storage/v1/b/modecera-geojson-files/o/Catubig.geojson?alt=media" };

    this.layers$ = { watersheds: [sample1, sample2, sample3], watersheds2: [sample4] };
  }

  ngOnInit() {
    // instantiate the map object in leaflet
    this.map = new L.Map('map', {
      center: [13.624633438236152, 125.63964843750001],
      zoom: 6
    });

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
    if (overlay.action == fromModels.OVERLAY_ADD) {
      overlay.overlay.data.addTo(this.map);
    } else {
      this.map.removeLayer(overlay.overlay.data);
    }
  }

  private flyToHandler(bounds: L.LatLngBounds): void {
    this.map.flyToBounds(bounds);
  }

  private drawActionHandler(drawAction: fromModels.DrawAction): void {
    fromModels.DrawFactoryPattern
        .DrawFactory.createDrawAction(drawAction.type, this.map);
  }

  private drawCircle(): void {
    new L.Draw.Circle(this.map).enable();
  }
}
