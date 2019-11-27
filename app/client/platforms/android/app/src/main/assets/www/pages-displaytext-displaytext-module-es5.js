(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-displaytext-displaytext-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/displaytext/displaytext.page.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/displaytext/displaytext.page.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"dark\">\n      <ion-buttons slot=\"start\">\n          <ion-back-button defaultHref=\"displayimage\"></ion-back-button>\n        </ion-buttons>\n    <ion-title>Your Image Text</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-card class=\"ion-card\" *ngIf=\"imageText\">\n      <ion-textarea class=\"ion-editable\" [(ngModel)]=\"imageText\"></ion-textarea>\n  </ion-card>\n  <ion-button color=\"dark\" (click)=\"goToSuccessPage()\" class=\"button\"> Submit </ion-button>  \n</ion-content>\n<!-- <ion-header>\n  <ion-toolbar>\n  <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n  </ion-buttons>\n    <ion-title>Vision</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <ion-item *ngFor=\"let vision of (visions | async)\">\n      <ion-label>\n        <h2>{{ vision.title }}</h2>\n        <p>{{ vision.reward | currency }}</p>\n      </ion-label>\n      <ion-icon slot=\"start\" icon=\"rocket\" color=\"primary\"></ion-icon>\n    </ion-item>\n  </ion-list>\n</ion-content> -->\n"

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

module.exports = ".ion-card {\n  margin-bottom: 20px;\n}\n\n.ion-editable {\n  --padding-bottom: 500px;\n}\n\n.button {\n  --border-radius: 60px;\n  --padding-bottom: 25px;\n  --padding-top: 25px;\n  width: 40%;\n  display: block;\n  position: relative;\n  float: none;\n  margin: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zb25hdGEvay9rbHV0Y2gvYXBwL2NsaWVudC9zcmMvYXBwL3BhZ2VzL2Rpc3BsYXl0ZXh0L2Rpc3BsYXl0ZXh0LnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvZGlzcGxheXRleHQvZGlzcGxheXRleHQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksbUJBQUE7QUNDSjs7QURDQTtFQUNJLHVCQUFBO0FDRUo7O0FEQUE7RUFDSSxxQkFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxVQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUNHSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2Rpc3BsYXl0ZXh0L2Rpc3BsYXl0ZXh0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pb24tY2FyZCB7XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cbi5pb24tZWRpdGFibGUge1xuICAgIC0tcGFkZGluZy1ib3R0b206IDUwMHB4O1xufVxuLmJ1dHRvbiB7XG4gICAgLS1ib3JkZXItcmFkaXVzOiA2MHB4O1xuICAgIC0tcGFkZGluZy1ib3R0b206IDI1cHg7XG4gICAgLS1wYWRkaW5nLXRvcDogMjVweDtcbiAgICB3aWR0aDogNDAlO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBmbG9hdDogbm9uZTtcbiAgICBtYXJnaW46IGF1dG87XG59IiwiLmlvbi1jYXJkIHtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cblxuLmlvbi1lZGl0YWJsZSB7XG4gIC0tcGFkZGluZy1ib3R0b206IDUwMHB4O1xufVxuXG4uYnV0dG9uIHtcbiAgLS1ib3JkZXItcmFkaXVzOiA2MHB4O1xuICAtLXBhZGRpbmctYm90dG9tOiAyNXB4O1xuICAtLXBhZGRpbmctdG9wOiAyNXB4O1xuICB3aWR0aDogNDAlO1xuICBkaXNwbGF5OiBibG9jaztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBmbG9hdDogbm9uZTtcbiAgbWFyZ2luOiBhdXRvO1xufSJdfQ== */"

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
/* harmony import */ var src_app_services_firebase_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/firebase.service */ "./src/app/services/firebase.service.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");





var DisplaytextPage = /** @class */ (function () {
    function DisplaytextPage(router, firebaseService, storage) {
        this.router = router;
        this.firebaseService = firebaseService;
        this.storage = storage;
    }
    /**
     * Retrieves image of analyzed text from Firebase storage
     * and display it on the app.
     */
    DisplaytextPage.prototype.ngOnInit = function () {
        var _this = this;
        this.storage.get('currentID')
            .then(function (id) {
            console.log("id: ", id);
            _this.docID = id;
            _this.firebaseService.retrieveData("TEXT", _this.docID).then(function (res) {
                _this.imageText = res;
                console.log(_this.imageText);
            });
        });
    };
    /**
     * Navigates to success page.
     */
    DisplaytextPage.prototype.goToSuccessPage = function () {
        var _this = this;
        // update docID
        var newID = this.docID + 1;
        this.storage.set('currentID', newID)
            .then(function (res) {
            _this.router.navigateByUrl("success");
        });
    };
    DisplaytextPage.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: src_app_services_firebase_service__WEBPACK_IMPORTED_MODULE_3__["FirebaseService"] },
        { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_4__["Storage"] }
    ]; };
    DisplaytextPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-displaytext',
            template: __webpack_require__(/*! raw-loader!./displaytext.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/displaytext/displaytext.page.html"),
            styles: [__webpack_require__(/*! ./displaytext.page.scss */ "./src/app/pages/displaytext/displaytext.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], src_app_services_firebase_service__WEBPACK_IMPORTED_MODULE_3__["FirebaseService"], _ionic_storage__WEBPACK_IMPORTED_MODULE_4__["Storage"]])
    ], DisplaytextPage);
    return DisplaytextPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-displaytext-displaytext-module-es5.js.map