webpackJsonp([0],{

/***/ 1049:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthPageModule", function() { return AuthPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_shared_module__ = __webpack_require__(245);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__auth__ = __webpack_require__(1067);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__login_form_login_form__ = __webpack_require__(1068);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__register_register_form__ = __webpack_require__(1069);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__reset_password_reset_password__ = __webpack_require__(1072);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shared_forms_data_service__ = __webpack_require__(1074);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__shared_services_Load_service__ = __webpack_require__(1057);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_storage__ = __webpack_require__(608);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var AuthPageModule = (function () {
    function AuthPageModule() {
    }
    AuthPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__auth__["a" /* AuthPage */],
                __WEBPACK_IMPORTED_MODULE_4__login_form_login_form__["a" /* LoginFormComponent */],
                __WEBPACK_IMPORTED_MODULE_6__reset_password_reset_password__["a" /* ResetPasswordFormComponent */],
                __WEBPACK_IMPORTED_MODULE_5__register_register_form__["a" /* RegisterFormComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__auth__["a" /* AuthPage */]),
                __WEBPACK_IMPORTED_MODULE_9__ionic_storage__["a" /* IonicStorageModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_2__shared_shared_module__["a" /* SharedModule */],
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_7__shared_forms_data_service__["a" /* FormsDataService */],
                __WEBPACK_IMPORTED_MODULE_8__shared_services_Load_service__["a" /* LoadService */]
            ]
        })
    ], AuthPageModule);
    return AuthPageModule;
}());

//# sourceMappingURL=auth.module.js.map

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

/***/ 1062:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthForms; });
var AuthForms;
(function (AuthForms) {
    AuthForms["LOGIN"] = "login";
    AuthForms["REGISTER"] = "register";
    AuthForms["RESET_PASSWORD"] = "reset-password";
})(AuthForms || (AuthForms = {}));
//# sourceMappingURL=auth.forms.js.map

/***/ }),

/***/ 1063:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return authValidationPatterns; });
var authValidationPatterns = {
    "email": "[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,4}$",
    'cin': /^[0-9a-zA-Z]+$/,
    'adherentNum': /^[0-9a-zA-Z]+$/,
};
//# sourceMappingURL=auth.validation.patterns.js.map

/***/ }),

/***/ 1067:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_auth_forms__ = __webpack_require__(1062);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var AuthPage = (function () {
    function AuthPage() {
        this.authForms = __WEBPACK_IMPORTED_MODULE_1__shared_auth_forms__["a" /* AuthForms */];
        this.displayedFrom = __WEBPACK_IMPORTED_MODULE_1__shared_auth_forms__["a" /* AuthForms */].LOGIN;
    }
    AuthPage.prototype.displayForm = function (form) {
        this.displayedFrom = form;
    };
    AuthPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/antoineol/nw/beassur/insurance/src/app/auth/auth.html"*/'<ion-content no-padding class="auth-page">\n  <ion-img class="logo" src="assets/imgs/beassur_logo.png"></ion-img>\n  <ion-img class="header-img" src="assets/imgs/background.png"></ion-img>\n  <ba-login-form *ngIf="displayedFrom == authForms.LOGIN"\n                 (displayForm)="displayForm($event)">\n\n  </ba-login-form>\n  <ba-reset-password-form *ngIf="displayedFrom == authForms.RESET_PASSWORD"\n                          (displayForm)="displayForm($event)">\n  </ba-reset-password-form>\n  <ba-register-form *ngIf="displayedFrom == authForms.REGISTER"\n                    (displayForm)="displayForm($event)">\n  </ba-register-form>\n</ion-content>\n'/*ion-inline-end:"/Users/antoineol/nw/beassur/insurance/src/app/auth/auth.html"*/,
        })
    ], AuthPage);
    return AuthPage;
}());

//# sourceMappingURL=auth.js.map

/***/ }),

