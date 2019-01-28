import {IGameInfo} from './IGameInfo';
import {IUserInfo} from '../users/IUserInfo';
import {GameParams} from './GameParams';
import {DispathEventT62} from '../core/utils/DispathEventT62';
import {Service} from '../core/utils/Service';
import {BaseGameParams} from './BaseGameParams';

export class BaseGameInfo implements IGameInfo {

  protected lastResponce: GameParams = null;
  protected mapAnalizeCommand: Map<String, Function>;

  constructor(protected userInfo: IUserInfo) {
    this.mapAnalizeCommand = new Map();
    this.mapAnalizeCommand.set('connect', this.analizeConnect);
    this.mapAnalizeCommand.set('bet', this.analizeBet);
  }

  public runTest() {
    console.log('run test request');
    (<Service>DispathEventT62.getComponent('SERVICE')).get(this.userInfo.getServerURL(), true).subscribe(console.log);
  }

  public runConnect() {
    const params = new GameParams();
    params.gameId = 'game2';
    params.uid = this.userInfo.getUserName() + this.userInfo.getBalance().toString();
    params.game = new BaseGameParams('connect');
    this.setRequest(params);
  }


  protected setRequest(params: GameParams) {
    (<Service>DispathEventT62.getComponent('SERVICE')).post(params, this.userInfo.getServerURL(), 'json', true).subscribe(
      (resp: GameParams) => {
        if (typeof resp.game === 'string') {
          resp.game = JSON.parse(resp.game);
        }
        this.analizeResponse(resp);
      }, error2 => console.error(error2)
    );
  }

  protected analizeResponse(resp: GameParams): void {
    this.lastResponce = resp;
    switch (resp.game.command) {

    }
    console.log(resp);
  }

  protected analizeConnect(resp: BaseGameParams) {
    this.userInfo.updateInfoConnect(resp);
  }

  protected analizeBet(resp: BaseGameParams) {
    this.userInfo.updateInfoBet(resp);
  }

}
