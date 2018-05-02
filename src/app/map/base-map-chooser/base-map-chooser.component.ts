import { 
  Component, 
  OnInit, 
  Input, 
  Output, 
  EventEmitter,
  ChangeDetectionStrategy, 
} from '@angular/core';
import * as L from 'leaflet';
import { environment } from '../../../environments/environment';
import { MapService } from '../../services/map.service';

@Component({
  selector: "app-base-map-chooser",
  templateUrl: "./base-map-chooser.component.html",
  styleUrls: ["./base-map-chooser.component.css"],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class BaseMapChooserComponent implements OnInit {
  @Output()
  layer: EventEmitter<L.TileLayer[]> = new EventEmitter<L.TileLayer[]>();
  selectedLayer: L.TileLayer;
  @Input() basemaps: L.TileLayer[] = [];
  toEmit: L.TileLayer[] = [];

  constructor() {
    this.basemaps = null;
  }

  ngOnInit() {}

  ngOnChanges() {
    /*don't put assignment statements in the constructor when data is coming from a parent component*/
    this.selectedLayer = this.basemaps[0];
  }

  changeLayer(layer: L.TileLayer): void {
    this.toEmit["old"] = this.selectedLayer;
    this.toEmit["new"] = layer;

    this.selectedLayer = layer;
    this.layer.emit(this.toEmit);
  }
}
