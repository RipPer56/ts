webpackJsonp([3],{

/***/ 1052:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddComplaintPageModule", function() { return AddComplaintPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__add_complaint__ = __webpack_require__(1077);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__complaint_module__ = __webpack_require__(1060);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_services_Load_service__ = __webpack_require__(1057);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var AddComplaintPageModule = (function () {
    function AddComplaintPageModule() {
    }
    AddComplaintPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__add_complaint__["a" /* AddComplaintPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__add_complaint__["a" /* AddComplaintPage */]),
                __WEBPACK_IMPORTED_MODULE_3__complaint_module__["a" /* ComplaintsModule */],
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__shared_services_Load_service__["a" /* LoadService */]
            ]
        })
    ], AddComplaintPageModule);
    return AddComplaintPageModule;
}());

//# sourceMappingURL=add-complaint.module.js.map

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

/***/ 1077:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddComplaintPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_services_error_service__ = __webpack_require__(144);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_services_Load_service__ = __webpack_require__(1057);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__complaint_model__ = __webpack_require__(1064);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__complaints_dal__ = __webpack_require__(1058);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var AddComplaintPage = (function () {
    function AddComplaintPage(formBuilder, navParams, complaintDal, errorService, navCtrl, loadService) {
        this.formBuilder = formBuilder;
        this.navParams = navParams;
        this.complaintDal = complaintDal;
        this.errorService = errorService;
        this.navCtrl = navCtrl;
        this.loadService = loadService;
        this.reasons = [{ msg: 'Erreur de remboursement' }, { msg: 'Rejet de réclamtion' }];
        this.folderId = '';
    }
    AddComplaintPage.prototype.ngOnInit = function () {
        this.buildGroupForm();
        this.getDataFromParameterOrUrl();
    };
    AddComplaintPage.prototype.buildGroupForm = function () {
        this.complaintForm = this.formBuilder.group({
            'folderId': ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].minLength(6)]],
            'descComplaint': ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].minLength(30), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].maxLength(250)]],
            'reasonComplaint': ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required]],
        });
    };
    AddComplaintPage.prototype.getDataFromParameterOrUrl = function () {
        this.folderId = this.navParams.get('folderId');
        var folder = this.navParams.get('folder');
        if (folder) {
            this.folderId = folder.id + '';
        }
    };
    AddComplaintPage.prototype.sendComplaint = function () {
        var _this = this;
        if (this.complaintForm.valid) {
            var complaint = {
                folderId: this.complaintForm.value.folderId,
                reason: this.reasons[this.complaintForm.value.reasonComplaint].msg,
                status: __WEBPACK_IMPORTED_MODULE_5__complaint_model__["b" /* ComplaintStatusColor */].SENT,
                description: this.complaintForm.value.descComplaint,
            };
            this.loadService.start('Envoi de la nouvelle réclamation');
            this.complaintSubscription = this.complaintDal.addComplaintByFolderId(complaint).subscribe(function () {
                _this.navCtrl.setRoot('complaint-list');
                _this.loadService.stop();
            }, function (reason) {
                _this.errorService.sendError(reason);
                _this.loadService.stop();
            });
        }
    };
    AddComplaintPage.prototype.ngOnDestroy = function () {
        if (this.complaintSubscription)
            this.complaintSubscription.unsubscribe();
    };
    AddComplaintPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-add-complaint',template:/*ion-inline-start:"/Users/antoineol/nw/beassur/insurance/src/app/complaints/add-complaint/add-complaint.html"*/'<ion-header no-border transparent>\n  <ion-navbar transparent hideBackButton>\n    <button ion-button navPop icon-only left clear>\n      <ion-icon name="back-button" color="dark"></ion-icon>\n    </button>\n  </ion-navbar>\n  <div class="color-text-first">\n    J\'effectue une\n  </div>\n  <div class="title">\n    <strong>Réclamation</strong>\n  </div>\n</ion-header>\n\n\n<ion-content>\n\n  <form [formGroup]="complaintForm" id="ngForm" (submit)="sendComplaint()">\n    <ion-item no-padding>\n      <ion-label class="color-text" stacked>Numéro du dossier</ion-label>\n      <ion-input type="text" [value]="folderId" formControlName="folderId"></ion-input>\n    </ion-item>\n    <ion-row *ngIf="complaintForm.get(\'folderId\').invalid && complaintForm.get(\'folderId\').touched">\n      <h5 class="error-style">Cet identifiant de dossier est invalid</h5>\n    </ion-row>\n\n    <ion-item no-padding>\n      <ion-label class="color-text" stacked>Raison</ion-label>\n      <ion-select placeholder="Selectionner le motif de votre réclamation" formControlName="reasonComplaint">\n          <ion-option *ngFor="let reason of reasons;let i = index"\n                      [value]="i">{{reason.msg}}</ion-option>\n      </ion-select>\n    </ion-item>\n    <ion-row *ngIf="complaintForm.get(\'reasonComplaint\').invalid && complaintForm.get(\'reasonComplaint\').touched">\n      <h5 class="error-style">votre raison est invalid</h5>\n    </ion-row>\n\n\n    <ion-item no-padding>\n      <ion-label class="color-text" stacked>Description\n        <p class="text-desc">Saisissez la description de votre réclamation</p>\n      </ion-label>\n      <ion-textarea formControlName="descComplaint"></ion-textarea>\n    </ion-item>\n    <ion-row *ngIf="complaintForm.get(\'descComplaint\').invalid && complaintForm.get(\'descComplaint\').touched">\n      <h5 class="error-style">votre description est invalid</h5>\n    </ion-row>\n\n    <div class="div-file-style">\n      <label class="color-text-first style-content">Pièce(s) justificative(s) téléchargée(s)</label>\n      <ion-row class="color-file" text-center>\n        <div class="Aligner">\n          <input hidden type="file" name="file" id="file"/>\n          <ion-icon name="piece-jointe"></ion-icon>\n          <label class="text-label" for="file"> Ajouter un justificatif</label>\n        </div>\n      </ion-row>\n    </div>\n  </form>\n</ion-content>\n<ion-footer>\n  <button no-margin no-padding ion-button block class="footer-button"\n          [disabled]="!complaintForm.valid" form="ngForm" type="submit">\n    Envoyer\n  </button>\n</ion-footer>\n'/*ion-inline-end:"/Users/antoineol/nw/beassur/insurance/src/app/complaints/add-complaint/add-complaint.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_6__complaints_dal__["a" /* ComplaintsDal */],
            __WEBPACK_IMPORTED_MODULE_3__shared_services_error_service__["a" /* ErrorService */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_4__shared_services_Load_service__["a" /* LoadService */]])
    ], AddComplaintPage);
    return AddComplaintPage;
}());

//# sourceMappingURL=add-complaint.js.map

/***/ })

});
//# sourceMappingURL=3.js.map