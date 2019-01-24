(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<t62-page></t62-page>\n\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core_service_ServiceController__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./core/service/ServiceController */ "./src/app/core/service/ServiceController.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'client';
        this.host = "";
        if (window.location.host === 'localhost:4200') {
            this.host = "localhost:8081";
        }
        else {
            this.host = window.location.host;
        }
        _core_service_ServiceController__WEBPACK_IMPORTED_MODULE_1__["ServiceController"].getInst().initService(null, false, true, true);
        _core_service_ServiceController__WEBPACK_IMPORTED_MODULE_1__["ServiceController"].getInst().serviceSocket.connect('ws://localhost:8081');
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 't62-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _pages_terminal_terminal_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/terminal/terminal.component */ "./src/app/pages/terminal/terminal.component.ts");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/primeng */ "./node_modules/primeng/primeng.js");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(primeng_primeng__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _pages_page_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/page/page */ "./src/app/pages/page/page.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                _pages_terminal_terminal_component__WEBPACK_IMPORTED_MODULE_3__["TerminalComponent"],
                _pages_page_page__WEBPACK_IMPORTED_MODULE_5__["PageComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                primeng_primeng__WEBPACK_IMPORTED_MODULE_4__["DialogModule"],
                primeng_primeng__WEBPACK_IMPORTED_MODULE_4__["ButtonModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"]
            ],
            providers: [],
            entryComponents: [_pages_terminal_terminal_component__WEBPACK_IMPORTED_MODULE_3__["TerminalComponent"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/core/BaseComponent.ts":
/*!***************************************!*\
  !*** ./src/app/core/BaseComponent.ts ***!
  \***************************************/
/*! exports provided: BaseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseComponent", function() { return BaseComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BaseComponent = /** @class */ (function () {
    function BaseComponent(render, elRef, resolver) {
        if (render === void 0) { render = null; }
        if (elRef === void 0) { elRef = null; }
        if (resolver === void 0) { resolver = null; }
        this.render = render;
        this.elRef = elRef;
        this.resolver = resolver;
    }
    BaseComponent.prototype.ngAfterContentInit = function () {
    };
    BaseComponent.prototype.ngAfterViewInit = function () {
    };
    BaseComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], BaseComponent.prototype, "name", void 0);
    return BaseComponent;
}());



/***/ }),

/***/ "./src/app/core/DispatchEventT62.ts":
/*!******************************************!*\
  !*** ./src/app/core/DispatchEventT62.ts ***!
  \******************************************/
/*! exports provided: DispatchEventT62, EventT62 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DispatchEventT62", function() { return DispatchEventT62; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventT62", function() { return EventT62; });
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/utils */ "./src/app/core/utils/utils.ts");
var __values = (undefined && undefined.__values) || function (o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
};

