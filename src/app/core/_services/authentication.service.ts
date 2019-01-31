import {Injectable} from "@angular/core";
import {Service} from "../utils/Service";
import {BehaviorSubject} from "rxjs";
import {User} from "../_models/User";

@Injectable({providedIn: 'root'})
export class AuthenticationService {

  private currentUserSubject: BehaviorSubject<User>;

  constructor(private service: Service) {
    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse((localStorage.getItem("authUser"))));
  }

  public get currentUser(): User {
    return this.currentUserSubject.getValue();
  }

  public login(username: string, password: string) {
    console.log("user login");
  }

  public logout() {
    localStorage.removeItem("authUser");
    this.currentUserSubject.next(null);
  }

}
