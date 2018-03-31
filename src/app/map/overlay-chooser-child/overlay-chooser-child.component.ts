import { 
  Component, 
  OnInit, 
  Input, 
  Output, 
  EventEmitter 
} from '@angular/core';

@Component({
  selector: 'app-overlay-chooser-child',
  templateUrl: './overlay-chooser-child.component.html',
  styleUrls: ['./overlay-chooser-child.component.css']
})
export class OverlayChooserChildComponent implements OnInit {
  @Input() layer: any;
  @Output() layerEmitter: EventEmitter<any> = new EventEmitter<any>();
  private showLayers: boolean;

  constructor() {
    this.showLayers = false;
  }

  ngOnInit() {
  
  }

  private toggleShowLayers(): void {
    this.showLayers = !this.showLayers;
  }

  private emitLayer(): void {
    let layerConverted = { [this.layer.key]: this.layer.value };
    this.layerEmitter.emit({ [this.layer.key]: this.layer.value });
  }


}
