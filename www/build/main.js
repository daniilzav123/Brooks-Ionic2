webpackJsonp([0],{

/***/ 128:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginDoneScreen; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ApplicationLogScreen_ApplicationLogScreen__ = __webpack_require__(235);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__EquipmentLogScreen_EquipmentLogScreen__ = __webpack_require__(244);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_apiService__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ionic_native__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_singletoneService__ = __webpack_require__(52);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var LoginDoneScreen = (function () {
    function LoginDoneScreen(navCtrl, navParams, apiService, singletonService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.apiService = apiService;
        this.singletonService = singletonService;
    }
    LoginDoneScreen.prototype.onApplicationLog = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__ApplicationLogScreen_ApplicationLogScreen__["a" /* ApplicationLogScreen */]);
    };
    LoginDoneScreen.prototype.onEquipmentLog = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__EquipmentLogScreen_EquipmentLogScreen__["a" /* EquipmentLogScreen */]);
    };
    LoginDoneScreen.prototype.onReminder = function () {
        var data = {
            data: "test"
        };
        this.apiService.post('/task/reminder', data, 'Loading...').subscribe(function (data) {
            console.log('DATA', data);
        }, function (error) {
            console.log(error);
        });
    };
    LoginDoneScreen.prototype.onBack = function () {
        this.navCtrl.pop();
    };
    LoginDoneScreen.prototype.onLogout = function () {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_5_ionic_native__["a" /* NativeStorage */].setItem('loggedIn', "")
            .then(function (d) {
            console.log('wa true' + d);
            _this.singletonService.loginUser = "";
            _this.navCtrl.pop();
        }, function (error) { return console.error('Error storing LoginData', error); });
    };
    return LoginDoneScreen;
}());
LoginDoneScreen = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-logindonescreen',template:/*ion-inline-start:"/Volumes/MACDATA/Work/NewProjects/Cross/2017.8/Brooks/BrooksIonic2/src/pages/LoginDoneScreen/LoginDoneScreen.html"*/'<ion-content padding>\n\n  <div class="iconback-global" (click)="onBack();"></div>\n\n  <div class="back-padding-vertical"></div>\n\n  <div class="weight-wrapper">\n    <button ion-button class="login-btn" (click)="onApplicationLog();">Application Log</button>\n  </div>\n\n  <div class="weight-wrapper">\n    <button ion-button class="login-btn" (click)="onEquipmentLog();">Equipment Log</button>\n  </div>\n\n  <div class="weight-wrapper">\n    <button ion-button class="login-btn" (click)="onReminder();">Tasks/Reminders</button>\n  </div>\n\n  <button ion-button class="global-submit-button" (click)="onLogout();">\n    Logout\n  </button>\n</ion-content>\n'/*ion-inline-end:"/Volumes/MACDATA/Work/NewProjects/Cross/2017.8/Brooks/BrooksIonic2/src/pages/LoginDoneScreen/LoginDoneScreen.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_4__services_apiService__["a" /* ApiService */],
        __WEBPACK_IMPORTED_MODULE_6__services_singletoneService__["a" /* SingletonService */]])
], LoginDoneScreen);

//# sourceMappingURL=LoginDoneScreen.js.map

/***/ }),

/***/ 144:
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
webpackEmptyAsyncContext.id = 144;

/***/ }),

/***/ 187:
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
webpackEmptyAsyncContext.id = 187;

/***/ }),

/***/ 232:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppSplashScreen; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__IntroScreen_IntroScreen__ = __webpack_require__(233);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppSplashScreen = (function () {
    function AppSplashScreen(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    AppSplashScreen.prototype.ngOnInit = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__IntroScreen_IntroScreen__["a" /* IntroScreen */]);
    };
    return AppSplashScreen;
}());
AppSplashScreen = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-appsplashscreen',template:/*ion-inline-start:"/Volumes/MACDATA/Work/NewProjects/Cross/2017.8/Brooks/BrooksIonic2/src/pages/AppSplashScreen/AppSplashScreen.html"*/'<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/Volumes/MACDATA/Work/NewProjects/Cross/2017.8/Brooks/BrooksIonic2/src/pages/AppSplashScreen/AppSplashScreen.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
], AppSplashScreen);

//# sourceMappingURL=AppSplashScreen.js.map

/***/ }),

/***/ 233:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IntroScreen; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__LoginScreen_LoginScreen__ = __webpack_require__(234);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_native__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__LoginDoneScreen_LoginDoneScreen__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_singletoneService__ = __webpack_require__(52);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var IntroScreen = (function () {
    function IntroScreen(navCtrl, navParams, singletonService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.singletonService = singletonService;
    }
    IntroScreen.prototype.ngOnInit = function () {
        var _this = this;
        console.log('come on ngoninit');
        __WEBPACK_IMPORTED_MODULE_3_ionic_native__["a" /* NativeStorage */].getItem('loggedIn').then(function (d) {
            if (d == "" || d == null) {
                console.log('wa false');
            }
            else {
                console.log('wa true');
                _this.singletonService.loginUser = d;
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__LoginDoneScreen_LoginDoneScreen__["a" /* LoginDoneScreen */]);
            }
        }, function (error) {
            console.log('wa error' + error);
        });
    };
    IntroScreen.prototype.onLogin = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__LoginScreen_LoginScreen__["a" /* LoginScreen */]);
    };
    return IntroScreen;
}());
IntroScreen = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-introscreen',template:/*ion-inline-start:"/Volumes/MACDATA/Work/NewProjects/Cross/2017.8/Brooks/BrooksIonic2/src/pages/IntroScreen/IntroScreen.html"*/'<ion-content padding>\n  <div class="weight-wrapper">\n    <div class="logo-image"></div>\n    <ion-label class="application-label">Application App</ion-label>\n    <button ion-button class="login-btn" (click)="onLogin();">Login</button>\n  </div>\n\n</ion-content>\n'/*ion-inline-end:"/Volumes/MACDATA/Work/NewProjects/Cross/2017.8/Brooks/BrooksIonic2/src/pages/IntroScreen/IntroScreen.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_5__services_singletoneService__["a" /* SingletonService */]])
], IntroScreen);

//# sourceMappingURL=IntroScreen.js.map

/***/ }),

