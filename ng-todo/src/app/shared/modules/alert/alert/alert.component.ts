import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})
export class AlertComponent {

  private _type: string = 'd';

  get type() {
    return this._type;
  }

  @Input() alerts: string[];
  @Input() set type(t: string) {
    if (['d', 's'].indexOf(t) === -1) {
      throw Error("Invalid alert type");
    }
    this._type = t;
  }



}
