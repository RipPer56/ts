webpackJsonp([1],{

/***/ 1053:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardPageModule", function() { return DashboardPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__complaints_complaint_module__ = __webpack_require__(1060);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__folders_folders_module__ = __webpack_require__(1061);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_services_stats_stats_dal__ = __webpack_require__(1065);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_shared_module__ = __webpack_require__(245);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__dashboard__ = __webpack_require__(1078);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__dashboard_details_dashboard_details__ = __webpack_require__(1079);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__dashboard_horizontal_menu_horizontal_menu__ = __webpack_require__(1080);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__dashboard_horizontal_menu_horizontal_menu_service__ = __webpack_require__(1066);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__dashboard_section_dashboard_section__ = __webpack_require__(1081);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var DashboardPageModule = (function () {
    function DashboardPageModule() {
    }
    DashboardPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__dashboard__["a" /* DashboardPage */],
                __WEBPACK_IMPORTED_MODULE_8__dashboard_horizontal_menu_horizontal_menu__["a" /* HorizontalMenuComponent */],
                __WEBPACK_IMPORTED_MODULE_7__dashboard_details_dashboard_details__["a" /* DashboardDetailsComponent */],
                __WEBPACK_IMPORTED_MODULE_10__dashboard_section_dashboard_section__["a" /* DashboardSectionComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_6__dashboard__["a" /* DashboardPage */]),
                __WEBPACK_IMPORTED_MODULE_5__shared_shared_module__["a" /* SharedModule */],
                __WEBPACK_IMPORTED_MODULE_3__folders_folders_module__["a" /* FoldersModule */],
                __WEBPACK_IMPORTED_MODULE_2__complaints_complaint_module__["a" /* ComplaintsModule */],
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_9__dashboard_horizontal_menu_horizontal_menu_service__["a" /* HorizontalMenuService */],
                __WEBPACK_IMPORTED_MODULE_4__shared_services_stats_stats_dal__["a" /* StatsDal */],
            ],
        })
    ], DashboardPageModule);
    return DashboardPageModule;
}());

//# sourceMappingURL=dashboard.module.js.map

/***/ }),

/***/ 1058:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComplaintsDal; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(145);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_config_endPoints__ = __webpack_require__(607);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_services_cache_service__ = __webpack_require__(102);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ComplaintsDal = (function () {
    function ComplaintsDal(httpClient, cacheService) {
        this.httpClient = httpClient;
        this.cacheService = cacheService;
    }
    ComplaintsDal.prototype.getAllComplaints = function (adherentId, start, end) {
        if (start === void 0) { start = 1; }
        if (end === void 0) { end = 2; }
        return this.httpClient.get(__WEBPACK_IMPORTED_MODULE_2__shared_config_endPoints__["a" /* urlEndPoints */].complaintsUrl + "?start=" + start + "&end=" + end);
    };
    ComplaintsDal.prototype.getComplaintDetailById = function (complaintId) {
        return this.httpClient.get(__WEBPACK_IMPORTED_MODULE_2__shared_config_endPoints__["a" /* urlEndPoints */].complaintDetailUrl + complaintId);
    };
    ComplaintsDal.prototype.addComplaintByFolderId = function (complaint) {
        this.cacheService.refreshSpecifiqueCache(__WEBPACK_IMPORTED_MODULE_2__shared_config_endPoints__["a" /* urlEndPoints */].complaintsUrl);
        return this.httpClient.post(__WEBPACK_IMPORTED_MODULE_2__shared_config_endPoints__["a" /* urlEndPoints */].complaintDetailUrl, {
            folderId: complaint.folderId,
            reason: complaint.reason,
            description: complaint.description
        });
    };
    ComplaintsDal = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["b" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_3__shared_services_cache_service__["a" /* CacheService */]])
    ], ComplaintsDal);
    return ComplaintsDal;
}());

//# sourceMappingURL=complaints.dal.js.map

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

/***/ 1060:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComplaintsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__complaints_dal__ = __webpack_require__(1058);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_shared_module__ = __webpack_require__(245);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ComplaintsModule = (function () {
    function ComplaintsModule() {
    }
    ComplaintsModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [],
            imports: [__WEBPACK_IMPORTED_MODULE_2__shared_shared_module__["a" /* SharedModule */]],
            providers: [__WEBPACK_IMPORTED_MODULE_1__complaints_dal__["a" /* ComplaintsDal */]]
        })
    ], ComplaintsModule);
    return ComplaintsModule;
}());