var DispatchEventT62 = /** @class */ (function () {
    function DispatchEventT62() {
    }
    DispatchEventT62.registrationObj = function (name, obj) {
        if (_utils_utils__WEBPACK_IMPORTED_MODULE_0__["Utils"].checkFieldNull(name)) {
            if (_utils_utils__WEBPACK_IMPORTED_MODULE_0__["Utils"].checkFieldNull(obj, _utils_utils__WEBPACK_IMPORTED_MODULE_0__["Utils"].defCheckList2)) {
                this._objRegisterClass.set(name, obj);
            }
        }
    };
    DispatchEventT62.getComponent = function (nameComponent) {
        if (this._objRegisterClass.has(nameComponent)) {
            return this._objRegisterClass.get(nameComponent);
        }
        return null;
    };
    DispatchEventT62.addEventListener = function (nameDisp, event, funcListener, bind, dataListener) {
        if (bind === void 0) { bind = null; }
        if (dataListener === void 0) { dataListener = null; }
        if (this._isRun) {
            this._temporarilyList.push([nameDisp, event, funcListener, bind, dataListener]);
        }
        else {
            if (_utils_utils__WEBPACK_IMPORTED_MODULE_0__["Utils"].checkFieldObj([nameDisp, event, funcListener])) {
                var disp = void 0;
                if (!this._objEventListener.has(nameDisp)) {
                    disp = new Map();
                    disp.set(event, []);
                    disp.get(event).push(new EventT62(event, funcListener, dataListener, bind));
                    this._objEventListener.set(nameDisp, disp);
                }
                else {
                    disp = this._objEventListener.get(nameDisp);
                    if (disp.has(event)) {
                        var boo_1 = true;
                        disp.get(event).map(function (val) {
                            if (val.bind !== null && bind !== null) {
                                if (val.bind === bind) {
                                    if (val.listener === funcListener) {
                                        boo_1 = false;
                                    }
                                }
                            }
                            else {
                                if (val.listener === funcListener) {
                                    boo_1 = false;
                                }
                            }
                        });
                        if (boo_1) {
                            disp.get(event).push(new EventT62(event, funcListener, dataListener, bind));
                        }
                    }
                    else {
                        disp.set(event, []);
                        disp.get(event).push(new EventT62(event, funcListener, dataListener, bind));
                    }
                }
            }
            else {
                console.error('DispatchEventT62 "not add to listener"  event ->' + event + '    nameDispatch ->' + nameDisp + '    funcListener ->' + funcListener);
            }
        }
    };
    DispatchEventT62.removeEventListener = function (nameDisp, event, funcListener) {
        if (this._isRun) {
            this._temporarilyListRemove.push([nameDisp, event, funcListener]);
        }
        else {
            var obj = this._objEventListener.get(nameDisp);
            if (obj) {
                var evMap = obj.get(event);
                for (var m = 0; m < evMap.length; m++) {
                    if (evMap[m].listener === funcListener) {
                        evMap.splice(m, 1);
                    }
                }
            }
        }
    };
    DispatchEventT62.dispatchEvent = function (dispObj, event, dataDisp) {
        if (dataDisp === void 0) { dataDisp = null; }
        var e_1, _a, e_2, _b;
        if (!this._isRun) {
            this._isRun = true;
            try {
                for (var _c = __values(this._objRegisterClass.keys()), _d = _c.next(); !_d.done; _d = _c.next()) {
                    var key = _d.value;
                    if (this._objRegisterClass.get(key) === dispObj) {
                        var listener = this._objEventListener.get(key);
                        if (listener) {
                            try {
                                for (var _e = __values(listener.keys()), _f = _e.next(); !_f.done; _f = _e.next()) {
                                    var ev = _f.value;
                                    if (ev === event) {
                                        var arrList = listener.get(ev);
                                        arrList.map(function (val) {
                                            val.dispatcher = dispObj;
                                            val.dataDisp = dataDisp;
                                            if (val.bind !== null) {
                                                val.listener.bind(val.bind)(val);
                                            }
                                            else {
                                                val.listener(val);
                                            }
                                        });
                                    }
                                }
                            }
                            catch (e_2_1) { e_2 = { error: e_2_1 }; }
                            finally {
                                try {
                                    if (_f && !_f.done && (_b = _e.return)) _b.call(_e);
                                }
                                finally { if (e_2) throw e_2.error; }
                            }
                        }
                    }
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (_d && !_d.done && (_a = _c.return)) _a.call(_c);
                }
                finally { if (e_1) throw e_1.error; }
            }
            this._isRun = false;
            this.checkTemporarily();
        }
        else {
            this._temporarilyListDisp.push([dispObj, event, dataDisp]);
        }
    };
    DispatchEventT62.checkTemporarily = function () {
        if (this._temporarilyListRemove.length !== 0) {
            for (var m = 0; m < this._temporarilyListRemove.length; m++) {
                var obj = this._temporarilyListRemove.shift();
                this.removeEventListener(obj[0], obj[1], obj[2]);
            }
        }
        if (this._temporarilyList.length !== 0) {
            for (var m = 0; m < this._temporarilyList.length; m++) {
                var obj = this._temporarilyList.shift();
                this.addEventListener(obj[0], obj[1], obj[2], obj[3], obj[4]);
            }
        }
        if (this._temporarilyListDisp.length !== 0) {
            for (var m = 0; m < this._temporarilyListDisp.length; m++) {
                var obj = this._temporarilyListDisp.shift();
                this.dispatchEvent(obj[0], obj[1], obj[2]);
            }
        }
    };
    /**
     * Диспатчер подій тільки для зареєстрованих об"єктів.
     * реєстрація необхідна для того, щоб ми мали змогу добавляти слухача не залежно від того
     * чи маємо ми ссилку на цей об"єкт, враховуючи на архітектуру angular і не потрібно наслідувати і імплетувати
     * різні класси.
     *
     * бажано реєстрацію проводити в конструкторі класса
     *
     *
     *
     *
     * @type {{}}
     * @private
     */
    DispatchEventT62._isRun = false;
    DispatchEventT62._temporarilyList = [];
    DispatchEventT62._temporarilyListRemove = [];
    DispatchEventT62._temporarilyListDisp = [];
    DispatchEventT62._objRegisterClass = new Map();
    DispatchEventT62._objEventListener = new Map();
    return DispatchEventT62;
}());

var EventT62 = /** @class */ (function () {
    function EventT62(e, l, d, b) {
        this.event = '';
        this.listener = null;
        this.bind = null;
        this.dataListener = null;
        this.dataDisp = null;
        this.dispatcher = null;
        this.event = e;
        this.dataListener = d;
        this.listener = l;
        this.bind = b;
    }
    return EventT62;
}());



/***/ }),

/***/ "./src/app/core/EnumEngine.ts":
/*!************************************!*\
  !*** ./src/app/core/EnumEngine.ts ***!
  \************************************/
/*! exports provided: EnumEngine, SystemEvent, UserEvent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EnumEngine", function() { return EnumEngine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SystemEvent", function() { return SystemEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserEvent", function() { return UserEvent; });
var EnumEngine;
(function (EnumEngine) {
    EnumEngine["none"] = "";
    EnumEngine["AppComponent"] = "AppComponent";
    EnumEngine["LoaderJSON"] = "LoaderJSON";
    EnumEngine["ServiceController"] = "ServiceController";
    EnumEngine["ServiceHTTP"] = "ServiceHTTP";
    EnumEngine["ServiceSocket"] = "ServiceSocket";
    EnumEngine["UserService"] = "UserService";
})(EnumEngine || (EnumEngine = {}));
var SystemEvent;
(function (SystemEvent) {
    SystemEvent["EVENT_LOAD_LOCAL_JSON"] = "EVENT_LOAD_LOCAL_JSON";
})(SystemEvent || (SystemEvent = {}));
var UserEvent;
(function (UserEvent) {
    UserEvent[UserEvent["EVENT_"] = 0] = "EVENT_";
})(UserEvent || (UserEvent = {}));


/***/ }),

/***/ "./src/app/core/service/ServiceController.ts":
/*!***************************************************!*\
  !*** ./src/app/core/service/ServiceController.ts ***!
  \***************************************************/
/*! exports provided: ServiceController */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiceController", function() { return ServiceController; });
/* harmony import */ var _service_socket__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./service-socket */ "./src/app/core/service/service-socket.ts");
/* harmony import */ var _service_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./service-http */ "./src/app/core/service/service-http.ts");
/* harmony import */ var _DispatchEventT62__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../DispatchEventT62 */ "./src/app/core/DispatchEventT62.ts");
/* harmony import */ var _EnumEngine__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../EnumEngine */ "./src/app/core/EnumEngine.ts");
/* harmony import */ var _pages_service_UserService__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../pages/service/UserService */ "./src/app/pages/service/UserService.ts");





