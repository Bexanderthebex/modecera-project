import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { DashboardComponent } from './dashboard/dashboard.component';
import { LayerlistComponent } from './layerlist/layerlist.component';
import { UploadLayerComponent } from './upload-layer/upload-layer.component';

const routes: Routes = [
  { path: "dashboard", component: DashboardComponent }
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ],
})
export class AdminRoutingModule{}