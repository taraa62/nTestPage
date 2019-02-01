import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import {AuthenticationService} from '../../core/_services/authentication.service';
import {Observable} from 'rxjs';
import {Injectable} from '@angular/core';
import {DispathEventT62} from '../../core/utils/DispathEventT62';

@Injectable({providedIn: 'root'})
export class AuthGuard implements CanActivate {

  constructor(private router: Router, private authenticationService: AuthenticationService) {
    console.log("AuthGuard");
  }

  public canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    DispathEventT62.dispathEvent(this, "SHOW_SPINNER");

    const currentUser = this.authenticationService.currentUser;
    if (currentUser) {
      // check if route is restricted by role
      if (route.data.roles && route.data.roles.indexOf(currentUser.role) === -1) {
        // role not authorised so redirect to home page
        this.router.navigate(['/']);
        return false;
      }

      // authorised so return true
      return true;
    }


    this.router.navigate(['/login']);
    return false;
  }

}
