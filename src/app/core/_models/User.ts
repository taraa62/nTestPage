import {Role} from "./Role";

export class User {

  public id: number;
  public username: string;
  public password?: string;
  public role: Role;
  public token?: string;

}