/***/ 234:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginScreen; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__LoginDoneScreen_LoginDoneScreen__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_apiService__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_native__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_singletoneService__ = __webpack_require__(52);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var LoginScreen = (function () {
    function LoginScreen(navCtrl, navParams, apiService, singletonService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.apiService = apiService;
        this.singletonService = singletonService;
        this.username = "";
        this.password = "";
    }
    LoginScreen.prototype.onLogin = function () {
        var _this = this;
        var data = {
            username: this.username,
            password: this.password
        };
        this.apiService.post('/login', data, 'Logging in...').subscribe(function (data) {
            console.log('DATA', data);
            _this.singletonService.loginUser = _this.username;
            __WEBPACK_IMPORTED_MODULE_4_ionic_native__["a" /* NativeStorage */].setItem('loggedIn', _this.username)
                .then(function (d) {
                console.log('wa true' + d);
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__LoginDoneScreen_LoginDoneScreen__["a" /* LoginDoneScreen */]);
            }, function (error) {
                console.error('Error storing LoginData', error);
            });
        }, function (error) {
            console.log(error);
        });
    };
    // onLogin() {
    //   this.navCtrl.push(LoginDoneScreen);
    // }
    LoginScreen.prototype.onBack = function () {
        this.navCtrl.pop();
    };
    return LoginScreen;
}());
LoginScreen = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-loginscreen',template:/*ion-inline-start:"/Volumes/MACDATA/Work/NewProjects/Cross/2017.8/Brooks/BrooksIonic2/src/pages/LoginScreen/LoginScreen.html"*/'<ion-content padding>\n\n  <div class="iconback-global" (click)="onBack();"></div>\n\n  <div class="back-padding-vertical"></div>\n\n  <div class="weight-fixed">\n    <ion-label>Username</ion-label>\n    <ion-input class="username-input" [(ngModel)]="username"></ion-input>\n  </div>\n\n  <div class="weight-fixed">\n    <ion-label>Password</ion-label>\n    <ion-input class="username-input" type="password" [(ngModel)]="password"></ion-input>\n  </div>\n\n  <div class="weight-wrapper">\n    <button ion-button class="login-btn" (click)="onLogin();">Login</button>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Volumes/MACDATA/Work/NewProjects/Cross/2017.8/Brooks/BrooksIonic2/src/pages/LoginScreen/LoginScreen.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_3__services_apiService__["a" /* ApiService */],
        __WEBPACK_IMPORTED_MODULE_5__services_singletoneService__["a" /* SingletonService */]])
], LoginScreen);

//# sourceMappingURL=LoginScreen.js.map

/***/ }),

/***/ 235:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApplicationLogScreen; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__NewJob_NewJob__ = __webpack_require__(236);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__CurrentJob_CurrentJob__ = __webpack_require__(242);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__PreviousJob_PreviousJob__ = __webpack_require__(243);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ApplicationLogScreen = (function () {
    function ApplicationLogScreen(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ApplicationLogScreen.prototype.onCreateNewJob = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__NewJob_NewJob__["a" /* NewJob */]);
    };
    ApplicationLogScreen.prototype.onCurrentJobReport = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__CurrentJob_CurrentJob__["a" /* CurrentJob */]);
    };
    ApplicationLogScreen.prototype.onPrevious = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__PreviousJob_PreviousJob__["a" /* PreviousJob */]);
    };
    ApplicationLogScreen.prototype.onBack = function () {
        this.navCtrl.pop();
    };
    return ApplicationLogScreen;
}());
ApplicationLogScreen = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-applicationlogscreen',template:/*ion-inline-start:"/Volumes/MACDATA/Work/NewProjects/Cross/2017.8/Brooks/BrooksIonic2/src/pages/ApplicationLogScreen/ApplicationLogScreen.html"*/'<ion-content padding>\n\n  <div class="iconback-global" (click)="onBack();"></div>\n\n  <div class="back-padding-vertical"></div>\n\n  <div class="weight-wrapper">\n    <button ion-button class="login-btn" (click)="onCreateNewJob();">Create New Job</button>\n  </div>\n\n  <div class="weight-wrapper">\n    <button ion-button class="login-btn" (click)="onCurrentJobReport();">Current Job Report</button>\n  </div>\n\n  <div class="weight-wrapper">\n    <button ion-button class="login-btn" (click)="onPrevious();">Previous Reports</button>\n  </div>\n\n</ion-content>\n'/*ion-inline-end:"/Volumes/MACDATA/Work/NewProjects/Cross/2017.8/Brooks/BrooksIonic2/src/pages/ApplicationLogScreen/ApplicationLogScreen.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
], ApplicationLogScreen);

//# sourceMappingURL=ApplicationLogScreen.js.map

/***/ }),

/***/ 236:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewJob; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Notes_Notes__ = __webpack_require__(237);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_apiService__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_singletoneService__ = __webpack_require__(52);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var NewJob = (function () {
    function NewJob(navCtrl, navParams, apiService, singletonService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.apiService = apiService;
        this.singletonService = singletonService;
        this.imageUrl = null;
        this.Date = "";
        this.Grower = "";
        this.FarmName = "";
        this.FieldName = "";
        this.AppType = "";
        this.EquipID = "";
        this.Acres = "";
        this.note = "";
    }
    NewJob.prototype.onCreateNewJob = function () {
    };
    NewJob.prototype.onCurrentJobReport = function () {
    };
    NewJob.prototype.onPrevious = function () {
    };
    NewJob.prototype.onBack = function () {
        this.navCtrl.pop();
    };
    NewJob.prototype.onNotes = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__Notes_Notes__["a" /* Notes */], { parent: this });
    };
    NewJob.prototype.setNotes = function (str) {
        this.note = str;
    };
    NewJob.prototype.onSubmit = function () {
        var _this = this;
        var data = {
            User: this.singletonService.loginUser,
            Date: this.Date,
            Grower: this.Grower,
            FarmName: this.FarmName,
            FieldName: this.FieldName,
            AppType: this.AppType,
            EquipID: this.EquipID,
            Acres: this.Acres,
            note: this.note,
            imageUrl: ""
        };
        this.apiService.post('/job/create', data, 'Creating Job...').subscribe(function (data) {
            console.log('DATA', data);
            _this.navCtrl.pop();
        }, function (error) {
            console.log(error);
        });
    };
    return NewJob;
}());
NewJob = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-newjob',template:/*ion-inline-start:"/Volumes/MACDATA/Work/NewProjects/Cross/2017.8/Brooks/BrooksIonic2/src/pages/ApplicationLogScreen/NewJob/NewJob.html"*/'<ion-content padding>\n\n  <div class="iconback-global" (click)="onBack();"></div>\n\n  <div class="back-padding-vertical-mini"></div>\n\n  <ion-scroll class="scroll-wrapper" scrollY="true">\n\n    <div class="weight-fixed">\n      <ion-label>Date</ion-label>\n      <ion-input class="username-input" [(ngModel)]="Date"></ion-input>\n    </div>\n\n    <div class="weight-fixed">\n      <ion-label>Grower</ion-label>\n      <ion-input class="username-input" [(ngModel)]="Grower"></ion-input>\n    </div>\n\n    <div class="weight-fixed">\n      <ion-label>Farm Name</ion-label>\n      <ion-input class="username-input" [(ngModel)]="FarmName"></ion-input>\n    </div>\n\n    <div class="weight-fixed">\n      <ion-label>Field Name</ion-label>\n      <ion-input class="username-input" [(ngModel)]="FieldName"></ion-input>\n    </div>\n\n    <div class="weight-fixed">\n      <ion-label>Application Type</ion-label>\n      <ion-input class="username-input" [(ngModel)]="AppType"></ion-input>\n    </div>\n\n    <div class="weight-fixed">\n      <ion-label>Equipment ID</ion-label>\n      <ion-input class="username-input" [(ngModel)]="EquipID"></ion-input>\n    </div>\n\n    <div class="weight-fixed">\n      <ion-label>Applied Acres</ion-label>\n      <ion-input class="username-input" [(ngModel)]="Acres"></ion-input>\n    </div>\n\n    <div class="weight-wrapper">\n      <button ion-button class="login-btn" (click)="onNotes();">Notes</button>\n    </div>\n\n    <div class="weight-wrapper">\n      <button ion-button class="submit-btn" (click)="onSubmit();">\n        Submit to current jobs Report\n      </button>\n    </div>\n\n  </ion-scroll>\n\n</ion-content>\n'/*ion-inline-end:"/Volumes/MACDATA/Work/NewProjects/Cross/2017.8/Brooks/BrooksIonic2/src/pages/ApplicationLogScreen/NewJob/NewJob.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_3__services_apiService__["a" /* ApiService */],
        __WEBPACK_IMPORTED_MODULE_4__services_singletoneService__["a" /* SingletonService */]])
], NewJob);

