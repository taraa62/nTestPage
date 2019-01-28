import {IGameInfo} from '../games/IGameInfo';
import {BaseGameParams} from '../games/BaseGameParams';

export interface IUserInfo {

  getBalance(): Number;

  getGameList(): Map<String, IGameInfo>;

  getUserName(): String;

  getServerURL(): string;

  setBalance(balance: number);

  updateInfoConnect(params: BaseGameParams);

  updateInfoBet(params: BaseGameParams);
}
