webpackJsonp([4],{

/***/ 1054:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FolderDetailModule", function() { return FolderDetailModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__folder_detail__ = __webpack_require__(1082);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_shared_module__ = __webpack_require__(245);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__folders_module__ = __webpack_require__(1061);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_services_Load_service__ = __webpack_require__(1057);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var FolderDetailModule = (function () {
    function FolderDetailModule() {
    }
    FolderDetailModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__folder_detail__["a" /* FolderDetailPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__folder_detail__["a" /* FolderDetailPage */]),
                __WEBPACK_IMPORTED_MODULE_3__shared_shared_module__["a" /* SharedModule */],
                __WEBPACK_IMPORTED_MODULE_4__folders_module__["a" /* FoldersModule */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_5__shared_services_Load_service__["a" /* LoadService */]
            ]
        })
    ], FolderDetailModule);
    return FolderDetailModule;
}());

//# sourceMappingURL=folder-detail.module.js.map

/***/ }),

/***/ 1057:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoadService; });
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


var LoadService = (function () {
    function LoadService(loadCtrl) {
        this.loadCtrl = loadCtrl;
    }
    LoadService.prototype.start = function (msg) {
        this.loader = this.loadCtrl.create({
            content: 'Chargement ...',
        });
        if (msg) {
            this.loader.setContent(msg);
        }
        this.loader.present();
    };
    LoadService.prototype.stop = function () {
        if (this.loader) {
            this.loader.dismiss();
        }
    };
    LoadService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */]])
    ], LoadService);
    return LoadService;
}());

//# sourceMappingURL=Load.service.js.map

/***/ }),

/***/ 1059:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FoldersDal; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(145);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_config_endPoints__ = __webpack_require__(607);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FoldersDal = (function () {
    function FoldersDal(httpClient) {
        this.httpClient = httpClient;
    }
    FoldersDal.prototype.getAllFolders = function (adherentId, start, end) {
        if (start === void 0) { start = 1; }
        if (end === void 0) { end = 3; }
        return this.httpClient.get(__WEBPACK_IMPORTED_MODULE_2__shared_config_endPoints__["a" /* urlEndPoints */].foldersUrl + "?start=" + start + "&end=" + end);
    };
    FoldersDal.prototype.folderDetail = function (folderId) {
        return this.httpClient.get(__WEBPACK_IMPORTED_MODULE_2__shared_config_endPoints__["a" /* urlEndPoints */].folderDetailUrl + folderId);
    };
    FoldersDal = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["b" /* HttpClient */]])
    ], FoldersDal);
    return FoldersDal;
}());

//# sourceMappingURL=folder.dal.js.map

/***/ }),

/***/ 1061:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FoldersModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__folder_dal__ = __webpack_require__(1059);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var FoldersModule = (function () {
    function FoldersModule() {
    }
    FoldersModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [],
            imports: [],
            providers: [__WEBPACK_IMPORTED_MODULE_1__folder_dal__["a" /* FoldersDal */]]
        })
    ], FoldersModule);
    return FoldersModule;
}());

//# sourceMappingURL=folders.module.js.map

/***/ }),

