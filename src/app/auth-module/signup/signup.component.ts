import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  private signup: FormGroup;
  private pageState: Number;

  constructor(private fb: FormBuilder, private userService: UserService, private router: Router) {
    this.signup = fb.group({
      'firstName': '',
      'lastName': '',
      'email': '',
      'password': '',
      'confirmPassword': ''
    });
    this.pageState = 0;
  }

  ngOnInit() {}

  private onSubmit(value: any) {
    this.userService.signup(
      {
        first_name: value.firstName,
        last_name: value.lastName,
        email: value.email,
        password: value.password
      })
        .subscribe((data: any) => {
          this.router.navigate(['/auth/activate', data._id]);
          console.log(data);
        }, (error: any) => {
          console.log(error);
        });
  }
}