/***/ 1068:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginFormComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(608);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_services_auth_service__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_services_error_service__ = __webpack_require__(144);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_services_Load_service__ = __webpack_require__(1057);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_auth_forms__ = __webpack_require__(1062);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shared_auth_validation_patterns__ = __webpack_require__(1063);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var LoginFormComponent = (function () {
    function LoginFormComponent(formBuilder, auth, errorService, loadService, storage) {
        this.formBuilder = formBuilder;
        this.auth = auth;
        this.errorService = errorService;
        this.loadService = loadService;
        this.storage = storage;
        this.remember = false;
        this.displayForm = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
    }
    LoginFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.loginForm = this.formBuilder.group({
            'email': ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].pattern(__WEBPACK_IMPORTED_MODULE_7__shared_auth_validation_patterns__["a" /* authValidationPatterns */]['email'])]],
            'password': ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].minLength(6)]],
            'remember': false,
        });
        this.storage.get('email')
            .then(function (email) {
            _this.loginForm.patchValue({
                'email': email,
                'remember': !!email,
            });
        });
    };
    LoginFormComponent.prototype.rememberMe = function () {
        this.auth.setPersistence(this.loginForm.value.remember);
        if (this.loginForm.value.remember) {
            this.storage.set('email', this.loginForm.value.email);
        }
        else {
            this.storage.set('email', null);
        }
    };
    LoginFormComponent.prototype.login = function () {
        var _this = this;
        this.loadService.start();
        return this.auth.loginWithEmail(this.loginForm.value.email, this.loginForm.value.password)
            .then(function () {
            _this.loadService.stop();
        })
            .catch(function (error) {
            _this.errorService.handleError(error);
            _this.loadService.stop();
        });
    };
    LoginFormComponent.prototype.resetPassword = function () {
        this.displayForm.emit(__WEBPACK_IMPORTED_MODULE_6__shared_auth_forms__["a" /* AuthForms */].RESET_PASSWORD);
    };
    LoginFormComponent.prototype.signUp = function () {
        this.displayForm.emit(__WEBPACK_IMPORTED_MODULE_6__shared_auth_forms__["a" /* AuthForms */].REGISTER);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Output */])(),
        __metadata("design:type", Object)
    ], LoginFormComponent.prototype, "displayForm", void 0);
    LoginFormComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'ba-login-form',template:/*ion-inline-start:"/Users/antoineol/nw/beassur/insurance/src/app/auth/login-form/login-form.html"*/'<form [formGroup]="loginForm" (ngSubmit)="login()">\n  <ion-row class="header-msg">\n    <ion-col>\n      <h1>Bienvenue</h1>\n      <h3>Connectez-vous pour accéder à votre espace personnel</h3>\n    </ion-col>\n  </ion-row>\n  <ion-item class="item-md input-box">\n    <ion-label>\n      <ion-icon name="md-person"></ion-icon>\n    </ion-label>\n    <ion-input formControlName="email" placeholder="Email" type="email"\n               touched-workaround></ion-input>\n  </ion-item>\n  <ion-row *ngIf="loginForm.get(\'email\').invalid && loginForm.get(\'email\').touched">\n    <h5>Cette adresse email est invalide</h5>\n  </ion-row>\n  <ion-item class="item-md input-box">\n    <ion-label>\n      <ion-icon name="md-lock"></ion-icon>\n    </ion-label>\n    <ion-input formControlName="password" placeholder="Mot de passe"\n               type="password" touched-workaround clearOnEdit="false"></ion-input>\n  </ion-item>\n  <ion-row *ngIf="loginForm.get(\'password\').invalid && loginForm.get(\'password\').touched">\n    <h5>Votre mot de passe est invalide</h5>\n  </ion-row>\n  <section class="login-flex-row">\n    <ion-item no-lines no-padding class="remember-me login-flex-item">\n      <ion-label>Se souvenir de moi</ion-label>\n      <ion-checkbox class="ba-checkbox" formControlName="remember" (ionChange)="rememberMe()"></ion-checkbox>\n    </ion-item>\n    <button type="button" ion-item no-lines detail-none class="forgot-password login-flex-item" clear\n            (click)="resetPassword()">\n      <a>Mot de passe oublié ?</a>\n    </button>\n  </section>\n  <ion-row>\n    <ion-col>\n      <button type="submit" ion-button block class="button" [disabled]="!loginForm.valid">\n        Se connecter\n      </button>\n    </ion-col>\n  </ion-row>\n  <ion-row>\n    <ion-col>\n      <button type="button" ion-button block class="button" color="light-black" (click)="signUp()">\n        S\'enregistrer\n      </button>\n    </ion-col>\n  </ion-row>\n</form>\n\n'/*ion-inline-end:"/Users/antoineol/nw/beassur/insurance/src/app/auth/login-form/login-form.html"*/,
        }),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_3__shared_services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_4__shared_services_error_service__["a" /* ErrorService */],
            __WEBPACK_IMPORTED_MODULE_5__shared_services_Load_service__["a" /* LoadService */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */]])
    ], LoginFormComponent);
    return LoginFormComponent;
}());

