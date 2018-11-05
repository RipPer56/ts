webpackJsonp([8],{

/***/ 1000:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BeAssurApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_splash_screen__ = __webpack_require__(258);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(263);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__core_nav_service__ = __webpack_require__(456);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var BeAssurApp = (function () {
    function BeAssurApp(platform, config, statusBar, splashScreen, navService) {
        this.platform = platform;
        this.config = config;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.navService = navService;
    }
    Object.defineProperty(BeAssurApp.prototype, "sideMenuEnabled", {
        get: function () {
            return this.nav != undefined && this.nav.getActive() != undefined && (this.nav.getActive().id !== 'auth');
        },
        enumerable: true,
        configurable: true
    });
    BeAssurApp.prototype.ngOnInit = function () {
        var _this = this;
        this.platform.ready().then(function () {
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
            if (_this.platform.is('ios')) {
                _this.config.set('backButtonText', 'Retour');
            }
        });
        this.navService.initNav(this.nav);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["i" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["i" /* Nav */])
    ], BeAssurApp.prototype, "nav", void 0);
    BeAssurApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/antoineol/nw/beassur/insurance/src/app/app.html"*/'<ion-menu [content]="content" [persistent]="true" [enabled]="sideMenuEnabled">\n    <ion-buttons end>\n      <button ion-button icon-right clear menuClose>\n        <ion-icon name="close" color="dark"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ba-side-menu></ba-side-menu>\n</ion-menu>\n\n<ion-nav #content swipeBackEnabled="false"></ion-nav>\n<div class="bg-splash-image"></div>\n'/*ion-inline-end:"/Users/antoineol/nw/beassur/insurance/src/app/app.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["l" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["b" /* Config */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_1__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_4__core_nav_service__["a" /* NavService */]])
    ], BeAssurApp);
    return BeAssurApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 1001:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CoreModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_shared_module__ = __webpack_require__(245);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__nav_service__ = __webpack_require__(456);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



/**
 * Module responsible for bootstrapping the application. It should be imported only once, only in the AppModule.
 * It can also provide global services (e.g. UserService).
 */
var CoreModule = (function () {
    function CoreModule(parentModule) {
        if (parentModule) {
            throw new Error('CoreModule is already loaded. Import it in the AppModule only.');
        }
    }
    CoreModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__shared_shared_module__["a" /* SharedModule */].forRoot(),
            ],
            declarations: [],
            providers: [
                __WEBPACK_IMPORTED_MODULE_2__nav_service__["a" /* NavService */],
            ],
        }),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["N" /* Optional */])()), __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_2" /* SkipSelf */])()),
        __metadata("design:paramtypes", [CoreModule])
    ], CoreModule);
    return CoreModule;
}());

//# sourceMappingURL=core.module.js.map

/***/ }),

/***/ 1003:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 457,
	"./af.js": 457,
	"./ar": 458,
	"./ar-dz": 459,
	"./ar-dz.js": 459,
	"./ar-kw": 460,
	"./ar-kw.js": 460,
	"./ar-ly": 461,
	"./ar-ly.js": 461,
	"./ar-ma": 462,
	"./ar-ma.js": 462,
	"./ar-sa": 463,
	"./ar-sa.js": 463,
	"./ar-tn": 464,
	"./ar-tn.js": 464,
	"./ar.js": 458,
	"./az": 465,
	"./az.js": 465,
	"./be": 466,
	"./be.js": 466,
	"./bg": 467,
	"./bg.js": 467,
	"./bm": 468,
	"./bm.js": 468,
	"./bn": 469,
	"./bn.js": 469,
	"./bo": 470,
	"./bo.js": 470,
	"./br": 471,
	"./br.js": 471,
	"./bs": 472,
	"./bs.js": 472,
	"./ca": 473,
	"./ca.js": 473,
	"./cs": 474,
	"./cs.js": 474,
	"./cv": 475,
	"./cv.js": 475,
	"./cy": 476,
	"./cy.js": 476,
	"./da": 477,
	"./da.js": 477,
	"./de": 478,
	"./de-at": 479,
	"./de-at.js": 479,
	"./de-ch": 480,
	"./de-ch.js": 480,
	"./de.js": 478,
	"./dv": 481,
	"./dv.js": 481,
	"./el": 482,
	"./el.js": 482,
	"./en-au": 483,
	"./en-au.js": 483,
	"./en-ca": 484,
	"./en-ca.js": 484,
	"./en-gb": 485,
	"./en-gb.js": 485,
	"./en-ie": 486,
	"./en-ie.js": 486,
	"./en-nz": 487,
	"./en-nz.js": 487,
	"./eo": 488,
	"./eo.js": 488,
	"./es": 489,
	"./es-do": 490,
	"./es-do.js": 490,
	"./es-us": 491,
	"./es-us.js": 491,
	"./es.js": 489,
	"./et": 492,
	"./et.js": 492,
	"./eu": 493,
	"./eu.js": 493,
	"./fa": 494,
	"./fa.js": 494,
	"./fi": 495,
	"./fi.js": 495,
	"./fo": 496,
	"./fo.js": 496,
	"./fr": 497,
	"./fr-ca": 498,
	"./fr-ca.js": 498,
	"./fr-ch": 499,
	"./fr-ch.js": 499,
	"./fr.js": 497,
	"./fy": 500,
	"./fy.js": 500,
	"./gd": 501,
	"./gd.js": 501,
	"./gl": 502,
	"./gl.js": 502,
	"./gom-latn": 503,
	"./gom-latn.js": 503,
	"./gu": 504,
	"./gu.js": 504,
	"./he": 505,
	"./he.js": 505,
	"./hi": 506,
	"./hi.js": 506,
	"./hr": 507,
	"./hr.js": 507,
	"./hu": 508,
	"./hu.js": 508,
	"./hy-am": 509,
	"./hy-am.js": 509,
	"./id": 510,
	"./id.js": 510,
	"./is": 511,
	"./is.js": 511,
	"./it": 512,
	"./it.js": 512,
	"./ja": 513,
	"./ja.js": 513,
	"./jv": 514,
	"./jv.js": 514,
	"./ka": 515,
	"./ka.js": 515,
	"./kk": 516,
	"./kk.js": 516,
	"./km": 517,
	"./km.js": 517,
	"./kn": 518,
	"./kn.js": 518,
	"./ko": 519,
	"./ko.js": 519,
	"./ky": 520,
	"./ky.js": 520,
	"./lb": 521,
	"./lb.js": 521,
	"./lo": 522,
	"./lo.js": 522,
	"./lt": 523,
	"./lt.js": 523,
	"./lv": 524,
	"./lv.js": 524,
	"./me": 525,
	"./me.js": 525,
	"./mi": 526,
	"./mi.js": 526,
	"./mk": 527,
	"./mk.js": 527,
	"./ml": 528,
	"./ml.js": 528,
	"./mr": 529,
	"./mr.js": 529,
	"./ms": 530,
	"./ms-my": 531,
	"./ms-my.js": 531,
	"./ms.js": 530,
	"./mt": 532,
	"./mt.js": 532,
	"./my": 533,
	"./my.js": 533,
	"./nb": 534,
	"./nb.js": 534,
	"./ne": 535,
	"./ne.js": 535,
	"./nl": 536,
	"./nl-be": 537,
	"./nl-be.js": 537,
	"./nl.js": 536,
	"./nn": 538,
	"./nn.js": 538,
	"./pa-in": 539,
	"./pa-in.js": 539,
	"./pl": 540,
	"./pl.js": 540,
	"./pt": 541,
	"./pt-br": 542,
	"./pt-br.js": 542,
	"./pt.js": 541,
	"./ro": 543,
	"./ro.js": 543,
	"./ru": 544,
	"./ru.js": 544,
	"./sd": 545,
	"./sd.js": 545,
	"./se": 546,
	"./se.js": 546,
	"./si": 547,
	"./si.js": 547,
	"./sk": 548,
	"./sk.js": 548,
	"./sl": 549,
	"./sl.js": 549,
	"./sq": 550,
	"./sq.js": 550,
	"./sr": 551,
	"./sr-cyrl": 552,
	"./sr-cyrl.js": 552,
	"./sr.js": 551,
	"./ss": 553,
	"./ss.js": 553,
	"./sv": 554,
	"./sv.js": 554,
	"./sw": 555,
	"./sw.js": 555,
	"./ta": 556,
	"./ta.js": 556,
	"./te": 557,
	"./te.js": 557,
	"./tet": 558,
	"./tet.js": 558,
	"./th": 559,
	"./th.js": 559,
	"./tl-ph": 560,
	"./tl-ph.js": 560,
	"./tlh": 561,
	"./tlh.js": 561,
	"./tr": 562,
	"./tr.js": 562,
	"./tzl": 563,
	"./tzl.js": 563,
	"./tzm": 564,
	"./tzm-latn": 565,
	"./tzm-latn.js": 565,
	"./tzm.js": 564,
	"./uk": 566,
	"./uk.js": 566,
	"./ur": 567,
	"./ur.js": 567,
	"./uz": 568,
	"./uz-latn": 569,
	"./uz-latn.js": 569,
	"./uz.js": 568,
	"./vi": 570,
	"./vi.js": 570,
	"./x-pseudo": 571,
	"./x-pseudo.js": 571,
	"./yo": 572,
	"./yo.js": 572,
	"./zh-cn": 573,
	"./zh-cn.js": 573,
	"./zh-hk": 574,
	"./zh-hk.js": 574,
	"./zh-tw": 575,
	"./zh-tw.js": 575
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 1003;

