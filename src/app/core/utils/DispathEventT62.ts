
export class DispathEventT62 {

  private static _isRun = false;
  private static _objRegisterClass: Map<String, Object> = new Map();
  private static _objEventListener: Map<String, Array<EventT62>> = new Map();
  private static _temporarilyList: Array<any> = [];
  private static _temporarilyListRemove: Array<any> = [];
  private static _temporarilyListDisp: Array<any> = [];

  private readonly version = 2.0;


  public static registerComponent(name: String, obj: Object): void {
    if (name && obj) {
      if (!this._objRegisterClass.has(name)) {
        this._objRegisterClass.set(name, obj);
      }
    }
  }

  public static getComponent(nameComponent: String) {
    if (nameComponent && this._objRegisterClass.has(nameComponent)) {
      return this._objRegisterClass.get(nameComponent);
    }
    return null;
  }

  public static addEventListener(event: string, callback: Function, bind: Object = null, dataListener: Object = null) {
    if (event && callback) {
      if (this._isRun) {
        this._temporarilyList.push([event, callback, bind, dataListener]);
      } else {
        if (!this._objEventListener.has(event)) {
          const arr: Array<EventT62> = [];
          arr.push(new EventT62(event, callback, bind, dataListener));
          this._objEventListener.set(event, arr);
        } else {
          const arr = this._objEventListener.get(event);
          let isAdd = true;
          arr.map(v => {
            if (v.callback === callback) {
              isAdd = false;
            }
          });
          if (isAdd) {
            arr.push(new EventT62(event, callback, bind, dataListener));
          }
        }
      }
    }
  }

  /**
   *
   * @param event - event for listener
   * @param callBack - callback function
   * @return - true - подія видалена успішно, false - подія є, но вона не видалена, null - подію ніхто не прослуховує.
   */
  public static removeEventListener(event: String, callBack: Function): boolean {
    if (event && callBack && this._objEventListener.has(event)) {
      if (this._isRun) {
        this._temporarilyListRemove.push([event, callBack]);
      } else {
        const arr = this._objEventListener.get(event);
        for (let i = 0; i < arr.length; i++) {
          const evt62 = arr[i];
          if (evt62.callback === callBack) {
            arr.splice(i, 1);
            return true;
          }
        }
      }
      return false;
    }
    return null;
  }


  private static checkTemporarily(): void {
    while (this._temporarilyListRemove.length > 0) {
      const [event, callBack] = this._temporarilyListRemove.shift();
      this.removeEventListener(event, callBack);
    }


    while (this._temporarilyListRemove.length > 0) {
      const [event, callBack, bind, data] = this._temporarilyList.shift();
      this.addEventListener(event, callBack, bind, data);
    }

    while (this._temporarilyListRemove.length > 0) {
      const [event, callBack, data] = this._temporarilyListDisp.shift();
      this.dispathEvent(event, callBack, data);
    }

  }

  public static dispathEvent(dispObj: Object, event: string, dataDisp: Object = null) {
    if (this._isRun) {
      this._temporarilyListDisp.push([dispObj, event, dataDisp]);
    } else {
      this._isRun = true;

      if (this._objEventListener.has(event)) {
        const arr = this._objEventListener.get(event);
        arr.map(v => {
          v.dataDist = dataDisp;
          if (v.bind) {
            v.callback.bind(v.bind)(v);
          } else {
            v.callback(v);
          }
        });
      }
      this._isRun = false;
      this.checkTemporarily();
    }
  }

}

export class EventT62 {

  public dataDist: Object;

  constructor(public event: string, public callback: Function, public bind: Object = null, public dataListener: Object = null) {

  }
}