//# sourceMappingURL=login-form.js.map

/***/ }),

/***/ 1069:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterFormComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_adherents_adherents_dal__ = __webpack_require__(610);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_services_auth_service__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_services_error_service__ = __webpack_require__(144);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_services_Load_service__ = __webpack_require__(1057);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_auth_forms__ = __webpack_require__(1062);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shared_auth_validation_patterns__ = __webpack_require__(1063);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__shared_match_other_validator__ = __webpack_require__(1070);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__registration_steps__ = __webpack_require__(1071);
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










var RegisterFormComponent = (function () {
    function RegisterFormComponent(formBuilder, authService, errorService, adherentsDal, loadService) {
        this.formBuilder = formBuilder;
        this.authService = authService;
        this.errorService = errorService;
        this.adherentsDal = adherentsDal;
        this.loadService = loadService;
        this.lastStep = false;
        this.registrationSteps = __WEBPACK_IMPORTED_MODULE_9__registration_steps__["a" /* RegistrationSteps */];
        this.currentStep = this.registrationSteps.CIN;
        this.adherentsForCin = [];
        this.displayForm = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
    }
    RegisterFormComponent.prototype.ngOnInit = function () {
        this.cinForm = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].pattern(__WEBPACK_IMPORTED_MODULE_7__shared_auth_validation_patterns__["a" /* authValidationPatterns */]['cin'])]);
        this.adherentForm = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required]);
        this.emailForm = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].pattern(__WEBPACK_IMPORTED_MODULE_7__shared_auth_validation_patterns__["a" /* authValidationPatterns */]['email'])]);
        this.passwordForm = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].minLength(6)]);
        this.confirmPasswordForm = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required, Object(__WEBPACK_IMPORTED_MODULE_8__shared_match_other_validator__["a" /* matchOtherValidator */])('passwordForm')]);
        this.adherentNumForm = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].pattern(__WEBPACK_IMPORTED_MODULE_7__shared_auth_validation_patterns__["a" /* authValidationPatterns */]['cin'])]);
        this.registrationForm = this.formBuilder.group({
            'cinForm': this.cinForm,
            'adherentNumForm': this.adherentNumForm,
            'adherentForm': this.adherentForm,
            'emailForm': this.emailForm,
            'passwordForm': this.passwordForm,
            'confirmPasswordForm': this.confirmPasswordForm
        });
    };
    RegisterFormComponent.prototype.nextStep = function () {
        switch (this.currentStep) {
            case __WEBPACK_IMPORTED_MODULE_9__registration_steps__["a" /* RegistrationSteps */].CIN: {
                this.populateAdherents();
                break;
            }
            case __WEBPACK_IMPORTED_MODULE_9__registration_steps__["a" /* RegistrationSteps */].AdherentSelection: {
                this.currentStep = this.registrationSteps.ProfileCompletion;
                this.lastStep = true;
                break;
            }
            case __WEBPACK_IMPORTED_MODULE_9__registration_steps__["a" /* RegistrationSteps */].ProfileCompletion: {
                this.registerNewUser();
                break;
            }
            default: {
                break;
            }
        }
    };
    RegisterFormComponent.prototype.previousStep = function () {
        switch (this.currentStep) {
            case __WEBPACK_IMPORTED_MODULE_9__registration_steps__["a" /* RegistrationSteps */].CIN: {
                this.displayForm.emit(__WEBPACK_IMPORTED_MODULE_6__shared_auth_forms__["a" /* AuthForms */].LOGIN);
                break;
            }
            case __WEBPACK_IMPORTED_MODULE_9__registration_steps__["a" /* RegistrationSteps */].AdherentSelection: {
                this.currentStep = this.registrationSteps.CIN;
                break;
            }
            case __WEBPACK_IMPORTED_MODULE_9__registration_steps__["a" /* RegistrationSteps */].ProfileCompletion: {
                this.currentStep = this.registrationSteps.AdherentSelection;
                this.lastStep = false;
                break;
            }
            default: {
                break;
            }
        }
    };
    RegisterFormComponent.prototype.registerNewUser = function () {
        return __awaiter(this, void 0, void 0, function () {
            var user, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.registrationForm.valid) return [3 /*break*/, 5];
                        this.loadService.start();
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        user = {
                            name: this.registrationForm.value.adherentForm.name,
                            id: this.registrationForm.value.adherentForm.id,
                            cin: this.registrationForm.value.cinForm,
                            email: this.registrationForm.value.emailForm,
                            adherentNum: this.registrationForm.value.adherentNumForm,
                        };
                        return [4 /*yield*/, this.authService.signUp(user, this.registrationForm.value.passwordForm)];
                    case 2:
                        _a.sent();
                        this.displayForm.emit(__WEBPACK_IMPORTED_MODULE_6__shared_auth_forms__["a" /* AuthForms */].LOGIN);
                        return [3 /*break*/, 4];
                    case 3:
                        error_1 = _a.sent();
                        this.errorService.handleError(error_1);
                        return [3 /*break*/, 4];
                    case 4:
                        this.loadService.stop();
                        _a.label = 5;
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    RegisterFormComponent.prototype.registrationStepIsValid = function () {
        switch (this.currentStep) {
            case __WEBPACK_IMPORTED_MODULE_9__registration_steps__["a" /* RegistrationSteps */].CIN: {
                return this.cinForm.valid;
            }
            case __WEBPACK_IMPORTED_MODULE_9__registration_steps__["a" /* RegistrationSteps */].AdherentSelection: {
                return this.adherentForm.valid;
            }
            case __WEBPACK_IMPORTED_MODULE_9__registration_steps__["a" /* RegistrationSteps */].ProfileCompletion: {
                return this.emailForm.valid && this.passwordForm.valid && this.confirmPasswordForm.valid
                    && this.passwordForm.value == this.confirmPasswordForm.value;
            }
            default: {
                return false;
            }
        }
    };
    RegisterFormComponent.prototype.compareByAdherentId = function (item1, item2) {
        return item1.id === item2.id;
    };
    RegisterFormComponent.prototype.ngOnDestroy = function () {
        if (this.adherentSubscription)
            this.adherentSubscription.unsubscribe();
    };
    RegisterFormComponent.prototype.populateAdherents = function () {
        var _this = this;
        if (this.cinForm.valid) {
            this.loadService.start();
            this.adherentSubscription = this.adherentsDal.getAdherentsByCIN(this.cinForm.value, this.adherentNumForm.value).subscribe(function (value) {
                _this.adherentsForCin = value;
                _this.currentStep = _this.registrationSteps.AdherentSelection;
                _this.loadService.stop();
            }, function (reason) {
                _this.currentStep = _this.registrationSteps.CIN;
                _this.errorService.handleError(reason);
                _this.loadService.stop();
            });
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Output */])(),
        __metadata("design:type", Object)
    ], RegisterFormComponent.prototype, "displayForm", void 0);
    RegisterFormComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'ba-register-form',template:/*ion-inline-start:"/Users/antoineol/nw/beassur/insurance/src/app/auth/register/register-form.html"*/'<form [formGroup]="registrationForm" (submit)="nextStep()">\n  <ion-row class="header-msg">\n    <ion-col>\n      <h1>Identification</h1>\n      <h3>Pour activer votre compte merci de renseigner les informations ci-dessous.</h3>\n    </ion-col>\n  </ion-row>\n  <div *ngIf="currentStep === registrationSteps.CIN">\n    <ion-item class="item-md input-box">\n      <ion-label>\n        <ion-icon name="ios-grid-outline"></ion-icon>\n      </ion-label>\n      <ion-input formControlName="cinForm" placeholder="CIN" type="text" touched-workaround></ion-input>\n    </ion-item>\n    <ion-row *ngIf="registrationForm.get(\'cinForm\').invalid && registrationForm.get(\'cinForm\').touched">\n      <h5>Doit être alphanumérique</h5>\n    </ion-row>\n    <!--TODO: verify Adherent Num\'s type text or number or alphanumeric-->\n    <ion-item class="item-md input-box">\n      <ion-label>\n        <ion-icon name="ios-grid-outline"></ion-icon>\n      </ion-label>\n      <ion-input formControlName="adherentNumForm" placeholder="Numéro d\'adhérent" type="text"\n                 touched-workaround></ion-input>\n    </ion-item>\n  </div>\n  <div *ngIf="currentStep === registrationSteps.AdherentSelection">\n    <ion-item class="item-md input-box">\n      <ion-label>Sélectionner un adhérent</ion-label>\n      <ion-select [compareWith]="compareByAdherentId" block formControlName="adherentForm">\n        <ion-option *ngFor="let adherent of adherentsForCin" [value]="adherent"\n                    [disabled]="adherent.isRegistered">{{adherent.name}}\n        </ion-option>\n      </ion-select>\n    </ion-item>\n  </div>\n  <div *ngIf="currentStep === registrationSteps.ProfileCompletion">\n    <ion-item class="item-md input-box">\n      <ion-label>\n        <ion-icon name="md-mail"></ion-icon>\n      </ion-label>\n      <ion-input formControlName="emailForm" placeholder="Email" type="email" touched-workaround></ion-input>\n    </ion-item>\n    <ion-row *ngIf="registrationForm.get(\'emailForm\').invalid && registrationForm.get(\'emailForm\').touched">\n      <h5>Votre adresse emailForm est invalide</h5>\n    </ion-row>\n    <ion-item class="item-md input-box">\n      <ion-label>\n        <ion-icon name="md-lock"></ion-icon>\n      </ion-label>\n      <ion-input formControlName="passwordForm" placeholder="Mot de Passe"\n                 type="password" touched-workaround></ion-input>\n    </ion-item>\n    <ion-row *ngIf="registrationForm.get(\'passwordForm\').invalid && registrationForm.get(\'passwordForm\').touched">\n      <h5>Votre mot de passe doit contenir au moins 6 caractères</h5>\n    </ion-row>\n    <ion-item class="item-md input-box">\n      <ion-label>\n        <ion-icon name="md-lock"></ion-icon>\n      </ion-label>\n      <ion-input formControlName="confirmPasswordForm" placeholder="Confirmer votre mot de passe" type="password"\n                 touched-workaround></ion-input>\n    </ion-item>\n    <ion-row\n      *ngIf="registrationForm.get(\'confirmPasswordForm\').invalid && registrationForm.get(\'confirmPasswordForm\').touched">\n      <h5>les deux mots de passe doivent être identiques</h5>\n    </ion-row>\n  </div>\n  <ion-row>\n    <ion-col col-6 class="padding-left-0">\n      <button ion-button type="button" block class="button" (click)="previousStep()">\n        Retour\n      </button>\n    </ion-col>\n    <ion-col col-6 class="padding-right-0">\n      <button *ngIf="!lastStep" ion-button type="submit" block class="button" [disabled]="!registrationStepIsValid()">\n        Suivant\n      </button>\n      <button *ngIf="lastStep" ion-button type="submit" block class="button" color="light-black"\n              [disabled]="!registrationStepIsValid()">\n        Terminer\n      </button>\n    </ion-col>\n  </ion-row>\n</form>\n\n'/*ion-inline-end:"/Users/antoineol/nw/beassur/insurance/src/app/auth/register/register-form.html"*/
        }),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_3__shared_services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_4__shared_services_error_service__["a" /* ErrorService */],
            __WEBPACK_IMPORTED_MODULE_2__shared_services_adherents_adherents_dal__["a" /* AdherentsDal */],
            __WEBPACK_IMPORTED_MODULE_5__shared_services_Load_service__["a" /* LoadService */]])
    ], RegisterFormComponent);
    return RegisterFormComponent;
}());