/***/ }),

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CacheService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var CacheService = (function () {
    function CacheService() {
        this.fixedDelay = 30;
        this.cache = {};
    }
    CacheService.prototype.getRequestfromCache = function (request) {
        var cachedResponse = this.cache[request.urlWithParams] || null;
        if (cachedResponse) {
            var date = new Date();
            var diff = (date.getTime() - cachedResponse.start.getTime()) / 1000;
            if (diff < this.fixedDelay)
                return cachedResponse.httpEvent;
            else {
                delete this.cache[request.urlWithParams];
                return null;
            }
        }
        return null;
    };
    CacheService.prototype.setRequestIntoCache = function (request, responceEvent) {
        var date = new Date();
        this.cache[request.urlWithParams] = { httpEvent: responceEvent, start: date };
        return this.cache[request.urlWithParams].httpEvent;
    };
    CacheService.prototype.refreshGlobalCache = function () {
        this.cache = {};
    };
    CacheService.prototype.refreshSpecifiqueCache = function (url) {
        for (var _i = 0, url_1 = url; _i < url_1.length; _i++) {
            var key = url_1[_i];
            delete this.cache[key];
        }
    };
    CacheService.prototype.getSpecifiqueKeys = function (key) {
        var s = this.cache;
        var keys = [];
        for (var k in s) {
            if (this.isKeyInsideCache(key, k))
                keys.push(k);
        }
        return keys;
    };
    CacheService.prototype.isKeyInsideCache = function (key, cacheKey) {
        if (cacheKey.substr(0, key.length) === key)
            return true;
        return false;
    };
    CacheService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])()
    ], CacheService);
    return CacheService;
}());

//# sourceMappingURL=cache-service.js.map

/***/ }),

/***/ 1047:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HttpsRequestInterceptor; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_observable_ErrorObservable__ = __webpack_require__(262);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_observable_ErrorObservable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_observable_ErrorObservable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_observable_fromPromise__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_observable_fromPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_observable_fromPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_operators_catchError__ = __webpack_require__(185);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_operators_catchError___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators_catchError__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_operators_first__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_operators_first___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators_first__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_operators_switchMap__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_operators_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_operators_switchMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_operators_tap__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_operators_tap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_operators_tap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shared_services_auth_service__ = __webpack_require__(75);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var HttpsRequestInterceptor = (function () {
    function HttpsRequestInterceptor(authService) {
        this.authService = authService;
    }
    HttpsRequestInterceptor.prototype.intercept = function (req, next) {
        var _this = this;
        return this.authService.userChangesSnapshotObs().pipe(Object(__WEBPACK_IMPORTED_MODULE_5_rxjs_operators_switchMap__["switchMap"])(function (user) {
            if (user) {
                return _this.getToken(user).pipe(Object(__WEBPACK_IMPORTED_MODULE_5_rxjs_operators_switchMap__["switchMap"])(function (userToken) { return _this.sendRequestWithToken(req, next, userToken); }), Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators_catchError__["catchError"])(function (err) {
                    if (err.status === 401) {
                        return Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_observable_fromPromise__["fromPromise"])(_this.forceRefreshToken(user)).pipe(Object(__WEBPACK_IMPORTED_MODULE_5_rxjs_operators_switchMap__["switchMap"])(function (userToken) { return _this.sendRequestWithToken(req, next, userToken); }));
                    }
                    return __WEBPACK_IMPORTED_MODULE_1_rxjs_observable_ErrorObservable__["ErrorObservable"].create(err);
                }), Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators_catchError__["catchError"])(function (err) {
                    if (err.status === 401) {
                        return Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_observable_fromPromise__["fromPromise"])(_this.reAuthenticatedPassword(user)).pipe(Object(__WEBPACK_IMPORTED_MODULE_5_rxjs_operators_switchMap__["switchMap"])(function (userToken) { return _this.sendRequestWithToken(req, next, userToken); }));
                    }
                    return __WEBPACK_IMPORTED_MODULE_1_rxjs_observable_ErrorObservable__["ErrorObservable"].create(err);
                }), Object(__WEBPACK_IMPORTED_MODULE_6_rxjs_operators_tap__["tap"])(function () {
                    _this.deleteAllPromises();
                }));
            }
            return next.handle(req);
        }));
    };
    HttpsRequestInterceptor.prototype.getToken = function (identity, forceRefresh) {
        return Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_observable_fromPromise__["fromPromise"])(identity.getIdToken(forceRefresh));
    };
    HttpsRequestInterceptor.prototype.sendRequestWithToken = function (req, next, userToken) {
        var req2 = req.clone({
            setHeaders: {
                'Authorization': 'Bearer ' + userToken,
            },
        });
        return next.handle(req2);
    };
    HttpsRequestInterceptor.prototype.forceRefreshToken = function (user) {
        if (!this.forceRefreshPromise) {
            this.forceRefreshPromise = this.getToken(user, true).pipe(Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators_first__["first"])()).toPromise();
        }
        return this.forceRefreshPromise;
    };
    HttpsRequestInterceptor.prototype.reAuthenticatedPassword = function (user) {
        if (!this.reAuthenticatedPromise)
            this.reAuthenticatedPromise = this.authService.reAuthenticate(user)
                .then(function () { return user.getIdToken(); }).catch(function (error) {
                if (!error)
                    error = {};
                error.status = 401;
                throw error;
            });
        return this.reAuthenticatedPromise;
    };
    HttpsRequestInterceptor.prototype.deleteAllPromises = function () {
        if (this.reAuthenticatedPromise)
            this.reAuthenticatedPromise = null;
        if (this.forceRefreshPromise)
            this.forceRefreshPromise = null;
    };
    HttpsRequestInterceptor = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_7__shared_services_auth_service__["a" /* AuthService */]])
    ], HttpsRequestInterceptor);
    return HttpsRequestInterceptor;
}());

