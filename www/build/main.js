webpackJsonp([0],{

/***/ 125:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginDoneScreen; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ApplicationLogScreen_ApplicationLogScreen__ = __webpack_require__(234);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__EquipmentLogScreen_EquipmentLogScreen__ = __webpack_require__(242);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_apiService__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ionic_native__ = __webpack_require__(126);
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
    function LoginDoneScreen(navCtrl, navParams, apiService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.apiService = apiService;
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
        __WEBPACK_IMPORTED_MODULE_5_ionic_native__["a" /* NativeStorage */].setItem('loggedIn', false)
            .then(function (d) {
            console.log('wa true' + d);
            _this.navCtrl.pop();
        }, function (error) { return console.error('Error storing LoginData', error); });
    };
    return LoginDoneScreen;
}());
LoginDoneScreen = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-logindonescreen',template:/*ion-inline-start:"/Volumes/MACDATA/Work/NewProjects/Cross/2017.8/Brooks/BrooksIonic2/src/pages/LoginDoneScreen/LoginDoneScreen.html"*/'<ion-header class="removebacks">\n  <ion-navbar>\n\n    <ion-title style="text-align:center">\n      Home\n    </ion-title>\n    <img class="topavatar" src="https://www.popvox.com/images/user-avatar-grey.png">\n\n  </ion-navbar>\n</ion-header>\n\n\n\n<ion-content style="background:#f2f2f2;">\n\n<div class="topbanne">\n  <div class="secondwrap">\n    <div class="tcenter ftitle cwhite jsone">Welcome James</div>\n    <div class="tcenter cwhite jstwo">View and manage your work processes</div>\n  </div>\n</div>\n\n<div style="height:15px;width:100%;"></div>\n\n<div style="padding:15px;">\n  <div class="specsmalls">Resources</div>\n</div>\n\n\n\n<div class="settrion" (click)="onApplicationLog();">\n  <img class="one" src="http://i.imgur.com/JnJLvOx.png">\n  <div class="trititle">Application Log</div>\n  <div class="trisubline">Create jobs, view current jobs, submit current jobs, and view previous reports</div>\n</div>\n\n<div class="settrion" (click)="onEquipmentLog();">\n  <img class="two" src="http://i.imgur.com/8yvvGXk.png">\n  <div class="trititle">Equipment Log</div>\n  <div class="trisubline">Create jobs, view current jobs, submit current jobs, and view previous reports</div>\n</div>\n\n<div class="settrion" (click)="onReminder();">\n  <img class="three" src="http://i.imgur.com/H5tYHix.png">\n  <div class="trititle">Task / Reminders</div>\n  <div class="trisubline">Create jobs, view current jobs, submit current jobs, and view previous reports</div>\n</div>\n\n\n<button ion-button class="global-submit-button logout134" (click)="onLogout();">\n    Logout\n  </button>\n\n</ion-content>\n\n\n\n\n\n\n\n\n\n\n\n\n'/*ion-inline-end:"/Volumes/MACDATA/Work/NewProjects/Cross/2017.8/Brooks/BrooksIonic2/src/pages/LoginDoneScreen/LoginDoneScreen.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_4__services_apiService__["a" /* ApiService */]])
], LoginDoneScreen);

//# sourceMappingURL=LoginDoneScreen.js.map

/***/ }),

/***/ 142:
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
webpackEmptyAsyncContext.id = 142;

/***/ }),

/***/ 185:
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
webpackEmptyAsyncContext.id = 185;

/***/ }),

/***/ 231:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppSplashScreen; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__IntroScreen_IntroScreen__ = __webpack_require__(232);
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

/***/ 232:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IntroScreen; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__LoginScreen_LoginScreen__ = __webpack_require__(233);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_native__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__LoginDoneScreen_LoginDoneScreen__ = __webpack_require__(125);
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
    function IntroScreen(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    IntroScreen.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('come on ngoninit');
        __WEBPACK_IMPORTED_MODULE_3_ionic_native__["a" /* NativeStorage */].getItem('loggedIn').then(function (d) {
            if (d === true) {
                console.log('wa true');
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__LoginDoneScreen_LoginDoneScreen__["a" /* LoginDoneScreen */]);
            }
            else {
                console.log('wa false');
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
        selector: 'page-introscreen',template:/*ion-inline-start:"/Volumes/MACDATA/Work/NewProjects/Cross/2017.8/Brooks/BrooksIonic2/src/pages/IntroScreen/IntroScreen.html"*/'\n\n\n<ion-content padding1 style="background:#f2f2f2;" class="setunivbuttons">\n<div class="spec123" style="height:50vh;position:absolute;top:0px;left:0px;right:0px;">\n\n<div style="position:absolute;top:0px;left:0px;right:0px;height:50vh;background:rgba(255, 255, 255, 0.6);"></div>\n\n<div class="weight-wrapper" style="position:absolute;top:0px;left:0px;right:0px;height:50vh;z-index:999;">\n	<div class="logo-image" style="margin:auto;position:absolute;top:0px;left:0px;right:0px;bottom:0px;"></div>\n</div>\n\n\n\n\n</div>\n\n\n\n<div style="position:absolute;top:50vh;left:0px;right:0px;background:#FFF;height:50vh;background:#f2f2f2">\n	<div style="padding:0px;">\n  <div class="weight-wrapper" style="height:initial;border:1px solid #f1f1f1;height:50vh;background:#f2f2f2;padding:25px;">\n\n    <ion-label class="application-label" style="font-size:18px;margin-top:0px;margin-right:0px;text-align:left;line-height:1;color:#848484;">Access Employee Panel</ion-label>\n    <button ion-button class="login-btn" style="margin-top:20px;" (click)="onLogin();"><ion-icon name="briefcase" style="margin-right:15px;"></ion-icon>Login\n	</button>\n\n	<button ion-button class="login-btn" style="margin-top:20px;" (click)="onLogin();"><ion-icon name="briefcase" style="margin-right:15px;"></ion-icon>Register\n	</button>\n\n\n  </div>\n</div>\n</div>\n\n\n\n<div style="position:absolute;bottom:0px;left:0px;right:0px;width:100%;padding:15px;background:#FFF;text-align:center;box-shadow:0px 0px 7px #d4d4d4;color: #ccc;">\n	© Copyright 2017-2018 Brooks Custom Application\n</div>\n\n\n</ion-content>\n'/*ion-inline-end:"/Volumes/MACDATA/Work/NewProjects/Cross/2017.8/Brooks/BrooksIonic2/src/pages/IntroScreen/IntroScreen.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
], IntroScreen);

//# sourceMappingURL=IntroScreen.js.map

/***/ }),

/***/ 233:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginScreen; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__LoginDoneScreen_LoginDoneScreen__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_apiService__ = __webpack_require__(51);
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
    function LoginScreen(navCtrl, navParams, apiService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.apiService = apiService;
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
            // must update
            // NativeStorage.setItem('loggedIn', true)
            //   .then((d) => {
            //     console.log('wa true' + d);
            //     this.navCtrl.push(LoginDoneScreen);
            //   },
            //   error => {
            //     console.error('Error storing LoginData', error);
            //   }
            // );
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__LoginDoneScreen_LoginDoneScreen__["a" /* LoginDoneScreen */]);
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
        selector: 'page-loginscreen',template:/*ion-inline-start:"/Volumes/MACDATA/Work/NewProjects/Cross/2017.8/Brooks/BrooksIonic2/src/pages/LoginScreen/LoginScreen.html"*/'<ion-header>\n  <ion-navbar>\n\n    <ion-buttons (click)="goback();" style="position: absolute;color:white;">\n        \n    </ion-buttons>\n\n  \n\n    <ion-title style="text-align:center">\n      Login to your account\n    </ion-title>\n\n  </ion-navbar>\n</ion-header>\n\n\n\n\n<ion-content padding1 class="set1 setunivbuttons" style="">\n\n\n\n\n\n\n  <div class="iconback-global" (click)="onBack();"></div>\n\n  \n\n\n\n<div style="padding:20px;margin-top:calc(50vh - 162.5px);background:#f2f2f2;border-radius:4px;box-shadow:0px 0px 10px #424242;">\n  <div class="weight-fixeds">\n    \n    <ion-input placeholder="Username" style="margin-bottom:20px;" class="username-input" [(ngModel)]="username"></ion-input>\n  </div>\n\n  <div class="weight-fixeds">\n   \n    <ion-input placeholder="Password" class="username-input" type="password" [(ngModel)]="password"></ion-input>\n  </div>\n\n  <div class="weight-wrappers" style="margin-top:20px;">\n    <button ion-button class="login-btn" (click)="onLogin();">Login</button>\n  </div>\n</div>\n\n<div style="position:absolute;bottom:0px;left:0px;right:0px;width:100%;padding:20px 25px;background: rgba(0, 0, 0, 0.17);">\n  <button ion-button>Don\'t Have An Account?</button>\n</div>\n\n\n</ion-content>\n'/*ion-inline-end:"/Volumes/MACDATA/Work/NewProjects/Cross/2017.8/Brooks/BrooksIonic2/src/pages/LoginScreen/LoginScreen.html"*/
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_apiService__["a" /* ApiService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_apiService__["a" /* ApiService */]) === "function" && _c || Object])
], LoginScreen);