var ServiceController = /** @class */ (function () {
    function ServiceController() {
        _DispatchEventT62__WEBPACK_IMPORTED_MODULE_2__["DispatchEventT62"].registrationObj(_EnumEngine__WEBPACK_IMPORTED_MODULE_3__["EnumEngine"].ServiceController, this);
    }
    ServiceController.getInst = function () {
        if (!this.inst)
            this.inst = new ServiceController();
        return this.inst;
    };
    ServiceController.prototype.initService = function (http, isServHTTP, isServUser, isServSocket) {
        if (http === void 0) { http = null; }
        if (isServHTTP === void 0) { isServHTTP = false; }
        if (isServUser === void 0) { isServUser = false; }
        if (isServSocket === void 0) { isServSocket = false; }
        if (isServHTTP)
            this._serviceHttp = new _service_http__WEBPACK_IMPORTED_MODULE_1__["ServiceHTTP"](http);
        if (isServUser)
            this._serviceUser = new _pages_service_UserService__WEBPACK_IMPORTED_MODULE_4__["UserService"]();
        if (isServSocket)
            this._serviceSocket = new _service_socket__WEBPACK_IMPORTED_MODULE_0__["ServiceSocket"]();
    };
    Object.defineProperty(ServiceController.prototype, "serviceUser", {
        get: function () {
            return this._serviceUser;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ServiceController.prototype, "serviceHttp", {
        get: function () {
            return this._serviceHttp;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ServiceController.prototype, "serviceSocket", {
        get: function () {
            return this._serviceSocket;
        },
        enumerable: true,
        configurable: true
    });
    ServiceController.inst = null;
    return ServiceController;
}());



/***/ }),

/***/ "./src/app/core/service/service-http.ts":
/*!**********************************************!*\
  !*** ./src/app/core/service/service-http.ts ***!
  \**********************************************/
/*! exports provided: ServiceHTTP */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiceHTTP", function() { return ServiceHTTP; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/utils */ "./src/app/core/utils/utils.ts");
/* harmony import */ var _DispatchEventT62__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../DispatchEventT62 */ "./src/app/core/DispatchEventT62.ts");
/* harmony import */ var _EnumEngine__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../EnumEngine */ "./src/app/core/EnumEngine.ts");




var ServiceHTTP = /** @class */ (function () {
    function ServiceHTTP(http) {
        this.http = http;
        this.headersJSON = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
            'Access-Control-Allow-Origin': '*',
            // 'Access-Control-Allow-Headers': 'Content-Type',
            //  'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
            'Content-Type': 'application/json',
            'type': 'POST',
            'dataType': 'json',
            'mode': 'test'
        });
        this.headersXML = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
            'Access-Control-Allow-Origin': '*',
            // 'Access-Control-Allow-Headers': 'Content-Type',
            // 'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
            'Content-Type': 'application/text',
            'type': 'POST',
            'dataType': 'xml'
        });
        _DispatchEventT62__WEBPACK_IMPORTED_MODULE_2__["DispatchEventT62"].registrationObj(_EnumEngine__WEBPACK_IMPORTED_MODULE_3__["EnumEngine"].ServiceHTTP, this);
    }
    /*get(link: string): Observable<any> {
      if (this.app_config.isShowErrorPage) return;
      if (!Utils.checkFieldNull(link, Utils.defCheckList)) {
        return null;
      }
      DispatchEventT62.getComponent('spinner').showSpinner();
      return this.http.get(this.serviceConf.link_test_server + link)
       .map(response => {
        DispatchEventT62.getComponent('spinner').hideSpinner();
        return response;
      }, error2 => {
        DispatchEventT62.getComponent('spinner').hideSpinner();
        console.log(error);
        this.app_config.showErrorPage(true);
      });
  
  
    }*/
    ServiceHTTP.prototype.get = function (link, callBack) {
        if (!_utils_utils__WEBPACK_IMPORTED_MODULE_1__["Utils"].checkFieldNull(link, _utils_utils__WEBPACK_IMPORTED_MODULE_1__["Utils"].defCheckList)) {
            return;
        }
        _DispatchEventT62__WEBPACK_IMPORTED_MODULE_2__["DispatchEventT62"].getComponent('spinner').showSpinner();
        this.http.get(link)
            .subscribe(function (response) {
            _DispatchEventT62__WEBPACK_IMPORTED_MODULE_2__["DispatchEventT62"].getComponent('spinner').hideSpinner();
            if (callBack !== null) {
                callBack(response);
            }
        }, function (error2) {
            _DispatchEventT62__WEBPACK_IMPORTED_MODULE_2__["DispatchEventT62"].getComponent('spinner').hideSpinner();
            console.log(error2.error);
        });
    };
    ServiceHTTP.prototype.post = function (data, link, callBack, contentType) {
        if (data === void 0) { data = null; }
        if (contentType === void 0) { contentType = 'json'; }
        console.info('link request ->' + link);
        console.info('mess request ->' + data);
        if (!_utils_utils__WEBPACK_IMPORTED_MODULE_1__["Utils"].checkFieldNull(link, _utils_utils__WEBPACK_IMPORTED_MODULE_1__["Utils"].defCheckList)) {
            return;
        }
        if (typeof data !== 'string') {
            data = (data !== null) ? JSON.stringify(data) : null;
        }
        if (!_utils_utils__WEBPACK_IMPORTED_MODULE_1__["Utils"].checkFieldNull(data, _utils_utils__WEBPACK_IMPORTED_MODULE_1__["Utils"].defCheckList)) {
            return;
        }
        var headers = (contentType === 'json') ? this.headersJSON : this.headersXML;
        var responseType = (contentType === 'json') ? 'json' : 'text';
        // (<any>headers).headers.set('mode', (<AppComponent>DispatchEventT62.getComponent(EnumEngine.AppComponent)).getAPP_CONFIG().mode);
        _DispatchEventT62__WEBPACK_IMPORTED_MODULE_2__["DispatchEventT62"].getComponent('spinner').showSpinner();
        this.http.post(link, data, { headers: headers, responseType: responseType })
            .subscribe(function (response) {
            console.log(response);
            _DispatchEventT62__WEBPACK_IMPORTED_MODULE_2__["DispatchEventT62"].getComponent('spinner').hideSpinner();
            if (callBack !== null) {
                callBack(response);
            }
        }, function (error2) {
            console.error(error2.error);
            _DispatchEventT62__WEBPACK_IMPORTED_MODULE_2__["DispatchEventT62"].getComponent('spinner').hideSpinner();
        });
    };
    ServiceHTTP.prototype.authorize = function (data, link, callBack) {
        if (data === void 0) { data = null; }
        console.info('link request ->' + link);
        console.info('mess request ->' + data);
        if (!_utils_utils__WEBPACK_IMPORTED_MODULE_1__["Utils"].checkFieldNull(link, _utils_utils__WEBPACK_IMPORTED_MODULE_1__["Utils"].defCheckList)) {
            return;
        }
        if (typeof data !== 'string') {
            data = (data !== null) ? JSON.stringify(data) : null;
        }
        if (!_utils_utils__WEBPACK_IMPORTED_MODULE_1__["Utils"].checkFieldNull(data, _utils_utils__WEBPACK_IMPORTED_MODULE_1__["Utils"].defCheckList)) {
            return;
        }
        var header = {
            'Access-Control-Allow-Origin': '*',
            // 'Access-Control-Allow-Headers': 'Content-Type',
            //  'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
            'Content-Type': 'application/x-www-form-urlencoded',
            'type': 'POST'
        };
        _DispatchEventT62__WEBPACK_IMPORTED_MODULE_2__["DispatchEventT62"].getComponent('spinner').showSpinner();
        this.http.post(link, data, { headers: header })
            .subscribe(function (response) {
            console.log(response);
            _DispatchEventT62__WEBPACK_IMPORTED_MODULE_2__["DispatchEventT62"].getComponent('spinner').hideSpinner();
            if (callBack !== null) {
                callBack(response);
            }
        }, function (error2) {
            console.error(error2.error);
            _DispatchEventT62__WEBPACK_IMPORTED_MODULE_2__["DispatchEventT62"].getComponent('spinner').hideSpinner();
        });
    };
    return ServiceHTTP;
}());



