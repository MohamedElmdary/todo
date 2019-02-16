import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodosComponent } from './todos/todos.component';
import { Routes, RouterModule } from '@angular/router';
import { AddtodoComponent } from './addtodo/addtodo.component';
import {
  MatFormFieldModule,
  MatInputModule,
  MatDividerModule,
  MatButtonModule,
  MatCardModule,
  MatCheckboxModule,
  MatBottomSheetModule
} from '@angular/material';
import { FormsModule } from '@angular/forms';
import { AlertModule } from '../shared/modules/alert/alert.module';
import { MainTodoComponent } from './main-todo/main-todo.component';
import { TodoDetailsComponent } from './todos/todo-details/todo-details.component';
import { TodoItemComponent } from './todos/todo-item/todo-item.component';

const todoRoutes: Routes = [
  {
    path: '',
    component: MainTodoComponent,
    children: [
      {
        path: '',
        component: TodosComponent
      }, {
        path: 'add',
        component: AddtodoComponent
      }
    ]
  }
];

@NgModule({
  declarations: [
    TodosComponent,
    AddtodoComponent,
    MainTodoComponent,
    TodoDetailsComponent,
    TodoItemComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(todoRoutes),
    MatFormFieldModule,
    MatInputModule,
    MatDividerModule,
    FormsModule,
    MatButtonModule,
    AlertModule,
    MatCardModule,
    MatCheckboxModule,
    MatBottomSheetModule
  ],
  entryComponents: [
    TodoItemComponent,
    TodoDetailsComponent
  ]
})
export class TodoModule { }
