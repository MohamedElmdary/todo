import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  alerts = [];
  type = 'd';

  constructor(private auth: AuthService, private router: Router) { }

  onRegister({ valid, value }: NgForm) {
    if (valid) {
      this.auth.register(value)
        .subscribe(
          (d: any) => {
            this.router.navigate(['/auth/login'], {
              queryParams: {
                email: d.email
              }
            })
          },
          error => {
            this.alerts = error.errors;
            this.type = 'd';
          }
        );
    }
  }

}