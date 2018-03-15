import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import * as fromModels from '../../models';

@Component({
  selector: 'app-overlay-chooser',
  templateUrl: './overlay-chooser.component.html',
  styleUrls: ['./overlay-chooser.component.css']
})
export class OverlayChooserComponent implements OnInit {
  @Output() overlayLayers: 
      EventEmitter<fromModels.Overlay[]> = new EventEmitter<fromModels.Overlay[]>();

  constructor() { }

  ngOnInit() {
  }

}
