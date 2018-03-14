import { Component, OnInit, Input } from '@angular/core';
import * as fromModels from '../../models';

@Component({
  selector: 'app-overlay-control',
  templateUrl: './overlay-control.component.html',
  styleUrls: ['./overlay-control.component.css']
})
export class OverlayControlComponent implements OnInit {
  @Input() layer: fromModels.Overlay;
  private id: string;
  private show: boolean;

  constructor() {
    this.show = false;
  }

  ngOnInit() {
    this.id = this.layer.name + "-menu-lower-right";
    console.log(this.layer);
  }
}
