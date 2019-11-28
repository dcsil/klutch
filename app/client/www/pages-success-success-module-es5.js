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

module.exports = ".main-content {\n  padding-top: 150px;\n}\n\n.checkmark {\n  width: 100%;\n  height: 230px;\n}\n\n.succss-msg {\n  text-align: center;\n  padding: 10px 20px;\n}\n\n.button {\n  --border-radius: 60px;\n  --padding-bottom: 30px;\n  --padding-top: 30px;\n  width: 40%;\n  display: block;\n  position: relative;\n  float: none;\n  margin: auto;\n  margin-top: 20px;\n}\n\n.woohoo {\n  text-align: center;\n  font-weight: bold;\n  font-size: 30px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zaGF3bmVlcml6cWEvUHJvamVjdHMva2x1dGNoL2FwcC9jbGllbnQvc3JjL2FwcC9wYWdlcy9zdWNjZXNzL3N1Y2Nlc3MucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9zdWNjZXNzL3N1Y2Nlc3MucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7QUNDSjs7QURFQTtFQUNJLFdBQUE7RUFDQSxhQUFBO0FDQ0o7O0FERUE7RUFDSSxrQkFBQTtFQUNBLGtCQUFBO0FDQ0o7O0FERUE7RUFDSSxxQkFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxVQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBQ0NKOztBREVBO0VBQ0ksa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3N1Y2Nlc3Mvc3VjY2Vzcy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFpbi1jb250ZW50e1xuICAgIHBhZGRpbmctdG9wOiAxNTBweDtcbn1cblxuLmNoZWNrbWFya3tcbiAgICB3aWR0aDoxMDAlO1xuICAgIGhlaWdodDogMjMwcHg7XG59XG5cbi5zdWNjc3MtbXNne1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBwYWRkaW5nOiAxMHB4IDIwcHg7XG59XG5cbi5idXR0b24ge1xuICAgIC0tYm9yZGVyLXJhZGl1czogNjBweDtcbiAgICAtLXBhZGRpbmctYm90dG9tOiAzMHB4O1xuICAgIC0tcGFkZGluZy10b3A6IDMwcHg7XG4gICAgd2lkdGg6IDQwJTtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgZmxvYXQ6IG5vbmU7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIG1hcmdpbi10b3A6IDIwcHg7XG59XG5cbi53b29ob28ge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBmb250LXNpemU6IDMwcHg7XG59IiwiLm1haW4tY29udGVudCB7XG4gIHBhZGRpbmctdG9wOiAxNTBweDtcbn1cblxuLmNoZWNrbWFyayB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDIzMHB4O1xufVxuXG4uc3VjY3NzLW1zZyB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogMTBweCAyMHB4O1xufVxuXG4uYnV0dG9uIHtcbiAgLS1ib3JkZXItcmFkaXVzOiA2MHB4O1xuICAtLXBhZGRpbmctYm90dG9tOiAzMHB4O1xuICAtLXBhZGRpbmctdG9wOiAzMHB4O1xuICB3aWR0aDogNDAlO1xuICBkaXNwbGF5OiBibG9jaztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBmbG9hdDogbm9uZTtcbiAgbWFyZ2luOiBhdXRvO1xuICBtYXJnaW4tdG9wOiAyMHB4O1xufVxuXG4ud29vaG9vIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAzMHB4O1xufSJdfQ== */"

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