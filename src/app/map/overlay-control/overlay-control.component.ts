import { 
  Component, 
  OnInit, 
  Input, 
  EventEmitter, 
  Output,
  OnChanges 
} from '@angular/core';
import * as fromModels from '../../models';
import { MapService } from '../../services/map.service';

@Component({
  selector: 'app-overlay-control',
  templateUrl: './overlay-control.component.html',
  styleUrls: ['./overlay-control.component.css']
})
export class OverlayControlComponent implements OnInit, OnChanges {
  @Input() layer: fromModels.Overlay;
  @Output() 
  layerEmitter: EventEmitter<fromModels.OverlayAction> 
      = new EventEmitter<fromModels.OverlayAction>();
  private show: boolean;

  constructor(private mapService: MapService) {
    this.show = false;
  }

  ngOnInit() { }

  ngOnChanges() {
    this.mapService.getTileLayer(this.layer.link).subscribe(
      (data: any) => {
        this.layer.data = data;
      }
    )
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
