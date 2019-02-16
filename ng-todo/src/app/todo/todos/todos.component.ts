import { Component, OnInit, OnDestroy } from '@angular/core';
import { TodoService } from '../todo.service';
import { Subscription } from 'rxjs';
import {
  MatBottomSheet
} from '@angular/material';
import { TodoDetailsComponent } from './todo-details/todo-details.component';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit, OnDestroy {
  private x: Subscription;
  todos: any[] = [];
  selectedTodo: any;

  constructor(private todo: TodoService, private bottomSheet: MatBottomSheet) { }

  ngOnInit() {
    this.x = this.todo.userTodos.subscribe(
      v => {
        this.todos = v;
      }
    );
  }

  removeTodo(id) {
    this.todo.removeTodo(id).subscribe(
      console.log,
      console.log
    );
  }

  selectTodo(todo) {
    console.log(todo);
    this.selectedTodo = todo;
  }

  ngOnDestroy() {
    this.x.unsubscribe();
  }

  openBottomSheet(): void {
    this.bottomSheet.open(TodoDetailsComponent, {
      data: 'test'
    });
  }

}