//# sourceMappingURL=http.interceptor.js.map

/***/ }),

/***/ 1048:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HttpCachingInterceptor; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(145);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_observable_of__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_observable_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_observable_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_operators__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_operators___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_services_cache_service__ = __webpack_require__(102);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HttpCachingInterceptor = (function () {
    function HttpCachingInterceptor(cachService) {
        this.cachService = cachService;
    }
    HttpCachingInterceptor.prototype.intercept = function (request, next) {
        var _this = this;
        if (request.method !== 'GET') {
            return next.handle(request);
        }
        var cachedResponse = this.cachService.getRequestfromCache(request);
        if (cachedResponse) {
            return cachedResponse;
        }
        return next.handle(request).pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["filter"])(function (event) { return event instanceof __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["e" /* HttpResponse */]; }), Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["tap"])(function (event) {
            _this.cachService.setRequestIntoCache(request, Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_observable_of__["of"])(event));
        }));
    };
    HttpCachingInterceptor = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__shared_services_cache_service__["a" /* CacheService */]])
    ], HttpCachingInterceptor);
    return HttpCachingInterceptor;
}());

//# sourceMappingURL=http.caching.interceptor.js.map

/***/ }),

/***/ 144:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ErrorService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_env__ = __webpack_require__(415);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__auth_service__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__error_messages__ = __webpack_require__(973);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__toast_service__ = __webpack_require__(246);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ErrorService = (function () {
    function ErrorService(platform, toastService, authService) {
        this.platform = platform;
        this.toastService = toastService;
        this.authService = authService;
    }
    ErrorService.prototype.handleError = function (error) {
        this.logError(error);
    };
    ErrorService.prototype.sendError = function (error) {
        if (this.isErrorValidationActive(error)) {
            var msg = error.error.error.map(function (e) { return e.msg; }).join('');
            this.handleError(msg);
        }
        else {
            console.log(error);
            if (!this.isAuthentificated(error)) {
                if (error.status === 404)
                    this.handleError('Le service est indisponible pour le moment. Réessayez plus tard.');
                else {
                    this.handleError('L\'application a rencontré des difficultés. Réessayez plus tard et prévenez-nous si le problème persiste.');
                }
            }
            else {
                this.authService.logout().then(function (value) {
                });
            }
        }
    };
    ErrorService.prototype.logError = function (error) {
        try {
            console.error(error);
            var tipMessage = null;
            if (error && error.code) {
                tipMessage = __WEBPACK_IMPORTED_MODULE_4__error_messages__["a" /* errorMessages */][error.code] || error.code;
            }
            if (error && error.error) {
                var err = error.error;
                tipMessage = __WEBPACK_IMPORTED_MODULE_4__error_messages__["a" /* errorMessages */][err.code] || err.message;
            }
            if (!tipMessage) {
                tipMessage = (__WEBPACK_IMPORTED_MODULE_1__app_env__["a" /* environment */].production
                    ? 'Navré, une erreur inattendue gêne l\'application. Vous pouvez essayer de relancer l\'application. ' +
                        'Prévenez le développeur si l\'erreur persiste.'
                    : error && error.message || error);
            }
            tipMessage = tipMessage.substr(0, 500);
            this.toastService.toast(tipMessage);
        }
        catch (e) {
            console.error(e);
        }
    };
    ErrorService.prototype.isErrorValidationActive = function (error) {
        return error.status === 404 && error.error.typeError != undefined;
    };
    ErrorService.prototype.isAuthentificated = function (error) {
        return (error.status === 401 || error.status === 400);
    };
    ErrorService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["l" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_5__toast_service__["a" /* ToastService */],
            __WEBPACK_IMPORTED_MODULE_3__auth_service__["a" /* AuthService */]])
    ], ErrorService);
    return ErrorService;
}());

//# sourceMappingURL=error.service.js.map

/***/ }),

/***/ 245:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SharedModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng_circle_progress__ = __webpack_require__(641);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_ba_header_ba_app_header__ = __webpack_require__(906);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_ba_item_complaint_ba_item_complaint__ = __webpack_require__(907);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_ba_item_folder_ba_item_folder__ = __webpack_require__(908);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_ba_item_ba_item__ = __webpack_require__(909);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_ba_side_menu_ba_side_menu__ = __webpack_require__(910);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_ba_side_menu_page_entries_service__ = __webpack_require__(416);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_progress_circle_bar_progress_circle_bar__ = __webpack_require__(974);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__directives_autofocus__ = __webpack_require__(975);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__directives_tab_index_tab_index_directive__ = __webpack_require__(976);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__directives_touched_workaroud__ = __webpack_require__(977);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pipes_dh__ = __webpack_require__(978);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pipes_id_pipe__ = __webpack_require__(979);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__services_adherents_adherents_dal__ = __webpack_require__(610);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__services_auth_service__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__services_cache_service__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__services_error_service__ = __webpack_require__(144);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__services_toast_service__ = __webpack_require__(246);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






















