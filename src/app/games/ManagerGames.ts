import {IUserInfo} from '../users/IUserInfo';
import {IGameInfo} from './IGameInfo';
import {UserInfo} from '../users/UserInfo';
import {GameInfo2} from './game2/GameInfo2';

export class ManagerGames {

  private games: Map<String, IUserInfo>;

  constructor() {
    this.games = new Map();
    console.log('ManagerGames');

    this.test();
  }

  private test(): void {
    const user = this.initTestUser();
    const game: IGameInfo = this.initTestGame(user);
    game.runConnect();

  }


  private initTestUser(): IUserInfo {
    return new UserInfo('test', 10005, 'http://195.64.155.171:8080/events');
  }

  private initTestGame(userInfo: IUserInfo): IGameInfo {
    return new GameInfo2(userInfo);
  }

}