//# sourceMappingURL=NewJob.js.map

/***/ }),

/***/ 237:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Notes; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__ = __webpack_require__(238);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var Notes = (function () {
    function Notes(navCtrl, navParams, camera) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.camera = camera;
        this.photoAdded = false;
        this.photoUrl = null;
        this.note = "";
    }
    Notes.prototype.onBack = function () {
        this.navCtrl.pop();
    };
    Notes.prototype.onSubmit = function () {
        this.navParams.get('parent').setNotes(this.note);
        this.navCtrl.pop();
    };
    Notes.prototype.onCamera = function () {
        var _this = this;
        var options = {
            quality: 100,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE
        };
        this.camera.getPicture(options).then(function (imageData) {
            // imageData is either a base64 encoded string or a file URI
            // If it's base64:
            var base64Image = 'data:image/jpeg;base64,' + imageData;
            _this.photoUrl = base64Image;
            _this.photoAdded = true;
        }, function (err) {
            // Handle error
        });
    };
    return Notes;
}());
Notes = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-notes',template:/*ion-inline-start:"/Volumes/MACDATA/Work/NewProjects/Cross/2017.8/Brooks/BrooksIonic2/src/pages/ApplicationLogScreen/NewJob/Notes/Notes.html"*/'<ion-content padding>\n\n  <div class="iconback-global" (click)="onBack();"></div>\n\n  <div class="back-padding-vertical-mini"></div>\n\n  <div class="weight-wrapper">\n    <textarea rows="5" type="text" placeholder="Describe notes" [(ngModel)]="note"></textarea>\n    <div class="camera-image" (click)="onCamera();"></div>\n    <br/>\n    <div *ngIf="photoAdded" class="photoAdded" [ngStyle]="{\'background-image\': \'url(\' + photoUrl + \')\'}"></div>\n  </div>\n\n\n  <button ion-button class="global-submit-button" (click)="onSubmit();">\n    Submit\n  </button>\n</ion-content>\n'/*ion-inline-end:"/Volumes/MACDATA/Work/NewProjects/Cross/2017.8/Brooks/BrooksIonic2/src/pages/ApplicationLogScreen/NewJob/Notes/Notes.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__["a" /* Camera */]])
], Notes);

//# sourceMappingURL=Notes.js.map

/***/ }),

/***/ 241:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Spinner; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Spinner = (function () {
    function Spinner(loadingCtrl) {
        this.loadingCtrl = loadingCtrl;
    }
    Spinner.prototype.show = function (content) {
        this.loading = this.loadingCtrl.create({
            content: content,
            dismissOnPageChange: true
        });
        this.loading.present();
    };
    Spinner.prototype.hide = function () {
        this.loading.dismiss();
    };
    return Spinner;
}());
Spinner = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* LoadingController */]])
], Spinner);

//# sourceMappingURL=spinnerService.js.map

/***/ }),

/***/ 242:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CurrentJob; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_apiService__ = __webpack_require__(43);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CurrentJob = (function () {
    function CurrentJob(navCtrl, navParams, apiService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.apiService = apiService;
        this.job_list = [];
    }
    CurrentJob.prototype.onCreateNewJob = function () {
    };
    CurrentJob.prototype.onCurrentJobReport = function () {
    };
    CurrentJob.prototype.onPrevious = function () {
    };
    CurrentJob.prototype.onJob = function (index) {
        alert(index);
    };
    CurrentJob.prototype.ngOnInit = function () {
        var _this = this;
        var data = {};
        this.apiService.post('/job/search', data, 'Loading...').subscribe(function (data) {
            console.log('DATA', data);
            _this.job_list = data.response;
        }, function (error) {
            console.log(error);
        });
    };
    CurrentJob.prototype.onBack = function () {
        this.navCtrl.pop();
    };
    return CurrentJob;
}());
CurrentJob = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-currentjob',template:/*ion-inline-start:"/Volumes/MACDATA/Work/NewProjects/Cross/2017.8/Brooks/BrooksIonic2/src/pages/ApplicationLogScreen/CurrentJob/CurrentJob.html"*/'<ion-content padding>\n\n  <div class="iconback-global" (click)="onBack();"></div>\n\n  <div class="back-padding-vertical-mini"></div>\n\n  <div class="weight-fixed">\n    <ion-label class="label">List of all entered jobs</ion-label>\n  </div>\n\n  <ion-scroll class="scroll-wrapper" scrollY="true">\n    <div class="weight-fixed" *ngFor="let item of job_list; let idIdx = index;" (click)="onJob(idIdx)">\n      <ion-label class="username-input">{{item.id}}</ion-label>\n    </div>\n  </ion-scroll>\n\n  <button ion-button class="global-submit-button">\n    Submit Current Report\n  </button>\n\n</ion-content>\n'/*ion-inline-end:"/Volumes/MACDATA/Work/NewProjects/Cross/2017.8/Brooks/BrooksIonic2/src/pages/ApplicationLogScreen/CurrentJob/CurrentJob.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__services_apiService__["a" /* ApiService */]])
], CurrentJob);

//# sourceMappingURL=CurrentJob.js.map

/***/ }),