/***/ }),

/***/ "./src/app/core/service/service-socket.ts":
/*!************************************************!*\
  !*** ./src/app/core/service/service-socket.ts ***!
  \************************************************/
/*! exports provided: ServiceSocket, EventSocket */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiceSocket", function() { return ServiceSocket; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventSocket", function() { return EventSocket; });
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/utils */ "./src/app/core/utils/utils.ts");
/* harmony import */ var _EnumEngine__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../EnumEngine */ "./src/app/core/EnumEngine.ts");
/* harmony import */ var _DispatchEventT62__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../DispatchEventT62 */ "./src/app/core/DispatchEventT62.ts");



var ServiceSocket = /** @class */ (function () {
    function ServiceSocket() {
        this.callbackNewMess = null;
        _DispatchEventT62__WEBPACK_IMPORTED_MODULE_2__["DispatchEventT62"].registrationObj(_EnumEngine__WEBPACK_IMPORTED_MODULE_1__["EnumEngine"].ServiceSocket, this);
    }
    ServiceSocket.prototype.connect = function (host, callbackNewMess) {
        if (callbackNewMess === void 0) { callbackNewMess = null; }
        this.callbackNewMess = callbackNewMess;
        this.socket = io.connect(host + '?id=1', {
            path: '/events',
            reconnection: false
        });
        this.socket.on('connect', this._connect.bind(this));
        this.socket.on('disconnect', this.disconnect.bind(this));
        this.socket.on('error', this.error.bind(this));
        this.socket.on('news', this.news.bind(this));
        this.socket.on('init', this.init.bind(this));
        _DispatchEventT62__WEBPACK_IMPORTED_MODULE_2__["DispatchEventT62"].addEventListener(_EnumEngine__WEBPACK_IMPORTED_MODULE_1__["EnumEngine"].ServiceSocket, EventSocket.sendSocketMess, this.send, this);
    };
    ServiceSocket.prototype._connect = function (data) {
        _DispatchEventT62__WEBPACK_IMPORTED_MODULE_2__["DispatchEventT62"].dispatchEvent(this, EventSocket.connect);
    };
    ServiceSocket.prototype.init = function (data) {
    };
    ServiceSocket.prototype.setCallbackNewMess = function (f) {
        if (f) {
            this.callbackNewMess = f;
        }
    };
    ServiceSocket.prototype.disconnect = function (data) {
        console.error('disconnect!!! = > ' + data);
        _DispatchEventT62__WEBPACK_IMPORTED_MODULE_2__["DispatchEventT62"].dispatchEvent(this, EventSocket.disconnect);
    };
    ServiceSocket.prototype.error = function (error) {
        console.error('ERROR!!! = > ' + error);
        _DispatchEventT62__WEBPACK_IMPORTED_MODULE_2__["DispatchEventT62"].dispatchEvent(this, EventSocket.error, error);
    };
    ServiceSocket.prototype.news = function (mess) {
        console.log(mess);
        if (mess.command === 'result') {
            mess = mess.result;
        }
        if (_utils_utils__WEBPACK_IMPORTED_MODULE_0__["Utils"].checkFieldNull(this.callbackNewMess))
            this.callbackNewMess(mess);
        _DispatchEventT62__WEBPACK_IMPORTED_MODULE_2__["DispatchEventT62"].dispatchEvent(this, EventSocket.nMessage, mess);
    };
    ServiceSocket.prototype.send = function (mess) {
        if (_utils_utils__WEBPACK_IMPORTED_MODULE_0__["Utils"].checkFieldNull(mess) && this.socket.connected) {
            if (mess.constructor.name === 'EventT62') {
                mess = mess.dataDisp;
            }
            if (mess.constructor.name !== 'String') {
                mess = JSON.stringify(mess);
            }
            this.socket.emit('mess', mess);
            console.log('send = ' + mess);
        }
        else {
            console.log('socket closed!');
        }
    };
    ServiceSocket.prototype.isConnect = function () {
        return this.socket.connected;
    };
    return ServiceSocket;
}());

