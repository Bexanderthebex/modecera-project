import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { LoginComponent } from "./login/login.component";
import { AuthComponent } from "./auth/auth.component";
import { SignupComponent } from "./signup/signup.component";
import { ForgotPasswordComponent } from "./forgot-password/forgot-password.component";
import { ResetPasswordComponent } from "./reset-password/reset-password.component";

import { AuthRoutingModule } from "./auth-routing.module";

// angular material imports
import { MatButtonModule } from "@angular/material/button";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

// services
import { UserService } from '../services/user.service';

@NgModule({
  imports: [
    CommonModule,
    AuthRoutingModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [LoginComponent, AuthComponent, SignupComponent, ForgotPasswordComponent, ResetPasswordComponent],
  providers: [UserService],
  bootstrap: [AuthComponent]
})
export class AuthModule {}