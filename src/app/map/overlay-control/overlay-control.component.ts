import { Component, OnInit, Input } from '@angular/core';
import * as fromModels from '../../models';

@Component({
  selector: 'app-overlay-control',
  templateUrl: './overlay-control.component.html',
  styleUrls: ['./overlay-control.component.css']
})
export class OverlayControlComponent implements OnInit {
  @Input() layer: fromModels.Overlay;
  // private show: boolean;

  constructor() {
  }

  ngOnInit() {
    console.log(this.layer);
  }
}