var EventSocket;
(function (EventSocket) {
    EventSocket["connect"] = "connect";
    EventSocket["disconnect"] = "disconnect";
    EventSocket["error"] = "error";
    EventSocket["nMessage"] = "nMessage";
    EventSocket["sendSocketMess"] = "sendSocketMess";
})(EventSocket || (EventSocket = {}));


/***/ }),

/***/ "./src/app/core/utils/utils.ts":
/*!*************************************!*\
  !*** ./src/app/core/utils/utils.ts ***!
  \*************************************/
/*! exports provided: Utils */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Utils", function() { return Utils; });
var Utils = /** @class */ (function () {
    function Utils() {
    }
    /*
        paramToJSON(['word', 'test'], ['from', this.langfFrom.nativeElement], ['to', this.langTo.nativeElement])
        ['word', 'test', (false||true)] - key:value
        якщо є третій параметр і він типу булл, то він відповідає чи брати значення з об"єкта, чи записувати його таким як він є.
     */
    //* require test!!!!
    /*public static paramToOBJ(isCheckDefFields: boolean = false, ...param: any[]): Object {
      let result = {};
      for (let a of param) {
        if (a.length === 2) {
          (<any>result)[this.getValue(a[0])] = this.getValue(a[1]);
        } else if (a.length === 3) {
          if (a[2]) {
            (<any>result)[this.getValue(a[0])] = this.getValue(a[1]);
          } else {
            (<any>result)[this.getValue(a[0])] = a[1];
          }
        }
      }
      if (isCheckDefFields) {
        result = this.checkFieldObj(result, this.defCheckList);
      }
      return result;
    }*/
    Utils.getValue = function (obj) {
        if (obj !== null && obj !== undefined) {
            if (typeof obj === 'string') {
                return obj;
            }
            else if (typeof obj.nodeValue === 'string') {
                return obj.nodeValue;
            }
            else if (obj.localName === 'select') {
                return obj[obj.selectedIndex].label;
            }
            else if (obj.localName === 'textarea') {
                return obj.value;
            }
            else if (obj.localName === 'td' || obj.localName === 'tr' || obj.localName === 'div' || obj.localName === 'a') {
                return this.getValue(obj.firstChild);
            }
            else if (obj.localName === 'i') {
                return obj.textContent;
            }
            else if (obj.localName === 'input') {
                switch (obj.type) {
                    case 'checkbox':
                        return obj.checked;
                    case 'text':
                    case 'password':
                        return obj.value;
                }
            }
            else if (obj.className === 'select-wrapper initialized' || obj.className === 'select-wrapper initialized disabled') {
                return this.getValue(obj.getElementsByTagName('input')[0]);
            }
            else if (obj.className === 'select-wrapper') {
                return this.getValue(obj.getElementsByTagName('input')[0]);
            }
            else if (obj.nativeElement !== undefined) {
                return this.getValue(obj.nativeElement);
            }
        }
        return null;
    };
    /**
     *
     * @param parentElement
     * @param nameSearch
     * @returns {Object}
     */
    Utils.findElemAndGetValue = function (parentElement, search) {
        var res = window['$'](parentElement).find(search);
        if (res.length > 0) {
            res = this.getValue(res[0]);
        }
        else {
            res = null;
        }
        return res;
    };
    Utils.findElem = function (parentElement, search) {
        var res = window['$'](parentElement).find(search);
        if (res.length > 0) {
            res = res[0];
        }
        else {
            res = null;
            var el = window['$'](parentElement.parentElement).find(search);
            if (el.length > 0) {
                if (el[0] === parentElement) {
                    res = el;
                }
            }
        }
        return res;
    };
    /*public static checkFieldOBJ(json: any, list: any): Object {
      let boo = true;
      for (const f in json) {
        (<Array<any>>list).map(el => {
          if (json[f] === el) {
            boo = false;
          }
        });
      }
      return boo ? json : null;
    }*/
    Utils.checkFieldNull = function (field, list) {
        if (list === void 0) { list = Utils.defCheckList; }
        return list.indexOf(field) < 0;
    };
    /*public static checkFieldObjFirstChild(json: any, list: any[] = Utils.defCheckList): Object {
      let boo = true;
      for (const f in json) {
        (list).map(el => {
          if (json[f][0]) {
            if (json[f][0] === el) {
              boo = false;
              return;
            }
          } else {
            boo = false;
            return;
          }
        });
      }
      return boo ? json : null;
    }*/
    Utils.checkFieldObj = function (obj, list) {
        if (list === void 0) { list = Utils.defCheckList; }
        try {
            var boo_1 = true;
            if (obj instanceof Array) {
                list.forEach(function (v) {
                    if (obj.indexOf(v) > -1)
                        boo_1 = false;
                });
            }
            else {
                for (var f in obj) {
                    if (list.indexOf(obj[f]) > -1)
                        boo_1 = false;
                }
            }
            return boo_1;
        }
        catch (e) {
            throw new Error("'obj' must be Array or Map ({key:value})");
        }
    };
    Utils.addToSelectOption = function (select, listOpt, targetSelect) {
        if (targetSelect === void 0) { targetSelect = null; }
        var parent = (select.nativeElement !== undefined) ? select.nativeElement : select;
        for (var a = 0; a < listOpt.length; a++) {
            var o = listOpt[a];
            var opt = document.createElement('option');
            opt.value = o;
            opt.innerHTML = o;
            parent.appendChild(opt);
            if (targetSelect !== null) {
                if (targetSelect === o) {
                    parent.selectedIndex = a;
                }
            }
        }
    };
    Utils.addSelectToList = function (listOpt, targetSelect) {
        if (targetSelect === void 0) { targetSelect = null; }
        var list = [];
        for (var a = 0; a < listOpt.length; a++) {
            list.push([listOpt[a], null]);
            if (targetSelect !== null) {
                if (targetSelect === listOpt[a]) {
                    list[a][1] = true;
                }
            }
        }
        return list;
    };
    Utils.selectThemeList = function (list, theme, ind) {
        if (theme === void 0) { theme = null; }
        if (ind === void 0) { ind = null; }
        var ll = [];
        for (var a = 0; a < list.length; a++) {
            ll.push([list[a][0], null]);
            // list[a][1] = null;
            if (theme !== null) {
                if (ll[a][0] === theme) {
                    ll[a][1] = true;
                }
            }
        }
        if (theme === null) {
            if (ind !== null) {
                if (ind >= 0 && ind < ll.length) {
                    ll[ind][1] = true;
                }
            }
        }
        return ll;
    };
    Utils.setTextInElement = function (elem, text) {
        if (elem.nativeElement !== undefined) {
            elem = elem.nativeElement;
        }
        if (elem.localName === 'div') {
            elem.innerHTML = text;
        }
    };
    Utils.randomString = function (lenght) {
        var text = '';
        var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        for (var i = 0; i < lenght; i++)
            text += possible.charAt(Math.floor(Math.random() * possible.length));
        return text;
    };
    Utils.getRandomColor = function () {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    };
    /**
     * for game RID
     */
    Utils.getRID = function () {
        return Math.floor(Math.random() * 100000000000000);
    };
    Utils.mouseEventDocument = function (target) {
        var rect = target.getBoundingClientRect();
        var mouseEvent;
        /*  mouseEvent = new MouseEvent('mousedown', {clientX: rect.x+rect.width/2, clientY: rect.y+rect.height/2});
            target.dispatchEvent(mouseEvent);
            mouseEvent = new MouseEvent('mouseup', {clientX: rect.x+rect.width/2, clientY: rect.y+rect.height/2});
            target.dispatchEvent(mouseEvent);
        */
        if (!rect.x || !rect.y)
            return;
        mouseEvent = new MouseEvent('click', {
            clientX: rect.x + rect.width / 2, clientY: rect.y + rect.height / 2, bubbles: true,
            cancelable: true
        });
        target.dispatchEvent(mouseEvent);
    };
    Utils.setAllParamsToUpper = function (obj) {
        Object.keys(obj).map(function (v) {
            obj[v.toUpperCase()] = obj[v];
            delete obj[v];
        });
        return obj;
    };
    Utils.getListWithNotParams = function (list, nameParam) {
        var nL = [];
        /* list.map(v => {
           nameParam.map(vv => {
             if (!v[vv]) {
               nL.push(v);
               return;
             }
           })
         })*/
        nL = list.filter(function (v) {
            var boo = false;
            nameParam.map(function (vv) {
                if (!v[vv] && !boo) {
                    nL.push(v);
                    boo = true;
                }
            });
            return boo;
        });
        return nL;
    };
    Utils.getListWithParams = function (list, nameParam) {
        var nL = [];
        /*list.map(v => {
          nameParam.map(vv => {
            if (v[vv]) {
              nL.push(v);
              return;
            }
          })
    
        })*/
        nL = list.filter(function (v) {
            var boo = false;
            nameParam.map(function (vv) {
                if (v[vv] && !boo) {
                    nL.push(v);
                    boo = true;
                }
            });
            return boo;
        });
        return nL;
    };
    Utils.getAttributeForField = function (obj, field, attrib) {
        if (obj && obj[field]) {
            if (obj[field] instanceof Array && obj[field].length === 2) {
                if (obj[field][1]['$'][attrib])
                    return obj[field][1]['$'][attrib];
            }
        }
        return null;
    };
    Utils.getAttrib = function (attribute, field) {
        var edit = Utils.getAttributeForField(attribute, field, 'EDIT');
        var rq = Utils.getAttributeForField(attribute, field, 'RQ');
        var vis = Utils.getAttributeForField(attribute, field, 'VISIBLE');
        var res = {
            isDisable: (edit) ? (edit === 'T') ? false : true : false,
            isRequired: (rq) ? (rq === 'T') ? true : false : false,
            visible: (vis) ? (vis === 'T') ? true : false : true,
        };
        return res;
    };
    Utils.getLatinWord = function (word) {
        var answer = '';
        // Для тестування українського алфавіту
        // const word:any = 'АаБбВвГгҐґДдЕеЄєЖжЗзИиІіЇїЙйКкЛлМмНнОоПпРрСсТтУуФфХхЦцЧчШшЩщЬьЮюЯя';
        // Для тестирования русского алфавита
        // const word:any = 'АаБбВвГгДдЕеЁёЖжЗзИиЙйКкЛлМмНнОоПпРрСсТтУуФфХхЦцЧчШшЩщЪъЫыЬьЭэЮюЯя';
        //   const word: any = name + ' ' + lastName;
        var A = {};
        A['Ё'] = 'Yo';
        A['Й'] = 'I';
        A['Ц'] = 'Ts';
        A['У'] = 'U';
        A['К'] = 'K';
        A['Е'] = 'E';
        A['Н'] = 'N';
        A['Г'] = 'G';
        A['Ш'] = 'Sh';
        A['Щ'] = 'Sch';
        A['З'] = 'Z';
        A['Х'] = 'H';
        A['Ъ'] = '\'';
        A['ё'] = 'yo';
        A['й'] = 'i';
        A['ц'] = 'ts';
        A['у'] = 'u';
        A['к'] = 'k';
        A['е'] = 'e';
        A['н'] = 'n';
        A['г'] = 'g';
        A['ш'] = 'sh';
        A['щ'] = 'sch';
        A['з'] = 'z';
        A['х'] = 'h';
        A['ъ'] = '\'';
        A['Ф'] = 'F';
        A['Ы'] = 'I';
        A['В'] = 'V';
        A['А'] = 'A';
        A['П'] = 'P';
        A['Р'] = 'R';
        A['О'] = 'O';
        A['Л'] = 'L';
        A['Д'] = 'D';
        A['Ж'] = 'Zh';
        A['Э'] = 'E';
        A['ф'] = 'f';
        A['ы'] = 'i';
        A['в'] = 'v';
        A['а'] = 'a';
        A['п'] = 'p';
        A['р'] = 'r';
        A['о'] = 'o';
        A['л'] = 'l';
        A['д'] = 'd';
        A['ж'] = 'zh';
        A['э'] = 'e';
        A['Я'] = 'Ya';
        A['Ч'] = 'Ch';
        A['С'] = 'S';
        A['М'] = 'M';
        A['И'] = 'I';
        A['Т'] = 'T';
        A['Ь'] = '\'';
        A['Б'] = 'B';
        A['Ю'] = 'Yu';
        A['Є'] = 'Ye';
        A['Ї'] = 'Yi';
        A['Ґ'] = 'G';
        A['І'] = 'I';
        A['я'] = 'ya';
        A['ч'] = 'ch';
        A['с'] = 's';
        A['м'] = 'm';
        A['и'] = 'i';
        A['т'] = 't';
        A['ь'] = '\'';
        A['б'] = 'b';
        A['ю'] = 'yu';
        A['є'] = 'ye';
        A['ї'] = 'yi';
        A['ґ'] = 'g';
        A['і'] = 'i';
        for (var i in word) {
            if (A[word[i]] === undefined) {
                answer += word[i];
            }
            else {
                answer += A[word[i]];
            }
        }
        return answer;
    };
    Utils.defCheckList = ['', ' ', null, undefined];
    Utils.defCheckList2 = [null, undefined];
    return Utils;
}());



