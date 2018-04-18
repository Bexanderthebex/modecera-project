import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthComponent } from './auth/auth.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ResetPasswordComponent } from "./reset-password/reset-password.component";

const routes: Routes = [
    { path: "auth", redirectTo: "/auth/login", pathMatch: 'full'},
    { path: "auth", component: AuthComponent, children: [
      { path: "login", component: LoginComponent },
      { path: "signup", component: SignupComponent },
      { path: "accountrecovery", component: ForgotPasswordComponent },
      { path: "resetpassword", component: ResetPasswordComponent}
    ] },
    
    // insert signup component here
    // insert forgot password component here
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule {}