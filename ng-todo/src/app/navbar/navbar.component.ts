import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { User } from '../auth/User.interfaces';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  isAuth: User = null;

  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit() {
    this.auth.isAuth.subscribe(
      (data: User) => this.isAuth = data
    );
  }

  logout() {
    localStorage.clear();
    this.auth.isAuth.next(null);
    this.router.navigate(['/']);
  }

}
