webpackJsonp([6],{

/***/ 1051:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComplaintListPageModule", function() { return ComplaintListPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__complaint_list__ = __webpack_require__(1076);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_shared_module__ = __webpack_require__(245);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__complaint_module__ = __webpack_require__(1060);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var ComplaintListPageModule = (function () {
    function ComplaintListPageModule() {
    }
    ComplaintListPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__complaint_list__["a" /* ComplaintListPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__complaint_list__["a" /* ComplaintListPage */]),
                __WEBPACK_IMPORTED_MODULE_3__shared_shared_module__["a" /* SharedModule */],
                __WEBPACK_IMPORTED_MODULE_4__complaint_module__["a" /* ComplaintsModule */],
            ],
        })
    ], ComplaintListPageModule);
    return ComplaintListPageModule;
}());

//# sourceMappingURL=complaint-list.module.js.map

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

/***/ 1076:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComplaintListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_error_service__ = __webpack_require__(144);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__complaints_dal__ = __webpack_require__(1058);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ComplaintListPage = (function () {
    function ComplaintListPage(complaintDal, errorService, navCtrl) {
        this.complaintDal = complaintDal;
        this.errorService = errorService;
        this.navCtrl = navCtrl;
        //TODO @input from dashboard section
        this.adherentId = "K498220";
        this.complaints = [];
        this.isloading = true;
        this.data = [];
        this.start = 1;
        this.end = 6;
        this.noMoreData = false;
        this.complaintListSubscription = [];
    }
    ComplaintListPage.prototype.ngOnInit = function () {
        this.getComplaints();
    };
    ComplaintListPage.prototype.doInfinite = function (infiniteScroll) {
        var _this = this;
        this.end = this.start + 2;
        this.complaintListSubscription.push(this.complaintDal.getAllComplaints(this.adherentId, this.start, this.end)
            .subscribe(function (complaints) {
            _this.data = complaints;
            if (_this.data.length == 0) {
                infiniteScroll.enable(false);
                _this.noMoreData = true;
                return;
            }
            for (var i = 0; i < _this.data.length; i++) {
                _this.complaints.push(_this.data[i]);
            }
            _this.start = _this.end + 1;
            infiniteScroll.complete();
        }, function (error) {
            _this.errorService.sendError(error);
            infiniteScroll.complete();
        }));
    };
    ComplaintListPage.prototype.ngOnDestroy = function () {
        for (var _i = 0, _a = this.complaintListSubscription; _i < _a.length; _i++) {
            var subscription = _a[_i];
            if (subscription) {
                subscription.unsubscribe();
            }
        }
    };
    ComplaintListPage.prototype.getComplaints = function () {
        var _this = this;
        this.complaintListSubscription.push(this.complaintDal.getAllComplaints(this.adherentId, this.start, this.end)
            .subscribe(function (complaints) {
            _this.isloading = false;
            _this.complaints = complaints;
        }, function (error) {
            _this.isloading = false;
            _this.errorService.sendError(error);
        }));
        this.start = this.end + 1;
    };
    ComplaintListPage.prototype.displayAddComplaint = function () {
        /**
         *  we passed "" as value to avoid URL errors (such as /:folderId, /nul, /undefined)
         */
        this.navCtrl.push('add-complaint', { folderId: '' });
    };
    ComplaintListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: "complaint-list-page",template:/*ion-inline-start:"/Users/antoineol/nw/beassur/insurance/src/app/complaints/complaint-list/complaint-list.html"*/'<ion-header no-border transparent>\n  <ion-navbar transparent hideBackButton>\n    <ng-container *ngIf="!this.navCtrl.getPrevious();else other">\n      <ion-col col-2 text-center>\n        <ion-icon name="my-header-menu" menuToggle></ion-icon>\n      </ion-col>\n    </ng-container>\n    <ng-template #other>\n      <ion-buttons left>\n        <button ion-button navPop icon-only>\n          <ion-icon name="back-button"></ion-icon>\n        </button>\n      </ion-buttons>\n    </ng-template>\n    <ion-buttons right>\n      <button ion-button clear class="footer-button" icon-only (click)="displayAddComplaint()" small>\n        <ion-icon name="ba-icon-add"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n  <div class="page-header">\n    <ion-label class="title">\n      Mes réclamations\n    </ion-label>\n    <ion-label class="num-results-found">\n      {{complaints.length}} résultats affichés\n    </ion-label>\n  </div>\n</ion-header>\n\n<ion-content no-padding>\n  <ion-list class="list-style">\n    <div *ngIf="isloading">\n      <ion-spinner class="complaint-spinner" name="crescent"></ion-spinner>\n    </div>\n    <ng-container *ngFor="let complaint of complaints; let i = index">\n      <ion-row>\n        <ion-col no-padding no-margin col-11>\n          <ba-item-complaint [complaint]="complaint">\n          </ba-item-complaint>\n        </ion-col>\n      </ion-row>\n      <ion-row *ngIf="i != complaints.length-1">\n        <ion-col offset-1 col-10>\n          <div class="line-horizontal"></div>\n        </ion-col>\n      </ion-row>\n    </ng-container>\n  </ion-list>\n  <ion-infinite-scroll [enabled]="true" (ionInfinite)="doInfinite($event)">\n    <ion-infinite-scroll-content loadingText="Chargement de réclamations..."></ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n  <ion-row *ngIf="noMoreData" class="no-more-data">\n    <ion-label>\n      Il n\'y a plus de réclamations à afficher.\n    </ion-label>\n  </ion-row>\n</ion-content>\n\n\n'/*ion-inline-end:"/Users/antoineol/nw/beassur/insurance/src/app/complaints/complaint-list/complaint-list.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__complaints_dal__["a" /* ComplaintsDal */],
            __WEBPACK_IMPORTED_MODULE_2__shared_services_error_service__["a" /* ErrorService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */]])
    ], ComplaintListPage);
    return ComplaintListPage;
}());

//# sourceMappingURL=complaint-list.js.map

/***/ })

});
//# sourceMappingURL=6.js.map