var _a, _b, _c;
//# sourceMappingURL=LoginScreen.js.map

/***/ }),

/***/ 234:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApplicationLogScreen; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__NewJob_NewJob__ = __webpack_require__(235);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__CurrentJob_CurrentJob__ = __webpack_require__(240);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__PreviousJob_PreviousJob__ = __webpack_require__(241);
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
        selector: 'page-applicationlogscreen',template:/*ion-inline-start:"/Volumes/MACDATA/Work/NewProjects/Cross/2017.8/Brooks/BrooksIonic2/src/pages/ApplicationLogScreen/ApplicationLogScreen.html"*/'<ion-header>\n  <ion-navbar>\n\n    <ion-buttons (click)="goback();" style="position: absolute;color:white;">\n        \n    </ion-buttons>\n\n  \n\n    <ion-title style="text-align:center">\n      Application Log\n    </ion-title>\n\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content class="pageten1">\n\n<div style="background:rgba(255, 255, 255, 0.69);box-shadow:0px 0px 10px #adadad;">\n<div style="padding:15px;padding-top:30px;font-weight:500;color:#696969;padding-bottom:0px;">Select an option</div>\n\n<div style="padding:15px;padding-bottom:1px;">\n  <div class="setone4 juniques" (click)="onCreateNewJob();">\n    <img src="http://i.imgur.com/PLjkYu6.png">\n    <div class="topset1">Create New Job</div>\n    <div class="topset2">Add a new task in your application log</div>\n  </div>\n</div>\n</div>\n\n<div style="padding:15px;">\n  <div class="resttwo1 juniques" (click)="onCurrentJobReport();">\n    <img src="http://i.imgur.com/siO683I.png">\n    <div class="topset1">Current Job Report</div>\n    <div class="topset2">View current application work log, and submit.</div>\n  </div>\n\n  <div class="resttwo1 juniques three" (click)="onPrevious();">\n    <img src="http://i.imgur.com/5xEAMzR.png">\n    <div class="topset1">Previous Reports</div>\n    <div class="topset2">View previous submitted reports.</div>\n  </div>\n</div>\n\n\n\n\n\n<div style="display:none;">\n  <div class="iconback-global" (click)="onBack();"></div>\n\n  <div class="back-padding-vertical"></div>\n\n  <div class="weight-wrapper">\n    <button ion-button class="login-btn" (click)="onCreateNewJob();">Create New Job</button>\n  </div>\n\n  <div class="weight-wrapper">\n    <button ion-button class="login-btn" (click)="onCurrentJobReport();">Current Job Report</button>\n  </div>\n\n  <div class="weight-wrapper">\n    <button ion-button class="login-btn" (click)="onPrevious();">Previous Reports</button>\n  </div>\n</div>\n</ion-content>\n'/*ion-inline-end:"/Volumes/MACDATA/Work/NewProjects/Cross/2017.8/Brooks/BrooksIonic2/src/pages/ApplicationLogScreen/ApplicationLogScreen.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
], ApplicationLogScreen);

//# sourceMappingURL=ApplicationLogScreen.js.map

/***/ }),

