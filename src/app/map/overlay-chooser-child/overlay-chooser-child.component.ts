import { 
  Component, 
  OnInit, 
  Input, 
  OnChanges, 
  Output, 
  EventEmitter 
} from '@angular/core';

@Component({
  selector: 'app-overlay-chooser-child',
  templateUrl: './overlay-chooser-child.component.html',
  styleUrls: ['./overlay-chooser-child.component.css']
})
export class OverlayChooserChildComponent implements OnInit, OnChanges {
  @Input() layer: any;
  @Output() layerEmitter: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  
  }

  ngOnChanges() {
  }

  private emitLayer(): void {
    let layerConverted = { [this.layer.key]: this.layer.value };
    this.layerEmitter.emit({ [this.layer.key]: this.layer.value });
  }


}
