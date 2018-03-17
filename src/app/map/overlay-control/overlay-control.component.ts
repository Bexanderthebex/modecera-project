import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import * as fromModels from '../../models';

@Component({
  selector: 'app-overlay-control',
  templateUrl: './overlay-control.component.html',
  styleUrls: ['./overlay-control.component.css']
})
export class OverlayControlComponent implements OnInit {
  @Input() layer: fromModels.Overlay;
  @Output() 
  layerEmitter: EventEmitter<fromModels.OverlayAction> 
      = new EventEmitter<fromModels.OverlayAction>();
  private show: boolean;

  constructor() {
    this.show = false;
  }

  ngOnInit() {
    // console.log(this.layer);
  }

  private toggleShow(): void {
    this.show = !this.show;
  }

  private emitLayer(): void {
    let overlayAction: fromModels.OverlayAction;

    this.toggleShow();
    if(this.show) {
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
}