/***/ 235:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewJob; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Notes_Notes__ = __webpack_require__(236);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_apiService__ = __webpack_require__(51);
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
    function NewJob(navCtrl, navParams, apiService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.apiService = apiService;
        this.Date = "";
        this.Grower = "";
        this.FarmName = "";
        this.FieldName = "";
        this.AppType = "";
        this.EquipID = "";
        this.Acres = "";
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
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__Notes_Notes__["a" /* Notes */]);
    };
    NewJob.prototype.onSubmit = function () {
        var _this = this;
        var data = {
            Date: this.Date,
            Grower: this.Grower,
            FarmName: this.FarmName,
            FieldName: this.FieldName,
            AppType: this.AppType,
            EquipID: this.EquipID,
            Acres: this.Acres
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
        selector: 'page-newjob',template:/*ion-inline-start:"/Volumes/MACDATA/Work/NewProjects/Cross/2017.8/Brooks/BrooksIonic2/src/pages/ApplicationLogScreen/NewJob/NewJob.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-buttons (click)="goback();" style="position: absolute;color:white;">\n    </ion-buttons>\n    <ion-title style="text-align:center">\n      Create New Job\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content class="pageten1" style="">\n\n  <div class="mainjsets">\n    <div style="padding:0px;">\n      <div class="setone4 juniques secondary">\n        <img src="http://i.imgur.com/OYt16qG.png">\n        <div class="topset1">Add Job</div>\n        <div class="topset2">Add a new task in your application log</div>\n      </div>\n    </div>\n  </div>\n\n\n\n\n\n\n\n  <div class="titleunits1">\n    Please fill the following fields\n  </div>\n\n  <div style="padding:15px;">\n    <ion-input class="inputsten" type="text" placeholder="Date" [(ngModel)]="Date"></ion-input>\n    <ion-input class="inputsten" type="text" placeholder="Grower" [(ngModel)]="Grower"></ion-input>\n    <ion-input class="inputsten" type="text" placeholder="Farm Name" [(ngModel)]="FarmName"></ion-input>\n    <ion-input class="inputsten" type="text" placeholder="Field name" [(ngModel)]="FieldName"></ion-input>\n\n\n\n    <ion-list class="projdrops1">\n      <ion-item>\n        <ion-label style="color:#919394;">Application Type</ion-label>\n        <ion-select [(ngModel)]="AppType">\n          <ion-option value="nes">Flat Rate Fertilizer</ion-option>\n          <ion-option value="n64">Variable Rate Fertilizer</ion-option>\n          <ion-option value="ps">Flat Rate Lime</ion-option>\n          <ion-option value="genesis">Variable Rate Lime</ion-option>\n          <ion-option value="saturn">Other (please explain)</ion-option>\n        </ion-select>\n      </ion-item>\n    </ion-list>\n\n\n\n    <ion-input class="inputsten" type="text" placeholder="Equipment ID" [(ngModel)]="EquipID"></ion-input>\n    <ion-input class="inputsten" type="text" placeholder="Applied Acres" [(ngModel)]="Acres"></ion-input>\n\n    <div class="buttonnotes" (click)="onNotes();"><img src="http://i.imgur.com/pYFWoEW.png">Add Notes</div>\n  </div>\n\n  <div class="sendwraps1">\n    <div class="buttonsub1s" (click)="onSubmit();">Submit New Job</div>\n  </div>\n\n\n\n  <div style="display:none;">\n    <div class="weight-fixed">\n      <ion-label>Date</ion-label>\n      <ion-input class="username-input" [(ngModel)]="Date"></ion-input>\n    </div>\n\n    <div class="weight-fixed">\n      <ion-label>Grower</ion-label>\n      <ion-input class="username-input" [(ngModel)]="Grower"></ion-input>\n    </div>\n\n    <div class="weight-fixed">\n      <ion-label>Farm Name</ion-label>\n      <ion-input class="username-input" [(ngModel)]="FarmName"></ion-input>\n    </div>\n\n    <div class="weight-fixed">\n      <ion-label>Field Name</ion-label>\n      <ion-input class="username-input" [(ngModel)]="FieldName"></ion-input>\n    </div>\n\n    <div class="weight-fixed">\n      <ion-label>Application Type</ion-label>\n      <ion-input class="username-input" [(ngModel)]="AppType"></ion-input>\n    </div>\n\n    <div class="weight-fixed">\n      <ion-label>Equipment ID</ion-label>\n      <ion-input class="username-input" [(ngModel)]="EquipID"></ion-input>\n    </div>\n\n    <div class="weight-fixed">\n      <ion-label>Applied Acres</ion-label>\n      <ion-input class="username-input" [(ngModel)]="Acres"></ion-input>\n    </div>\n\n    <div class="weight-wrapper">\n      <button ion-button class="login-btn" (click)="onNotes();">Notes</button>\n    </div>\n\n    <div class="weight-wrapper">\n      <button ion-button class="submit-btn" (click)="onSubmit();">\n        Submit to current jobs Report\n      </button>\n    </div>\n  </div>\n\n\n</ion-content>\n\n\n\n\n\n\n'/*ion-inline-end:"/Volumes/MACDATA/Work/NewProjects/Cross/2017.8/Brooks/BrooksIonic2/src/pages/ApplicationLogScreen/NewJob/NewJob.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_3__services_apiService__["a" /* ApiService */]])
], NewJob);

//# sourceMappingURL=NewJob.js.map

/***/ }),

/***/ 236:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Notes; });
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


var Notes = (function () {
    function Notes(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    Notes.prototype.onBack = function () {
        this.navCtrl.pop();
    };
    Notes.prototype.onSubmit = function () {
        this.navCtrl.pop();
    };
    return Notes;
}());
Notes = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-notes',template:/*ion-inline-start:"/Volumes/MACDATA/Work/NewProjects/Cross/2017.8/Brooks/BrooksIonic2/src/pages/ApplicationLogScreen/NewJob/Notes/Notes.html"*/'<ion-header style="">\n  <ion-navbar>\n    <ion-title>\n      Add Notes\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content no-bounce class="pageten1" style="">\n\n\n<div class="padspec7">\n	<div class="toptextholds">\n		<div class="placedirects">Add any information relevant to this job, which should be saved.</div>\n		<textarea placeholder="Write here.." class="notestexts"></textarea>\n	</div>\n</div>\n\n<div class="pad15">\n	<div class="photobutton1">\n		<img src="http://i.imgur.com/VIuctbn.png" style="">\n		<div class="textphotobt">Add Photos</div>\n	</div>\n</div>\n\n<div class="sendwraps1 notesa" style="">\n  <div class="buttonsub1s " (click)="onSubmit();">Save Notes</div>\n</div>\n\n\n\n\n\n\n</ion-content>\n\n\n\n\n\n'/*ion-inline-end:"/Volumes/MACDATA/Work/NewProjects/Cross/2017.8/Brooks/BrooksIonic2/src/pages/ApplicationLogScreen/NewJob/Notes/Notes.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
], Notes);

//# sourceMappingURL=Notes.js.map

/***/ }),

/***/ 239:
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

