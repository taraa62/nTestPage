import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import {AuthenticationService} from '../../core/_services/authentication.service';
import {Observable} from 'rxjs';
import {Injectable} from '@angular/core';
import {DispathEventT62} from '../../core/utils/DispathEventT62';

@Injectable({providedIn: 'root'})
export class AuthGuard implements CanActivate {

  constructor(private router: Router, private authenticationService: AuthenticationService) {

  }

  public canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    DispathEventT62.dispathEvent(this, "SHOW_SPINNER");
    this.router.navigate(['/login']);
    return false;
  }

}
