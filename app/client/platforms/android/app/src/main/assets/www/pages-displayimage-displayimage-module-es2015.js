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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _displayimage_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./displayimage.page */ "./src/app/pages/displayimage/displayimage.page.ts");







const routes = [
    {
        path: '',
        component: _displayimage_page__WEBPACK_IMPORTED_MODULE_6__["DisplayimagePage"]
    }
];
let DisplayimagePageModule = class DisplayimagePageModule {
};
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



/***/ }),

/***/ "./src/app/pages/displayimage/displayimage.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/pages/displayimage/displayimage.page.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".ion-container {\n  --padding-top: 30px;\n}\n\n.image {\n  margin-bottom: 30px;\n}\n\n.button {\n  --border-radius: 60px;\n  --padding-bottom: 25px;\n  --padding-top: 25px;\n  width: 40%;\n  display: block;\n  position: relative;\n  float: none;\n  margin: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zb25hdGEvay9rbHV0Y2gvYXBwL2NsaWVudC9zcmMvYXBwL3BhZ2VzL2Rpc3BsYXlpbWFnZS9kaXNwbGF5aW1hZ2UucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9kaXNwbGF5aW1hZ2UvZGlzcGxheWltYWdlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG1CQUFBO0FDQ0o7O0FERUE7RUFDSSxtQkFBQTtBQ0NKOztBREVBO0VBQ0kscUJBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsVUFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9kaXNwbGF5aW1hZ2UvZGlzcGxheWltYWdlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pb24tY29udGFpbmVyIHtcbiAgICAtLXBhZGRpbmctdG9wOiAzMHB4O1xufVxuXG4uaW1hZ2Uge1xuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XG59XG5cbi5idXR0b24ge1xuICAgIC0tYm9yZGVyLXJhZGl1czogNjBweDtcbiAgICAtLXBhZGRpbmctYm90dG9tOiAyNXB4O1xuICAgIC0tcGFkZGluZy10b3A6IDI1cHg7XG4gICAgd2lkdGg6IDQwJTtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgZmxvYXQ6IG5vbmU7XG4gICAgbWFyZ2luOiBhdXRvO1xufSIsIi5pb24tY29udGFpbmVyIHtcbiAgLS1wYWRkaW5nLXRvcDogMzBweDtcbn1cblxuLmltYWdlIHtcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcbn1cblxuLmJ1dHRvbiB7XG4gIC0tYm9yZGVyLXJhZGl1czogNjBweDtcbiAgLS1wYWRkaW5nLWJvdHRvbTogMjVweDtcbiAgLS1wYWRkaW5nLXRvcDogMjVweDtcbiAgd2lkdGg6IDQwJTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZmxvYXQ6IG5vbmU7XG4gIG1hcmdpbjogYXV0bztcbn0iXX0= */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_firebase_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/firebase.service */ "./src/app/services/firebase.service.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");




let DisplayimagePage = class DisplayimagePage {
    constructor(firebase, storage) {
        this.firebase = firebase;
        this.storage = storage;
    }
    /**
     * Retrieves image of note from Firebase storage
     * and display it on the app.
     */
    ngOnInit() {
        // this.flag = false;
        this.storage.get('currentID')
            .then(id => {
            console.log("id: ", id);
            this.docID = id;
            this.firebase.retrieveData("IMAGE", this.docID).then(res => {
                this.displayImage = res;
                console.log(this.displayImage);
            });
        });
    }
    /**
     * Calls service to analyze image with Google
     * firebase API.
     */
    recognizeImage() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.flag = true;
            this.firebase.recognizeImage(this.displayImage, this.docID);
            this.flag = false;
        });
    }
};
DisplayimagePage.ctorParameters = () => [
    { type: src_app_services_firebase_service__WEBPACK_IMPORTED_MODULE_2__["FirebaseService"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"] }
];
DisplayimagePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-displayimage',
        template: __webpack_require__(/*! raw-loader!./displayimage.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/displayimage/displayimage.page.html"),
        styles: [__webpack_require__(/*! ./displayimage.page.scss */ "./src/app/pages/displayimage/displayimage.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_firebase_service__WEBPACK_IMPORTED_MODULE_2__["FirebaseService"], _ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"]])
], DisplayimagePage);



/***/ })

}]);
//# sourceMappingURL=pages-displayimage-displayimage-module-es2015.js.map