/***/ 240:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CurrentJob; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_apiService__ = __webpack_require__(51);
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
    function CurrentJob(navCtrl, apiService, navParams) {
        this.navCtrl = navCtrl;
        this.apiService = apiService;
        this.navParams = navParams;
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
        selector: 'page-currentjob',template:/*ion-inline-start:"/Volumes/MACDATA/Work/NewProjects/Cross/2017.8/Brooks/BrooksIonic2/src/pages/ApplicationLogScreen/CurrentJob/CurrentJob.html"*/'<ion-header style="">\n  <ion-navbar>\n    <ion-title>\n      Current Job List\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n\n<ion-content class="pageten2" style="">\n\n  <div class="mainjsets">\n    <div style="padding:0px;">\n      <div class="setone4 juniques secondary">\n        <img src="http://i.imgur.com/siO683I.png">\n        <div class="topset1">View Jobs</div>\n        <div class="topset2">See list of jobs awaiting completion</div>\n      </div>\n    </div>\n  </div>\n\n\n\n  <div class="pad15">\n    <div *ngFor="let item of job_list; let idIdx = index;" (click)="onJob(idIdx)" class="unitoflist1">\n      <div class="numsettings"></div>\n      <div class="maincontlist">\n        <div class="topcont01">\n          <div class="editcontain1">\n            <img src="http://i.imgur.com/usfKMdE.png" class="iconimg1">\n          </div>\n          <div class="firstunitleft">\n            <div class="fieldunittops">\n              <img src="http://i.imgur.com/kXQX121.png">\n              <div class="fieldtext1 first">{{item.User}}</div>\n            </div>\n\n            <div class="fieldunittops">\n              <img src="http://i.imgur.com/iz2rzyO.png">\n              <div class="fieldtext1 seconds">{{item.FarmName}}</div>\n            </div>\n          </div>\n        </div>\n        <div class="tablethirds1">\n          <div class="thirdfirst1">\n            <div class="triotitle1">Date</div>\n            <div class="triodisplay1">{{item.Date}}</div>\n          </div>\n          <div class="triosecond2">\n            <div class="triotitle1">Field</div>\n            <div class="triodisplay1">{{item.FieldName}}</div>\n          </div>\n          <div class="triothird3">\n            <div class="triotitle1">Applied Acres</div>\n            <div class="triodisplay1">{{item.Acres}}</div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <div class="sendwraps1 notesa" style="">\n    <div class="buttonsub1s" (click)="onSubmit();">Submit Jobs</div>\n  </div>\n\n</ion-content>\n'/*ion-inline-end:"/Volumes/MACDATA/Work/NewProjects/Cross/2017.8/Brooks/BrooksIonic2/src/pages/ApplicationLogScreen/CurrentJob/CurrentJob.html"*/
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_apiService__["a" /* ApiService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_apiService__["a" /* ApiService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]) === "function" && _c || Object])
], CurrentJob);

var _a, _b, _c;
//# sourceMappingURL=CurrentJob.js.map

/***/ }),

/***/ 241:
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
        selector: 'page-previousjob',template:/*ion-inline-start:"/Volumes/MACDATA/Work/NewProjects/Cross/2017.8/Brooks/BrooksIonic2/src/pages/ApplicationLogScreen/PreviousJob/PreviousJob.html"*/'<ion-header style="">\n  <ion-navbar>\n    <ion-title>\n      Previous Reports\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n\n<ion-content no-bounce class="pageten1">\n\n  <div class="mainjsets">\n<div style="padding:0px;">\n  <div class="setone4 juniques secondary">\n    <img src="http://i.imgur.com/siO683I.png">\n    <div class="topset1">View Submitted Jobs</div>\n    <div class="topset2">View history of completed jobs</div>\n  </div>\n</div>\n</div>\n\n\n\n<div class="pad15">\n	<div class="unitoflist1">\n		<div class="numsettings"></div>\n		<div class="maincontlist">\n			<div class="topcont01">\n				<div class="firstunitleft">\n					<div class="fieldunittops">\n						<img src="http://i.imgur.com/kXQX121.png">\n						<div class="fieldtext1 first">Hillside Farms</div>\n					</div>\n\n					<div class="fieldunittops">\n						<img src="http://i.imgur.com/iz2rzyO.png">\n						<div class="fieldtext1 seconds">Jason Hilton</div>\n					</div>\n				</div>\n			</div>\n			<div class="tablethirds1">\n				<div class="thirdfirst1">\n					<div class="triotitle1">Date</div>\n					<div class="triodisplay1">08/20/17</div>\n				</div>\n				<div class="triosecond2">\n					<div class="triotitle1">Field</div>\n					<div class="triodisplay1">Joan Drive</div>\n				</div>\n				<div class="triothird3">\n					<div class="triotitle1">Applied Acres</div>\n					<div class="triodisplay1">24</div>\n				</div>\n			</div>\n		</div>\n	</div>\n\n	<div class="unitoflist1">\n		<div class="numsettings"></div>\n		<div class="maincontlist">\n			<div class="topcont01">\n				<div class="firstunitleft">\n					<div class="fieldunittops">\n						<img src="http://i.imgur.com/kXQX121.png">\n						<div class="fieldtext1 first">Hillside Farms</div>\n					</div>\n\n					<div class="fieldunittops">\n						<img src="http://i.imgur.com/iz2rzyO.png">\n						<div class="fieldtext1 seconds">Jason Hilton</div>\n					</div>\n				</div>\n			</div>\n			<div class="tablethirds1">\n				<div class="thirdfirst1">\n					<div class="triotitle1">Date</div>\n					<div class="triodisplay1">08/20/17</div>\n				</div>\n				<div class="triosecond2">\n					<div class="triotitle1">Field</div>\n					<div class="triodisplay1">Joan Drive</div>\n				</div>\n				<div class="triothird3">\n					<div class="triotitle1">Applied Acres</div>\n					<div class="triodisplay1">24</div>\n				</div>\n			</div>\n		</div>\n	</div>\n\n</div>\n\n\n\n</ion-content>\n'/*ion-inline-end:"/Volumes/MACDATA/Work/NewProjects/Cross/2017.8/Brooks/BrooksIonic2/src/pages/ApplicationLogScreen/PreviousJob/PreviousJob.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
], PreviousJob);

//# sourceMappingURL=PreviousJob.js.map

/***/ }),

