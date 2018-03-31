import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';

import { AppComponent } from './app.component';
import { MapComponent } from './map/map.component';
import { MapService } from './services/map.service';
import { BaseMapChooserComponent } from './map/base-map-chooser/base-map-chooser.component';
import { OverlayControlComponent } from './map/overlay-control/overlay-control.component';
import { OverlayChooserParentComponent } from './map/overlay-chooser-parent/overlay-chooser-parent.component';
import { OverlayParentComponent } from './map/overlay-parent/overlay-parent.component';
import { OverlayPipe } from "./pipes/overlay.pipe";
import { OverlayChooserChildComponent } from './map/overlay-chooser-child/overlay-chooser-child.component';

import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSlideToggleModule } from "@angular/material/slide-toggle";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";

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
    BrowserAnimationsModule,
    MatTooltipModule,
    MatSlideToggleModule,
    MatButtonModule,
    MatIconModule
  ],
  providers: [MapService],
  bootstrap: [AppComponent]
})
export class AppModule {}
