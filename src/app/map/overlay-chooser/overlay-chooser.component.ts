import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import * as fromModels from '../../models';
import * as L from "leaflet";
import { MapService } from '../../services/map.service';
import { Observable } from 'rxjs/Observable';
import { Overlay } from '../../models';

@Component({
  selector: "app-overlay-chooser",
  templateUrl: "./overlay-chooser.component.html",
  styleUrls: ["./overlay-chooser.component.css"]
})
export class OverlayChooserComponent implements OnInit {
  @Output()
  overlayLayers: EventEmitter<{
    [key: string]: fromModels.Overlay[];
  }> = new EventEmitter<{ 
    [key: string]: fromModels.Overlay[] 
  }>();
  layers$: { [key: string]: fromModels.Overlay[] };

  constructor(private mapservice: MapService) {
    let sample1: Overlay = { 
      id: "1",
      name: "Aborlan", 
      type: "L.GeoJSON", 
      link: "https://www.googleapis.com/storage/v1/b/modecera-geojson-files/o/Aborlan.geojson?alt=media" 
    };
    let sample2: Overlay = { id: "1", name: "Balogo", type: "L.GeoJSON", link: "https://www.googleapis.com/storage/v1/b/modecera-geojson-files/o/Balogo.geojson?alt=media" };
    let sample3: Overlay = { id: "1", name: "Carranglan", type: "L.GeoJSON", link: "https://www.googleapis.com/storage/v1/b/modecera-geojson-files/o/Carranglan.geojson?alt=media" };

    this.layers$ = {
      'watersheds': [sample1, sample2, sample3]
    }
  }

  ngOnInit() {
    // this.mapservice
    //   .getTileLayer(
    //     "https://www.googleapis.com/storage/v1/b/modecera-geojson-files/o/Aborlan.geojson?alt=media"
    //   )
    //   .subscribe
    //   (
    //     (data: any) => {
    //       this.sample$ = {...data}
    //       this.overlayLayers.emit(this.sample$);
    //     }
    //   )
    /* emit layers */
    this.overlayLayers.emit(this.layers$);
  }
}
