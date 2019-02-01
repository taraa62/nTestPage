import {ChangeDetectionStrategy, Component, OnInit} from "@angular/core";
import {DispathEventT62} from "../../core/utils/DispathEventT62";

@Component({
  templateUrl: './page.html',
  styleUrls: ['./page.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent implements OnInit {


  constructor() {
    console.log(211221);
  }

  ngOnInit() {


    DispathEventT62.dispathEvent(this, "HIDE_SPINNER");
  }
}