/***/ 1082:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FolderDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_error_service__ = __webpack_require__(144);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_services_Load_service__ = __webpack_require__(1057);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__folder_dal__ = __webpack_require__(1059);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__folder_model__ = __webpack_require__(609);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var FolderDetailPage = (function () {
    function FolderDetailPage(errorService, navParams, folderDal, loadService, navCtrl) {
        this.errorService = errorService;
        this.navParams = navParams;
        this.folderDal = folderDal;
        this.loadService = loadService;
        this.navCtrl = navCtrl;
        this.folderStatus = __WEBPACK_IMPORTED_MODULE_5__folder_model__["a" /* FolderStatus */];
    }
    FolderDetailPage.prototype.ngOnInit = function () {
        this.getFolderDetail();
    };
    FolderDetailPage.prototype.AddNewComplaint = function () {
        this.navCtrl.push('add-complaint', { folder: this.folder, folderId: this.folder.id });
    };
    FolderDetailPage.prototype.ngOnDestroy = function () {
        if (this.folderSubscription) {
            this.folderSubscription.unsubscribe();
        }
    };
    FolderDetailPage.prototype.getFolderDetail = function () {
        var _this = this;
        this.folder = this.navParams.get('folder');
        this.content.resize();
        if (!this.folder) {
            this.loadService.start('Chargement du dossier');
            var id = this.navParams.get('id');
            this.folderSubscription = this.folderDal.folderDetail(id)
                .subscribe(function (folder) {
                _this.loadService.stop();
                _this.folder = folder;
                _this.content.resize();
            }, function (error) {
                _this.loadService.stop();
                _this.errorService.sendError(error);
            });
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Content */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Content */])
    ], FolderDetailPage.prototype, "content", void 0);
    FolderDetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'folder-detail-page',template:/*ion-inline-start:"/Users/antoineol/nw/beassur/insurance/src/app/folders/folder-detail/folder-detail.html"*/'<ion-header no-border>\n  <ion-navbar transparent hideBackButton>\n    <button ion-button navPop icon-only left clear>\n      <ion-icon name="back-button" id="back-button"></ion-icon>\n    </button>\n  </ion-navbar>\n  <div class="page-header">\n    <div *ngIf="folder">\n      <ion-row>\n        <ion-col class="header-labels">\n            <span>\n              Dossier sinistre n°\n            </span>\n        </ion-col>\n        <ion-col class="header-labels right">\n            <span class="declaration-date">\n              Emis le <span class="capitalize">{{folder.declarationDate | date:\'dd MMMM yyyy\'}}</span>\n            </span>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-label no-margin class="title">\n          {{folder.id | idPipe}}\n        </ion-label>\n      </ion-row>\n    </div>\n    <div *ngIf="!folder">\n      <ion-row>\n        <h1 class="not-found">\n            Dossier Inexistant\n        </h1>\n      </ion-row>\n    </div>\n  </div>\n</ion-header>\n<ion-content class="content">\n  <ion-grid *ngIf="folder">\n    <ion-row>\n      <ion-col col-6 class="label" no-padding>Date de survenance</ion-col>\n      <ion-col col-5 offset-1 class="label" no-padding>Statut</ion-col>\n    </ion-row>\n    <ion-row class="margin-bottom-20">\n      <ion-col col-6 class="value capitalize" no-padding>{{folder.occurrenceDate | date:\'dd MMMM yyyy\'}}</ion-col>\n      <ion-col col-5 offset-1 class="value {{folder.status}}-text" no-padding>{{folderStatus[folder.status]}}</ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col col-6 class="label" no-padding>Frais engagés</ion-col>\n    </ion-row>\n    <ion-row class="margin-bottom-20">\n      <ion-col col-6 class="value" no-padding>{{folder.fees | dhPipe}}</ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col col-6 class="label" no-padding>Date de remboursement</ion-col>\n      <ion-col col-5 offset-1 class="label" no-padding>Montant remboursé</ion-col>\n    </ion-row>\n    <ion-row class="margin-bottom-20">\n      <ion-col col-6 class="value capitalize" no-padding>{{folder.refundDate | date:\'dd MMMM yyyy\'}}</ion-col>\n      <ion-col col-5 offset-1 class="value" no-padding>{{folder.refundedAmount | dhPipe}}</ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n<ion-footer>\n  <button *ngIf="folder" no-margin ion-button type="button" class="footer-button" block (click)="AddNewComplaint()">\n    Effectuer une réclamation\n  </button>\n</ion-footer>\n\n\n'/*ion-inline-end:"/Users/antoineol/nw/beassur/insurance/src/app/folders/folder-detail/folder-detail.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__shared_services_error_service__["a" /* ErrorService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_4__folder_dal__["a" /* FoldersDal */],
            __WEBPACK_IMPORTED_MODULE_3__shared_services_Load_service__["a" /* LoadService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */]])
    ], FolderDetailPage);
    return FolderDetailPage;
}());

//# sourceMappingURL=folder-detail.js.map

/***/ })

});
//# sourceMappingURL=4.js.map