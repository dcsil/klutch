(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-welcome-welcome-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/welcome/welcome.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/welcome/welcome.page.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar class=\"main-header\" color=\"dark\">\n      <ion-grid>\n          <ion-row>\n            <ion-col class=\"button\" (click)=\"openFirst()\">\n                <ion-icon name=\"menu\" class=\"icon\" size=\"large\"></ion-icon>\n            </ion-col>\n            <ion-col>\n                <ion-title class=\"main-header__title\">Klutch</ion-title>\n            </ion-col>\n            <ion-col>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n    </ion-toolbar>\n  </ion-header>\n<ion-menu side=\"start\" menuId=\"first\">\n    <ion-header>\n        <ion-toolbar color=\"dark\">\n          <ion-title>Menu</ion-title>\n        </ion-toolbar>\n      </ion-header>\n      <ion-content>\n          <ion-list>\n            <ion-item>Account</ion-item>\n            <ion-item>EMR Configuration</ion-item>\n            <ion-item>Report An Issue</ion-item>\n            <ion-item>Contact Us</ion-item>\n            <ion-item button=\"true\" type=\"button\" href=\"\">\n              <ion-label>Log Out</ion-label>  \n            </ion-item>\n          </ion-list>\n        </ion-content>\n</ion-menu>\n<ion-router-outlet main></ion-router-outlet>\n<ion-content class=\"ion-container\">\n    \n\n  <div class=\"container\">\n      <img class=\"header\" class=\"checkmark\" src=\"../../../assets/icon/file.svg\" />\n    <h3 class=\"text\"> Upload your notes </h3>\n    <ion-button round color=\"dark\" class=\"button\" (click)=\"getPicture('CAMERA')\">Camera </ion-button>\n    <br>\n    <br>\n    <ion-button round color=\"dark\" class=\"button\" (click)=\"getPicture('PHOTOLIBRARY')\">Photo library</ion-button>\n  </div>\n</ion-content>\n\n\n"

/***/ }),

/***/ "./src/app/pages/welcome/welcome.module.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/welcome/welcome.module.ts ***!
  \*************************************************/
/*! exports provided: WelcomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WelcomePageModule", function() { return WelcomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _welcome_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./welcome.page */ "./src/app/pages/welcome/welcome.page.ts");







var routes = [
    {
        path: '',
        component: _welcome_page__WEBPACK_IMPORTED_MODULE_6__["WelcomePage"]
    }
];
var WelcomePageModule = /** @class */ (function () {
    function WelcomePageModule() {
    }
    WelcomePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_welcome_page__WEBPACK_IMPORTED_MODULE_6__["WelcomePage"]]
        })
    ], WelcomePageModule);
    return WelcomePageModule;
}());



/***/ }),

/***/ "./src/app/pages/welcome/welcome.page.scss":
/*!*************************************************!*\
  !*** ./src/app/pages/welcome/welcome.page.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n  width: 100%;\n  display: block;\n  position: relative;\n  float: none;\n  margin-top: 88px;\n}\n\nimg {\n  width: 100%;\n  height: -webkit-fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n  padding-left: 20px;\n}\n\n.main-header {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n}\n\n.main-header__title {\n  text-align: center;\n  padding-top: 5px;\n}\n\n.text {\n  text-align: center;\n  margin-bottom: 50px;\n  margin-top: 0px;\n  text-transform: uppercase;\n}\n\n.button {\n  --border-radius: 40px;\n  --padding-bottom: 30px;\n  --padding-top: 30px;\n  width: 70%;\n  display: block;\n  position: relative;\n  float: none;\n  margin: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zaGF3bmVlcml6cWEvUHJvamVjdHMva2x1dGNoL2FwcC9jbGllbnQvc3JjL2FwcC9wYWdlcy93ZWxjb21lL3dlbGNvbWUucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy93ZWxjb21lL3dlbGNvbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtBQ0NKOztBRENBO0VBQ0ksV0FBQTtFQUNBLDJCQUFBO0VBQUEsd0JBQUE7RUFBQSxtQkFBQTtFQUNBLGtCQUFBO0FDRUo7O0FEQUE7RUFDSSxvQkFBQTtFQUFBLGFBQUE7RUFDQSw4QkFBQTtFQUFBLDZCQUFBO1VBQUEsbUJBQUE7QUNHSjs7QUREQTtFQUNJLGtCQUFBO0VBQ0EsZ0JBQUE7QUNJSjs7QURGQTtFQUNJLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7QUNLSjs7QURGQTtFQUNJLHFCQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLFVBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQ0tKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvd2VsY29tZS93ZWxjb21lLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBmbG9hdDogbm9uZTtcbiAgICBtYXJnaW4tdG9wOiA4OHB4O1xufVxuaW1nIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xuICAgIHBhZGRpbmctbGVmdDogMjBweDtcbn1cbi5tYWluLWhlYWRlciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xufVxuLm1haW4taGVhZGVyX190aXRsZSB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHBhZGRpbmctdG9wOiA1cHg7XG59XG4udGV4dCB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG1hcmdpbi1ib3R0b206IDUwcHg7XG4gICAgbWFyZ2luLXRvcDogMHB4O1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG5cbi5idXR0b24ge1xuICAgIC0tYm9yZGVyLXJhZGl1czogNDBweDtcbiAgICAtLXBhZGRpbmctYm90dG9tOiAzMHB4O1xuICAgIC0tcGFkZGluZy10b3A6IDMwcHg7XG4gICAgd2lkdGg6IDcwJTtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgZmxvYXQ6IG5vbmU7XG4gICAgbWFyZ2luOiBhdXRvO1xufSIsIi5jb250YWluZXIge1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZmxvYXQ6IG5vbmU7XG4gIG1hcmdpbi10b3A6IDg4cHg7XG59XG5cbmltZyB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGZpdC1jb250ZW50O1xuICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG59XG5cbi5tYWluLWhlYWRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG59XG5cbi5tYWluLWhlYWRlcl9fdGl0bGUge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmctdG9wOiA1cHg7XG59XG5cbi50ZXh0IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tYm90dG9tOiA1MHB4O1xuICBtYXJnaW4tdG9wOiAwcHg7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG5cbi5idXR0b24ge1xuICAtLWJvcmRlci1yYWRpdXM6IDQwcHg7XG4gIC0tcGFkZGluZy1ib3R0b206IDMwcHg7XG4gIC0tcGFkZGluZy10b3A6IDMwcHg7XG4gIHdpZHRoOiA3MCU7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGZsb2F0OiBub25lO1xuICBtYXJnaW46IGF1dG87XG59Il19 */"

