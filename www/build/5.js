webpackJsonp([5],{

/***/ 1055:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FolderListPageModule", function() { return FolderListPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__folder_list__ = __webpack_require__(1083);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_shared_module__ = __webpack_require__(245);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__folders_module__ = __webpack_require__(1061);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var FolderListPageModule = (function () {
    function FolderListPageModule() {
    }
    FolderListPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__folder_list__["a" /* FolderListPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__folder_list__["a" /* FolderListPage */]),
                __WEBPACK_IMPORTED_MODULE_3__shared_shared_module__["a" /* SharedModule */],
                __WEBPACK_IMPORTED_MODULE_4__folders_module__["a" /* FoldersModule */]
            ],
        })
    ], FolderListPageModule);
    return FolderListPageModule;
}());

//# sourceMappingURL=folder-list.module.js.map

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

/***/ 1083:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FolderListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_error_service__ = __webpack_require__(144);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_services_toast_service__ = __webpack_require__(246);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__folder_dal__ = __webpack_require__(1059);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var FolderListPage = (function () {
    function FolderListPage(folderDal, errorService, navCtrl, toastService) {
        this.folderDal = folderDal;
        this.errorService = errorService;
        this.navCtrl = navCtrl;
        this.toastService = toastService;
        //TODO @input from dashboard section
        this.adherentId = "K498220";
        this.folders = [];
        this.isLoading = false;
        this.data = [];
        this.start = 1;
        this.end = 6;
        this.folderListSubscription = [];
        this.noMoreData = false;
    }
    FolderListPage.prototype.ngOnInit = function () {
        this.getFolders();
    };
    FolderListPage.prototype.doInfinite = function (infiniteScroll) {
        var _this = this;
        this.end = this.start + 2;
        this.folderListSubscription.push(this.folderDal.getAllFolders(this.adherentId, this.start, this.end)
            .subscribe(function (folders) {
            _this.data = folders;
            if (_this.data.length == 0) {
                infiniteScroll.enable(false);
                _this.noMoreData = true;
                return;
            }
            for (var i = 0; i < _this.data.length; i++) {
                _this.folders.push(_this.data[i]);
            }
            _this.start = _this.end + 1;
            infiniteScroll.complete();
        }, function (error) {
            _this.errorService.sendError(error);
            infiniteScroll.complete();
        }));
    };
    FolderListPage.prototype.ngOnDestroy = function () {
        for (var _i = 0, _a = this.folderListSubscription; _i < _a.length; _i++) {
            var subscription = _a[_i];
            if (subscription) {
                subscription.unsubscribe();
            }
        }
    };
    FolderListPage.prototype.getFolders = function () {
        var _this = this;
        this.isLoading = true;
        this.folderListSubscription.push(this.folderDal.getAllFolders(this.adherentId, this.start, this.end)
            .subscribe(function (folders) {
            _this.isLoading = false;
            _this.folders = folders;
        }, function (error) {
            _this.isLoading = false;
            _this.errorService.sendError(error);
        }));
        this.start = this.end + 1;
    };
    FolderListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: "folder-list-page",template:/*ion-inline-start:"/Users/antoineol/nw/beassur/insurance/src/app/folders/folder-list/folder-list.html"*/'<ion-header no-border transparent>\n  <ion-navbar transparent hideBackButton>\n    <ng-container *ngIf="!this.navCtrl.getPrevious();else other">\n      <ion-col col-2 text-center>\n        <ion-icon name="my-header-menu" menuToggle></ion-icon>\n      </ion-col>\n    </ng-container>\n    <ng-template #other>\n      <ion-buttons left>\n        <button ion-button navPop icon-only>\n          <ion-icon name="back-button"></ion-icon>\n        </button>\n      </ion-buttons>\n    </ng-template>\n  </ion-navbar>\n  <div class="page-header">\n    <ion-label class="title">\n      Mes dossiers\n    </ion-label>\n    <ion-label class="num-results-found">\n      {{folders.length}} résultats affichés\n    </ion-label>\n  </div>\n</ion-header>\n<ion-content>\n  <ion-list class="list-style">\n    <div *ngIf="isLoading">\n      <ion-spinner class="folder-spinner" name="crescent"></ion-spinner>\n    </div>\n    <ng-container *ngFor="let folder of folders; let i = index">\n      <ion-row>\n        <ion-col no-padding no-margin col-11>\n          <ba-item-folder [folder]="folder">\n          </ba-item-folder>\n        </ion-col>\n      </ion-row>\n      <ion-row *ngIf="i != folders.length-1">\n        <ion-col offset-1 col-10>\n          <div class="line-horizontal"></div>\n        </ion-col>\n      </ion-row>\n    </ng-container>\n  </ion-list>\n\n  <ion-infinite-scroll [enabled]="true" (ionInfinite)="doInfinite($event)">\n    <ion-infinite-scroll-content loadingText="Chargement de dossiers..."></ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n  <ion-row *ngIf="noMoreData" class="no-more-data">\n    <ion-label>\n      Il n\'y a plus de dossiers à afficher.\n    </ion-label>\n  </ion-row>\n</ion-content>\n\n\n\n'/*ion-inline-end:"/Users/antoineol/nw/beassur/insurance/src/app/folders/folder-list/folder-list.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__folder_dal__["a" /* FoldersDal */],
            __WEBPACK_IMPORTED_MODULE_2__shared_services_error_service__["a" /* ErrorService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_3__shared_services_toast_service__["a" /* ToastService */]])
    ], FolderListPage);
    return FolderListPage;
}());

//# sourceMappingURL=folder-list.js.map

/***/ })

});
//# sourceMappingURL=5.js.map