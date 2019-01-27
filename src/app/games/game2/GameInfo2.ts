import {IUserInfo} from '../../users/IUserInfo';
import {BaseGameInfo} from './../BaseGameInfo';
import {Game2Params} from './Game2Params';


export class GameInfo2 extends BaseGameInfo {

  constructor(userInfo: IUserInfo) {
    console.log('init game info2');
    super(userInfo);
  }

  protected analizeConnect(resp: Game2Params) {

  }

  protected analizeBet(resp: Game2Params) {

  }

}
