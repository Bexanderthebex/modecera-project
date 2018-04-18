import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class UserService {

  constructor(private http: HttpClient) { }

  login(credentials: any) {
    return this.http.post('http://localhost:3000/api/users/login', credentials)
  } 

  signup(credentials: any) {
    return this.http.post('http://localhost:3000/api/users/signup', credentials)
  }
}