//# sourceMappingURL=complaint.module.js.map

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

/***/ 1065:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StatsDal; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(145);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__config_endPoints__ = __webpack_require__(607);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var StatsDal = (function () {
    function StatsDal(httpClient) {
        this.httpClient = httpClient;
    }
    StatsDal.prototype.getStats = function (adherentId) {
        return this.httpClient.get(__WEBPACK_IMPORTED_MODULE_2__config_endPoints__["a" /* urlEndPoints */].statsUrl + adherentId);
    };
    StatsDal = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["b" /* HttpClient */]])
    ], StatsDal);
    return StatsDal;
}());

//# sourceMappingURL=stats.dal.js.map

/***/ }),

/***/ 1066:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HorizontalMenuService; });
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

var HorizontalMenuService = (function () {
    function HorizontalMenuService() {
        this.menuItems = [{
                ionCardClass: "menu-item",
                ionIconName: "my-menu-sinistre",
                labelClass: "menu-item-title",
                title: 'Mes dossiers',
                component: 'folder-list',
            },
            {
                ionCardClass: "menu-item selected",
                ionIconName: "my-menu-accueil",
                labelClass: "menu-item-title",
                title: 'Accueil',
                component: 'dashboard',
            },
            {
                ionCardClass: "menu-item",
                ionIconName: "my-menu-complaint",
                labelClass: "menu-item-title",
                title: 'Mes réclamations',
                component: 'complaint-list',
            }];
    }
    HorizontalMenuService.prototype.getItems = function () {
        return this.menuItems;
    };
    HorizontalMenuService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], HorizontalMenuService);
    return HorizontalMenuService;
}());

//# sourceMappingURL=horizontal-menu.service.js.map

/***/ }),

/***/ 1078:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var DashboardPage = (function () {
    function DashboardPage() {
    }
    DashboardPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'dashboard-page',template:/*ion-inline-start:"/Users/antoineol/nw/beassur/insurance/src/app/dashboard/dashboard.html"*/'<ion-header no-border>\n  <ba-app-header></ba-app-header>\n</ion-header>\n<ion-content>\n  <ba-horizontal-menu></ba-horizontal-menu>\n  <ba-dashboard-details></ba-dashboard-details>\n</ion-content>\n'/*ion-inline-end:"/Users/antoineol/nw/beassur/insurance/src/app/dashboard/dashboard.html"*/,
        })
    ], DashboardPage);
    return DashboardPage;
}());

//# sourceMappingURL=dashboard.js.map

/***/ }),