/***/ }),

/***/ "./src/app/pages/page/page.html":
/*!**************************************!*\
  !*** ./src/app/pages/page/page.html ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n  <button type=\"text\" (click)=\"showDialog()\" pButton icon=\"pi pi-info-circle\" label=\"new terminal\"></button>\r\n\r\n\r\n  <div #container></div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/pages/page/page.ts":
/*!************************************!*\
  !*** ./src/app/pages/page/page.ts ***!
  \************************************/
/*! exports provided: PageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageComponent", function() { return PageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _terminal_terminal_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../terminal/terminal.component */ "./src/app/pages/terminal/terminal.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PageComponent = /** @class */ (function () {
    function PageComponent(resolver) {
        if (resolver === void 0) { resolver = null; }
        this.resolver = resolver;
    }
    ;
    PageComponent.prototype.showDialog = function () {
        this.createNewTerminal();
    };
    PageComponent.prototype.createNewTerminal = function () {
        var factory = this.resolver.resolveComponentFactory(_terminal_terminal_component__WEBPACK_IMPORTED_MODULE_1__["TerminalComponent"]);
        var componentRef = this.container.createComponent(factory);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('container', { read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"] }),
        __metadata("design:type", Object)
    ], PageComponent.prototype, "container", void 0);
    PageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 't62-page',
            template: __webpack_require__(/*! ./page.html */ "./src/app/pages/page/page.html"),
            styles: []
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]])
    ], PageComponent);
    return PageComponent;
}());