var SharedModule = (function () {
    function SharedModule() {
    }
    SharedModule_1 = SharedModule;
    // Pattern from https://stackoverflow.com/a/39653824/4717408
    SharedModule.forRoot = function () {
        // Providers are only declared with forRoot, which is expected to be called only once, in the root or core module.
        return {
            ngModule: SharedModule_1,
            providers: [
                __WEBPACK_IMPORTED_MODULE_20__services_error_service__["a" /* ErrorService */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_20__services_error_service__["a" /* ErrorService */] },
                __WEBPACK_IMPORTED_MODULE_21__services_toast_service__["a" /* ToastService */],
                __WEBPACK_IMPORTED_MODULE_17__services_adherents_adherents_dal__["a" /* AdherentsDal */],
                __WEBPACK_IMPORTED_MODULE_10__components_ba_side_menu_page_entries_service__["a" /* PageEntriesService */],
                __WEBPACK_IMPORTED_MODULE_18__services_auth_service__["a" /* AuthService */],
                __WEBPACK_IMPORTED_MODULE_19__services_cache_service__["a" /* CacheService */],
            ],
        };
    };
    SharedModule = SharedModule_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["e" /* IonicModule */],
                __WEBPACK_IMPORTED_MODULE_4_ng_circle_progress__["a" /* NgCircleProgressModule */].forRoot(),
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__components_ba_header_ba_app_header__["a" /* AppHeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_8__components_ba_item_ba_item__["a" /* ItemComponent */],
                __WEBPACK_IMPORTED_MODULE_6__components_ba_item_complaint_ba_item_complaint__["a" /* ItemComplaintComponent */],
                __WEBPACK_IMPORTED_MODULE_7__components_ba_item_folder_ba_item_folder__["a" /* ItemFolderComponent */],
                __WEBPACK_IMPORTED_MODULE_9__components_ba_side_menu_ba_side_menu__["a" /* SideMenuComponent */],
                __WEBPACK_IMPORTED_MODULE_11__components_progress_circle_bar_progress_circle_bar__["a" /* ProgressCircleBarComponent */],
                __WEBPACK_IMPORTED_MODULE_13__directives_tab_index_tab_index_directive__["a" /* TabIndexDirective */],
                __WEBPACK_IMPORTED_MODULE_14__directives_touched_workaroud__["a" /* TouchedWorkaroundDirective */],
                __WEBPACK_IMPORTED_MODULE_12__directives_autofocus__["a" /* AutofocusDirective */],
                __WEBPACK_IMPORTED_MODULE_16__pipes_id_pipe__["a" /* IdPipe */],
                __WEBPACK_IMPORTED_MODULE_15__pipes_dh__["a" /* DhPipe */],
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_8__components_ba_item_ba_item__["a" /* ItemComponent */],
                __WEBPACK_IMPORTED_MODULE_6__components_ba_item_complaint_ba_item_complaint__["a" /* ItemComplaintComponent */],
                __WEBPACK_IMPORTED_MODULE_7__components_ba_item_folder_ba_item_folder__["a" /* ItemFolderComponent */],
                __WEBPACK_IMPORTED_MODULE_9__components_ba_side_menu_ba_side_menu__["a" /* SideMenuComponent */],
                __WEBPACK_IMPORTED_MODULE_5__components_ba_header_ba_app_header__["a" /* AppHeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_13__directives_tab_index_tab_index_directive__["a" /* TabIndexDirective */],
                __WEBPACK_IMPORTED_MODULE_14__directives_touched_workaroud__["a" /* TouchedWorkaroundDirective */],
                __WEBPACK_IMPORTED_MODULE_12__directives_autofocus__["a" /* AutofocusDirective */],
                __WEBPACK_IMPORTED_MODULE_11__components_progress_circle_bar_progress_circle_bar__["a" /* ProgressCircleBarComponent */],
                __WEBPACK_IMPORTED_MODULE_16__pipes_id_pipe__["a" /* IdPipe */],
                __WEBPACK_IMPORTED_MODULE_15__pipes_dh__["a" /* DhPipe */],
            ],
        })
    ], SharedModule);
    return SharedModule;
    var SharedModule_1;
}());

//# sourceMappingURL=shared.module.js.map

/***/ }),

/***/ 246:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ToastService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(39);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ToastService = (function () {
    function ToastService(toastCtrl) {
        this.toastCtrl = toastCtrl;
    }
    ToastService.prototype.toast = function (codeOrMessage, opts) {
        var toastOptions = (opts) ? opts : {
            message: codeOrMessage,
            showCloseButton: true,
            closeButtonText: 'Fermer',
            duration: 10000,
        };
        var toast = this.toastCtrl.create(toastOptions);
        toast.present();
    };
    ToastService.prototype.infoToast = function (message) {
        var toastOptions = {
            message: message,
            showCloseButton: false,
            duration: 2500,
        };
        var toast = this.toastCtrl.create(toastOptions);
        toast.present();
    };
    ToastService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ToastController */]])
    ], ToastService);
    return ToastService;
}());

//# sourceMappingURL=toast.service.js.map

/***/ }),

/***/ 257:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 257;

/***/ }),

/***/ 306:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"auth/auth.module": [
		1049,
		0
	],
	"complaints/add-complaint/add-complaint.module": [
		1050,
		3
	],
	"complaints/complaint-detail/complaint-detail.module": [
		1051,
		2
	],
	"complaints/complaint-list/complaint-list.module": [
		1052,
		6
	],
	"dashboard/dashboard.module": [
		1053,
		1
	],
	"folders/folder-detail/folder-detail.module": [
		1054,
		4
	],
	"folders/folder-list/folder-list.module": [
		1055,
		5
	],
	"shared/prompt-password/prompt-password.module": [
		1056,
		7
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 306;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 415:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// Development environment.
// Don't forget to update both development and production environments when making changes!
// Built from https://github.com/gshigeto/ionic-environment-variables
var environment = {
    production: false,
    firebase: {
        apiKey: "AIzaSyDRmGTyIdTyZnTSZge0a_lAx_6ymRCQhj8",
        authDomain: "beassur-assurance.firebaseapp.com",
        databaseURL: "https://beassur-assurance.firebaseio.com",
        projectId: "beassur-assurance",
        storageBucket: "beassur-assurance.appspot.com",
        messagingSenderId: "595449543702"
    },
};
//# sourceMappingURL=environment.dev.js.map

/***/ }),

/***/ 416:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageEntriesService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PageEntriesService = (function () {
    function PageEntriesService() {
        this.pages = [];
        this.pages = [
            { id: 'dashbaord', title: 'Accueil', component: 'dashboard', icon: 'be-assure-home', isEnabled: true },
            { id: 'folders', title: 'Dossiers', component: 'folder-list', icon: 'be-assure-folder', isEnabled: false },
            {
                id: 'complaints',
                title: 'Réclamations',
                component: 'complaint-list',
                icon: 'be-assure-complaint',
                isEnabled: false,
            },
            {
                id: 'logout',
                title: 'Se déconnecter',
                component: 'auth',
                icon: 'be-assure-logout',
                isEnabled: false,
                logout: true,
            },
        ];
    }
    PageEntriesService.prototype.getPages = function () {
        return this.pages;
    };
    PageEntriesService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], PageEntriesService);
    return PageEntriesService;
}());

//# sourceMappingURL=page-entries.service.js.map

/***/ }),

