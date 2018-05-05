import { 
  Component, 
  OnInit 
} from '@angular/core';
import { MapService } from '../services/map.service';
import { LayerService } from '../services/layer.service';
import * as L from 'leaflet';   // import all components of leaflet and not just 
                                // exported 'namespace'
// remember to put the access tokens into the productions enviroment when deploying
import { environment } from '../../environments/environment';
import * as fromModels from '../models';
import { RequestMapComponent } from "./request-map/request-map.component";
import {
  MatDialog,
  MatDialogRef,
} from "@angular/material";

@Component({
  selector: "app-map",
  templateUrl: "./map.component.html",
  styleUrls: ["./map.component.css"]
})
export class MapComponent implements OnInit {
  private map: L.Map;
  private basemaps: any;
  private editableLayers = new L.FeatureGroup();

  private viewProperties: Boolean;
  private viewLayer: any;

  /* TODO: utilize MapService to fetch shape files */
  constructor(
    private mapService: MapService, 
    public dialog: MatDialog
  ) 
  {
    this.basemaps = null;

    this.viewProperties = false;
  }

  ngOnInit() {
    this.mapService.getMaps().subscribe(res => {
      this.basemaps = res as Array<Object>;
      this.basemaps = this.basemaps.map(basemap => {
        return L.tileLayer(basemap.link, {
          accessToken: basemap.access_token,
          name: basemap.map_name,
          attribution: basemap.attribution
        })
      })
      this.basemaps[0].addTo(this.map);
    })

    // instantiate the map object in leaflet
    this.map = new L.Map('map', {
      center: [13.624633438236152, 125.63964843750001],
      zoom: 6,
      doubleClickZoom: false,
      /* scrollWheelZoom: false */
    });

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

  private viewPropertiesHandler(event: any): void {
    this.map.removeLayer(event);
  }

  private openRequestMap(): void {
    let dialogRef = this.dialog.open(RequestMapComponent, {
      height: '420px',
      width: '450px'
    });
  }

  // private drawActionHandler(drawAction: fromModels.DrawAction): void {
  //   fromModels.DrawFactoryPattern
  //       .DrawFactory.createDrawAction(drawAction.type, this.map);
  // }

}
