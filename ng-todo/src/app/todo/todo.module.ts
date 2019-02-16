import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodosComponent } from './todos/todos.component';
import { Routes, RouterModule } from '@angular/router';

const todoRoutes: Routes = [
  {
    path: '',
    component: TodosComponent
  }
];

@NgModule({
  declarations: [TodosComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(todoRoutes)
  ]
})
export class TodoModule { }
