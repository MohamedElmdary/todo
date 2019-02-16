import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent implements OnInit {
  @Input() todo: any;
  @Output() removeTodoWithId: EventEmitter<string> = new EventEmitter<string>();
  @Output() selectTodo: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

  removeTodo(id: string) {
    this.removeTodoWithId.emit(id);
  }

  showDetails() {
    this.selectTodo.emit(this.todo);
  }

}