/***/ 243:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PreviousJob; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PreviousJob = (function () {
    function PreviousJob(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    PreviousJob.prototype.onCreateNewJob = function () {
    };
    PreviousJob.prototype.onCurrentJobReport = function () {
    };
    PreviousJob.prototype.onPrevious = function () {
    };
    PreviousJob.prototype.onBack = function () {
        this.navCtrl.pop();
    };
    return PreviousJob;
}());
PreviousJob = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-previousjob',template:/*ion-inline-start:"/Volumes/MACDATA/Work/NewProjects/Cross/2017.8/Brooks/BrooksIonic2/src/pages/ApplicationLogScreen/PreviousJob/PreviousJob.html"*/'<ion-content padding>\n\n  <div class="iconback-global" (click)="onBack();"></div>\n\n  <div class="back-padding-vertical-mini"></div>\n\n  <div class="weight-wrapper">\n    <ion-label>List on Previous submitted Job Reports</ion-label>\n    <ion-label>with ability to view them</ion-label>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Volumes/MACDATA/Work/NewProjects/Cross/2017.8/Brooks/BrooksIonic2/src/pages/ApplicationLogScreen/PreviousJob/PreviousJob.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
], PreviousJob);

//# sourceMappingURL=PreviousJob.js.map

/***/ }),

/***/ 244:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EquipmentLogScreen; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__EquipmentSelectedScreen_EquipmentSelectedScreen__ = __webpack_require__(245);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_apiService__ = __webpack_require__(43);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var EquipmentLogScreen = (function () {
    function EquipmentLogScreen(navCtrl, navParams, apiService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.apiService = apiService;
        this.job_list = [];
    }
    EquipmentLogScreen.prototype.onBack = function () {
        this.navCtrl.pop();
    };
    EquipmentLogScreen.prototype.onJob = function (index) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__EquipmentSelectedScreen_EquipmentSelectedScreen__["a" /* EquipmentSelectedScreen */], {
            index: index
        });
    };
    EquipmentLogScreen.prototype.ngOnInit = function () {
        var _this = this;
        var data = {};
        this.apiService.post('/job/search', data, 'Loading...').subscribe(function (data) {
            console.log('DATA', data);
            _this.job_list = data.response;
        }, function (error) {
            console.log(error);
        });
    };
    return EquipmentLogScreen;
}());
EquipmentLogScreen = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-equipmentlogscreen',template:/*ion-inline-start:"/Volumes/MACDATA/Work/NewProjects/Cross/2017.8/Brooks/BrooksIonic2/src/pages/EquipmentLogScreen/EquipmentLogScreen.html"*/'<ion-content padding>\n\n  <div class="iconback-global" (click)="onBack();"></div>\n\n  <div class="back-padding-vertical-mini"></div>\n\n  <div class="weight-wrapper">\n    <ion-label>Select Equipment</ion-label>\n  </div>\n\n  <ion-scroll class="scroll-wrapper" scrollY="true">\n    <div class="weight-fixed" *ngFor="let item of job_list; let idIdx = index;" (click)="onJob(idIdx)">\n      <ion-label class="username-input">{{item.id}}</ion-label>\n    </div>\n  </ion-scroll>\n\n</ion-content>\n'/*ion-inline-end:"/Volumes/MACDATA/Work/NewProjects/Cross/2017.8/Brooks/BrooksIonic2/src/pages/EquipmentLogScreen/EquipmentLogScreen.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_3__services_apiService__["a" /* ApiService */]])
], EquipmentLogScreen);

//# sourceMappingURL=EquipmentLogScreen.js.map

/***/ }),

/***/ 245:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EquipmentSelectedScreen; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__LogHours_LogHours__ = __webpack_require__(246);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__RoutineMaintenance_RoutineMaintenance__ = __webpack_require__(247);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ScheduledMaintenance_ScheduledMaintenance__ = __webpack_require__(251);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Repairs_Repairs__ = __webpack_require__(253);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var EquipmentSelectedScreen = (function () {
    function EquipmentSelectedScreen(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.index = this.navParams.get("index");
    }
    EquipmentSelectedScreen.prototype.onBack = function () {
        this.navCtrl.pop();
    };
    EquipmentSelectedScreen.prototype.onLogHours = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__LogHours_LogHours__["a" /* LogHours */], {
            index: this.index
        });
    };
    EquipmentSelectedScreen.prototype.onRoutineMaintenance = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__RoutineMaintenance_RoutineMaintenance__["a" /* RoutineMaintenance */]);
    };
    EquipmentSelectedScreen.prototype.onScheduledMaint = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__ScheduledMaintenance_ScheduledMaintenance__["a" /* ScheduledMaintenance */]);
    };
    EquipmentSelectedScreen.prototype.onRepairs = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__Repairs_Repairs__["a" /* Repairs */]);
    };
    return EquipmentSelectedScreen;
}());
EquipmentSelectedScreen = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-equipmentselectedscreen',template:/*ion-inline-start:"/Volumes/MACDATA/Work/NewProjects/Cross/2017.8/Brooks/BrooksIonic2/src/pages/EquipmentLogScreen/EquipmentSelectedScreen/EquipmentSelectedScreen.html"*/'<ion-content padding>\n\n  <div class="iconback-global" (click)="onBack();"></div>\n\n  <div class="back-padding-vertical-mini"></div>\n\n  <div class="weight-wrapper">\n    <button ion-button class="login-btn" (click)="onLogHours()">Log Hours</button>\n  </div>\n\n  <div class="weight-wrapper">\n    <button ion-button class="login-btn" (click)="onRoutineMaintenance()">Routine Maintenance</button>\n  </div>\n\n  <div class="weight-wrapper">\n    <button ion-button class="login-btn" (click)="onScheduledMaint()">Scheduled Maintenance</button>\n  </div>\n\n  <div class="weight-wrapper">\n    <button ion-button class="login-btn" (click)="onRepairs()">Repairs</button>\n  </div>\n\n</ion-content>\n'/*ion-inline-end:"/Volumes/MACDATA/Work/NewProjects/Cross/2017.8/Brooks/BrooksIonic2/src/pages/EquipmentLogScreen/EquipmentSelectedScreen/EquipmentSelectedScreen.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
], EquipmentSelectedScreen);

//# sourceMappingURL=EquipmentSelectedScreen.js.map

/***/ }),