/***/ }),

/***/ "./src/app/pages/service/UserService.ts":
/*!**********************************************!*\
  !*** ./src/app/pages/service/UserService.ts ***!
  \**********************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var _core_service_service_socket__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/service/service-socket */ "./src/app/core/service/service-socket.ts");
/* harmony import */ var _core_DispatchEventT62__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/DispatchEventT62 */ "./src/app/core/DispatchEventT62.ts");
/* harmony import */ var _core_EnumEngine__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/EnumEngine */ "./src/app/core/EnumEngine.ts");



var UserService = /** @class */ (function () {
    function UserService() {
        _core_DispatchEventT62__WEBPACK_IMPORTED_MODULE_1__["DispatchEventT62"].registrationObj(_core_EnumEngine__WEBPACK_IMPORTED_MODULE_2__["EnumEngine"].UserService, this);
        _core_DispatchEventT62__WEBPACK_IMPORTED_MODULE_1__["DispatchEventT62"].addEventListener(_core_EnumEngine__WEBPACK_IMPORTED_MODULE_2__["EnumEngine"].ServiceSocket, _core_service_service_socket__WEBPACK_IMPORTED_MODULE_0__["EventSocket"].connect, this.connectSocket, this);
    }
    UserService.prototype.connectSocket = function (e) {
        this.socketService = e.dispatcher;
        this.socketService.setCallbackNewMess(this.newMess.bind(this));
        this.socketService.send({ command: '/terminal/test' });
    };
    UserService.prototype.setCallBack = function (f) {
        this.socketService.setCallbackNewMess(f);
    };
    UserService.prototype.sendMess = function (mess) {
        this.socketService.send(JSON.stringify(mess));
    };
    UserService.prototype.newMess = function (mess) {
        var resp = { data: mess };
        try {
            resp = JSON.parse(mess);
        }
        catch (e) {
        }
        if (resp.returnID) {
            _core_DispatchEventT62__WEBPACK_IMPORTED_MODULE_1__["DispatchEventT62"].dispatchEvent(this, resp.returnID.toString(), resp);
        }
    };
    return UserService;
}());