//# sourceMappingURL=register-form.js.map

/***/ }),

/***/ 1070:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = matchOtherValidator;
function matchOtherValidator(otherControlName) {
    var thisControl;
    var otherControl;
    return function matchOtherValidate(control) {
        if (!control.parent) {
            return null;
        }
        // Initializing the validator.
        if (!thisControl) {
            thisControl = control;
            otherControl = control.parent.get(otherControlName);
            if (!otherControl) {
                throw new Error('matchOtherValidator(): other control is not found in parent group');
            }
            otherControl.valueChanges.subscribe(function () {
                thisControl.updateValueAndValidity();
            });
        }
        if (!otherControl) {
            return null;
        }
        if (otherControl.value !== thisControl.value) {
            return {
                matchOther: true,
            };
        }
        return null;
    };
}
//# sourceMappingURL=match-other-validator.js.map

/***/ }),

/***/ 1071:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegistrationSteps; });
var RegistrationSteps;
(function (RegistrationSteps) {
    RegistrationSteps[RegistrationSteps["CIN"] = 0] = "CIN";
    RegistrationSteps[RegistrationSteps["AdherentSelection"] = 1] = "AdherentSelection";
    RegistrationSteps[RegistrationSteps["ProfileCompletion"] = 2] = "ProfileCompletion";
})(RegistrationSteps || (RegistrationSteps = {}));
//# sourceMappingURL=registration-steps.js.map

