import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class UserService {
  constructor(private http: HttpClient) {}

  login(credentials: any) {
    return this.http
      .post('http://localhost:3000/api/users/login', credentials)
      .catch(this.errorHandler);
  }

  signup(credentials: any) {
    return this.http
      .post('http://localhost:3000/api/users/signup', credentials)
      .catch(this.errorHandler);
  }

  getUser(id: any) {
    const body = {
      id: id
    };

    return this.http
      .post('http://localhost:3000/api/users', body)
      .catch(this.errorHandler);
  }

  activate(id: String) {
    const body = {
      id: id
    };

    return this.http
      .put('http://localhost:3000/api/users/activate', body)
      .catch(this.errorHandler);
  }

  errorHandler(error: HttpErrorResponse) {
    return Observable.throw(error.message || 'Server Error');
  }
}
