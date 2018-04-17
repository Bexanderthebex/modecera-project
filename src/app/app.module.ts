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
import { OverlayParentComponent } from './map/overlay-parent/overlay-parent.component';
import { OverlayPipe } from "./pipes/overlay.pipe";

import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSlideToggleModule } from "@angular/material/slide-toggle";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { MatListModule } from "@angular/material/list";
import { AnalysisComponent } from './map/analysis/analysis.component';
import { MatMenuModule } from "@angular/material/menu";
import { MatCardModule } from "@angular/material/card";

import { AppRoutingModule } from './app-routing.module';
import { AdminModule } from './admin.module';

@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    BaseMapChooserComponent,
    OverlayControlComponent,
    OverlayParentComponent,
    OverlayPipe,
    AnalysisComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatTooltipModule,
    MatSlideToggleModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatMenuModule,
    MatCardModule,
    AppRoutingModule
  ],
  providers: [MapService],
  bootstrap: [AppComponent]
})
export class AppModule {}
