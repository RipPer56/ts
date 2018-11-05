webpackJsonp([2],{

/***/ 1051:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComplaintDetailPageModule", function() { return ComplaintDetailPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__complaint_detail__ = __webpack_require__(1076);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__complaint_module__ = __webpack_require__(1060);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_services_Load_service__ = __webpack_require__(1057);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_shared_module__ = __webpack_require__(245);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var ComplaintDetailPageModule = (function () {
    function ComplaintDetailPageModule() {
    }
    ComplaintDetailPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__complaint_detail__["a" /* ComplaintDetailPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__complaint_detail__["a" /* ComplaintDetailPage */]),
                __WEBPACK_IMPORTED_MODULE_5__shared_shared_module__["a" /* SharedModule */],
                __WEBPACK_IMPORTED_MODULE_3__complaint_module__["a" /* ComplaintsModule */],
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__shared_services_Load_service__["a" /* LoadService */]
            ]
        })
    ], ComplaintDetailPageModule);
    return ComplaintDetailPageModule;
}());

//# sourceMappingURL=complaint-detail.module.js.map

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

/***/ 1064:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ComplaintStatusColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComplaintStatus; });
var ComplaintStatusColor;
(function (ComplaintStatusColor) {
    ComplaintStatusColor["SENT"] = "green";
    ComplaintStatusColor["WAITING"] = "orange";
    ComplaintStatusColor["CANCELED"] = "red";
    ComplaintStatusColor["UNKNOWN"] = "gray";
})(ComplaintStatusColor || (ComplaintStatusColor = {}));
var ComplaintStatus;
(function (ComplaintStatus) {
    ComplaintStatus["green"] = "Accept\u00E9";
    ComplaintStatus["red"] = "Rejet\u00E9";
    ComplaintStatus["gray"] = "Envoy\u00E9e";
    ComplaintStatus["orange"] = "En cours de traitement";
})(ComplaintStatus || (ComplaintStatus = {}));
//# sourceMappingURL=complaint.model.js.map

/***/ }),

/***/ 1076:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComplaintDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_error_service__ = __webpack_require__(144);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_services_Load_service__ = __webpack_require__(1057);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__complaint_model__ = __webpack_require__(1064);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__complaints_dal__ = __webpack_require__(1058);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ComplaintDetailPage = (function () {
    function ComplaintDetailPage(errorService, navParams, complaintDal, loadService) {
        this.errorService = errorService;
        this.navParams = navParams;
        this.complaintDal = complaintDal;
        this.loadService = loadService;
        this.complaintStatus = __WEBPACK_IMPORTED_MODULE_4__complaint_model__["a" /* ComplaintStatus */];
    }
    ComplaintDetailPage.prototype.ngOnInit = function () {
        this.getComplaintDetail();
    };
    ComplaintDetailPage.prototype.ngOnDestroy = function () {
        if (this.complaintSubscription)
            this.complaintSubscription.unsubscribe();
    };
    ComplaintDetailPage.prototype.getComplaintDetail = function () {
        var _this = this;
        this.complaint = this.navParams.get("complaint");
        this.content.resize();
        if (!this.complaint) {
            this.loadService.start();
            var id = this.navParams.get("id");
            this.complaintSubscription = this.complaintDal.getComplaintDetailById(id)
                .subscribe(function (complaint) {
                _this.loadService.stop();
                _this.complaint = complaint;
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
    ], ComplaintDetailPage.prototype, "content", void 0);
    ComplaintDetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: "complaint-detail-page",template:/*ion-inline-start:"/Users/antoineol/nw/beassur/insurance/src/app/complaints/complaint-detail/complaint-detail.html"*/'<ion-header>\n  <ion-navbar transparent class="nav-bar" hideBackButton>\n    <button ion-button navPop icon-only left clear>\n      <ion-icon name="back-button" id="back-button"></ion-icon>\n    </button>\n  </ion-navbar>\n  <div class="page-header">\n    <div *ngIf="complaint">\n      <ion-row>\n        <ion-col class="header-labels">\n            <span>\n              Réclamation n°\n            </span>\n        </ion-col>\n        <ion-col class="header-labels right">\n            <span class="declaration-date">\n              Emise le <span class="capitalize">{{complaint.declarationDate | date:\'dd MMMM yyyy\'}}</span>\n            </span>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-label no-margin class="title">\n          {{complaint.id | idPipe}}\n        </ion-label>\n      </ion-row>\n    </div>\n    <div *ngIf="!complaint">\n      <ion-row>\n        <h1 class="not-found">\n            Réclamation Inexistante\n        </h1>\n      </ion-row>\n    </div>\n  </div>\n</ion-header>\n\n\n<ion-content class="content">\n  <ion-grid *ngIf="complaint">\n    <ion-row>\n      <ion-col col-6 class="label" no-padding>Numéro du dossier</ion-col>\n      <ion-col col-5 offset-1 class="label" no-padding>Statut</ion-col>\n    </ion-row>\n    <ion-row class="margin-bottom-20">\n      <ion-col col-6 class="value" no-padding>{{complaint.folderId}}</ion-col>\n      <ion-col col-5 offset-1 class="value {{complaint.status}}-text" no-padding>{{complaintStatus[complaint.status]}}\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col col-12 class="label" no-padding>Raison</ion-col>\n    </ion-row>\n    <ion-row class="margin-bottom-20">\n      <ion-col col-12 class="value" no-padding>{{complaint.reason}}</ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col col-6 class="label" no-padding>Description</ion-col>\n    </ion-row>\n    <ion-row class="margin-bottom-20">\n      <ion-col col-12 class="value description" no-padding>{{complaint.description}}</ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n\n\n'/*ion-inline-end:"/Users/antoineol/nw/beassur/insurance/src/app/complaints/complaint-detail/complaint-detail.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__shared_services_error_service__["a" /* ErrorService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_5__complaints_dal__["a" /* ComplaintsDal */],
            __WEBPACK_IMPORTED_MODULE_3__shared_services_Load_service__["a" /* LoadService */]])
    ], ComplaintDetailPage);
    return ComplaintDetailPage;
}());

//# sourceMappingURL=complaint-detail.js.map

/***/ })

});
//# sourceMappingURL=2.js.map