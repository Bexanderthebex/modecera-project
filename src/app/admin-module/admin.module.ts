import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterLinkActive } from "@angular/router";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { DashboardComponent } from "./dashboard/dashboard.component";
import { LayerlistComponent } from "./layerlist/layerlist.component";
import { UploadLayerComponent } from "./upload-layer/upload-layer.component";
import { MapListComponent } from "./map-list/map-list.component"; 

import { AdminRoutingModule } from "./admin-routing.module";

import { MatTabsModule } from "@angular/material/tabs";
/* prepare to remove this modules */
import { MatListModule } from "@angular/material/list";
import { MatDividerModule } from "@angular/material/divider";
/*  */
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";
import { MatTooltipModule } from "@angular/material/tooltip";
import { MatTableModule } from "@angular/material/table";
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from "@angular/material/input";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatDialogModule } from "@angular/material/dialog";
import { MatSnackBarModule } from "@angular/material/snack-bar";
import { MatProgressBarModule } from "@angular/material/progress-bar";
import { MatMenuModule } from "@angular/material/menu";

import { MapService } from "../services/map.service";
import { LayerService } from "../services/layer.service";
import { AddMapComponent } from './add-map/add-map.component';

@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule,
    MatTabsModule,
    MatListModule,
    MatIconModule,
    MatButtonModule,
    MatTooltipModule,
    MatTableModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
    MatDialogModule,
    MatSnackBarModule,
    MatMenuModule,
    FormsModule,
    MatProgressBarModule, 
    ReactiveFormsModule
  ],
  declarations: [
    DashboardComponent,
    LayerlistComponent,
    UploadLayerComponent,
    MapListComponent,
    AddMapComponent
  ],
  entryComponents: [UploadLayerComponent, AddMapComponent],
  providers: [MapService, LayerService]
})
export class AdminModule {}