/***/ 456:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_observable_combineLatest__ = __webpack_require__(177);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_observable_combineLatest___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_observable_combineLatest__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_auth_service__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_services_error_service__ = __webpack_require__(144);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var wizardPages = [
    'auth',
];
var permissedPages = [
    'dashboard',
    'folder-detail',
    'folder-detail-page',
    'prompt-password',
    'folder-list',
    'folder-list-page',
    'complaint-list',
    'complaint-list-page',
    'complaint-detail',
    'complaint-detail-page',
    'add-complaint',
    'add-complaint-page',
];
var NavService = (function () {
    function NavService(authService, errorService) {
        this.authService = authService;
        this.errorService = errorService;
    }
    NavService.prototype.initNav = function (nav) {
        var _this = this;
        if (this.isThereNoURL(nav)) {
            nav.setRoot('auth');
        }
        Object(__WEBPACK_IMPORTED_MODULE_1_rxjs_observable_combineLatest__["combineLatest"])(this.authService.userChanges(), nav.viewWillEnter)
            .subscribe(function (_a) {
            var user = _a[0], view = _a[1];
            if (!view) {
                return;
            }
            var viewName = view.id + '';
            if (user) {
                if (_this.isPageNeedAuthentification(viewName.split('/')[0])) {
                    return;
                }
                nav.setRoot('dashboard');
            }
            else {
                if (_this.isWizardPage(viewName.split('/')[0])) {
                    return;
                }
                nav.setRoot('auth');
            }
        }, function (error) {
            _this.errorService.handleError(error);
        });
    };
    NavService.prototype.redirectTo = function (nav, pageName, fromPage, back) {
        if (!pageName || pageName === fromPage) {
            return;
        }
        nav.setRoot(pageName, null, {
            animate: true,
            direction: back ? 'back' : 'forward',
            keyboardClose: false,
        }).catch(function (e) { return console.error(e); });
    };
    NavService.prototype.isWizardPage = function (page) {
        return !page || (wizardPages.indexOf(page) > -1);
    };
    NavService.prototype.isPageNeedAuthentification = function (page) {
        return !page || (permissedPages.indexOf(page) > -1);
    };
    NavService.prototype.isThereNoURL = function (nav) {
        return nav._linker._history.indexOf('/') == 0;
    };
    NavService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__shared_services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_3__shared_services_error_service__["a" /* ErrorService */]])
    ], NavService);
    return NavService;
}());

//# sourceMappingURL=nav.service.js.map

/***/ }),

/***/ 607:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return urlEndPoints; });
var urlEndPoints = {
    adherentsUrl: "https://us-central1-beassur-assurance.cloudfunctions.net/api/adherents/",
    foldersUrl: 'https://us-central1-beassur-assurance.cloudfunctions.net/api/adherents/K498220/folders/',
    complaintsUrl: 'https://us-central1-beassur-assurance.cloudfunctions.net/api/adherents/K498220/complaints/',
    folderDetailUrl: "https://us-central1-beassur-assurance.cloudfunctions.net/api/folder/",
    complaintDetailUrl: "https://us-central1-beassur-assurance.cloudfunctions.net/api/complaint/",
    statsUrl: 'https://us-central1-beassur-assurance.cloudfunctions.net/api/stats/',
};
//# sourceMappingURL=endPoints.js.map

/***/ }),

/***/ 609:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return FolderStatusColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FolderStatus; });
var FolderStatusColor;
(function (FolderStatusColor) {
    FolderStatusColor["SENT"] = "green";
    FolderStatusColor["WAITING"] = "orange";
    FolderStatusColor["CANCELED"] = "red";
    FolderStatusColor["UNKNOWN"] = "gray";
})(FolderStatusColor || (FolderStatusColor = {}));
var FolderStatus;
(function (FolderStatus) {
    FolderStatus["green"] = "Rembours\u00E9";
    FolderStatus["orange"] = "En cours de traitement";
    FolderStatus["red"] = "Rejet\u00E9";
    FolderStatus["gray"] = "Inconnue";
})(FolderStatus || (FolderStatus = {}));
//# sourceMappingURL=folder.model.js.map

/***/ }),

/***/ 610:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdherentsDal; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(145);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_firestore__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_observable_combineLatest__ = __webpack_require__(177);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_observable_combineLatest___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_observable_combineLatest__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_operators__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_operators___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__config_endPoints__ = __webpack_require__(607);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AdherentsDal = (function () {
    function AdherentsDal(httpClient, afs) {
        this.httpClient = httpClient;
        this.afs = afs;
    }
    AdherentsDal.prototype.getAdherentsByCIN = function (cin, adherentNum) {
        var _this = this;
        return Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_observable_combineLatest__["combineLatest"])(this.getAdherentsByCinFromSaleFores(cin, adherentNum), this.getListAdherentsByCinFromFirestore(cin))
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["map"])(function (a) {
            return _this.makeTaskTofilterAdherentList(a);
        }));
    };
    AdherentsDal.prototype.getAdherentsByCinFromSaleFores = function (cin, adherentNum) {
        var params = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["d" /* HttpParams */]({
            fromObject: {
                cin: cin,
                adherentNum: adherentNum,
            },
        });
        return this.httpClient.get(__WEBPACK_IMPORTED_MODULE_5__config_endPoints__["a" /* urlEndPoints */].adherentsUrl, { params: params });
    };
    AdherentsDal.prototype.getListAdherentsByCinFromFirestore = function (cin) {
        return this.afs.collection('users', function (ref) {
            return ref.where('cin', '==', cin);
        }).valueChanges().pipe(Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["first"])());
    };
    AdherentsDal.prototype.makeTaskTofilterAdherentList = function (_a) {
        var adherentSalesForce = _a[0], adherentFirestore = _a[1];
        if (adherentSalesForce) {
            var registeredUsersIds = [];
            for (var _i = 0, adherentFirestore_1 = adherentFirestore; _i < adherentFirestore_1.length; _i++) {
                var adherent = adherentFirestore_1[_i];
                registeredUsersIds.push(adherent.id + '');
            }
            for (var _b = 0, adherentSalesForce_1 = adherentSalesForce; _b < adherentSalesForce_1.length; _b++) {
                var adherent = adherentSalesForce_1[_b];
                adherent.isRegistered = (registeredUsersIds.indexOf(adherent.id + '') > -1);
            }
        }
        return adherentSalesForce;
    };
    AdherentsDal = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["b" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_2_angularfire2_firestore__["a" /* AngularFirestore */]])
    ], AdherentsDal);
    return AdherentsDal;
}());

//# sourceMappingURL=adherents.dal.js.map

/***/ }),

/***/ 611:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(612);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(616);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 616:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_splash_screen__ = __webpack_require__(258);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_status_bar__ = __webpack_require__(263);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(1000);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__core_core_module__ = __webpack_require__(1001);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_moment__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_storage__ = __webpack_require__(608);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_angularfire2__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_angularfire2_database__ = __webpack_require__(1004);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_angularfire2_auth__ = __webpack_require__(398);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_angularfire2_firestore__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__environments_environment_dev__ = __webpack_require__(415);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_native_screen_orientation__ = __webpack_require__(1045);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__shared_shared_module__ = __webpack_require__(245);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__angular_common__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__angular_common_locales_fr__ = __webpack_require__(1046);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__angular_common_http__ = __webpack_require__(145);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__core_http_interceptor__ = __webpack_require__(1047);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__core_http_caching_interceptor__ = __webpack_require__(1048);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__shared_services_cache_service__ = __webpack_require__(102);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






















