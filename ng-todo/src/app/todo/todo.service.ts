import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { tap, take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  userTodos: BehaviorSubject<any> = new BehaviorSubject([]);

  constructor(private http: HttpClient) { }

  addTodo(todo) {
    return this.http.post("/todo/create", todo).pipe(
      tap((v: any) => {
        this.userTodos.pipe(take(1)).subscribe(todos => {
          this.userTodos.next([{
            ...todo,
            ...v.todo
          }, ...todos]);
        });
      })
    );
  }

  removeTodo(todoId) {
    return this.http.delete("/todo/" + todoId).pipe(
      tap(() => {
        this.userTodos.pipe(take(1)).subscribe((todos: any[]) => {
          const newTodos = todos.filter(todo => todo._id !== todoId);
          this.userTodos.next([
            ...newTodos
          ])
        });
      })
    );
  }

  editTodo() {

  }


  getUserTodo() {
    console.log("fired");
    this.http.get("/todo")
      .pipe(take(1))
      .subscribe(
        ({ todos }: any) => {
          console.log(todos);
          this.userTodos.next(todos);
        },
        error => { }
      )
  }

}