/***/ 246:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LogHours; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_apiService__ = __webpack_require__(43);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LogHours = (function () {
    function LogHours(navCtrl, navParams, apiService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.apiService = apiService;
        this.job_list = [];
        this.index = this.navParams.get("index");
    }
    LogHours.prototype.onBack = function () {
        this.navCtrl.pop();
    };
    LogHours.prototype.ngOnInit = function () {
        this.job_list = [
            {
                date: "1",
                hour: "1"
            },
            {
                date: "2",
                hour: "2"
            },
            {
                date: "3",
                hour: "3"
            },
            {
                date: "4",
                hour: "4"
            },
            {
                date: "5",
                hour: "5"
            },
            {
                date: "1",
                hour: "1"
            },
            {
                date: "2",
                hour: "2"
            },
            {
                date: "3",
                hour: "3"
            },
            {
                date: "4",
                hour: "4"
            },
            {
                date: "5",
                hour: "5"
            },
        ];
    };
    LogHours.prototype.onSubmit = function () {
        var _this = this;
        var data = {
            data: "test"
        };
        this.apiService.post('/equip/log', data, 'Logging...').subscribe(function (data) {
            console.log('DATA', data);
            _this.navCtrl.pop();
        }, function (error) {
            console.log(error);
        });
    };
    LogHours.prototype.onUpdateToggle = function () {
    };
    return LogHours;
}());
LogHours = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-loghours',template:/*ion-inline-start:"/Volumes/MACDATA/Work/NewProjects/Cross/2017.8/Brooks/BrooksIonic2/src/pages/EquipmentLogScreen/EquipmentSelectedScreen/LogHours/LogHours.html"*/'<ion-content padding>\n\n  <div class="iconback-global" (click)="onBack();"></div>\n\n  <div class="back-padding-vertical-mini"></div>\n\n  <div class="weight-fixed">\n    <ion-item>\n      <ion-label>Date</ion-label>\n      <ion-datetime class="date-picker" [(ngModel)]="myDate"></ion-datetime>\n    </ion-item>\n    <ion-item>\n      <ion-label>Enter Current Hours</ion-label>\n      <ion-input class="username-input"></ion-input>\n    </ion-item>\n  </div>\n\n  <div class="weight-wrapper">\n    <ion-label>List of previously submitted hours</ion-label>\n    <ion-scroll>\n      <ion-item *ngFor="let item of job_list; let idIdx = index;">\n        <ion-label class="center-label">{{item.date}}</ion-label>\n        <ion-label class="center-label">{{item.hour}}</ion-label>\n      </ion-item>\n    </ion-scroll>\n  </div>\n\n  <button ion-button class="global-submit-button" (click)="onSubmit();">\n    Submit\n  </button>\n</ion-content>\n'/*ion-inline-end:"/Volumes/MACDATA/Work/NewProjects/Cross/2017.8/Brooks/BrooksIonic2/src/pages/EquipmentLogScreen/EquipmentSelectedScreen/LogHours/LogHours.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__services_apiService__["a" /* ApiService */]])
], LogHours);

//# sourceMappingURL=LogHours.js.map

/***/ }),

/***/ 247:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RoutineMaintenance; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__MachineWash_MachineWash__ = __webpack_require__(248);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Grease_Grease__ = __webpack_require__(249);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__OtherRoutine_OtherRoutine__ = __webpack_require__(250);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RoutineMaintenance = (function () {
    function RoutineMaintenance(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    RoutineMaintenance.prototype.onBack = function () {
        this.navCtrl.pop();
    };
    RoutineMaintenance.prototype.onMachineWash = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__MachineWash_MachineWash__["a" /* MachineWash */]);
    };
    RoutineMaintenance.prototype.onGrease = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__Grease_Grease__["a" /* Grease */]);
    };
    RoutineMaintenance.prototype.onOtherRoutine = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__OtherRoutine_OtherRoutine__["a" /* OtherRoutine */]);
    };
    return RoutineMaintenance;
}());
RoutineMaintenance = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-routinemaintenance',template:/*ion-inline-start:"/Volumes/MACDATA/Work/NewProjects/Cross/2017.8/Brooks/BrooksIonic2/src/pages/EquipmentLogScreen/EquipmentSelectedScreen/RoutineMaintenance/RoutineMaintenance.html"*/'<ion-content padding>\n\n  <div class="iconback-global" (click)="onBack();"></div>\n\n  <div class="back-padding-vertical-mini"></div>\n\n  <div class="weight-wrapper">\n    <button ion-button class="login-btn" (click)="onMachineWash()">Machine Wash</button>\n  </div>\n\n  <div class="weight-wrapper">\n    <button ion-button class="login-btn" (click)="onGrease()">Grease</button>\n  </div>\n\n  <div class="weight-wrapper">\n    <button ion-button class="login-btn" (click)="onOtherRoutine()">Other Routine Maint.</button>\n  </div>\n\n</ion-content>\n'/*ion-inline-end:"/Volumes/MACDATA/Work/NewProjects/Cross/2017.8/Brooks/BrooksIonic2/src/pages/EquipmentLogScreen/EquipmentSelectedScreen/RoutineMaintenance/RoutineMaintenance.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
], RoutineMaintenance);

//# sourceMappingURL=RoutineMaintenance.js.map

/***/ }),

/***/ 248:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MachineWash; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MachineWash = (function () {
    function MachineWash(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    MachineWash.prototype.onBack = function () {
        this.navCtrl.pop();
    };
    MachineWash.prototype.onMachineWash = function () {
    };
    return MachineWash;
}());
MachineWash = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-machinewash',template:/*ion-inline-start:"/Volumes/MACDATA/Work/NewProjects/Cross/2017.8/Brooks/BrooksIonic2/src/pages/EquipmentLogScreen/EquipmentSelectedScreen/RoutineMaintenance/MachineWash/MachineWash.html"*/'<ion-content padding>\n\n  <div class="iconback-global" (click)="onBack();"></div>\n\n  <div class="back-padding-vertical-mini"></div>\n\n  <div class="weight-fixed">\n    <ion-label>Date</ion-label>\n    <ion-input class="username-input"></ion-input>\n  </div>\n\n  <div class="weight-fixed">\n    <ion-label>Hours</ion-label>\n    <ion-input class="username-input"></ion-input>\n  </div>\n\n</ion-content>\n'/*ion-inline-end:"/Volumes/MACDATA/Work/NewProjects/Cross/2017.8/Brooks/BrooksIonic2/src/pages/EquipmentLogScreen/EquipmentSelectedScreen/RoutineMaintenance/MachineWash/MachineWash.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
], MachineWash);

//# sourceMappingURL=MachineWash.js.map

/***/ }),

/***/ 249:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Grease; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Grease = (function () {
    function Grease(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    Grease.prototype.onBack = function () {
        this.navCtrl.pop();
    };
    Grease.prototype.onMachineWash = function () {
    };
    Grease.prototype.onSubmit = function () {
        this.navCtrl.pop();
    };
    return Grease;
}());
Grease = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-grease',template:/*ion-inline-start:"/Volumes/MACDATA/Work/NewProjects/Cross/2017.8/Brooks/BrooksIonic2/src/pages/EquipmentLogScreen/EquipmentSelectedScreen/RoutineMaintenance/Grease/Grease.html"*/'<ion-content padding>\n\n  <div class="iconback-global" (click)="onBack();"></div>\n\n  <div class="back-padding-vertical-mini"></div>\n\n  <div class="weight-fixed">\n    <ion-label>Date</ion-label>\n    <ion-input class="username-input"></ion-input>\n  </div>\n\n  <div class="weight-fixed">\n    <ion-label>Hours</ion-label>\n    <ion-input class="username-input"></ion-input>\n  </div>\n\n</ion-content>\n'/*ion-inline-end:"/Volumes/MACDATA/Work/NewProjects/Cross/2017.8/Brooks/BrooksIonic2/src/pages/EquipmentLogScreen/EquipmentSelectedScreen/RoutineMaintenance/Grease/Grease.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
], Grease);

