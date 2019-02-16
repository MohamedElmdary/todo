import { Component, Inject, ViewEncapsulation } from '@angular/core';
import { MatBottomSheetRef, MAT_BOTTOM_SHEET_DATA } from '@angular/material';
import { TodoService } from '../../todo.service';

@Component({
  selector: 'bottom-sheet-overview-example-sheet',
  templateUrl: './todo-details.component.html',
  encapsulation: ViewEncapsulation.None
})
export class TodoDetailsComponent {
  constructor(
    private bottomSheetRef: MatBottomSheetRef<TodoDetailsComponent>,
    @Inject(MAT_BOTTOM_SHEET_DATA) public data: any,
    private todo: TodoService
  ) { }

  openLink(event: MouseEvent): void {
    this.bottomSheetRef.dismiss();
    event.preventDefault();
  }


  onCancel() {
    this.bottomSheetRef.dismiss();
  }

  removeTodo(id) {
    this.onCancel();
    this.todo.removeTodo(id).subscribe(
      console.log,
      console.log
    );
  }

}