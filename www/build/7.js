webpackJsonp([7],{

/***/ 1056:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PromptPasswordPageModule", function() { return PromptPasswordPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__prompt_password__ = __webpack_require__(1084);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var PromptPasswordPageModule = (function () {
    function PromptPasswordPageModule() {
    }
    PromptPasswordPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__prompt_password__["a" /* PromptPasswordPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__prompt_password__["a" /* PromptPasswordPage */]),
            ],
        })
    ], PromptPasswordPageModule);
    return PromptPasswordPageModule;
}());

//# sourceMappingURL=prompt-password.module.js.map

/***/ }),

/***/ 1084:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PromptPasswordPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_error_service__ = __webpack_require__(144);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PromptPasswordPage = (function () {
    function PromptPasswordPage(viewCtrl, errorService, fb, changeDetectionRef) {
        this.viewCtrl = viewCtrl;
        this.errorService = errorService;
        this.fb = fb;
        this.changeDetectionRef = changeDetectionRef;
    }
    PromptPasswordPage.prototype.ngOnInit = function () {
        this.passwordForm = this.fb.group({
            password: this.fb.control('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required,
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].minLength(8)]),
        });
    };
    PromptPasswordPage.prototype.closeModal = function (password) {
        var _this = this;
        this.viewCtrl.dismiss(password).catch(function (error) { return _this.errorService.handleError(error); });
    };
    PromptPasswordPage.prototype.submitPassword = function () {
        this.disabled = true;
        this.changeDetectionRef.detectChanges();
        this.closeModal(this.passwordForm.value.password);
    };
    PromptPasswordPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-prompt-password',template:/*ion-inline-start:"/Users/antoineol/nw/beassur/insurance/src/app/shared/prompt-password/prompt-password.html"*/'<ion-header no-border class="theme-login">\n  <ion-navbar transparent>\n    <ion-buttons end>\n      <button ion-button clear color="dark" (click)="closeModal()">\n        <ion-icon name="close"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n<ion-content padding transparent>\n  <form [formGroup]="passwordForm" (submit)="submitPassword()">\n    <ion-list>\n      <ion-item>\n        <ion-label stacked>\n          <ion-icon name="tont-Mot-de-passe" color="primary"></ion-icon>\n          mot de passe\n        </ion-label>\n        <ion-input class="input-protected input-transparent" formControlName="password" required\n                   type="password"></ion-input>\n      </ion-item>\n      <button ion-button type="submit" block>Connection</button>\n    </ion-list>\n  </form>\n</ion-content>\n'/*ion-inline-end:"/Users/antoineol/nw/beassur/insurance/src/app/shared/prompt-password/prompt-password.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["o" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_3__services_error_service__["a" /* ErrorService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* ChangeDetectorRef */]])
    ], PromptPasswordPage);
    return PromptPasswordPage;
}());

//# sourceMappingURL=prompt-password.js.map

/***/ })

});
//# sourceMappingURL=7.js.map