/***/ }),

/***/ "./src/app/pages/terminal/terminal.component.ts":
/*!******************************************************!*\
  !*** ./src/app/pages/terminal/terminal.component.ts ***!
  \******************************************************/
/*! exports provided: TerminalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TerminalComponent", function() { return TerminalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var primeng_components_terminal_terminalservice__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! primeng/components/terminal/terminalservice */ "./node_modules/primeng/components/terminal/terminalservice.js");
/* harmony import */ var primeng_components_terminal_terminalservice__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(primeng_components_terminal_terminalservice__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _core_DispatchEventT62__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/DispatchEventT62 */ "./src/app/core/DispatchEventT62.ts");
/* harmony import */ var _core_EnumEngine__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/EnumEngine */ "./src/app/core/EnumEngine.ts");
/* harmony import */ var _core_BaseComponent__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/BaseComponent */ "./src/app/core/BaseComponent.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TerminalComponent = /** @class */ (function (_super) {
    __extends(TerminalComponent, _super);
    function TerminalComponent() {
        var _this = _super.call(this) || this;
        _this.display = true;
        _this._id = Math.floor(Math.random() * 99999999999);
        _core_DispatchEventT62__WEBPACK_IMPORTED_MODULE_2__["DispatchEventT62"].registrationObj('terminal' + _this._id, _this);
        return _this;
    }
    ;
    TerminalComponent.prototype.ngAfterViewInit = function () {
        this.initTerminal();
    };
    TerminalComponent.prototype.respTerminal = function (data) {
        if (data.dataListener) {
            data.dataListener.set_mask(false);
            var msg = data.dataDisp.msg;
            var arr = msg.split('\\n');
            data.dataListener.resume();
            arr.map(function (v) {
                if (v.length > 1)
                    data.dataListener.echo(v);
            });
        }
    };
    TerminalComponent.prototype.initTerminal = function () {
        var _this = this;
        jQuery(function ($, undefined) {
            $(_this.terminal.nativeElement).terminal(function (command, term) {
                if (command !== '') {
                    _core_DispatchEventT62__WEBPACK_IMPORTED_MODULE_2__["DispatchEventT62"].addEventListener(_core_EnumEngine__WEBPACK_IMPORTED_MODULE_3__["EnumEngine"].UserService, _this._id.toString(), _this.respTerminal, _this, term);
                    term.pause();
                    var initTerminal = {
                        returnID: _this._id,
                        command: '/terminal/initTerminal',
                        cmdCommand: command
                    };
                    var us = _core_DispatchEventT62__WEBPACK_IMPORTED_MODULE_2__["DispatchEventT62"].getComponent(_core_EnumEngine__WEBPACK_IMPORTED_MODULE_3__["EnumEngine"].UserService);
                    us.sendMess(initTerminal);
                }
            }, {
                greetings: 'Hello',
                name: 'js_demo',
                height: 400,
                width: 800,
                prompt: 'user> '
            });
        });
    };
    TerminalComponent.prototype.parseMess = function (st) {
        var arr = this.toUTF8Array(st);
        return this.toStringArr(arr);
    };
    TerminalComponent.prototype.toUTF8Array = function (str) {
        var utf8 = [];
        for (var i = 0; i < str.length; i++) {
            var charcode = str.charCodeAt(i);
            if (charcode < 0x80)
                utf8.push(charcode);
            else if (charcode < 0x800) {
                utf8.push(0xc0 | (charcode >> 6), 0x80 | (charcode & 0x3f));
            }
            else if (charcode < 0xd800 || charcode >= 0xe000) {
                utf8.push(0xe0 | (charcode >> 12), 0x80 | ((charcode >> 6) & 0x3f), 0x80 | (charcode & 0x3f));
            }
            // surrogate pair
            else {
                i++;
                charcode = ((charcode & 0x3ff) << 10) | (str.charCodeAt(i) & 0x3ff);
                utf8.push(0xf0 | (charcode >> 18), 0x80 | ((charcode >> 12) & 0x3f), 0x80 | ((charcode >> 6) & 0x3f), 0x80 | (charcode & 0x3f));
            }
        }
        return utf8;
    };
    TerminalComponent.prototype.toStringArr = function (arr) {
        var resp = '';
        for (var r = 0; r < arr.length; r++) {
            resp += String.fromCharCode(arr[r]);
        }
        return resp;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('terminal'),
        __metadata("design:type", Object)
    ], TerminalComponent.prototype, "terminal", void 0);
    TerminalComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 't62-terminal',
            template: __webpack_require__(/*! ./terminal.html */ "./src/app/pages/terminal/terminal.html"),
            styles: [],
            providers: [primeng_components_terminal_terminalservice__WEBPACK_IMPORTED_MODULE_1__["TerminalService"]]
        }),
        __metadata("design:paramtypes", [])
    ], TerminalComponent);
    return TerminalComponent;
}(_core_BaseComponent__WEBPACK_IMPORTED_MODULE_4__["BaseComponent"]));



/***/ }),

/***/ "./src/app/pages/terminal/terminal.html":
/*!**********************************************!*\
  !*** ./src/app/pages/terminal/terminal.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n\r\n<p-dialog #pnl header=\"Terminal\" [(visible)]=\"display\" [modal]=\"false\" [responsive]=\"true\" [width]=\"850\" [minWidth]=\"200\"\r\n          [maximizable]=\"true\" [baseZIndex]=\"10000\">\r\n\r\n  <div #terminal></div>\r\n\r\n\r\n</p-dialog>\r\n"

/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\svn\dockerUtils\client\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map