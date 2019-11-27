(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-success-success-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/success/success.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/success/success.page.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content >\n  <div class=\"main-content\">\n    <img class=\"checkmark\" src=\"../../../assets/icon/checkmark.svg\" />\n    <div class=\"woohoo\">Done!</div>\n    <div class=\"succss-msg\">\n      Your notes have been successfully transferred to your selected digital chart.\n    </div>\n    <ion-button color=\"dark\" (click)=\"goToHome()\" class=\"button\"> Back to Home </ion-button>\n  </div>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/success/success.module.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/success/success.module.ts ***!
  \*************************************************/
/*! exports provided: SuccessPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SuccessPageModule", function() { return SuccessPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _success_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./success.page */ "./src/app/pages/success/success.page.ts");







var routes = [
    {
        path: '',
        component: _success_page__WEBPACK_IMPORTED_MODULE_6__["SuccessPage"]
    }
];
var SuccessPageModule = /** @class */ (function () {
    function SuccessPageModule() {
    }
    SuccessPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_success_page__WEBPACK_IMPORTED_MODULE_6__["SuccessPage"]]
        })
    ], SuccessPageModule);
    return SuccessPageModule;
}());



/***/ }),

/***/ "./src/app/pages/success/success.page.scss":
/*!*************************************************!*\
  !*** ./src/app/pages/success/success.page.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".main-content {\n  padding-top: 150px;\n}\n\n.checkmark {\n  width: 100%;\n  height: 230px;\n}\n\n.succss-msg {\n  text-align: center;\n  padding: 10px 20px;\n}\n\n.button {\n  --border-radius: 60px;\n  --padding-bottom: 30px;\n  --padding-top: 30px;\n  width: 40%;\n  display: block;\n  position: relative;\n  float: none;\n  margin: auto;\n  margin-top: 20px;\n}\n\n.woohoo {\n  text-align: center;\n  font-weight: bold;\n  font-size: 30px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zb25hdGEvay9rbHV0Y2gvYXBwL2NsaWVudC9zcmMvYXBwL3BhZ2VzL3N1Y2Nlc3Mvc3VjY2Vzcy5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3N1Y2Nlc3Mvc3VjY2Vzcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtBQ0NKOztBREVBO0VBQ0ksV0FBQTtFQUNBLGFBQUE7QUNDSjs7QURFQTtFQUNJLGtCQUFBO0VBQ0Esa0JBQUE7QUNDSjs7QURFQTtFQUNJLHFCQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLFVBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FDQ0o7O0FERUE7RUFDSSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvc3VjY2Vzcy9zdWNjZXNzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYWluLWNvbnRlbnR7XG4gICAgcGFkZGluZy10b3A6IDE1MHB4O1xufVxuXG4uY2hlY2ttYXJre1xuICAgIHdpZHRoOjEwMCU7XG4gICAgaGVpZ2h0OiAyMzBweDtcbn1cblxuLnN1Y2Nzcy1tc2d7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHBhZGRpbmc6IDEwcHggMjBweDtcbn1cblxuLmJ1dHRvbiB7XG4gICAgLS1ib3JkZXItcmFkaXVzOiA2MHB4O1xuICAgIC0tcGFkZGluZy1ib3R0b206IDMwcHg7XG4gICAgLS1wYWRkaW5nLXRvcDogMzBweDtcbiAgICB3aWR0aDogNDAlO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBmbG9hdDogbm9uZTtcbiAgICBtYXJnaW46IGF1dG87XG4gICAgbWFyZ2luLXRvcDogMjBweDtcbn1cblxuLndvb2hvbyB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGZvbnQtc2l6ZTogMzBweDtcbn0iLCIubWFpbi1jb250ZW50IHtcbiAgcGFkZGluZy10b3A6IDE1MHB4O1xufVxuXG4uY2hlY2ttYXJrIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMjMwcHg7XG59XG5cbi5zdWNjc3MtbXNnIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiAxMHB4IDIwcHg7XG59XG5cbi5idXR0b24ge1xuICAtLWJvcmRlci1yYWRpdXM6IDYwcHg7XG4gIC0tcGFkZGluZy1ib3R0b206IDMwcHg7XG4gIC0tcGFkZGluZy10b3A6IDMwcHg7XG4gIHdpZHRoOiA0MCU7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGZsb2F0OiBub25lO1xuICBtYXJnaW46IGF1dG87XG4gIG1hcmdpbi10b3A6IDIwcHg7XG59XG5cbi53b29ob28ge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDMwcHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/pages/success/success.page.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/success/success.page.ts ***!
  \***********************************************/
/*! exports provided: SuccessPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SuccessPage", function() { return SuccessPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");




var SuccessPage = /** @class */ (function () {
    function SuccessPage(router, storage) {
        this.router = router;
        this.storage = storage;
    }
    SuccessPage.prototype.ngOnInit = function () {
    };
    SuccessPage.prototype.goToHome = function () {
        this.router.navigateByUrl('welcome');
    };
    SuccessPage.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"] }
    ]; };
    SuccessPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-success',
            template: __webpack_require__(/*! raw-loader!./success.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/success/success.page.html"),
            styles: [__webpack_require__(/*! ./success.page.scss */ "./src/app/pages/success/success.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"]])
    ], SuccessPage);
    return SuccessPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-success-success-module-es5.js.map