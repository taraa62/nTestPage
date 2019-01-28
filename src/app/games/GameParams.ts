import {BaseGameInfo} from './BaseGameInfo';
import {BaseGameParams} from './BaseGameParams';

export class GameParams {

  public gameId: String;
  public lang: String = 'en';
  public mode: String = 'demo';
  public rid: String = (Math.floor(Math.random() * 100000000000)).toString();
  public uid: String;
  public session: String;



  public game: BaseGameParams;

}

