import {IUserInfo} from './IUserInfo';
import {IGameInfo} from '../games/IGameInfo';
import {BaseGameParams} from '../games/BaseGameParams';

export class UserInfo implements IUserInfo {

  private gameList: Map<String, IGameInfo>;

  constructor(private name: String, private balance: Number, private serverURL: string) {
    console.log('init user info2');
  }

  public getBalance(): Number {
    return this.balance;
  }

  public setBalance(balance: number) {
    this.balance = balance;
  }

  public getGameList(): Map<String, IGameInfo> {
    return this.gameList;
  }

  public getUserName(): String {
    return this.name;
  }

  public getServerURL(): string {
    return this.serverURL;
  }

  public updateInfoConnect(params: BaseGameParams) {
    this.balance = params.balance;
  }

  public updateInfoBet(params: BaseGameParams) {
    this.balance = params.balance;
  }

}
