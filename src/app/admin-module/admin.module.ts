import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterLinkActive } from "@angular/router";

import { DashboardComponent } from "./dashboard/dashboard.component";
import { LayerlistComponent } from "./layerlist/layerlist.component";
import { UploadLayerComponent } from "./upload-layer/upload-layer.component";

import { AdminRoutingModule } from "./admin-routing.module";

import { MatTabsModule } from "@angular/material/tabs";
import { MatListModule } from "@angular/material/list";
import { MatDividerModule } from "@angular/material/divider";
import { MapListComponent } from './map-list/map-list.component';
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";
import { MatTooltipModule } from "@angular/material/tooltip";

import { MapService } from "../services/map.service";

@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule,
    MatTabsModule,
    MatListModule,
    MatIconModule,
    MatButtonModule,
    MatTooltipModule
  ],
  declarations: [
    DashboardComponent,
    LayerlistComponent,
    UploadLayerComponent,
    MapListComponent
  ],
  providers: [ MapService ]
})
export class AdminModule {}