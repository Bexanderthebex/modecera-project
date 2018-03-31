import { 
  Component, 
  OnInit, 
  Input, 
  EventEmitter, 
  Output,
  OnChanges,
} from '@angular/core';
import * as fromModels from '../../models';
import * as L from "leaflet"; 
import { MapService } from '../../services/map.service';
import { OverlayFactoryPattern } from '../../models';

@Component({
  selector: 'app-overlay-control',
  templateUrl: './overlay-control.component.html',
  styleUrls: ['./overlay-control.component.css']
})
export class OverlayControlComponent implements OnInit, OnChanges{
  @Input() layer: fromModels.OverlayFactoryPattern.Overlay;
  @Output() 
  layerEmitter: EventEmitter<fromModels.OverlayAction> 
      = new EventEmitter<fromModels.OverlayAction>();
  @Output()
  boundsEmitter: EventEmitter<any>
      = new EventEmitter<any>();
  private overlayControlShow: boolean;
  private layerObject: any;

  constructor(private mapService: MapService) {
    this.overlayControlShow = false;
  }

  ngOnInit() { }

  ngOnChanges() {
    this.mapService.getTileLayer(this.layer.link).subscribe(
      (data: any) => {
        this.layerObject = OverlayFactoryPattern.DataFactory.createOverlay(this.layer.type);
        this.layer.data = this.layerObject.create(data);
      }
    )
  }

  private toggleShow(): void {
    this.overlayControlShow = !this.overlayControlShow;
    console.log(this.overlayControlShow);
  }

  private emitLayer(): void {
    let overlayAction: fromModels.OverlayAction;

    this.toggleShow();
    if(this.overlayControlShow) {
      overlayAction = {
        action: fromModels.ADD,
        overlay: this.layer
      }
    } else {
      overlayAction = {
        action: fromModels.REMOVE,
        overlay: this.layer
      }
    }

    this.layerEmitter.emit(overlayAction);
  }

  private emitLayerBounds(): void {
    this.boundsEmitter.emit(this.layer.data.getBounds());
  }

}
