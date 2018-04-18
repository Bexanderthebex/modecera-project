import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  private login: FormGroup;
  private loading: boolean;

  constructor(
    private fb: FormBuilder, 
    private userService: UserService, 
    private router: Router
  ) {
    this.login = fb.group({
      'email': '',
      'password': ''
    })

    this.loading = false; 
  }

  ngOnInit() {
  }

  onSubmit(value: any) {
    this.loading = true;

    this.userService.login(value).subscribe( (data:any) => {
      this.router.navigate(['/admin/dashboard']);
    }, (error: Error) => {
      console.log(error);
    })
  }
}
