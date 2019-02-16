import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import {
  MatFormFieldModule,
  MatInputModule,
  MatDividerModule,
  MatButtonModule,
  MatSelectModule
} from '@angular/material';
import { AlertModule } from '../shared/modules/alert/alert.module';


const authRoutes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  }
];

@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(authRoutes),
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatDividerModule,
    MatButtonModule,
    MatSelectModule,
    AlertModule
  ],
  exports: [
    RouterModule
  ]
})
export class AuthModule { }
