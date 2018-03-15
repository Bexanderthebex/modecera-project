import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';


import { AppComponent } from './app.component';
import { MapComponent } from './map/map.component';
import { MapService } from './services/map.service';
import { BaseMapChooserComponent } from './map/base-map-chooser/base-map-chooser.component';
import { OverlayControlComponent } from './map/overlay-control/overlay-control.component';
import { OverlayChooserComponent } from './map/overlay-chooser/overlay-chooser.component';
import { OverlayParentComponent } from './map/overlay-parent/overlay-parent.component';
import { OverlayPipe } from "./pipes/overlay.pipe";


@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    BaseMapChooserComponent,
    OverlayControlComponent,
    OverlayChooserComponent,
    OverlayParentComponent,
    OverlayPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
  ],
  providers: [
    MapService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
