import { 
  Component, 
  OnInit, 
  Input, 
  EventEmitter, 
  Output,
  OnChanges,
  ViewChild
} from '@angular/core';
import * as fromModels from '../../models';
import * as L from "leaflet"; 
import { MapService } from '../../services/map.service';
import { MatSlideToggle } from '@angular/material/slide-toggle';

L.Icon.Default.imagePath = ".";
L.Icon.Default.mergeOptions({
  iconRetinaUrl: "/assets/images/marker-icon-2x.png",
  iconUrl: "/assets/images/marker-icon.png",
  shadowUrl: "/assets/images/marker-shadow.png"
});

@Component({
  selector: "app-overlay-control",
  templateUrl: "./overlay-control.component.html",
  styleUrls: ["./overlay-control.component.css"]
})
export class OverlayControlComponent implements OnInit, OnChanges {
  @Input() layer: any;
  @Output()
  layerEmitter: EventEmitter<fromModels.OverlayAction> = new EventEmitter<
    fromModels.OverlayAction
  >();
  @Output() boundsEmitter: EventEmitter<any> = new EventEmitter<any>();
  // @Output()
  // drawEmitter: EventEmitter<fromModels.DrawAction> = new EventEmitter<
  //   fromModels.DrawAction
  // >();
  @ViewChild("slideToggle") slideToggle: MatSlideToggle;

  private overlayControlShow: boolean;
  private layerObject: any;

  constructor(private mapService: MapService) {
    this.overlayControlShow = false;
  }

  ngOnInit() {}

  ngOnChanges() {
    this.mapService.getTileLayer(this.layer.link).subscribe((data: any) => {
      this.layer.data = L.geoJSON(data, {
        onEachFeature: (feature, layer) => {
          let propertyKeys = Object.keys(feature.properties);
          let popupString = "";
          propertyKeys.forEach(propertyKey => {
            popupString =
              popupString +
              propertyKey +
              ": " +
              feature.properties[propertyKey] +
              "</br>";
          });

          layer.bindPopup("<p>" + popupString + "<p>");
        }
      });
    });
  }

  private toggleShow(): void {
    this.overlayControlShow = !this.overlayControlShow;
    // console.log(this.overlayControlShow);
  }

  private emitLayer(): void {
    let overlayAction: fromModels.OverlayAction;

    this.toggleShow();
    if (this.overlayControlShow) {
      overlayAction = {
        action: fromModels.OVERLAY_ADD,
        overlay: this.layer
      };
    } else {
      overlayAction = {
        action: fromModels.OVERLAY_REMOVE,
        overlay: this.layer
      };
    }

    this.layerEmitter.emit(overlayAction);
  }

  private emitLayerBounds(): void {
    this.boundsEmitter.emit(this.layer.data.getBounds());
  }

  // private emitPolygonAction(event: any): void {
  //   this.slideToggle.checked = true;
  //   let element: HTMLElement = document.getElementById(this.layer.name) as HTMLElement;
  //   element.click();

  //   this.emitLayerBounds();

  //   let action: fromModels.DrawAction = {
  //     name: fromModels.DRAW_ADD,
  //     type: fromModels.POLYGON,
  //   }
  //   this.drawEmitter.emit(action);
  // }
}
