import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { MdlModule } from '@angular-mdl/core';


import { AppComponent } from './app.component';
import { MapComponent } from './map/map.component';
import { MapService } from './services/map.service';
import { BaseMapChooserComponent } from './map/base-map-chooser/base-map-chooser.component';
import { OverlayControlComponent } from './map/overlay-control/overlay-control.component';
import { OverlayChooserParentComponent } from './map/overlay-chooser-parent/overlay-chooser-parent.component';
import { OverlayParentComponent } from './map/overlay-parent/overlay-parent.component';
import { OverlayPipe } from "./pipes/overlay.pipe";
import { OverlayChooserChildComponent } from './map/overlay-chooser-child/overlay-chooser-child.component';


@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    BaseMapChooserComponent,
    OverlayControlComponent,
    OverlayChooserParentComponent,
    OverlayParentComponent,
    OverlayPipe,
    OverlayChooserChildComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MdlModule
  ],
  providers: [
    MapService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
