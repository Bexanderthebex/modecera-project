import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from "@angular/forms";
import { UserService } from "../../services/user.service";

@Component({
  selector: "app-signup",
  templateUrl: "./signup.component.html",
  styleUrls: ["./signup.component.css"]
})
export class SignupComponent implements OnInit {
  private signup: FormGroup;

  constructor(private fb: FormBuilder, private userService: UserService) {
    this.signup = fb.group({
      'email': '',
      'password': '',
      'confirmPassword': ''
    })
  }

  ngOnInit() {}

  private onSubmit(value: any) {
    this.userService.signup({email: value.email, password: value.password})
        .subscribe((data: any) => {
          console.log(data);
        }, (error: any) => {
          console.log(error);   
        })
  }
}