/***/ 242:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EquipmentLogScreen; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__EquipmentSelectedScreen_EquipmentSelectedScreen__ = __webpack_require__(243);
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
    function EquipmentLogScreen(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    EquipmentLogScreen.prototype.onBack = function () {
        this.navCtrl.pop();
    };
    EquipmentLogScreen.prototype.onSelect = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__EquipmentSelectedScreen_EquipmentSelectedScreen__["a" /* EquipmentSelectedScreen */]);
    };
    return EquipmentLogScreen;
}());
EquipmentLogScreen = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-equipmentlogscreen',template:/*ion-inline-start:"/Volumes/MACDATA/Work/NewProjects/Cross/2017.8/Brooks/BrooksIonic2/src/pages/EquipmentLogScreen/EquipmentLogScreen.html"*/'<ion-header style="">\n  <ion-navbar>\n    <ion-title>\n      Equipment\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content no-bounce class="pageten2" style="">\n\n  <div class="mainjsets bgwhite">\n<div style="padding:0px;">\n  <div class="setone4 juniques secondary">\n    <img class="two" src="http://i.imgur.com/8yvvGXk.png">\n    <div class="topset1">Assigned Equipment</div>\n    <div class="topset2">Below are the equipment assigned to you</div>\n  </div>\n</div>\n</div>\n\n\n\n<div class="pad15">\n	\n\n\n	<div class="equipitems" (click)="onSelect();">\n		<div class="toolnametitle">Tool Name</div>\n		<div class="toolactualname">Farm Cutting Blade</div>\n		<div class="toolsmallnote">This tool is in your possesion</div>\n	</div>\n\n	<div class="equipitems" (click)="onSelect();">\n		<div class="toolnametitle">Tool Name</div>\n		<div class="toolactualname">Farm Cutting Blade</div>\n		<div class="toolsmallnote">This tool is in your possesion</div>\n	</div>\n\n	<div class="equipitems" (click)="onSelect();">\n		<div class="toolnametitle">Tool Name</div>\n		<div class="toolactualname">Farm Cutting Blade</div>\n		<div class="toolsmallnote">This tool is in your possesion</div>\n	</div>\n\n</div>\n\n\n\n</ion-content>\n\n\n\n\n\n\n'/*ion-inline-end:"/Volumes/MACDATA/Work/NewProjects/Cross/2017.8/Brooks/BrooksIonic2/src/pages/EquipmentLogScreen/EquipmentLogScreen.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
], EquipmentLogScreen);

//# sourceMappingURL=EquipmentLogScreen.js.map

/***/ }),

/***/ 243:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EquipmentSelectedScreen; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__LogHours_LogHours__ = __webpack_require__(244);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__RoutineMaintenance_RoutineMaintenance__ = __webpack_require__(245);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ScheduledMaintenance_ScheduledMaintenance__ = __webpack_require__(249);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Repairs_Repairs__ = __webpack_require__(251);
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
    }
    EquipmentSelectedScreen.prototype.onBack = function () {
        this.navCtrl.pop();
    };
    EquipmentSelectedScreen.prototype.onLogHours = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__LogHours_LogHours__["a" /* LogHours */]);
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
        selector: 'page-equipmentselectedscreen',template:/*ion-inline-start:"/Volumes/MACDATA/Work/NewProjects/Cross/2017.8/Brooks/BrooksIonic2/src/pages/EquipmentLogScreen/EquipmentSelectedScreen/EquipmentSelectedScreen.html"*/'<ion-header style="">\n  <ion-navbar>\n    <ion-title>\n      Equipment Details\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content no-bounce class="pageten2" style="">\n\n\n<div class="mainjsets bgwhite">\n<div style="padding:0px;">\n  <div class="setone4 juniques secondary">\n    <img class="two" src="http://i.imgur.com/8yvvGXk.png">\n    <div class="topset1">Equipment Actions</div>\n    <div class="topset2">Perform a wide array of equipment managing functions</div>\n  </div>\n</div>\n</div>\n\n\n\n<div class="pad15" style="padding-top:25px;padding-bottom:0px;">\n  <div class="specsmalls spec121">Actions</div>\n</div>\n\n\n\n<div class="pad15">\n  <div class="equipfour" (click)="onLogHours()"><img src="http://i.imgur.com/bZjgxNG.png">Log Hours</div>\n  <div class="equipfour" (click)="onRoutineMaintenance()"><img src="http://i.imgur.com/9jbPues.png">Routine Maintenance</div>\n  <div class="equipfour" (click)="onScheduledMaint()"><img src="http://i.imgur.com/zWsydmQ.png">Scheduled Maintenance</div>\n  <div class="equipfour" (click)="onRepairs()"><img src="http://i.imgur.com/PTHrOsU.png">Repairs</div>\n</div>\n\n\n\n\n</ion-content>\n\n\n'/*ion-inline-end:"/Volumes/MACDATA/Work/NewProjects/Cross/2017.8/Brooks/BrooksIonic2/src/pages/EquipmentLogScreen/EquipmentSelectedScreen/EquipmentSelectedScreen.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
], EquipmentSelectedScreen);

//# sourceMappingURL=EquipmentSelectedScreen.js.map

/***/ }),

/***/ 244:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LogHours; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_apiService__ = __webpack_require__(51);
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
    }
    LogHours.prototype.onBack = function () {
        this.navCtrl.pop();
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
    return LogHours;
}());
LogHours = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-loghours',template:/*ion-inline-start:"/Volumes/MACDATA/Work/NewProjects/Cross/2017.8/Brooks/BrooksIonic2/src/pages/EquipmentLogScreen/EquipmentSelectedScreen/LogHours/LogHours.html"*/'<ion-header style="">\n  <ion-navbar>\n    <ion-title>\n      Log Hours\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content no-bounce class="pageten2" style="">\n\n\n<div class="pad15">\n<div class="specpad76">\n  <div class="weight-fixeds">\n    <div class="enterinfo1">Enter Information</div>\n    <ion-input placeholder="Date" style="" class="username-input mgb12"></ion-input>\n  </div>\n\n  <div class="weight-fixeds">\n    <ion-input placeholder="Hours" class="username-input" type="password"></ion-input>\n  </div>\n\n  <div class="weight-wrappers mgt20" style="">\n    <button ion-button class="login-btn button04" (click)="onLogin();">Submit Hours</button>\n  </div>\n</div>\n</div>\n\n\n\n\n\n<div class="pad15 padtop0"> \n  <div class="bshad2" style="">\n\n    <div class="bgsome1">\n      <div class="loghist123">Log History</div>\n    \n    <div class="tableset8">\n      <div class="widthhalf">\n        <div class="padleftonly">Date</div>\n      </div>\n      <div class="widthhalf">\n        <div class="padleftonly">Hours</div>\n      </div>\n    </div>\n\n    </div>\n\n    <div class="logunit2">\n      <div class="widthhalf"><div class="padunit04">08/26/2017</div></div>\n      <div class="widthhalf"><div class="padunit04">7</div></div>\n    </div>\n\n    <div class="logunit2">\n      <div class="widthhalf"><div class="padunit04">08/26/2017</div></div>\n      <div class="widthhalf"><div class="padunit04">7</div></div>\n    </div>\n\n    <div class="logunit2">\n      <div class="widthhalf"><div class="padunit04">08/26/2017</div></div>\n      <div class="widthhalf"><div class="padunit04">7</div></div>\n    </div>\n\n  </div>\n</div>\n\n\n</ion-content>\n\n\n\n'/*ion-inline-end:"/Volumes/MACDATA/Work/NewProjects/Cross/2017.8/Brooks/BrooksIonic2/src/pages/EquipmentLogScreen/EquipmentSelectedScreen/LogHours/LogHours.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__services_apiService__["a" /* ApiService */]])
], LogHours);