/***/ }),

/***/ 1072:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResetPasswordFormComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(608);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_services_auth_service__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_services_error_service__ = __webpack_require__(144);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_services_Load_service__ = __webpack_require__(1057);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shared_services_toast_service__ = __webpack_require__(246);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__shared_auth_forms__ = __webpack_require__(1062);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__shared_auth_messages__ = __webpack_require__(1073);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__shared_auth_validation_patterns__ = __webpack_require__(1063);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var ResetPasswordFormComponent = (function () {
    function ResetPasswordFormComponent(formBuilder, authService, toastService, errorService, loading, loadService, storage) {
        this.formBuilder = formBuilder;
        this.authService = authService;
        this.toastService = toastService;
        this.errorService = errorService;
        this.loading = loading;
        this.loadService = loadService;
        this.storage = storage;
        this.displayForm = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
    }
    ResetPasswordFormComponent.prototype.ngOnInit = function () {
        this.resetPasswordForm = this.formBuilder.group({
            'email': ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].pattern(__WEBPACK_IMPORTED_MODULE_10__shared_auth_validation_patterns__["a" /* authValidationPatterns */]['email'])]],
        });
    };
    ResetPasswordFormComponent.prototype.resetPassword = function () {
        var _this = this;
        this.loadService.start();
        this.authService.resetPassword(this.resetPasswordForm.value.email)
            .then(function () {
            _this.toastService.toast(__WEBPACK_IMPORTED_MODULE_9__shared_auth_messages__["a" /* authMessages */]['RESET_PASSWORD_MAIL_SENT']);
            _this.storage.set('email', _this.resetPasswordForm.value.email);
            _this.displayForm.emit(__WEBPACK_IMPORTED_MODULE_8__shared_auth_forms__["a" /* AuthForms */].LOGIN);
            _this.loadService.stop();
        })
            .catch(function (error) {
            _this.errorService.handleError(error);
            _this.loadService.stop();
        });
    };
    ResetPasswordFormComponent.prototype.displayLoginForm = function () {
        this.displayForm.emit(__WEBPACK_IMPORTED_MODULE_8__shared_auth_forms__["a" /* AuthForms */].LOGIN);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Output */])(),
        __metadata("design:type", Object)
    ], ResetPasswordFormComponent.prototype, "displayForm", void 0);
    ResetPasswordFormComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'ba-reset-password-form',template:/*ion-inline-start:"/Users/antoineol/nw/beassur/insurance/src/app/auth/reset-password/reset-password.html"*/'<form [formGroup]="resetPasswordForm" (ngSubmit)="resetPassword()">\n  <ion-row class="header-msg">\n    <ion-col>\n      <h3>Entrez votre adresse email et nous vous enverrons un lien pour réinitialiser votre mot de passe.</h3>\n    </ion-col>\n  </ion-row>\n  <ion-item class="item-md input-box">\n    <ion-label>\n      <ion-icon name="md-person"></ion-icon>\n    </ion-label>\n    <ion-input formControlName="email" placeholder="Email" type="email"\n               touched-workaround></ion-input>\n  </ion-item>\n  <ion-row *ngIf="resetPasswordForm.get(\'email\').invalid && resetPasswordForm.get(\'email\').touched">\n    <h5>Votre adresse email est invalide</h5>\n  </ion-row>\n  <ion-row>\n    <ion-col col-6 class="padding-left-0">\n      <button ion-button block (click)=displayLoginForm() class="button">\n        Retour\n      </button>\n    </ion-col>\n    <ion-col col-6 class="padding-right-0">\n      <button ion-button block type="submit" class="button" [disabled]="!resetPasswordForm.valid">\n        Envoyer\n      </button>\n    </ion-col>\n  </ion-row>\n</form>\n\n'/*ion-inline-end:"/Users/antoineol/nw/beassur/insurance/src/app/auth/reset-password/reset-password.html"*/,
        }),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_4__shared_services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_7__shared_services_toast_service__["a" /* ToastService */],
            __WEBPACK_IMPORTED_MODULE_5__shared_services_error_service__["a" /* ErrorService */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["g" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_6__shared_services_Load_service__["a" /* LoadService */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */]])
    ], ResetPasswordFormComponent);
    return ResetPasswordFormComponent;
}());

//# sourceMappingURL=reset-password.js.map

/***/ }),

/***/ 1073:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return authMessages; });
var authMessages = {
    "RESET_PASSWORD_MAIL_SENT": "Un mail a été envoyé pour réinitialiser votre mot de passe",
};
//# sourceMappingURL=auth.messages.js.map

/***/ }),

/***/ 1074:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FormsDataService; });
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

var FormsDataService = (function () {
    function FormsDataService() {
        this.emailAddress = '';
    }
    FormsDataService.prototype.getEmailAddress = function () {
        return this.emailAddress;
    };
    FormsDataService.prototype.setEmailAddress = function (emailAddress) {
        this.emailAddress = emailAddress;
    };
    FormsDataService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], FormsDataService);
    return FormsDataService;
}());

//# sourceMappingURL=forms-data-service.js.map

/***/ })

});
//# sourceMappingURL=0.js.map