import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from "@angular/forms";
import { UserService } from "../../services/user.service";

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {
  private resetPassword: FormGroup

  constructor(private fb: FormBuilder, private userService: UserService) { 
    this.resetPassword = fb.group({ password: "", confirmPassword: "" });
  }

  ngOnInit() {
  }

  onSubmit(password: any) {
    console.log(password);
  }
}