//# sourceMappingURL=Grease.js.map

/***/ }),

/***/ 250:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OtherRoutine; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var OtherRoutine = (function () {
    function OtherRoutine(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    OtherRoutine.prototype.onBack = function () {
        this.navCtrl.pop();
    };
    OtherRoutine.prototype.onMachineWash = function () {
    };
    return OtherRoutine;
}());
OtherRoutine = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-otherroutine',template:/*ion-inline-start:"/Volumes/MACDATA/Work/NewProjects/Cross/2017.8/Brooks/BrooksIonic2/src/pages/EquipmentLogScreen/EquipmentSelectedScreen/RoutineMaintenance/OtherRoutine/OtherRoutine.html"*/'<ion-content padding>\n\n  <div class="iconback-global" (click)="onBack();"></div>\n\n  <div class="back-padding-vertical-mini"></div>\n\n  <div class="weight-fixed">\n    <ion-label>Date</ion-label>\n    <ion-input class="username-input"></ion-input>\n  </div>\n\n  <div class="weight-fixed">\n    <ion-label>Hours</ion-label>\n    <ion-input class="username-input"></ion-input>\n  </div>\n\n</ion-content>\n'/*ion-inline-end:"/Volumes/MACDATA/Work/NewProjects/Cross/2017.8/Brooks/BrooksIonic2/src/pages/EquipmentLogScreen/EquipmentSelectedScreen/RoutineMaintenance/OtherRoutine/OtherRoutine.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
], OtherRoutine);

//# sourceMappingURL=OtherRoutine.js.map

/***/ }),

/***/ 251:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ScheduledMaintenance; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__NewSchedule_NewSchedule__ = __webpack_require__(252);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ScheduledMaintenance = (function () {
    function ScheduledMaintenance(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ScheduledMaintenance.prototype.onBack = function () {
        this.navCtrl.pop();
    };
    ScheduledMaintenance.prototype.onNewSchedule = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__NewSchedule_NewSchedule__["a" /* NewSchedule */]);
    };
    return ScheduledMaintenance;
}());
ScheduledMaintenance = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-scheduledmaintenance',template:/*ion-inline-start:"/Volumes/MACDATA/Work/NewProjects/Cross/2017.8/Brooks/BrooksIonic2/src/pages/EquipmentLogScreen/EquipmentSelectedScreen/ScheduledMaintenance/ScheduledMaintenance.html"*/'<ion-content padding>\n\n  <div class="iconback-global" (click)="onBack();"></div>\n\n  <div class="back-padding-vertical-mini"></div>\n\n  <div class="weight-wrapper">\n    <button ion-button class="login-btn" (click)="onNewSchedule();">Set-up New Scheduled Maintenance</button>\n  </div>\n\n  <div class="weight-wrapper">\n    <button ion-button class="login-btn">View Currently Scheduled Maint.</button>\n  </div>\n\n</ion-content>\n'/*ion-inline-end:"/Volumes/MACDATA/Work/NewProjects/Cross/2017.8/Brooks/BrooksIonic2/src/pages/EquipmentLogScreen/EquipmentSelectedScreen/ScheduledMaintenance/ScheduledMaintenance.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
], ScheduledMaintenance);

//# sourceMappingURL=ScheduledMaintenance.js.map

/***/ }),

/***/ 252:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewSchedule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NewSchedule = (function () {
    function NewSchedule(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    NewSchedule.prototype.onBack = function () {
        this.navCtrl.pop();
    };
    NewSchedule.prototype.onSubmit = function () {
        this.navCtrl.pop();
    };
    return NewSchedule;
}());
NewSchedule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-newschedule',template:/*ion-inline-start:"/Volumes/MACDATA/Work/NewProjects/Cross/2017.8/Brooks/BrooksIonic2/src/pages/EquipmentLogScreen/EquipmentSelectedScreen/ScheduledMaintenance/NewSchedule/NewSchedule.html"*/'<ion-content padding>\n\n  <div class="iconback-global" (click)="onBack();"></div>\n\n  <div class="back-padding-vertical-mini"></div>\n\n  <div class="weight-wrapper">\n    <ion-label>Select Last Serviced Date(Optionals)</ion-label>\n  </div>\n\n  <div class="weight-wrapper">\n    <ion-label>Select Last Serviced Hours</ion-label>\n  </div>\n\n  <div class="weight-wrapper">\n    <ion-label>Select Hours for Next Service</ion-label>\n  </div>\n\n  <button ion-button class="global-submit-button" (click)="onSubmit();">\n    Submit\n  </button>\n</ion-content>\n'/*ion-inline-end:"/Volumes/MACDATA/Work/NewProjects/Cross/2017.8/Brooks/BrooksIonic2/src/pages/EquipmentLogScreen/EquipmentSelectedScreen/ScheduledMaintenance/NewSchedule/NewSchedule.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
], NewSchedule);

//# sourceMappingURL=NewSchedule.js.map

/***/ }),

/***/ 253:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Repairs; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Repairs = (function () {
    function Repairs(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    Repairs.prototype.onBack = function () {
        this.navCtrl.pop();
    };
    Repairs.prototype.onSubmit = function () {
        this.navCtrl.pop();
    };
    return Repairs;
}());
Repairs = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-repairs',template:/*ion-inline-start:"/Volumes/MACDATA/Work/NewProjects/Cross/2017.8/Brooks/BrooksIonic2/src/pages/EquipmentLogScreen/EquipmentSelectedScreen/Repairs/Repairs.html"*/'<ion-content padding>\n\n  <div class="iconback-global" (click)="onBack();"></div>\n\n  <div class="back-padding-vertical-mini"></div>\n\n  <div class="weight-wrapper">\n    <ion-label>Repairs needed</ion-label>\n  </div>\n\n  <button ion-button class="global-submit-button" (click)="onSubmit();">\n    Submit\n  </button>\n</ion-content>\n'/*ion-inline-end:"/Volumes/MACDATA/Work/NewProjects/Cross/2017.8/Brooks/BrooksIonic2/src/pages/EquipmentLogScreen/EquipmentSelectedScreen/Repairs/Repairs.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
], Repairs);

//# sourceMappingURL=Repairs.js.map

/***/ }),

