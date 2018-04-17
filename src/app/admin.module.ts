import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { LoginComponent } from "./login/login.component";
import { DashboardComponent } from "./dashboard/dashboard.component";

import { AdminRoutingModule } from "./admin-routing.module";

@NgModule({
    imports: [
        CommonModule,
        AdminRoutingModule
    ],
    declarations: [
        LoginComponent,
        DashboardComponent
    ]
})
export class AdminModule {}