//# sourceMappingURL=LogHours.js.map

/***/ }),

/***/ 245:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RoutineMaintenance; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__MachineWash_MachineWash__ = __webpack_require__(246);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Grease_Grease__ = __webpack_require__(247);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__OtherRoutine_OtherRoutine__ = __webpack_require__(248);
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
        selector: 'page-routinemaintenance',template:/*ion-inline-start:"/Volumes/MACDATA/Work/NewProjects/Cross/2017.8/Brooks/BrooksIonic2/src/pages/EquipmentLogScreen/EquipmentSelectedScreen/RoutineMaintenance/RoutineMaintenance.html"*/'<ion-header style="">\n  <ion-navbar>\n    <ion-title>\n      Routine Maintenance\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content no-bounce class="pageten2" style="">\n\n\n<div class="mainjsets bgwhite">\n<div style="padding:0px;">\n  <div class="setone4 juniques secondary">\n    <img class="two" src="http://i.imgur.com/8yvvGXk.png">\n    <div class="topset1">Maintenance Type</div>\n    <div class="topset2">Select the type of maintenance performed</div>\n  </div>\n</div>\n</div>\n\n\n\n<div class="pad15" style="padding-top:25px;padding-bottom:0px;">\n  <div class="specsmalls spec121">Actions</div>\n</div>\n\n\n\n<div class="pad15">\n  <div class="equipfour" (click)="onMachineWash()"><img src="http://i.imgur.com/1x6qMWZ.png">Machine Wash</div>\n  <div class="equipfour" (click)="onGrease()"><img src="http://i.imgur.com/4qJxnSA.png">Grease</div>\n  <div class="equipfour"><img src="http://i.imgur.com/zv0krOH.png">Cab Clean</div>\n  <div class="equipfour"><img src="http://i.imgur.com/2IFlti2.png">Chain Oiled</div>\n  <div class="equipfour"><img src="http://i.imgur.com/snPGMFa.png">Chain Tension</div>\n  <div class="equipfour" (click)="onOtherRoutine()"><img src="http://i.imgur.com/CQUHdJa.png">Other</div>\n</div>\n\n\n\n\n</ion-content>\n\n\n'/*ion-inline-end:"/Volumes/MACDATA/Work/NewProjects/Cross/2017.8/Brooks/BrooksIonic2/src/pages/EquipmentLogScreen/EquipmentSelectedScreen/RoutineMaintenance/RoutineMaintenance.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
], RoutineMaintenance);

//# sourceMappingURL=RoutineMaintenance.js.map

/***/ }),

/***/ 246:
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
        selector: 'page-machinewash',template:/*ion-inline-start:"/Volumes/MACDATA/Work/NewProjects/Cross/2017.8/Brooks/BrooksIonic2/src/pages/EquipmentLogScreen/EquipmentSelectedScreen/RoutineMaintenance/MachineWash/MachineWash.html"*/'<ion-header style="">\n  <ion-navbar>\n    <ion-title>\n      Machine Wash\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content no-bounce class="pageten2" style="">\n\n\n<div class="pad15">\n<div class="specpad76">\n  <div class="weight-fixeds">\n    <div class="enterinfo1">Maintenance Information</div>\n    <ion-input placeholder="Date" style="" class="username-input mgb12"></ion-input>\n  </div>\n\n  <div class="weight-fixeds">\n    <ion-input placeholder="Hours" class="username-input" type="password"></ion-input>\n  </div>\n\n  <div class="checkboxcont">\n    <ion-item>\n      <ion-label>High Pressure</ion-label>\n      <ion-checkbox color="dark"></ion-checkbox>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>High Volume</ion-label>\n      <ion-checkbox color="dark"></ion-checkbox>\n    </ion-item>\n  </div>\n\n  <div class="weight-wrappers mgt20" style="">\n    <button ion-button class="login-btn button04" (click)="onLogin();">Submit</button>\n  </div>\n</div>\n</div>\n\n\n\n\n\n\n\n</ion-content>\n\n\n\n'/*ion-inline-end:"/Volumes/MACDATA/Work/NewProjects/Cross/2017.8/Brooks/BrooksIonic2/src/pages/EquipmentLogScreen/EquipmentSelectedScreen/RoutineMaintenance/MachineWash/MachineWash.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
], MachineWash);

//# sourceMappingURL=MachineWash.js.map

/***/ }),

/***/ 247:
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
        selector: 'page-grease',template:/*ion-inline-start:"/Volumes/MACDATA/Work/NewProjects/Cross/2017.8/Brooks/BrooksIonic2/src/pages/EquipmentLogScreen/EquipmentSelectedScreen/RoutineMaintenance/Grease/Grease.html"*/'<ion-header style="">\n  <ion-navbar>\n    <ion-title>\n      Grease\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content no-bounce class="pageten2" style="">\n\n\n<div class="pad15">\n<div class="specpad76">\n  <div class="weight-fixeds">\n    <div class="enterinfo1">Maintenance Information</div>\n    <ion-input placeholder="Date" style="" class="username-input mgb12"></ion-input>\n  </div>\n\n  <div class="weight-fixeds">\n    <ion-input placeholder="Hours" class="username-input" type="password"></ion-input>\n  </div>\n\n  <div class="checkboxcont">\n    <ion-item>\n      <ion-label>Bed</ion-label>\n      <ion-checkbox color="dark"></ion-checkbox>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>Chassis</ion-label>\n      <ion-checkbox color="dark"></ion-checkbox>\n    </ion-item>\n  </div>\n\n  <div class="weight-wrappers mgt20" style="">\n    <button ion-button class="login-btn button04" (click)="onLogin();">Submit</button>\n  </div>\n</div>\n</div>\n\n\n\n\n\n\n\n</ion-content>\n\n\n\n'/*ion-inline-end:"/Volumes/MACDATA/Work/NewProjects/Cross/2017.8/Brooks/BrooksIonic2/src/pages/EquipmentLogScreen/EquipmentSelectedScreen/RoutineMaintenance/Grease/Grease.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
], Grease);

//# sourceMappingURL=Grease.js.map

/***/ }),

