import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-activate',
  templateUrl: './activate.component.html',
  styleUrls: ['./activate.component.css']
})
export class ActivateComponent implements OnInit, OnDestroy {
  private activate: FormGroup;
  private id: any;
  private sub: any;

  constructor(
    private route: ActivatedRoute,
    private routeNavigator: Router,
    private userService: UserService,
    private fb: FormBuilder,
    private snackbar: MatSnackBar
  ) {
    this.activate = fb.group({
      'activationCode': ''
    });
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = params['id'];
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  private onSubmit(value: any) {
    this.userService.getUser(this.id).subscribe(
      data => {
        if (data.activationCode === value.activationCode) {
          this.activateUser();
        } else {
          this.snackbar.open('wrong activation code', null, {
            duration: 1000
          });
        }
      },
      error => {
        console.log(error);
      }
    );
  }

  private activateUser() {
    this.userService.activate(this.id).subscribe(
      data => {
        // console.log(data);
        this.snackbar.open('Account Successfully Activated!', null, {
          duration: 1000
        });
        setTimeout(() => {
          this.routeNavigator.navigate(['/auth/login']);
        }, 2000);
      },
      error => {
        this.snackbar.open('internal server error', null, {
          duration: 1000
        });
      }
    );
  }

}
