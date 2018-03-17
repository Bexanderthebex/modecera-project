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
  layerEmitter: EventEmitter<fromModels.OverlayAction> 
      = new EventEmitter<fromModels.OverlayAction>();
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

  emitLayer(event: fromModels.OverlayAction) {
    this.layerEmitter.emit(event);
  }
}
