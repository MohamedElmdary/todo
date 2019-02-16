import { Component } from '@angular/core';
import { AuthService } from './auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private auth: AuthService) {
    let user: string = localStorage.getItem('user');
    if (user)
      this.auth.isAuth.next(JSON.parse(user));
  }
}