/***/ }),

/***/ "./src/app/pages/welcome/welcome.page.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/welcome/welcome.page.ts ***!
  \***********************************************/
/*! exports provided: WelcomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WelcomePage", function() { return WelcomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/camera/ngx */ "./node_modules/@ionic-native/camera/ngx/index.js");
/* harmony import */ var src_app_services_firebase_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/firebase.service */ "./src/app/services/firebase.service.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");






var WelcomePage = /** @class */ (function () {
    function WelcomePage(camera, firebaseService, menu, storage) {
        this.camera = camera;
        this.firebaseService = firebaseService;
        this.menu = menu;
        this.storage = storage;
    }
    WelcomePage.prototype.ngOnInit = function () {
    };
    WelcomePage.prototype.openFirst = function () {
        this.menu.enable(true, 'first');
        this.menu.open('first');
    };
    /**
     * This function takes a picture either with a camera
     * or from the user's photo library, then uploads it
     * to Firebase storage and database.
     *
     * @param {String} srcType The source for the picture.
     * @return {void}
     */
    WelcomePage.prototype.getPicture = function (srcType) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var options, imageData;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (srcType == 'CAMERA') {
                            this.cameraSourceType = this.camera.PictureSourceType.CAMERA;
                        }
                        else if (srcType == 'PHOTOLIBRARY') {
                            this.cameraSourceType = this.camera.PictureSourceType.PHOTOLIBRARY;
                        }
                        options = {
                            quality: 100,
                            destinationType: this.camera.DestinationType.DATA_URL,
                            encodingType: this.camera.EncodingType.JPEG,
                            mediaType: this.camera.MediaType.PICTURE,
                            sourceType: this.cameraSourceType,
                            allowEdit: true,
                            saveToPhotoAlbum: false,
                            correctOrientation: true
                        };
                        return [4 /*yield*/, this.camera.getPicture(options)];
                    case 1:
                        imageData = _a.sent();
                        this.selectedImage = "data:image/jpeg;base64," + imageData;
                        this.storage.get('currentID')
                            .then(function (id) {
                            _this.docID = id;
                            console.log("docID:", id);
                            _this.firebaseService.uploadImage(_this.selectedImage, _this.docID);
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    WelcomePage.ctorParameters = function () { return [
        { type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_3__["Camera"] },
        { type: src_app_services_firebase_service__WEBPACK_IMPORTED_MODULE_4__["FirebaseService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"] },
        { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_5__["Storage"] }
    ]; };
    WelcomePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-welcome',
            template: __webpack_require__(/*! raw-loader!./welcome.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/welcome/welcome.page.html"),
            styles: [__webpack_require__(/*! ./welcome.page.scss */ "./src/app/pages/welcome/welcome.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_3__["Camera"], src_app_services_firebase_service__WEBPACK_IMPORTED_MODULE_4__["FirebaseService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"],
            _ionic_storage__WEBPACK_IMPORTED_MODULE_5__["Storage"]])
    ], WelcomePage);
    return WelcomePage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-welcome-welcome-module-es5.js.map