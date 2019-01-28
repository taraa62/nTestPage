import {Component} from '@angular/core';
import {DispathEventT62, EventT62} from './core/utils/DispathEventT62';
import {ManagerGames} from './games/ManagerGames';
import {Service} from './core/utils/Service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'nTestPage';

  constructor(service: Service) {
    DispathEventT62.registerComponent('APP_Component', this);
    new ManagerGames();
  }
}

