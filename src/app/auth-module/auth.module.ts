import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { LoginComponent } from "./login/login.component";
import { AuthComponent } from "./auth/auth.component";
import { SignupComponent } from "./signup/signup.component";
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ResetPasswordComponent } from "./reset-password/reset-password.component";

import { AuthRoutingModule } from "./auth-routing.module";

// angular material imports
import { MatButtonModule } from "@angular/material/button";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatSnackBarModule } from "@angular/material/snack-bar";

// services
import { UserService } from '../services/user.service';
import { ActivateComponent } from './activate/activate.component';

@NgModule({
  imports: [
    CommonModule,
    AuthRoutingModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    MatSnackBarModule
  ],
  declarations: [LoginComponent, AuthComponent, SignupComponent, ForgotPasswordComponent, ResetPasswordComponent, ActivateComponent],
  providers: [UserService],
  bootstrap: [AuthComponent]
})
export class AuthModule {}
