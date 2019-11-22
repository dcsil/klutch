(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-login-login-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/login/login.page.html":
/*!***********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/login/login.page.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content class=\"ion-padding\">\n\n  <img class=\"logo\" src=\"../../../assets/img/logo.png\" alt=\"Klutch logo\" >\n \n  <ion-row>\n    <ion-col size=\"12\" size-sm=\"10\" offset-sm=\"1\" size-md=\"8\" offset-md=\"2\" size-lg=\"6\" offset-lg=\"3\" size-xl=\"4\"\n      offset-xl=\"4\">\n \n      <ion-card class=\"ion-main-card\">\n        <ion-card-header>\n          <ion-card-title class=\"ion-text-center\">Your Account</ion-card-title>\n        </ion-card-header>\n \n        <ion-card-content class=\"ion-main-content\">\n          \n          <ion-item lines=\"none\">\n            <ion-label class=\"ion-card-label\" position=\"stacked\">Username</ion-label>\n            <ion-input type=\"text\" placeholder=\"Enter username\" name=\"username\"></ion-input>\n          </ion-item>\n        \n          <ion-item lines=\"none\">\n            <ion-label class=\"ion-card-label\" position=\"stacked\">Password</ion-label>\n            <ion-input type=\"password\" placeholder=\"Enter password\" name=\"password\"></ion-input>\n          </ion-item>\n\n          <ion-item lines=\"none\">\n              <ion-label class=\"ion-card-label\" position=\"stacked\">Digital Chart ID</ion-label>\n              <ion-input type=\"number\" placeholder=\"Enter digital chart ID\" name=\"chartID\"></ion-input>\n          </ion-item>\n          \n          <div class=\"buttons-container\">\n              <ion-button class=\"button\" (click)=\"login()\" expand=\"round\" color=\"dark\">Login</ion-button>\n              <ion-button class=\"button\" expand=\"round\" color=\"medium\" (click)=\"register()\">Register</ion-button>\n          </div>\n      \n        </ion-card-content>\n      </ion-card>\n \n    </ion-col>\n  </ion-row>\n \n</ion-content>"

/***/ }),

/***/ "./src/app/pages/login/login.module.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/login/login.module.ts ***!
  \*********************************************/
/*! exports provided: LoginPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login.page */ "./src/app/pages/login/login.page.ts");







var routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]
    }
];
var LoginPageModule = /** @class */ (function () {
    function LoginPageModule() {
    }
    LoginPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]]
        })
    ], LoginPageModule);
    return LoginPageModule;
}());



/***/ }),

/***/ "./src/app/pages/login/login.page.scss":
/*!*********************************************!*\
  !*** ./src/app/pages/login/login.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".button {\n  --border-radius: 40px;\n  --padding-bottom: 25px;\n  --padding-top: 25px;\n  width: 45%;\n}\n\n.buttons-container {\n  width: 100%;\n  display: block;\n  position: relative;\n  float: none;\n  margin: auto;\n  margin-left: 10px;\n  margin-top: 10px;\n}\n\n.ion-main-card {\n  height: 365px;\n  margin-top: 0px;\n}\n\n.ion-text-center {\n  font-size: 30px;\n}\n\n.ion-card-label {\n  font-size: 18px;\n}\n\n.logo {\n  display: block;\n  position: relative;\n  float: none;\n  margin-left: 30px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zaGF3bmVlcml6cWEvUHJvamVjdHMva2x1dGNoL2FwcC9jbGllbnQvc3JjL2FwcC9wYWdlcy9sb2dpbi9sb2dpbi5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2xvZ2luL2xvZ2luLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHFCQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLFVBQUE7QUNDSjs7QURFQTtFQUNJLFdBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUNDSjs7QURFQTtFQUNJLGFBQUE7RUFDQSxlQUFBO0FDQ0o7O0FERUE7RUFDSSxlQUFBO0FDQ0o7O0FERUE7RUFDSSxlQUFBO0FDQ0o7O0FERUE7RUFDSSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2xvZ2luL2xvZ2luLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5idXR0b24ge1xuICAgIC0tYm9yZGVyLXJhZGl1czogNDBweDtcbiAgICAtLXBhZGRpbmctYm90dG9tOiAyNXB4O1xuICAgIC0tcGFkZGluZy10b3A6IDI1cHg7XG4gICAgd2lkdGg6IDQ1JTtcbn1cblxuLmJ1dHRvbnMtY29udGFpbmVyIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgZmxvYXQ6IG5vbmU7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG59XG5cbi5pb24tbWFpbi1jYXJkIHtcbiAgICBoZWlnaHQ6IDM2NXB4O1xuICAgIG1hcmdpbi10b3A6IDBweDtcbn1cblxuLmlvbi10ZXh0LWNlbnRlciB7XG4gICAgZm9udC1zaXplOiAzMHB4O1xufVxuXG4uaW9uLWNhcmQtbGFiZWwge1xuICAgIGZvbnQtc2l6ZTogMThweDtcbn1cblxuLmxvZ28ge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBmbG9hdDogbm9uZTtcbiAgICBtYXJnaW4tbGVmdDogMzBweDtcbn1cbiIsIi5idXR0b24ge1xuICAtLWJvcmRlci1yYWRpdXM6IDQwcHg7XG4gIC0tcGFkZGluZy1ib3R0b206IDI1cHg7XG4gIC0tcGFkZGluZy10b3A6IDI1cHg7XG4gIHdpZHRoOiA0NSU7XG59XG5cbi5idXR0b25zLWNvbnRhaW5lciB7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBibG9jaztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBmbG9hdDogbm9uZTtcbiAgbWFyZ2luOiBhdXRvO1xuICBtYXJnaW4tbGVmdDogMTBweDtcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cblxuLmlvbi1tYWluLWNhcmQge1xuICBoZWlnaHQ6IDM2NXB4O1xuICBtYXJnaW4tdG9wOiAwcHg7XG59XG5cbi5pb24tdGV4dC1jZW50ZXIge1xuICBmb250LXNpemU6IDMwcHg7XG59XG5cbi5pb24tY2FyZC1sYWJlbCB7XG4gIGZvbnQtc2l6ZTogMThweDtcbn1cblxuLmxvZ28ge1xuICBkaXNwbGF5OiBibG9jaztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBmbG9hdDogbm9uZTtcbiAgbWFyZ2luLWxlZnQ6IDMwcHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/pages/login/login.page.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/login/login.page.ts ***!
  \*******************************************/
/*! exports provided: LoginPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPage", function() { return LoginPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var LoginPage = /** @class */ (function () {
    function LoginPage(router) {
        this.router = router;
    }
    LoginPage.prototype.ngOnInit = function () {
    };
    LoginPage.prototype.login = function () {
        this.router.navigateByUrl("welcome");
    };
    LoginPage.prototype.register = function () {
    };
    LoginPage.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    LoginPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! raw-loader!./login.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/login/login.page.html"),
            styles: [__webpack_require__(/*! ./login.page.scss */ "./src/app/pages/login/login.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], LoginPage);
    return LoginPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-login-login-module-es5.js.map