Object(__WEBPACK_IMPORTED_MODULE_16__angular_common__["i" /* registerLocaleData */])(__WEBPACK_IMPORTED_MODULE_17__angular_common_locales_fr__["a" /* default */], 'fr-FR');
__WEBPACK_IMPORTED_MODULE_7_moment__["locale"]('fr');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* BeAssurApp */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* BeAssurApp */], {
                    preloadModules: true
                }, {
                    links: [
                        { loadChildren: 'auth/auth.module#AuthPageModule', name: 'auth', segment: 'auth', priority: 'high', defaultHistory: [] },
                        { loadChildren: 'complaints/add-complaint/add-complaint.module#AddComplaintPageModule', name: 'add-complaint', segment: 'add-complaint/:folderId', priority: 'low', defaultHistory: [] },
                        { loadChildren: 'complaints/complaint-detail/complaint-detail.module#ComplaintDetailPageModule', name: 'complaint-detail-page', segment: 'complaint-detail/:id', priority: 'low', defaultHistory: ['complaint-list'] },
                        { loadChildren: 'complaints/complaint-list/complaint-list.module#ComplaintListPageModule', name: 'complaint-list', segment: 'complaint-list', priority: 'low', defaultHistory: [] },
                        { loadChildren: 'dashboard/dashboard.module#DashboardPageModule', name: 'dashboard', segment: 'dashboard', priority: 'low', defaultHistory: [] },
                        { loadChildren: 'folders/folder-detail/folder-detail.module#FolderDetailModule', name: 'folder-detail-page', segment: 'folder-detail/:id', priority: 'low', defaultHistory: ['folder-list'] },
                        { loadChildren: 'folders/folder-list/folder-list.module#FolderListPageModule', name: 'folder-list', segment: 'folder-list', priority: 'low', defaultHistory: [] },
                        { loadChildren: 'shared/prompt-password/prompt-password.module#PromptPasswordPageModule', name: 'prompt-password', segment: 'prompt-password', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_8__ionic_storage__["a" /* IonicStorageModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_6__core_core_module__["a" /* CoreModule */],
                __WEBPACK_IMPORTED_MODULE_9_angularfire2__["a" /* AngularFireModule */].initializeApp(__WEBPACK_IMPORTED_MODULE_13__environments_environment_dev__["a" /* environment */].firebase),
                __WEBPACK_IMPORTED_MODULE_10_angularfire2_database__["a" /* AngularFireDatabaseModule */],
                __WEBPACK_IMPORTED_MODULE_11_angularfire2_auth__["b" /* AngularFireAuthModule */],
                __WEBPACK_IMPORTED_MODULE_12_angularfire2_firestore__["b" /* AngularFirestoreModule */],
                __WEBPACK_IMPORTED_MODULE_18__angular_common_http__["c" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_15__shared_shared_module__["a" /* SharedModule */],
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4_ionic_angular__["d" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* BeAssurApp */],
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_2__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_14__ionic_native_screen_orientation__["a" /* ScreenOrientation */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* LOCALE_ID */], useValue: 'fr-FR' },
                { provide: __WEBPACK_IMPORTED_MODULE_18__angular_common_http__["a" /* HTTP_INTERCEPTORS */], useClass: __WEBPACK_IMPORTED_MODULE_19__core_http_interceptor__["a" /* HttpsRequestInterceptor */], multi: true },
                { provide: __WEBPACK_IMPORTED_MODULE_18__angular_common_http__["a" /* HTTP_INTERCEPTORS */], useClass: __WEBPACK_IMPORTED_MODULE_20__core_http_caching_interceptor__["a" /* HttpCachingInterceptor */], multi: true },
                __WEBPACK_IMPORTED_MODULE_21__shared_services_cache_service__["a" /* CacheService */],
            ],
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 75:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__ = __webpack_require__(398);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_firestore__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase_app__ = __webpack_require__(967);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase_app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_firebase_app__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_operators_first__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_operators_first___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_operators_first__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};






var AuthService = (function () {
    function AuthService(afAuth, afs, modalCtrl) {
        this.afAuth = afAuth;
        this.afs = afs;
        this.modalCtrl = modalCtrl;
        this.authState = null;
    }
    AuthService.prototype.signUp = function (newUser, password) {
        return __awaiter(this, void 0, void 0, function () {
            var createdUser, userRef, userData;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.afAuth.auth.createUserWithEmailAndPassword(newUser.email, password)];
                    case 1:
                        createdUser = _a.sent();
                        userRef = this.afs.doc("users/" + createdUser.uid);
                        userData = {
                            uid: createdUser.uid,
                            id: newUser.id,
                            name: newUser.name,
                            email: newUser.email,
                            cin: newUser.cin.toLowerCase(),
                            adherentNum: newUser.adherentNum.toLowerCase(),
                        };
                        return [2 /*return*/, userRef.set(userData)];
                }
            });
        });
    };
    AuthService.prototype.resetPassword = function (email) {
        return this.afAuth.auth.sendPasswordResetEmail(email);
    };
    AuthService.prototype.setPersistence = function (rememberMe) {
        if (rememberMe) {
            __WEBPACK_IMPORTED_MODULE_3_firebase_app__["auth"]().setPersistence(__WEBPACK_IMPORTED_MODULE_3_firebase_app__["auth"].Auth.Persistence.LOCAL);
        }
        else {
            __WEBPACK_IMPORTED_MODULE_3_firebase_app__["auth"]().setPersistence(__WEBPACK_IMPORTED_MODULE_3_firebase_app__["auth"].Auth.Persistence.SESSION);
        }
    };
    AuthService.prototype.loginWithEmail = function (email, password) {
        return this.afAuth.auth.signInWithEmailAndPassword(email, password)
            .then(function () {
        })
            .catch(function (error) {
            throw error;
        });
    };
    AuthService.prototype.logout = function () {
        return this.afAuth.auth.signOut();
    };
    AuthService.prototype.userChanges = function () {
        return this.afAuth.authState;
    };
    AuthService.prototype.userChangesSnapshotObs = function () {
        return this.afAuth.authState.pipe(Object(__WEBPACK_IMPORTED_MODULE_5_rxjs_operators_first__["first"])());
    };
    AuthService.prototype.reAuthenticate = function (identity) {
        if (!identity) {
            return Promise.reject(Error('Erreur de connection'));
        }
        return this.promptPassword()
            .then(function (password) {
            if (!password) {
                return Promise.reject(Error('Erreur de connection'));
            }
            var credentials = __WEBPACK_IMPORTED_MODULE_3_firebase_app__["auth"].EmailAuthProvider.credential(identity.email, password);
            return identity.reauthenticateWithCredential(credentials);
        });
    };
    AuthService.prototype.promptPassword = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var modalPage = _this.modalCtrl.create('prompt-password');
            modalPage.present().catch(reject);
            modalPage.onWillDismiss(resolve);
        });
    };
    AuthService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__["a" /* AngularFireAuth */],
            __WEBPACK_IMPORTED_MODULE_2_angularfire2_firestore__["a" /* AngularFirestore */],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["h" /* ModalController */]])
    ], AuthService);
    return AuthService;
}());

//# sourceMappingURL=auth.service.js.map

/***/ }),

