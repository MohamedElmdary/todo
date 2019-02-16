import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { TodoService } from '../todo.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addtodo',
  templateUrl: './addtodo.component.html',
  styleUrls: ['./addtodo.component.scss']
})
export class AddtodoComponent {
  alerts: string[] = [];
  type: string = 'd';

  constructor(private todo: TodoService, private router: Router) { }

  addTodo({ valid, value }: NgForm) {
    if (valid) {
      this.todo.addTodo(value)
        .subscribe(
          (data) => {
            this.router.navigate(['/todos']);
            this.alerts = [];
          },
          error => {
            this.alerts = error.errors;
            this.type = 'd';
          }
        );
    }
  }

}
