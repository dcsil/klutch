(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-displayimage-displayimage-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/displayimage/displayimage.page.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/displayimage/displayimage.page.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"dark\" class=\"ion-bar\">\n      <ion-buttons slot=\"start\">\n          <ion-back-button class=\"back-button\" defaultHref=\"welcome\"></ion-back-button>\n      </ion-buttons>\n    <ion-title>Your Image</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-container\">\n\n  <!-- <ion-progress-bar color=\"success\" *ngIf=\"flag\" value=\"{{progVal}}\"></ion-progress-bar> -->\n  <ion-progress-bar color=\"success\" *ngIf=\"flag\"></ion-progress-bar>\n  <img class=\"image\" [src]=\"displayImage\" *ngIf=\"displayImage\">\n  <ion-button round color=\"dark\" *ngIf=\"!flag\" (click)=\"recognizeImage()\" class=\"button\"> Recognize </ion-button>\n\n  <!-- <ion-item *ngIf=\"visionItem\">\n    <ion-label>\n      <h2>{{ visionItem.message }}</h2>\n    </ion-label>\n  </ion-item> -->\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/displayimage/displayimage.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/displayimage/displayimage.module.ts ***!
  \***********************************************************/
/*! exports provided: DisplayimagePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DisplayimagePageModule", function() { return DisplayimagePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _displayimage_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./displayimage.page */ "./src/app/pages/displayimage/displayimage.page.ts");







var routes = [
    {
        path: '',
        component: _displayimage_page__WEBPACK_IMPORTED_MODULE_6__["DisplayimagePage"]
    }
];
var DisplayimagePageModule = /** @class */ (function () {
    function DisplayimagePageModule() {
    }
    DisplayimagePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_displayimage_page__WEBPACK_IMPORTED_MODULE_6__["DisplayimagePage"]]
        })
    ], DisplayimagePageModule);
    return DisplayimagePageModule;
}());



/***/ }),

/***/ "./src/app/pages/displayimage/displayimage.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/pages/displayimage/displayimage.page.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".ion-container {\n  --padding-top: 30px;\n}\n\n.image {\n  margin-bottom: 30px;\n}\n\n.button {\n  --border-radius: 60px;\n  --padding-bottom: 25px;\n  --padding-top: 25px;\n  width: 40%;\n  display: block;\n  position: relative;\n  float: none;\n  margin: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zaGF3bmVlcml6cWEvUHJvamVjdHMva2x1dGNoL2FwcC9jbGllbnQvc3JjL2FwcC9wYWdlcy9kaXNwbGF5aW1hZ2UvZGlzcGxheWltYWdlLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvZGlzcGxheWltYWdlL2Rpc3BsYXlpbWFnZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxtQkFBQTtBQ0NKOztBREVBO0VBQ0ksbUJBQUE7QUNDSjs7QURFQTtFQUNJLHFCQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLFVBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvZGlzcGxheWltYWdlL2Rpc3BsYXlpbWFnZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaW9uLWNvbnRhaW5lciB7XG4gICAgLS1wYWRkaW5nLXRvcDogMzBweDtcbn1cblxuLmltYWdlIHtcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xufVxuXG4uYnV0dG9uIHtcbiAgICAtLWJvcmRlci1yYWRpdXM6IDYwcHg7XG4gICAgLS1wYWRkaW5nLWJvdHRvbTogMjVweDtcbiAgICAtLXBhZGRpbmctdG9wOiAyNXB4O1xuICAgIHdpZHRoOiA0MCU7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGZsb2F0OiBub25lO1xuICAgIG1hcmdpbjogYXV0bztcbn0iLCIuaW9uLWNvbnRhaW5lciB7XG4gIC0tcGFkZGluZy10b3A6IDMwcHg7XG59XG5cbi5pbWFnZSB7XG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XG59XG5cbi5idXR0b24ge1xuICAtLWJvcmRlci1yYWRpdXM6IDYwcHg7XG4gIC0tcGFkZGluZy1ib3R0b206IDI1cHg7XG4gIC0tcGFkZGluZy10b3A6IDI1cHg7XG4gIHdpZHRoOiA0MCU7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGZsb2F0OiBub25lO1xuICBtYXJnaW46IGF1dG87XG59Il19 */"

/***/ }),

/***/ "./src/app/pages/displayimage/displayimage.page.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/displayimage/displayimage.page.ts ***!
  \*********************************************************/
/*! exports provided: DisplayimagePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DisplayimagePage", function() { return DisplayimagePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_firebase_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/firebase.service */ "./src/app/services/firebase.service.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");




var DisplayimagePage = /** @class */ (function () {
    function DisplayimagePage(firebase, storage) {
        this.firebase = firebase;
        this.storage = storage;
    }
    /**
     * Retrieves image of note from Firebase storage
     * and display it on the app.
     */
    DisplayimagePage.prototype.ngOnInit = function () {
        // this.flag = false;
        var _this = this;
        this.storage.get('currentID')
            .then(function (id) {
            console.log("id: ", id);
            _this.docID = id;
            _this.firebase.retrieveData("IMAGE", _this.docID).then(function (res) {
                _this.displayImage = res;
                console.log(_this.displayImage);
            });
        });
    };
    /**
     * Calls service to analyze image with Google
     * firebase API.
     */
    DisplayimagePage.prototype.recognizeImage = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.flag = true;
                this.firebase.recognizeImage(this.displayImage, this.docID);
                this.flag = false;
                return [2 /*return*/];
            });
        });
    };
    DisplayimagePage.ctorParameters = function () { return [
        { type: src_app_services_firebase_service__WEBPACK_IMPORTED_MODULE_2__["FirebaseService"] },
        { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"] }
    ]; };
    DisplayimagePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-displayimage',
            template: __webpack_require__(/*! raw-loader!./displayimage.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/displayimage/displayimage.page.html"),
            styles: [__webpack_require__(/*! ./displayimage.page.scss */ "./src/app/pages/displayimage/displayimage.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_firebase_service__WEBPACK_IMPORTED_MODULE_2__["FirebaseService"], _ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"]])
    ], DisplayimagePage);
    return DisplayimagePage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-displayimage-displayimage-module-es5.js.map