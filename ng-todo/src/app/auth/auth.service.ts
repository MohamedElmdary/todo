import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RegisterUser, LoginUser, User } from './User.interfaces';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isAuth: BehaviorSubject<User> = new BehaviorSubject<User>(null);

  constructor(private http: HttpClient) { }

  register(user: RegisterUser) {
    return this.http.post("/user/register", user);
  }

  login(user: LoginUser) {
    return this.http.post<User>("/user/login", user);
  }


}