/***/ 906:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppHeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppHeaderComponent = (function () {
    function AppHeaderComponent() {
    }
    AppHeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'ba-app-header',template:/*ion-inline-start:"/Users/antoineol/nw/beassur/insurance/src/app/shared/components/ba-header/ba-app-header.html"*/'<ion-row class="ion-row-class">\n  <ion-col col-2 text-center>\n    <ion-icon name="my-header-menu" menuToggle></ion-icon>\n  </ion-col>\n  <ion-col col-8 text-center>\n    <ion-title class="title-header">Accueil</ion-title>\n  </ion-col>\n</ion-row>\n'/*ion-inline-end:"/Users/antoineol/nw/beassur/insurance/src/app/shared/components/ba-header/ba-app-header.html"*/
        })
    ], AppHeaderComponent);
    return AppHeaderComponent;
}());

//# sourceMappingURL=ba-app-header.js.map

/***/ }),

/***/ 907:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ItemComplaintComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(39);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ItemComplaintComponent = (function () {
    function ItemComplaintComponent(navCtrl) {
        this.navCtrl = navCtrl;
    }
    ItemComplaintComponent.prototype.showComplanitsDetails = function () {
        this.navCtrl.push('complaint-detail-page', { complaint: this.complaint, id: this.complaint.id });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], ItemComplaintComponent.prototype, "complaint", void 0);
    ItemComplaintComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'ba-item-complaint',template:/*ion-inline-start:"/Users/antoineol/nw/beassur/insurance/src/app/shared/components/ba-item-complaint/ba-item-complaint.html"*/'<ba-item [bulletColor]="complaint.status"\n         [itemTitle]="complaint.reason"\n         (click)="showComplanitsDetails()">\n  <p class="folder-id">\n    {{complaint.folderId | idPipe}}\n  </p>\n  <p class="text-content">\n    {{complaint.description}}\n  </p>\n</ba-item>\n\n'/*ion-inline-end:"/Users/antoineol/nw/beassur/insurance/src/app/shared/components/ba-item-complaint/ba-item-complaint.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */]])
    ], ItemComplaintComponent);
    return ItemComplaintComponent;
}());

//# sourceMappingURL=ba-item-complaint.js.map

/***/ }),

/***/ 908:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ItemFolderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__folders_folder_model__ = __webpack_require__(609);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(39);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ItemFolderComponent = (function () {
    function ItemFolderComponent(navCtrl) {
        this.navCtrl = navCtrl;
        this.folderStatusColors = __WEBPACK_IMPORTED_MODULE_1__folders_folder_model__["b" /* FolderStatusColor */];
    }
    ItemFolderComponent.prototype.showFolderDetails = function () {
        this.navCtrl.push('folder-detail-page', { folder: this.folder, id: this.folder.id });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], ItemFolderComponent.prototype, "folder", void 0);
    ItemFolderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'ba-item-folder',template:/*ion-inline-start:"/Users/antoineol/nw/beassur/insurance/src/app/shared/components/ba-item-folder/ba-item-folder.html"*/'<ba-item [itemTitle]="folder.id | idPipe"\n         [bulletColor]="folder.status"\n         (click)="showFolderDetails()">\n  <p class="text-content"> Date de déclaration : {{ folder.declarationDate | date:\'dd/MM/yyyy\'}}\n  </p>\n  <p class="text-content"> Frais engagés: {{folder.fees | dhPipe}}\n    <strong *ngIf="folder.status==folderStatusColors.SENT">, Frais remboursés : {{folder.refundedAmount |\n      dhPipe}}</strong>\n  </p>\n</ba-item>\n'/*ion-inline-end:"/Users/antoineol/nw/beassur/insurance/src/app/shared/components/ba-item-folder/ba-item-folder.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* NavController */]])
    ], ItemFolderComponent);
    return ItemFolderComponent;
}());

//# sourceMappingURL=ba-item-folder.js.map

/***/ }),

/***/ 909:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ItemComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ItemComponent = (function () {
    function ItemComponent() {
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", String)
    ], ItemComponent.prototype, "itemTitle", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", String)
    ], ItemComponent.prototype, "bulletColor", void 0);
    ItemComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'ba-item',template:/*ion-inline-start:"/Users/antoineol/nw/beassur/insurance/src/app/shared/components/ba-item/ba-item.html"*/'<button ion-item class="margin-left-0" right no-padding no-lines>\n  <ion-row>\n    <ion-col col-2 no-padding text-center>\n      <span class="{{bulletColor}}-bullet"></span>\n    </ion-col>\n    <ion-col col-10 no-padding>\n      <div class="item-header">{{itemTitle}}</div>\n      <ng-content></ng-content>\n    </ion-col>\n  </ion-row>\n</button>\n'/*ion-inline-end:"/Users/antoineol/nw/beassur/insurance/src/app/shared/components/ba-item/ba-item.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], ItemComponent);
    return ItemComponent;
}());

//# sourceMappingURL=ba-item.js.map

/***/ }),

/***/ 910:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SideMenuComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_cache_service__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_error_service__ = __webpack_require__(144);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__page_entries_service__ = __webpack_require__(416);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var SideMenuComponent = (function () {
    function SideMenuComponent(errorService, authService, pageEntriesService, app, cacheService) {
        this.errorService = errorService;
        this.authService = authService;
        this.pageEntriesService = pageEntriesService;
        this.app = app;
        this.cacheService = cacheService;
    }
    SideMenuComponent.prototype.ngOnInit = function () {
        this.pages = this.pageEntriesService.getPages();
    };
    SideMenuComponent.prototype.clickMenuItem = function (item) {
        var _this = this;
        if (this.app != undefined && this.app.getActiveNavs() != undefined && this.app.getActiveNavs().length != 0
            && this.app.getActiveNavs()[0].getActive() != undefined) {
            if (item.logout != undefined && item.logout == true) {
                this.authService.logout()
                    .then(function () {
                    _this.cacheService.refreshGlobalCache();
                }).catch(function (error) { return _this.errorService.handleError(error); });
            }
            else {
                if (item.component != '') {
                    this.app.getActiveNavs()[0].setRoot(item.component);
                }
            }
        }
    };
    SideMenuComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'ba-side-menu',template:/*ion-inline-start:"/Users/antoineol/nw/beassur/insurance/src/app/shared/components/ba-side-menu/ba-side-menu.html"*/'<ion-row>\n  <ion-col offset-2 col-8 text-center>\n    <img class="img-structure" src="assets/imgs/beassur_logo.png"/>\n  </ion-col>\n</ion-row>\n\n<ion-list class="ion-list-structure">\n  <div class="hline"></div>\n    <ion-item class="ion-item-structure" *ngFor="let page of pages" no-padding no-border no-margin\n              (click)="clickMenuItem(page)" menuClose>\n      <ng-container *ngIf="app!=undefined && app.getActiveNavs()!=undefined && app.getActiveNavs().length!=0\n                  && app.getActiveNavs()[0].getActive()!=undefined">\n        <ion-row  [ngClass]="{\'ion-item-active\': (app.getActiveNavs()[0].getActive().id==page.component)}" >\n          <ion-col col-2>\n            <ion-icon name="{{page.icon}}"></ion-icon>\n          </ion-col>\n          <ion-col col-6>{{page.title}}</ion-col>\n        </ion-row>\n      </ng-container>\n    </ion-item>\n</ion-list>\n'/*ion-inline-end:"/Users/antoineol/nw/beassur/insurance/src/app/shared/components/ba-side-menu/ba-side-menu.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__services_error_service__["a" /* ErrorService */],
            __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_5__page_entries_service__["a" /* PageEntriesService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* App */],
            __WEBPACK_IMPORTED_MODULE_3__services_cache_service__["a" /* CacheService */]])
    ], SideMenuComponent);
    return SideMenuComponent;
}());