/***/ 408:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(409);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(413);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 413:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(227);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(230);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__(231);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(456);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_IntroScreen_IntroScreen__ = __webpack_require__(233);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_LoginScreen_LoginScreen__ = __webpack_require__(234);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_LoginDoneScreen_LoginDoneScreen__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_ApplicationLogScreen_ApplicationLogScreen__ = __webpack_require__(235);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_EquipmentLogScreen_EquipmentLogScreen__ = __webpack_require__(244);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_EquipmentLogScreen_EquipmentSelectedScreen_EquipmentSelectedScreen__ = __webpack_require__(245);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_EquipmentLogScreen_EquipmentSelectedScreen_LogHours_LogHours__ = __webpack_require__(246);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_EquipmentLogScreen_EquipmentSelectedScreen_RoutineMaintenance_RoutineMaintenance__ = __webpack_require__(247);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_ApplicationLogScreen_NewJob_NewJob__ = __webpack_require__(236);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_ApplicationLogScreen_CurrentJob_CurrentJob__ = __webpack_require__(242);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_ApplicationLogScreen_PreviousJob_PreviousJob__ = __webpack_require__(243);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_EquipmentLogScreen_EquipmentSelectedScreen_ScheduledMaintenance_ScheduledMaintenance__ = __webpack_require__(251);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_EquipmentLogScreen_EquipmentSelectedScreen_ScheduledMaintenance_NewSchedule_NewSchedule__ = __webpack_require__(252);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_EquipmentLogScreen_EquipmentSelectedScreen_Repairs_Repairs__ = __webpack_require__(253);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_ApplicationLogScreen_NewJob_Notes_Notes__ = __webpack_require__(237);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_EquipmentLogScreen_EquipmentSelectedScreen_RoutineMaintenance_MachineWash_MachineWash__ = __webpack_require__(248);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_EquipmentLogScreen_EquipmentSelectedScreen_RoutineMaintenance_Grease_Grease__ = __webpack_require__(249);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_EquipmentLogScreen_EquipmentSelectedScreen_RoutineMaintenance_OtherRoutine_OtherRoutine__ = __webpack_require__(250);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__services_apiService__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__services_spinnerService__ = __webpack_require__(241);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__pages_AppSplashScreen_AppSplashScreen__ = __webpack_require__(232);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__ionic_native_camera__ = __webpack_require__(238);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29_ionic_native__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__services_singletoneService__ = __webpack_require__(52);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};































var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_27__pages_AppSplashScreen_AppSplashScreen__["a" /* AppSplashScreen */],
            __WEBPACK_IMPORTED_MODULE_7__pages_IntroScreen_IntroScreen__["a" /* IntroScreen */],
            __WEBPACK_IMPORTED_MODULE_8__pages_LoginScreen_LoginScreen__["a" /* LoginScreen */],
            __WEBPACK_IMPORTED_MODULE_9__pages_LoginDoneScreen_LoginDoneScreen__["a" /* LoginDoneScreen */],
            __WEBPACK_IMPORTED_MODULE_10__pages_ApplicationLogScreen_ApplicationLogScreen__["a" /* ApplicationLogScreen */],
            __WEBPACK_IMPORTED_MODULE_15__pages_ApplicationLogScreen_NewJob_NewJob__["a" /* NewJob */],
            __WEBPACK_IMPORTED_MODULE_16__pages_ApplicationLogScreen_CurrentJob_CurrentJob__["a" /* CurrentJob */],
            __WEBPACK_IMPORTED_MODULE_17__pages_ApplicationLogScreen_PreviousJob_PreviousJob__["a" /* PreviousJob */],
            __WEBPACK_IMPORTED_MODULE_11__pages_EquipmentLogScreen_EquipmentLogScreen__["a" /* EquipmentLogScreen */],
            __WEBPACK_IMPORTED_MODULE_12__pages_EquipmentLogScreen_EquipmentSelectedScreen_EquipmentSelectedScreen__["a" /* EquipmentSelectedScreen */],
            __WEBPACK_IMPORTED_MODULE_13__pages_EquipmentLogScreen_EquipmentSelectedScreen_LogHours_LogHours__["a" /* LogHours */],
            __WEBPACK_IMPORTED_MODULE_14__pages_EquipmentLogScreen_EquipmentSelectedScreen_RoutineMaintenance_RoutineMaintenance__["a" /* RoutineMaintenance */],
            __WEBPACK_IMPORTED_MODULE_18__pages_EquipmentLogScreen_EquipmentSelectedScreen_ScheduledMaintenance_ScheduledMaintenance__["a" /* ScheduledMaintenance */],
            __WEBPACK_IMPORTED_MODULE_19__pages_EquipmentLogScreen_EquipmentSelectedScreen_ScheduledMaintenance_NewSchedule_NewSchedule__["a" /* NewSchedule */],
            __WEBPACK_IMPORTED_MODULE_20__pages_EquipmentLogScreen_EquipmentSelectedScreen_Repairs_Repairs__["a" /* Repairs */],
            __WEBPACK_IMPORTED_MODULE_21__pages_ApplicationLogScreen_NewJob_Notes_Notes__["a" /* Notes */],
            __WEBPACK_IMPORTED_MODULE_22__pages_EquipmentLogScreen_EquipmentSelectedScreen_RoutineMaintenance_MachineWash_MachineWash__["a" /* MachineWash */],
            __WEBPACK_IMPORTED_MODULE_23__pages_EquipmentLogScreen_EquipmentSelectedScreen_RoutineMaintenance_Grease_Grease__["a" /* Grease */],
            __WEBPACK_IMPORTED_MODULE_24__pages_EquipmentLogScreen_EquipmentSelectedScreen_RoutineMaintenance_OtherRoutine_OtherRoutine__["a" /* OtherRoutine */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_http__["c" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */])
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_27__pages_AppSplashScreen_AppSplashScreen__["a" /* AppSplashScreen */],
            __WEBPACK_IMPORTED_MODULE_7__pages_IntroScreen_IntroScreen__["a" /* IntroScreen */],
            __WEBPACK_IMPORTED_MODULE_8__pages_LoginScreen_LoginScreen__["a" /* LoginScreen */],
            __WEBPACK_IMPORTED_MODULE_9__pages_LoginDoneScreen_LoginDoneScreen__["a" /* LoginDoneScreen */],
            __WEBPACK_IMPORTED_MODULE_10__pages_ApplicationLogScreen_ApplicationLogScreen__["a" /* ApplicationLogScreen */],
            __WEBPACK_IMPORTED_MODULE_15__pages_ApplicationLogScreen_NewJob_NewJob__["a" /* NewJob */],
            __WEBPACK_IMPORTED_MODULE_16__pages_ApplicationLogScreen_CurrentJob_CurrentJob__["a" /* CurrentJob */],
            __WEBPACK_IMPORTED_MODULE_17__pages_ApplicationLogScreen_PreviousJob_PreviousJob__["a" /* PreviousJob */],
            __WEBPACK_IMPORTED_MODULE_11__pages_EquipmentLogScreen_EquipmentLogScreen__["a" /* EquipmentLogScreen */],
            __WEBPACK_IMPORTED_MODULE_12__pages_EquipmentLogScreen_EquipmentSelectedScreen_EquipmentSelectedScreen__["a" /* EquipmentSelectedScreen */],
            __WEBPACK_IMPORTED_MODULE_13__pages_EquipmentLogScreen_EquipmentSelectedScreen_LogHours_LogHours__["a" /* LogHours */],
            __WEBPACK_IMPORTED_MODULE_14__pages_EquipmentLogScreen_EquipmentSelectedScreen_RoutineMaintenance_RoutineMaintenance__["a" /* RoutineMaintenance */],
            __WEBPACK_IMPORTED_MODULE_18__pages_EquipmentLogScreen_EquipmentSelectedScreen_ScheduledMaintenance_ScheduledMaintenance__["a" /* ScheduledMaintenance */],
            __WEBPACK_IMPORTED_MODULE_19__pages_EquipmentLogScreen_EquipmentSelectedScreen_ScheduledMaintenance_NewSchedule_NewSchedule__["a" /* NewSchedule */],
            __WEBPACK_IMPORTED_MODULE_20__pages_EquipmentLogScreen_EquipmentSelectedScreen_Repairs_Repairs__["a" /* Repairs */],
            __WEBPACK_IMPORTED_MODULE_21__pages_ApplicationLogScreen_NewJob_Notes_Notes__["a" /* Notes */],
            __WEBPACK_IMPORTED_MODULE_22__pages_EquipmentLogScreen_EquipmentSelectedScreen_RoutineMaintenance_MachineWash_MachineWash__["a" /* MachineWash */],
            __WEBPACK_IMPORTED_MODULE_23__pages_EquipmentLogScreen_EquipmentSelectedScreen_RoutineMaintenance_Grease_Grease__["a" /* Grease */],
            __WEBPACK_IMPORTED_MODULE_24__pages_EquipmentLogScreen_EquipmentSelectedScreen_RoutineMaintenance_OtherRoutine_OtherRoutine__["a" /* OtherRoutine */],
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_25__services_apiService__["a" /* ApiService */],
            __WEBPACK_IMPORTED_MODULE_26__services_spinnerService__["a" /* Spinner */],
            __WEBPACK_IMPORTED_MODULE_28__ionic_native_camera__["a" /* Camera */],
            __WEBPACK_IMPORTED_MODULE_29_ionic_native__["a" /* NativeStorage */],
            __WEBPACK_IMPORTED_MODULE_30__services_singletoneService__["a" /* SingletonService */],
            { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] }
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 43:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApiService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(231);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(239);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__(240);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__spinnerService__ = __webpack_require__(241);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






