import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { User } from '../auth/User.interfaces';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  isAuth: User = null;

  constructor(private auth: AuthService) { }

  ngOnInit() {
    this.auth.isAuth.subscribe(
      (data: User) => this.isAuth = data
    );
  }

}
