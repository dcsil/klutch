(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-displaytext-displaytext-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/displaytext/displaytext.page.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/displaytext/displaytext.page.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <ion-header>\n  <ion-toolbar color=\"dark\">\n      <ion-buttons slot=\"start\">\n          <ion-back-button defaultHref=\"displayimage\"></ion-back-button>\n        </ion-buttons>\n    <ion-title>Your Image Text</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-card class=\"ion-card\" *ngIf=\"imageText\">\n      <ion-textarea class=\"ion-editable\" [(ngModel)]=\"imageText\"></ion-textarea>\n  </ion-card>\n  <ion-button color=\"dark\" (click)=\"goToSuccessPage()\" class=\"button\"> Submit </ion-button>  \n</ion-content> -->\n<ion-header>\n  <ion-toolbar>\n  <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n  </ion-buttons>\n    <ion-title>Vision</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <ion-item *ngFor=\"let vision of (visions | async)\">\n      <ion-label>\n        <h2>{{ vision.title }}</h2>\n        <p>{{ vision.reward | currency }}</p>\n      </ion-label>\n      <ion-icon slot=\"start\" icon=\"rocket\" color=\"primary\"></ion-icon>\n    </ion-item>\n  </ion-list>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/displaytext/displaytext.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/displaytext/displaytext.module.ts ***!
  \*********************************************************/
/*! exports provided: DisplaytextPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DisplaytextPageModule", function() { return DisplaytextPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _displaytext_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./displaytext.page */ "./src/app/pages/displaytext/displaytext.page.ts");







var routes = [
    {
        path: '',
        component: _displaytext_page__WEBPACK_IMPORTED_MODULE_6__["DisplaytextPage"]
    }
];
var DisplaytextPageModule = /** @class */ (function () {
    function DisplaytextPageModule() {
    }
    DisplaytextPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_displaytext_page__WEBPACK_IMPORTED_MODULE_6__["DisplaytextPage"]]
        })
    ], DisplaytextPageModule);
    return DisplaytextPageModule;
}());



/***/ }),

/***/ "./src/app/pages/displaytext/displaytext.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/pages/displaytext/displaytext.page.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".ion-card {\n  margin-bottom: 20px;\n}\n\n.ion-editable {\n  --padding-bottom: 500px;\n}\n\n.button {\n  --border-radius: 60px;\n  --padding-bottom: 25px;\n  --padding-top: 25px;\n  width: 40%;\n  display: block;\n  position: relative;\n  float: none;\n  margin: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zaGF3bmVlcml6cWEvUHJvamVjdHMva2x1dGNoL2FwcC9jbGllbnQvc3JjL2FwcC9wYWdlcy9kaXNwbGF5dGV4dC9kaXNwbGF5dGV4dC5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2Rpc3BsYXl0ZXh0L2Rpc3BsYXl0ZXh0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG1CQUFBO0FDQ0o7O0FEQ0E7RUFDSSx1QkFBQTtBQ0VKOztBREFBO0VBQ0kscUJBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsVUFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FDR0oiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9kaXNwbGF5dGV4dC9kaXNwbGF5dGV4dC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaW9uLWNhcmQge1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG4uaW9uLWVkaXRhYmxlIHtcbiAgICAtLXBhZGRpbmctYm90dG9tOiA1MDBweDtcbn1cbi5idXR0b24ge1xuICAgIC0tYm9yZGVyLXJhZGl1czogNjBweDtcbiAgICAtLXBhZGRpbmctYm90dG9tOiAyNXB4O1xuICAgIC0tcGFkZGluZy10b3A6IDI1cHg7XG4gICAgd2lkdGg6IDQwJTtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgZmxvYXQ6IG5vbmU7XG4gICAgbWFyZ2luOiBhdXRvO1xufSIsIi5pb24tY2FyZCB7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG5cbi5pb24tZWRpdGFibGUge1xuICAtLXBhZGRpbmctYm90dG9tOiA1MDBweDtcbn1cblxuLmJ1dHRvbiB7XG4gIC0tYm9yZGVyLXJhZGl1czogNjBweDtcbiAgLS1wYWRkaW5nLWJvdHRvbTogMjVweDtcbiAgLS1wYWRkaW5nLXRvcDogMjVweDtcbiAgd2lkdGg6IDQwJTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZmxvYXQ6IG5vbmU7XG4gIG1hcmdpbjogYXV0bztcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/displaytext/displaytext.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/displaytext/displaytext.page.ts ***!
  \*******************************************************/
/*! exports provided: DisplaytextPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DisplaytextPage", function() { return DisplaytextPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var src_app_services_vision_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/vision.service */ "./src/app/services/vision.service.ts");





var DisplaytextPage = /** @class */ (function () {
    function DisplaytextPage(router, storage, visionService) {
        this.router = router;
        this.storage = storage;
        this.visionService = visionService;
    }
    DisplaytextPage.prototype.ngOnInit = function () {
        // this.storage.get('1').then((val) => {
        //   this.imageText = val;
        // });
        this.visions = this.visionService.getVision();
    };
    DisplaytextPage.prototype.goToSuccessPage = function () {
        this.router.navigateByUrl("success");
    };
    DisplaytextPage.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"] },
        { type: src_app_services_vision_service__WEBPACK_IMPORTED_MODULE_4__["VisionService"] }
    ]; };
    DisplaytextPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-displaytext',
            template: __webpack_require__(/*! raw-loader!./displaytext.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/displaytext/displaytext.page.html"),
            styles: [__webpack_require__(/*! ./displaytext.page.scss */ "./src/app/pages/displaytext/displaytext.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"], src_app_services_vision_service__WEBPACK_IMPORTED_MODULE_4__["VisionService"]])
    ], DisplaytextPage);
    return DisplaytextPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-displaytext-displaytext-module-es5.js.map