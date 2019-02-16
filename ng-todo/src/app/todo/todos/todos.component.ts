import { Component, OnInit, OnDestroy } from '@angular/core';
import { TodoService } from '../todo.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit, OnDestroy {
  private x: Subscription;
  todos: any[] = [];

  constructor(private todo: TodoService) { }

  ngOnInit() {
    this.x = this.todo.userTodos.subscribe(
      v => {
        this.todos = v;
      }
    )
  }

  ngOnDestroy() {
    this.x.unsubscribe();
  }

}
