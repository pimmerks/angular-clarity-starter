import { Component, OnInit, Input } from '@angular/core';
import { IError } from '@models/error.model';

@Component({
  selector: 'app-error-alert',
  templateUrl: './error-alert.component.html'
})
export class ErrorAlertComponent {
  @Input() public closable = false;

  @Input() public set error(val: IError) {
    this.errorInternal = val;
    if (!val){
      this.visible = false;
    } else {
      this.visible = true;
    }
  }

  public set alertClosed(val: boolean) {
    if (val) {
      this.error = null;
    }
  }

  public visible = false;
  public errorInternal: IError = null;
}
