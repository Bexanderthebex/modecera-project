import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { MapComponent } from "./map/map.component";
import { AdminModule } from "./admin.module"

const routes: Routes = [
  { path: 'map', component: MapComponent},
  { path: '', redirectTo: '/map', pathMatch: 'full'},
  { path: 'admin', loadChildren: './admin.module#AdminModule'}
]

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