// const API_BASEURL = 'http://dan.wolodeploy.com/public';
var API_BASEURL = 'http://172.20.11.60/Brooks/public';
var ApiService = (function () {
    function ApiService(http, spinner) {
        this.http = http;
        this.spinner = spinner;
    }
    ApiService.prototype.get = function (url, data, loadingText) {
        var _this = this;
        url = API_BASEURL + url;
        var params = this.ObjectToURLEncoded(data);
        if (params !== '')
            url += ('?' + params);
        var header_json = {
            'Content-Type': 'application/json'
        };
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */](header_json);
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({
            headers: headers
        });
        this.spinner.show(loadingText);
        return this.http.get(url, options)
            .map(function (res) {
            return _this.extractData(res);
        })
            .catch(function (error) {
            return _this.handleError(error);
        });
    };
    ApiService.prototype.post = function (url, data, loadingText) {
        var _this = this;
        url = API_BASEURL + url;
        var header_json = {};
        header_json['Content-Type'] = 'application/json';
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */](header_json);
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({
            headers: headers
        });
        this.spinner.show(loadingText);
        return this.http.post(url, data, options)
            .map(function (res) {
            return _this.extractData(res);
        })
            .catch(function (error) {
            return _this.handleError(error);
        });
    };
    ApiService.prototype.put = function (url, data, loadingText) {
        var _this = this;
        url = API_BASEURL + url;
        var header_json = {};
        header_json['Content-Type'] = 'application/json';
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */](header_json);
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({
            headers: headers
        });
        this.spinner.show(loadingText);
        return this.http.put(url, data, options)
            .map(function (res) {
            return _this.extractData(res);
        })
            .catch(function (error) {
            return _this.handleError(error);
        });
    };
    ApiService.prototype.loadLocalJSON = function (path) {
        var _this = this;
        return this.http.get(path)
            .map(function (res) {
            return _this.extractData(res);
        })
            .catch(function (error) {
            return _this.handleError(error);
        });
    };
    ApiService.prototype.ObjectToURLEncoded = function (json_data) {
        var encoded_data = "";
        for (var p in json_data) {
            encoded_data = encoded_data + p + "=" + encodeURIComponent(json_data[p]) + "&";
        }
        if (encoded_data === "")
            return "";
        else
            return encoded_data.substr(0, encoded_data.length - 1);
    };
    ApiService.prototype.extractData = function (res) {
        this.spinner.hide();
        return res.json();
    };
    ApiService.prototype.handleError = function (error) {
        this.spinner.hide();
        // In a real world app, we might use a remote logging infrastructure
        // We'd also dig deeper into the error to get a better message
        var errMsg = (error.message) ? error.message : (error.status ? (error.status + ' - ' + error.statusText) : 'Server error');
        console.error(errMsg); // log to console instead
        error.body = JSON.parse(error._body);
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(error);
    };
    return ApiService;
}());
ApiService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */],
        __WEBPACK_IMPORTED_MODULE_5__spinnerService__["a" /* Spinner */]])
], ApiService);

//# sourceMappingURL=apiService.js.map

/***/ }),

/***/ 456:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(230);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(227);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_AppSplashScreen_AppSplashScreen__ = __webpack_require__(232);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_AppSplashScreen_AppSplashScreen__["a" /* AppSplashScreen */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    return MyApp;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Nav */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Nav */])
], MyApp.prototype, "nav", void 0);
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/Volumes/MACDATA/Work/NewProjects/Cross/2017.8/Brooks/BrooksIonic2/src/app/app.html"*/'<ion-nav [root]="rootPage" swipeBackEnabled="false"></ion-nav>\n'/*ion-inline-end:"/Volumes/MACDATA/Work/NewProjects/Cross/2017.8/Brooks/BrooksIonic2/src/app/app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 52:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SingletonService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var SingletonService = (function () {
    function SingletonService() {
        this.loginUser = "";
    }
    return SingletonService;
}());
SingletonService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])()
], SingletonService);

//# sourceMappingURL=singletoneService.js.map

/***/ })

},[408]);
//# sourceMappingURL=main.js.map