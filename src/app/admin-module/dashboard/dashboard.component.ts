import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  // tooltip position
  private position = "before";
  private isSystemData = true;
  mapRequest: any = null;
  layerRequest: any = null;

  constructor() { }

  ngOnInit() {
  }

  private toggleEventHandler(event: any): void {
    this.isSystemData = !this.isSystemData;
  }

  private requestHandler(event: any): void {
    if (event.map_name) {
      this.mapRequest = event;
    } else {
      this.layerRequest = event;
    }
  }
}