/***/ 1079:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardDetailsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__complaints_complaints_dal__ = __webpack_require__(1058);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__folders_folder_dal__ = __webpack_require__(1059);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_services_error_service__ = __webpack_require__(144);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_services_stats_stats_dal__ = __webpack_require__(1065);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var DashboardDetailsComponent = (function () {
    function DashboardDetailsComponent(foldersDal, complaintsDal, statsDal, errorService, navCtrl) {
        this.foldersDal = foldersDal;
        this.complaintsDal = complaintsDal;
        this.statsDal = statsDal;
        this.errorService = errorService;
        this.navCtrl = navCtrl;
        this.complaints = [];
        this.complaintsIsLoading = false;
        this.folders = [];
        this.folderIsLoading = false;
        this.statsAreLoading = true;
        //TODO get id of user from AuthService
        this.adherentId = '16550';
    }
    DashboardDetailsComponent.prototype.ngOnInit = function () {
        this.getFolders();
        this.getComplaints();
        this.getStats();
    };
    DashboardDetailsComponent.prototype.displayAllFolders = function () {
        this.navCtrl.push('folder-list');
    };
    DashboardDetailsComponent.prototype.displayAllComplaints = function () {
        this.navCtrl.push('complaint-list');
    };
    DashboardDetailsComponent.prototype.ngOnDestroy = function () {
        if (this.complaintListSubscription)
            this.complaintListSubscription.unsubscribe();
        if (this.folderListSubscription)
            this.folderListSubscription.unsubscribe();
        if (this.statsSubscription)
            this.statsSubscription.unsubscribe();
    };
    DashboardDetailsComponent.prototype.displayAddComplaint = function () {
        /**
         *  On passe "" comme valeur pour éviter les bugs de construction d'URL (exemple /:folderId, /nul, /undefined)
         */
        this.navCtrl.push('add-complaint', { folderId: '' });
    };
    DashboardDetailsComponent.prototype.getFolders = function () {
        var _this = this;
        this.folderIsLoading = true;
        this.folderListSubscription = this.foldersDal.getAllFolders(this.adherentId)
            .subscribe(function (folders) {
            _this.folders = folders;
            _this.folderIsLoading = false;
        }, function (error) {
            _this.errorService.sendError(error);
            _this.folderIsLoading = false;
        });
    };
    DashboardDetailsComponent.prototype.getComplaints = function () {
        var _this = this;
        this.complaintsIsLoading = true;
        this.complaintListSubscription = this.complaintsDal.getAllComplaints(this.adherentId)
            .subscribe(function (complaints) {
            _this.complaints = complaints;
            _this.complaintsIsLoading = false;
        }, function (error) {
            _this.errorService.sendError(error);
            _this.complaintsIsLoading = false;
        });
    };
    DashboardDetailsComponent.prototype.getStats = function () {
        var _this = this;
        this.statsSubscription = this.statsDal.getStats(this.adherentId)
            .subscribe(function (stats) {
            _this.stats = stats;
            _this.statsAreLoading = false;
        }, function (error) {
            _this.errorService.sendError(error);
            _this.statsAreLoading = false;
        });
    };
    DashboardDetailsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'ba-dashboard-details',template:/*ion-inline-start:"/Users/antoineol/nw/beassur/insurance/src/app/dashboard/dashboard-details/dashboard-details.html"*/'<div id="three-month-summary">\n  <div class="summary-header">\n    <ion-icon name="calendar"></ion-icon>\n    {{\'Sur les 3 derniers mois\' | uppercase}}\n  </div>\n  <div *ngIf="statsAreLoading">\n    <ion-spinner name="crescent"></ion-spinner>\n  </div>\n  <div class="gray-bordered">\n    <ion-row *ngIf="!statsAreLoading">\n      <ion-col col-4 text-center class="align-center">\n        <ba-progress-circle-bar\n          [progress]="stats.treatedFolders"\n          [total]="stats.totalFolders"></ba-progress-circle-bar>\n      </ion-col>\n      <ion-col class="pki-content" col-8>\n        <!--Make a reusable component-->\n        <div margin><strong class="cout-pki">{{stats.costs}}</strong> <strong class="dhs-pki">dhs</strong> <span\n          class="content-pki">Total de frais engagés</span></div>\n        <div class="hline-div"></div>\n        <div margin><strong class="cout-pki">{{stats.refundedAmount}}</strong> <strong class="dhs-pki">dhs</strong>\n          <span\n          class="content-pki">Total de frais remboursés</span></div>\n      </ion-col>\n    </ion-row>\n  </div>\n</div>\n\n<ba-dashboard-section class="folders">\n  <div header>Mes dossiers</div>\n  <div body class="body">\n    <div *ngIf="folderIsLoading">\n      <ion-spinner name="crescent"></ion-spinner>\n    </div>\n    <ba-item-folder *ngFor="let folder of folders" [folder]="folder"></ba-item-folder>\n  </div>\n  <div footer class="footer">\n    <button ion-button (click)="displayAllFolders()" outline clear block no-padding>\n      <span class="footer-button">Accéder à tous mes dossiers</span>\n    </button>\n  </div>\n</ba-dashboard-section>\n\n<ba-dashboard-section class="complaints">\n  <div header>Mes réclamations</div>\n  <div body class="body">\n    <div *ngIf="complaintsIsLoading">\n      <ion-spinner name="crescent"></ion-spinner>\n    </div>\n    <ba-item-complaint *ngFor="let complaint of complaints" [complaint]="complaint"></ba-item-complaint>\n  </div>\n  <div footer class="footer">\n    <ion-row no-margin no-padding>\n      <ion-col col-10 no-margin no-padding>\n        <button ion-button (click)="displayAllComplaints()" outline clear block no-padding>\n          <span class="footer-button">Accéder à toutes mes réclamations</span>\n        </button>\n      </ion-col>\n      <ion-col col-2 no-margin no-padding align-self-center text-center>\n        <button ion-button clear class="footer-button" icon-only (click)="displayAddComplaint()">\n          <ion-icon name="ba-icon-add"></ion-icon>\n        </button>\n      </ion-col>\n    </ion-row>\n  </div>\n</ba-dashboard-section>\n'/*ion-inline-end:"/Users/antoineol/nw/beassur/insurance/src/app/dashboard/dashboard-details/dashboard-details.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__folders_folder_dal__["a" /* FoldersDal */],
            __WEBPACK_IMPORTED_MODULE_2__complaints_complaints_dal__["a" /* ComplaintsDal */],
            __WEBPACK_IMPORTED_MODULE_5__shared_services_stats_stats_dal__["a" /* StatsDal */],
            __WEBPACK_IMPORTED_MODULE_4__shared_services_error_service__["a" /* ErrorService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */]])
    ], DashboardDetailsComponent);
    return DashboardDetailsComponent;
}());