//# sourceMappingURL=ba-side-menu.js.map

/***/ }),

/***/ 973:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return errorMessages; });
var errorMessages = {
    "auth/invalid-email": "Email non valide.",
    "auth/user-not-found": "Nous n'avons pas trouvé d'utilisateur associé à cette adresse e-mail.",
    "auth/email-already-in-use": "Adresse email déjà utilisée.",
    "auth/wrong-password": "Mot de passe incorrect.",
    "auth/other": "Erreur lors de l'authentification.",
    "auth/network-request-failed": "Absence de connexion internet. Veuillez vérifier votre connexion et réessayez.",
    "ERR-ADH-001": "Aucun adhérent n'est lié à ce numéro de matricule.",
    "ERR-FLD-001": "Oups ! Ce dossier n'existe pas.",
    "ERR-CPL-001": "Oups ! Cette réclamation n'existe pas."
};
//# sourceMappingURL=error.messages.js.map

/***/ }),

/***/ 974:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProgressCircleBarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProgressCircleBarComponent = (function () {
    function ProgressCircleBarComponent() {
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Number)
    ], ProgressCircleBarComponent.prototype, "progress", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Number)
    ], ProgressCircleBarComponent.prototype, "total", void 0);
    ProgressCircleBarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'ba-progress-circle-bar',template:/*ion-inline-start:"/Users/antoineol/nw/beassur/insurance/src/app/shared/components/progress-circle-bar/progress-circle-bar.html"*/'<div align-items-center>\n  <div class="content-class progress-header" text-center>\n    <span class="first-number">{{progress}}</span><span>/{{total}}</span>\n  </div>\n  <div class="content-class progress-status">dossiers traités</div>\n  <circle-progress class="rogress-class"\n                   [percent]="(progress/total)*100"\n                   [radius]="45"\n                   [space]="-4"\n                   [outerStrokeWidth]="4"\n                   [innerStrokeWidth]="4"\n                   [outerStrokeColor]="\'#2DB6C3\'"\n                   [innerStrokeColor]="\'#DCF3F5\'"\n                   [animation]="true"\n                   [animationDuration]="0"\n                   [showTitle]="false"\n                   [showSubtitle]="false"\n                   [showUnits]="false">\n  </circle-progress>\n\n</div>\n\n\n'/*ion-inline-end:"/Users/antoineol/nw/beassur/insurance/src/app/shared/components/progress-circle-bar/progress-circle-bar.html"*/
        })
    ], ProgressCircleBarComponent);
    return ProgressCircleBarComponent;
}());

//# sourceMappingURL=progress-circle-bar.js.map

/***/ }),

/***/ 975:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AutofocusDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(39);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AutofocusDirective = (function () {
    function AutofocusDirective(el, inputRef) {
        this.el = el;
        this.inputRef = inputRef;
    }
    Object.defineProperty(AutofocusDirective.prototype, "autofocus", {
        set: function (condition) {
            this._autofocus = condition !== false;
        },
        enumerable: true,
        configurable: true
    });
    AutofocusDirective.prototype.ngAfterViewInit = function () {
        var _this = this;
        if (this._autofocus || this._autofocus == null) {
            setTimeout(function () {
                _this.inputRef.setFocus();
                _this.el.nativeElement.focus(); //For SSR (server side rendering) this is not safe. Use: https://github.com/angular/angular/issues/15008#issuecomment-285141070)
            }, 150);
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], AutofocusDirective.prototype, "autofocus", null);
    AutofocusDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["s" /* Directive */])({
            selector: '[autofocus]'
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* TextInput */]])
    ], AutofocusDirective);
    return AutofocusDirective;
}());

//# sourceMappingURL=autofocus.js.map

/***/ }),

/***/ 976:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabIndexDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(39);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TabIndexDirective = (function () {
    function TabIndexDirective(inputRef) {
        this.inputRef = inputRef;
    }
    TabIndexDirective.prototype.onInputChange = function (e) {
        var code = e.keyCode || e.which;
        if (code === 13) {
            e.preventDefault();
            try {
                this.inputRef.focusNext();
            }
            catch (err) {
                console.log('No next element to focus, skipping.');
                this.inputRef.setBlur();
            }
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* HostListener */])('keydown', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [KeyboardEvent]),
        __metadata("design:returntype", void 0)
    ], TabIndexDirective.prototype, "onInputChange", null);
    TabIndexDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["s" /* Directive */])({
            selector: '[tiTabIndex]'
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* TextInput */]])
    ], TabIndexDirective);
    return TabIndexDirective;
}());

//# sourceMappingURL=tab-index.directive.js.map

/***/ }),

/***/ 977:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TouchedWorkaroundDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

//input ng-touched not reflected properly for list-item
//https://github.com/ionic-team/ionic/issues/13078
var TouchedWorkaroundDirective = (function () {
    function TouchedWorkaroundDirective(element, renderer) {
        this.element = element;
        this.renderer = renderer;
    }
    TouchedWorkaroundDirective.prototype.ngOnInit = function () {
        this.parent = this.element.nativeElement.parentElement.parentElement.parentElement;
    };
    TouchedWorkaroundDirective.prototype.onBlur = function () {
        this.renderer.addClass(this.parent, 'ng-touched');
        this.renderer.removeClass(this.parent, 'ng-untouched');
    };
    TouchedWorkaroundDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["s" /* Directive */])({
            selector: '[touched-workaround]',
            host: {
                '(ionBlur)': 'onBlur()'
            }
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["W" /* Renderer2 */]])
    ], TouchedWorkaroundDirective);
    return TouchedWorkaroundDirective;
}());

//# sourceMappingURL=touched-workaroud.js.map

/***/ }),

/***/ 978:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DhPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var DhPipe = (function () {
    function DhPipe() {
    }
    DhPipe.prototype.transform = function (value) {
        return value + " Dhs";
    };
    DhPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["S" /* Pipe */])({
            name: 'dhPipe',
        })
    ], DhPipe);
    return DhPipe;
}());

//# sourceMappingURL=dh.js.map

/***/ }),

/***/ 979:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IdPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var IdPipe = (function () {
    function IdPipe() {
    }
    IdPipe.prototype.transform = function (value) {
        return "#" + value;
    };
    IdPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["S" /* Pipe */])({
            name: 'idPipe',
        })
    ], IdPipe);
    return IdPipe;
}());

//# sourceMappingURL=id.pipe.js.map

/***/ })

},[611]);
//# sourceMappingURL=main.js.map