import {Component, Input, OnInit} from '@angular/core';
import {DispathEventT62, EventT62} from '../utils/DispathEventT62';


export declare type TypeDisplay = 'none' | 'inline';

export enum TypeEVENT {
  SHOW_SPINNER = 'SHOW_SPINNER',
  HIDE_SPINNER = 'HIDE_SPINNER'
};


@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.css']
})
export class SpinnerComponent {

  color = 'primary';
  mode = 'indeterminate';
  @Input() visible: TypeDisplay;

  constructor() {
    DispathEventT62.addEventListener('SHOW_SPINNER', this.show, this);
    DispathEventT62.addEventListener('HIDE_SPINNER', this.hide, this);
  }


  public show(event: EventT62): void {
    this.visible = 'inline';
    console.log("show spinner: " + event.dispathObj.constructor.name);
  }

  public hide(event: EventT62): void {
    this.visible = 'none';
    console.log("hide spinner: " + event.dispathObj.constructor.name);
  }

}