/***/ 248:
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
        selector: 'page-otherroutine',template:/*ion-inline-start:"/Volumes/MACDATA/Work/NewProjects/Cross/2017.8/Brooks/BrooksIonic2/src/pages/EquipmentLogScreen/EquipmentSelectedScreen/RoutineMaintenance/OtherRoutine/OtherRoutine.html"*/'<ion-header style="">\n  <ion-navbar>\n    <ion-title>\n      Other Maintenance\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content no-bounce class="pageten2" style="">\n\n\n<div class="pad15">\n<div class="specpad76">\n  <div class="weight-fixeds">\n    <div class="enterinfo1">Maintenance Information</div>\n    <ion-input placeholder="Date" style="" class="username-input mgb12"></ion-input>\n  </div>\n\n  <div class="weight-fixeds">\n    <ion-input placeholder="Hours" class="username-input" type="password"></ion-input>\n  </div>\n\n  <div>\n    <textarea class="tarea012" placeholder="Description of maintenance performed"></textarea>\n  </div>\n\n  <div class="checkboxcont">\n    <ion-item>\n      <ion-label>Set Reminder</ion-label>\n      <ion-checkbox color="dark"></ion-checkbox>\n    </ion-item>\n\n  \n  </div>\n\n  <div class="weight-wrappers mgt20" style="">\n    <button ion-button class="login-btn button04" (click)="onLogin();">Submit</button>\n  </div>\n</div>\n</div>\n\n\n\n\n\n\n\n</ion-content>\n\n\n\n'/*ion-inline-end:"/Volumes/MACDATA/Work/NewProjects/Cross/2017.8/Brooks/BrooksIonic2/src/pages/EquipmentLogScreen/EquipmentSelectedScreen/RoutineMaintenance/OtherRoutine/OtherRoutine.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
], OtherRoutine);

//# sourceMappingURL=OtherRoutine.js.map

/***/ }),

/***/ 249:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ScheduledMaintenance; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__NewSchedule_NewSchedule__ = __webpack_require__(250);
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
        selector: 'page-scheduledmaintenance',template:/*ion-inline-start:"/Volumes/MACDATA/Work/NewProjects/Cross/2017.8/Brooks/BrooksIonic2/src/pages/EquipmentLogScreen/EquipmentSelectedScreen/ScheduledMaintenance/ScheduledMaintenance.html"*/'<ion-header style="">\n  <ion-navbar>\n    <ion-title>\n      Scheduled Maintenance\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content no-bounce class="pageten2" style="">\n\n\n<div class="mainjsets bgwhite">\n<div style="padding:0px;">\n  <div class="setone4 juniques secondary">\n    <img class="two" src="http://i.imgur.com/8yvvGXk.png">\n    <div class="topset1">Setup Maintenance</div>\n    <div class="topset2">Schedule and view maintenances</div>\n  </div>\n</div>\n</div>\n\n\n\n<div class="pad15" style="padding-top:25px;padding-bottom:0px;">\n  <div class="specsmalls spec121">Actions</div>\n</div>\n\n\n\n<div class="pad15">\n  <div class="equipfour padr30" (click)="onNewSchedule();"><img src="http://i.imgur.com/bS1POdT.png">Set-up New Scheduled Maintenance</div>\n  <div class="equipfour padr30"><img src="http://i.imgur.com/SxZyv4q.png">View Currently Scheduled Maintainences</div>\n\n</div>\n\n\n</ion-content>\n\n\n\n\n\n\n'/*ion-inline-end:"/Volumes/MACDATA/Work/NewProjects/Cross/2017.8/Brooks/BrooksIonic2/src/pages/EquipmentLogScreen/EquipmentSelectedScreen/ScheduledMaintenance/ScheduledMaintenance.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
], ScheduledMaintenance);

//# sourceMappingURL=ScheduledMaintenance.js.map

/***/ }),

/***/ 250:
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
        selector: 'page-newschedule',template:/*ion-inline-start:"/Volumes/MACDATA/Work/NewProjects/Cross/2017.8/Brooks/BrooksIonic2/src/pages/EquipmentLogScreen/EquipmentSelectedScreen/ScheduledMaintenance/NewSchedule/NewSchedule.html"*/'<ion-header style="">\n  <ion-navbar>\n    <ion-title>\n      Setup Maintenance\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content no-bounce class="pageten2" style="">\n\n\n<div class="pad15">\n<div class="specpad76">\n  <div class="weight-fixeds">\n    <div class="enterinfo1">Schedule Maintenance</div>\n\n  <div class="checkboxcont setbt20s">\n    <ion-item>\n      <ion-label>Oil Change</ion-label>\n      <ion-checkbox color="dark"></ion-checkbox>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>Air Filter</ion-label>\n      <ion-checkbox color="dark"></ion-checkbox>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>Hydraulic Filters</ion-label>\n      <ion-checkbox color="dark"></ion-checkbox>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>Fuel Filters</ion-label>\n      <ion-checkbox color="dark"></ion-checkbox>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>Others</ion-label>\n      <ion-checkbox color="dark"></ion-checkbox>\n    </ion-item>\n  </div>\n\n\n    <ion-input placeholder="Services On Date" style="" class="username-input mgb12"></ion-input>\n  </div>\n\n  <div class="weight-fixeds">\n    <ion-input placeholder="Hours" class="username-input setbt20s" type="text"></ion-input>\n  </div>\n\n  <div class="weight-fixeds">\n    <ion-input placeholder="Next Date" style="" class="username-input mgb12"></ion-input>\n  </div>\n\n  <div class="weight-fixeds">\n    <ion-input placeholder="Hours" class="username-input" type="password"></ion-input>\n  </div>\n\n\n  <div class="weight-wrappers mgt20" style="">\n    <button ion-button class="login-btn button04" (click)="onLogin();">Submit</button>\n  </div>\n</div>\n</div>\n\n\n\n\n\n\n\n</ion-content>\n\n\n\n'/*ion-inline-end:"/Volumes/MACDATA/Work/NewProjects/Cross/2017.8/Brooks/BrooksIonic2/src/pages/EquipmentLogScreen/EquipmentSelectedScreen/ScheduledMaintenance/NewSchedule/NewSchedule.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
], NewSchedule);

//# sourceMappingURL=NewSchedule.js.map

/***/ }),

