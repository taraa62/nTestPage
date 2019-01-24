class UtilPromise {

  constructor() {
    this.listWait = [];

  }


  getWaitInit() {
    let resp = null;
    const _w = new Promise(res => {
      resp = res;
    })
    this.listWait.push(_w);
    return resp;
  }

  pushPromise(promise) {
    this.listWait.push(promise);
  }

  async runAll(callback, error) {
    return await Promise.all(this.listWait).then(callback).catch(error);
  }

  async runResolve(callback, error) {
    return await Promise.resolve(this.listWait).then(callback).catch(error);
  }

}

module.exports.UtilPromiseAll = UtilPromise;
