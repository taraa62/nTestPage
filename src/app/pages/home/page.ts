import {ChangeDetectionStrategy, Component} from "@angular/core";

@Component({
  templateUrl: './page.html',
  styleUrls: ['./page.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent {


  constructor() {
    console.log(211221);
  }
}
