import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { AppComponent } from './app.component';
import { MapComponent } from './map/map.component';
import { BaseMapChooserComponent } from './map/base-map-chooser/base-map-chooser.component';
import { OverlayControlComponent } from './map/overlay-control/overlay-control.component';
import { OverlayParentComponent } from './map/overlay-parent/overlay-parent.component';

/* pipes */
import { OverlayPipe } from "./pipes/overlay.pipe";

/* services */
import { LayerService } from "./services/layer.service";
import { MapService } from "./services/map.service";

import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSlideToggleModule } from "@angular/material/slide-toggle";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { MatListModule } from "@angular/material/list";
import { MatMenuModule } from "@angular/material/menu";
import { MatTabsModule } from '@angular/material/tabs';
import { MatExpansionModule } from "@angular/material/expansion";
import { MatDialogModule } from "@angular/material/dialog";

import { AppRoutingModule } from './app-routing.module';
import { RequestMapComponent } from './map/request-map/request-map.component';



@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    BaseMapChooserComponent,
    OverlayControlComponent,
    OverlayParentComponent,
    OverlayPipe,
    RequestMapComponent,
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
    MatExpansionModule,
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [MapService, LayerService],
  entryComponents: [RequestMapComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
