import { Component, Inject } from '@angular/core';
import { MatBottomSheetRef, MAT_BOTTOM_SHEET_DATA } from '@angular/material';

@Component({
  selector: 'bottom-sheet-overview-example-sheet',
  template: '{{data}}'
})
export class TodoDetailsComponent {
  constructor(
    private bottomSheetRef: MatBottomSheetRef<TodoDetailsComponent>,
    @Inject(MAT_BOTTOM_SHEET_DATA) public data: any
  ) { }

  openLink(event: MouseEvent): void {
    this.bottomSheetRef.dismiss();
    event.preventDefault();
  }

}