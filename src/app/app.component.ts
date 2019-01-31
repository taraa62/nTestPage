import {ChangeDetectionStrategy, Component} from '@angular/core';
import {DispathEventT62, EventT62} from './core/utils/DispathEventT62';
import {Service} from './core/utils/Service';
import {Router} from "@angular/router";
import {AuthenticationService} from "./core/_services/authentication.service";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {

  title = 'nTestPage';

  constructor(public service: Service,
              private router: Router,
              private authenticationService: AuthenticationService) {

    DispathEventT62.registerComponent('APP_Component', this);


    //new ManagerGames();
  }

  public logout() {
    this.authenticationService.logout();
    this.router.navigate(['/login']);
  }
}

