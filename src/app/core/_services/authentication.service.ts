import {Injectable} from "@angular/core";
import {Service} from "../utils/Service";
import {BehaviorSubject} from "rxjs";
import {User} from "../_models/User";
import {map} from "rxjs/operators";

@Injectable({providedIn: 'root'})
export class AuthenticationService {

  private currentUserSubject: BehaviorSubject<User>;

  constructor(private service: Service) {
    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse((localStorage.getItem("authUser"))));
    console.log("AuthenticationService");
  }

  public get currentUser(): User {
    return this.currentUserSubject.getValue();
  }

  public login(username: string, password: string) {
    return this.service.post({username, password}, `http://localhost:8081/test/testUser`, "json", true)
      .pipe(map(v => {
        // login successful if there's a jwt token in the response
        const user: User = v as User;
        if (user && user.token) {
          // store user details and jwt token in local storage to keep user logged in between page refreshes
          localStorage.setItem('authUser', JSON.stringify(user));
          this.currentUserSubject.next(user);
        }

        return user;
      }));
  }

  public logout() {
    localStorage.removeItem("authUser");
    this.currentUserSubject.next(null);
  }

}
