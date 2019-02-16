import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-main-todo',
  templateUrl: './main-todo.component.html',
  styleUrls: ['./main-todo.component.scss']
})
export class MainTodoComponent implements OnInit {

  constructor(private todo: TodoService) { }

  ngOnInit() {
    console.log("todo");
    this.todo.getUserTodo();
  }

}