//# sourceMappingURL=dashboard-details.js.map

/***/ }),

/***/ 1080:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HorizontalMenuComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__horizontal_menu_service__ = __webpack_require__(1066);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HorizontalMenuComponent = (function () {
    function HorizontalMenuComponent(horizontalMenuService, app, navCtrl) {
        this.horizontalMenuService = horizontalMenuService;
        this.app = app;
        this.navCtrl = navCtrl;
        this.menuItems = [];
        this.menuItems = this.horizontalMenuService.getItems();
    }
    Object.defineProperty(HorizontalMenuComponent.prototype, "isMenuHorizontal", {
        get: function () {
            return (this.app !== undefined) && (this.app.getActiveNavs() !== undefined) && (this.app.getActiveNavs().length !== 0) && (this.app.getActiveNavs()[0].getActive() !== undefined);
        },
        enumerable: true,
        configurable: true
    });
    HorizontalMenuComponent.prototype.clickMenuItem = function (item) {
        this.navCtrl.setRoot(item.component);
    };
    HorizontalMenuComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'ba-horizontal-menu',template:/*ion-inline-start:"/Users/antoineol/nw/beassur/insurance/src/app/dashboard/dashboard-horizontal-menu/horizontal-menu.html"*/'<ion-scroll scrollX="true" center>\n  <div class="inner" text-center>\n    <ng-container *ngFor="let item of menuItems">\n      <ng-container\n        *ngIf="isMenuHorizontal">\n        <ion-card class="menu-item"\n                  [ngClass]="{\'menu-item-selected\': (app.getActiveNavs()[0].getActive().id==item.component)}"\n                  (click)="clickMenuItem(item)">\n          <div>\n            <ion-icon name="{{item.ionIconName}}"></ion-icon>\n          </div>\n          <label class="menu-item-title">{{item.title}}</label>\n        </ion-card>\n      </ng-container>\n    </ng-container>\n  </div>\n</ion-scroll>\n\n\n'/*ion-inline-end:"/Users/antoineol/nw/beassur/insurance/src/app/dashboard/dashboard-horizontal-menu/horizontal-menu.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__horizontal_menu_service__["a" /* HorizontalMenuService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* App */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */]])
    ], HorizontalMenuComponent);
    return HorizontalMenuComponent;
}());

//# sourceMappingURL=horizontal-menu.js.map

/***/ }),

/***/ 1081:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardSectionComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var DashboardSectionComponent = (function () {
    function DashboardSectionComponent() {
    }
    DashboardSectionComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'ba-dashboard-section',template:/*ion-inline-start:"/Users/antoineol/nw/beassur/insurance/src/app/dashboard/dashboard-section/dashboard-section.html"*/'<ion-card>\n  <ion-card-header class="card-header">\n      <ng-content select="[header]"></ng-content>\n  </ion-card-header>\n  <ion-card-content no-padding class="card-body">\n    <ion-list no-lines>\n      <ng-content select="[body]"></ng-content>\n    </ion-list>\n  </ion-card-content>\n  <div class="card-footer">\n    <ng-content select="[footer]"></ng-content>\n  </div>\n</ion-card>\n'/*ion-inline-end:"/Users/antoineol/nw/beassur/insurance/src/app/dashboard/dashboard-section/dashboard-section.html"*/
        })
    ], DashboardSectionComponent);
    return DashboardSectionComponent;
}());

//# sourceMappingURL=dashboard-section.js.map

/***/ })

});
//# sourceMappingURL=1.js.map