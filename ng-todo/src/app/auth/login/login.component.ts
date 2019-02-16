import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';
import { User } from '../User.interfaces';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  alerts: string[];
  type: string = 'd';

  constructor(private auth: AuthService) { }

  onLogin({ valid, value }: NgForm) {
    if (valid) {
      this.auth.login(value)
        .subscribe(
          (user: User) => {
            localStorage.setItem('user', JSON.stringify(user));
            this.auth.isAuth.next(user);
          },
          error => {
            this.alerts = error.errors;
            this.type = 'd';
          }
        );
    }
  }

}
