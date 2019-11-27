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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _welcome_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./welcome.page */ "./src/app/pages/welcome/welcome.page.ts");







const routes = [
    {
        path: '',
        component: _welcome_page__WEBPACK_IMPORTED_MODULE_6__["WelcomePage"]
    }
];
let WelcomePageModule = class WelcomePageModule {
};
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



/***/ }),

/***/ "./src/app/pages/welcome/welcome.page.scss":
/*!*************************************************!*\
  !*** ./src/app/pages/welcome/welcome.page.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n  width: 100%;\n  display: block;\n  position: relative;\n  float: none;\n  margin-top: 88px;\n}\n\nimg {\n  width: 100%;\n  height: -webkit-fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n  padding-left: 20px;\n}\n\n.main-header {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n}\n\n.main-header__title {\n  text-align: center;\n  padding-top: 5px;\n}\n\n.text {\n  text-align: center;\n  margin-bottom: 50px;\n  margin-top: 0px;\n  text-transform: uppercase;\n}\n\n.button {\n  --border-radius: 40px;\n  --padding-bottom: 30px;\n  --padding-top: 30px;\n  width: 70%;\n  display: block;\n  position: relative;\n  float: none;\n  margin: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zb25hdGEvay9rbHV0Y2gvYXBwL2NsaWVudC9zcmMvYXBwL3BhZ2VzL3dlbGNvbWUvd2VsY29tZS5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3dlbGNvbWUvd2VsY29tZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0FDQ0o7O0FEQ0E7RUFDSSxXQUFBO0VBQ0EsMkJBQUE7RUFBQSx3QkFBQTtFQUFBLG1CQUFBO0VBQ0Esa0JBQUE7QUNFSjs7QURBQTtFQUNJLG9CQUFBO0VBQUEsYUFBQTtFQUNBLDhCQUFBO0VBQUEsNkJBQUE7VUFBQSxtQkFBQTtBQ0dKOztBRERBO0VBQ0ksa0JBQUE7RUFDQSxnQkFBQTtBQ0lKOztBREZBO0VBQ0ksa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtBQ0tKOztBREZBO0VBQ0kscUJBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsVUFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FDS0oiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy93ZWxjb21lL3dlbGNvbWUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGZsb2F0OiBub25lO1xuICAgIG1hcmdpbi10b3A6IDg4cHg7XG59XG5pbWcge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XG4gICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xufVxuLm1haW4taGVhZGVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG59XG4ubWFpbi1oZWFkZXJfX3RpdGxlIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgcGFkZGluZy10b3A6IDVweDtcbn1cbi50ZXh0IHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWFyZ2luLWJvdHRvbTogNTBweDtcbiAgICBtYXJnaW4tdG9wOiAwcHg7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cblxuLmJ1dHRvbiB7XG4gICAgLS1ib3JkZXItcmFkaXVzOiA0MHB4O1xuICAgIC0tcGFkZGluZy1ib3R0b206IDMwcHg7XG4gICAgLS1wYWRkaW5nLXRvcDogMzBweDtcbiAgICB3aWR0aDogNzAlO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBmbG9hdDogbm9uZTtcbiAgICBtYXJnaW46IGF1dG87XG59IiwiLmNvbnRhaW5lciB7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBibG9jaztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBmbG9hdDogbm9uZTtcbiAgbWFyZ2luLXRvcDogODhweDtcbn1cblxuaW1nIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogZml0LWNvbnRlbnQ7XG4gIHBhZGRpbmctbGVmdDogMjBweDtcbn1cblxuLm1haW4taGVhZGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbn1cblxuLm1haW4taGVhZGVyX190aXRsZSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZy10b3A6IDVweDtcbn1cblxuLnRleHQge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi1ib3R0b206IDUwcHg7XG4gIG1hcmdpbi10b3A6IDBweDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cblxuLmJ1dHRvbiB7XG4gIC0tYm9yZGVyLXJhZGl1czogNDBweDtcbiAgLS1wYWRkaW5nLWJvdHRvbTogMzBweDtcbiAgLS1wYWRkaW5nLXRvcDogMzBweDtcbiAgd2lkdGg6IDcwJTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZmxvYXQ6IG5vbmU7XG4gIG1hcmdpbjogYXV0bztcbn0iXX0= */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/camera/ngx */ "./node_modules/@ionic-native/camera/ngx/index.js");
/* harmony import */ var src_app_services_firebase_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/firebase.service */ "./src/app/services/firebase.service.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");






let WelcomePage = class WelcomePage {
    constructor(camera, firebaseService, menu, storage) {
        this.camera = camera;
        this.firebaseService = firebaseService;
        this.menu = menu;
        this.storage = storage;
    }
    ngOnInit() {
    }
    openFirst() {
        this.menu.enable(true, 'first');
        this.menu.open('first');
    }
    /**
     * This function takes a picture either with a camera
     * or from the user's photo library, then uploads it
     * to Firebase storage and database.
     *
     * @param {String} srcType The source for the picture.
     * @return {void}
     */
    getPicture(srcType) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            if (srcType == 'CAMERA') {
                this.cameraSourceType = this.camera.PictureSourceType.CAMERA;
            }
            else if (srcType == 'PHOTOLIBRARY') {
                this.cameraSourceType = this.camera.PictureSourceType.PHOTOLIBRARY;
            }
            const options = {
                quality: 100,
                destinationType: this.camera.DestinationType.DATA_URL,
                encodingType: this.camera.EncodingType.JPEG,
                mediaType: this.camera.MediaType.PICTURE,
                sourceType: this.cameraSourceType,
                allowEdit: true,
                saveToPhotoAlbum: false,
                correctOrientation: true
            };
            const imageData = yield this.camera.getPicture(options);
            this.selectedImage = `data:image/jpeg;base64,${imageData}`;
            this.storage.get('currentID')
                .then(id => {
                this.docID = id;
                console.log("docID:", id);
                this.firebaseService.uploadImage(this.selectedImage, this.docID);
            });
        });
    }
};
WelcomePage.ctorParameters = () => [
    { type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_3__["Camera"] },
    { type: src_app_services_firebase_service__WEBPACK_IMPORTED_MODULE_4__["FirebaseService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_5__["Storage"] }
];
WelcomePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-welcome',
        template: __webpack_require__(/*! raw-loader!./welcome.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/welcome/welcome.page.html"),
        styles: [__webpack_require__(/*! ./welcome.page.scss */ "./src/app/pages/welcome/welcome.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_3__["Camera"], src_app_services_firebase_service__WEBPACK_IMPORTED_MODULE_4__["FirebaseService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"],
        _ionic_storage__WEBPACK_IMPORTED_MODULE_5__["Storage"]])
], WelcomePage);



/***/ })

}]);
//# sourceMappingURL=pages-welcome-welcome-module-es2015.js.map