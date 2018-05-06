import { 
  Component, 
  OnInit 
} from '@angular/core';
import { MapService } from '../services/map.service';
import { RequestService } from "../services/request.service";
import * as L from 'leaflet';   // import all components of leaflet and not just 
                                // exported 'namespace'
// remember to put the access tokens into the productions enviroment when deploying
import { environment } from '../../environments/environment';
import * as fromModels from '../models';
import { RequestMapComponent } from "./request-map/request-map.component";
import { MatDialog, MatDialogRef, MatSnackBar } from "@angular/material";

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
    private requestService: RequestService, 
    public dialog: MatDialog,
    private snackbar: MatSnackBar
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
      height: '470px',
      width: '450px',
    });

    dialogRef.afterClosed().subscribe(result => {
      this.requestMapHandler(result);
    })
  }

  private requestMapHandler(value: any) : void {
    let body = {
      email: value.email,
      request: value.request,
      request_type: value.requestType,
      request_reason: value.reason
    }

    this.requestService
        .requestMap(body)
        .subscribe(result => {
          this.snackbar.open(result.message, null, {
            duration: 2000
          })
        }, error => {
          console.log(JSON.stringify(error));
          this.snackbar.open(error, null, {
            duration: 2000
          })
        })
  }

  // private drawActionHandler(drawAction: fromModels.DrawAction): void {
  //   fromModels.DrawFactoryPattern
  //       .DrawFactory.createDrawAction(drawAction.type, this.map);
  // }

}
