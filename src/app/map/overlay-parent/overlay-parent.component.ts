import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import * as fromModels from '../../models';

@Component({
  selector: 'app-overlay-parent',
  templateUrl: './overlay-parent.component.html',
  styleUrls: ['./overlay-parent.component.css']
})
export class OverlayParentComponent implements OnInit {
  @Input() 
  overlay: any;
  @Output() 
  layerEmitter: EventEmitter<fromModels.OverlayAction> = new EventEmitter<
    fromModels.OverlayAction
  >();
  @Output()
  boundsEmitter: EventEmitter<L.LatLngBounds> = new EventEmitter<L.LatLngBounds>();
  // @Output()
  // drawEmitter: EventEmitter<fromModels.DrawAction> = new EventEmitter<
  //   fromModels.DrawAction
  // >();

  private componentName: string;
  private show: boolean;

  constructor() {
    this.show = false;
  }

  ngOnInit() {
    this.componentName = this.overlay.key;
  }

  private clickShow(): void {
    this.show = !this.show;
  }

  private showChild(): boolean {
    return this.show;
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
