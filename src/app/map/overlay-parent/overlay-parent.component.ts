import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import * as fromModels from '../../models';
import { LayerService } from '../../services/layer.service';

@Component({
  selector: 'app-overlay-parent',
  templateUrl: './overlay-parent.component.html',
  styleUrls: ['./overlay-parent.component.css']
})
export class OverlayParentComponent implements OnInit {
  @Output() 
  layerEmitter: EventEmitter<fromModels.OverlayAction> = new EventEmitter<
    fromModels.OverlayAction
  >();
  @Output()
  boundsEmitter: EventEmitter<L.LatLngBounds> = new EventEmitter<L.LatLngBounds>();
  @Output()
  // @Output()
  // drawEmitter: EventEmitter<fromModels.DrawAction> = new EventEmitter<
  //   fromModels.DrawAction
  // >();
  private show: boolean;
  private watersheds: Array<Object>;
  private markers: Array<Object>;
  private others: Array<Object>;

  constructor(private layerService: LayerService) {
    this.show = false;
  }

  ngOnInit() {
    /* options - Watersheds | Markers | Others*/
    this.layerService.getLayerByLabelGroup("Watersheds").subscribe(res => {
      this.watersheds = res;
    })

    this.layerService.getLayerByLabelGroup("Markers").subscribe(res => {
      this.markers = res;
    })
  }

  private emitLayer(event: fromModels.OverlayAction): void {
    this.layerEmitter.emit(event);
  }

  private emitLayerBounds(event: L.LatLngBounds): void {
    this.boundsEmitter.emit(event);
  }

  // private emitDrawAction(event: fromModels.DrawAction): void {
  //   this.drawEmitter.emit(event);
  // }
}
