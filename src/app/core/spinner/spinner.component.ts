import {Component, Input, OnInit} from '@angular/core';


export declare type TypeDisplay = 'none' | 'inline';


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

  }


  public show(): void {
    this.visible = 'inline';
  }

  public hide(): void {
    this.visible = 'none';
  }

}