/***/ 251:
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
        selector: 'page-repairs',template:/*ion-inline-start:"/Volumes/MACDATA/Work/NewProjects/Cross/2017.8/Brooks/BrooksIonic2/src/pages/EquipmentLogScreen/EquipmentSelectedScreen/Repairs/Repairs.html"*/'<ion-header style="">\n  <ion-navbar>\n    <ion-title>\n      Repairs\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content no-bounce class="pageten2" style="">\n\n\n<div class="mainjsets bgwhite">\n<div style="padding:0px;">\n  <div class="setone4 juniques secondary">\n    <img class="two" src="http://i.imgur.com/8yvvGXk.png">\n    <div class="topset1">Rapair Management</div>\n    <div class="topset2">View and manage neccessary repairs</div>\n  </div>\n</div>\n</div>\n\n\n\n<div class="pad15" style="padding-top:25px;padding-bottom:0px;">\n  <div class="specsmalls spec121">Actions</div>\n</div>\n\n\n\n<div class="pad15">\n  <div class="equipfour"><img src="http://i.imgur.com/FKsA27O.png">Repair Performed</div>\n  <div class="equipfour"><img src="http://i.imgur.com/Z7BVo63.png">Repair Needed</div>\n</div>\n\n\n\n<!-- This is Repair Performed -->\n\n<div class="pad15 padbottom0">\n<div class="specpad76">\n  <div class="weight-fixeds">\n    <div class="enterinfo1">Repair Performed Info</div>\n    <ion-input placeholder="Date" style="" class="username-input mgb12"></ion-input>\n  </div>\n\n  <div class="weight-fixeds">\n    <ion-input placeholder="Hours" class="username-input setbt20s" type="text"></ion-input>\n  </div>\n\n  <div class="weight-fixeds">\n    <ion-input placeholder="Repaired By" class="username-input" type="text"></ion-input>\n  </div>\n\n</div>\n</div>\n\n\n<div class="padspec7">\n  <div class="toptextholds">\n    <div class="placedirects">Add any information relevant to this job, which should be saved.</div>\n    <textarea placeholder="Write here.." class="notestexts doone"></textarea>\n  </div>\n</div>\n\n<div class="pad15 padbottom0">\n  <div class="photobutton1">\n    <img src="http://i.imgur.com/VIuctbn.png" style="">\n    <div class="textphotobt">Add Photos</div>\n  </div>\n</div>\n\n<div class="pad15">\n  <button ion-button class="login-btn button04" (click)="onLogin();">Submit</button>\n</div>\n\n\n\n</ion-content>\n\n\n'/*ion-inline-end:"/Volumes/MACDATA/Work/NewProjects/Cross/2017.8/Brooks/BrooksIonic2/src/pages/EquipmentLogScreen/EquipmentSelectedScreen/Repairs/Repairs.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
], Repairs);

//# sourceMappingURL=Repairs.js.map

/***/ }),

/***/ 406:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(407);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(411);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 411:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(225);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(229);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__(230);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(454);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_IntroScreen_IntroScreen__ = __webpack_require__(232);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_LoginScreen_LoginScreen__ = __webpack_require__(233);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_LoginDoneScreen_LoginDoneScreen__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_ApplicationLogScreen_ApplicationLogScreen__ = __webpack_require__(234);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_EquipmentLogScreen_EquipmentLogScreen__ = __webpack_require__(242);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_EquipmentLogScreen_EquipmentSelectedScreen_EquipmentSelectedScreen__ = __webpack_require__(243);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_EquipmentLogScreen_EquipmentSelectedScreen_LogHours_LogHours__ = __webpack_require__(244);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_EquipmentLogScreen_EquipmentSelectedScreen_RoutineMaintenance_RoutineMaintenance__ = __webpack_require__(245);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_ApplicationLogScreen_NewJob_NewJob__ = __webpack_require__(235);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_ApplicationLogScreen_CurrentJob_CurrentJob__ = __webpack_require__(240);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_ApplicationLogScreen_PreviousJob_PreviousJob__ = __webpack_require__(241);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_EquipmentLogScreen_EquipmentSelectedScreen_ScheduledMaintenance_ScheduledMaintenance__ = __webpack_require__(249);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_EquipmentLogScreen_EquipmentSelectedScreen_ScheduledMaintenance_NewSchedule_NewSchedule__ = __webpack_require__(250);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_EquipmentLogScreen_EquipmentSelectedScreen_Repairs_Repairs__ = __webpack_require__(251);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_ApplicationLogScreen_NewJob_Notes_Notes__ = __webpack_require__(236);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_EquipmentLogScreen_EquipmentSelectedScreen_RoutineMaintenance_MachineWash_MachineWash__ = __webpack_require__(246);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_EquipmentLogScreen_EquipmentSelectedScreen_RoutineMaintenance_Grease_Grease__ = __webpack_require__(247);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_EquipmentLogScreen_EquipmentSelectedScreen_RoutineMaintenance_OtherRoutine_OtherRoutine__ = __webpack_require__(248);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__services_apiService__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__services_spinnerService__ = __webpack_require__(239);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__pages_AppSplashScreen_AppSplashScreen__ = __webpack_require__(231);
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
            { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] }
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 454:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(229);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(225);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_AppSplashScreen_AppSplashScreen__ = __webpack_require__(231);
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/Volumes/MACDATA/Work/NewProjects/Cross/2017.8/Brooks/BrooksIonic2/src/app/app.html"*/'<ion-nav [root]="rootPage" swipeBackEnabled="false"></ion-nav>\n<link href="https://fonts.googleapis.com/css?family=Saira:300,400,500,600,700" rel="stylesheet">\n<link rel="stylesheet" href="http://code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css" />'/*ion-inline-end:"/Volumes/MACDATA/Work/NewProjects/Cross/2017.8/Brooks/BrooksIonic2/src/app/app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 51:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApiService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(230);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(237);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__(238);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__spinnerService__ = __webpack_require__(239);
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
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_5__spinnerService__["a" /* Spinner */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__spinnerService__["a" /* Spinner */]) === "function" && _b || Object])
], ApiService);

var _a, _b;
//# sourceMappingURL=apiService.js.map

/***/ })

},[406]);
//# sourceMappingURL=main.js.map