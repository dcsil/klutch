(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-entityanalysis-entityanalysis-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/entityanalysis/entityanalysis.page.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/entityanalysis/entityanalysis.page.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar color=\"dark\">\n        <ion-buttons slot=\"start\">\n            <ion-back-button defaultHref=\"displayimage\"></ion-back-button>\n          </ion-buttons>\n      <ion-title>Entity Analysis</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n<ion-content>\n    <ion-list>\n        <ion-item *ngFor=\"let entity of entityData\">\n          <ion-label>\n            <ion-row>\n              <ion-col class=\"titles\" size=\"3\">\n                  <h2 style=\"font-size:18px\"> <b> Name </b> </h2>\n                  <h2 style=\"font-size:18px\"> <b> Type </b> </h2>\n                  <h2 style=\"font-size:18px\"> <b> Score </b> </h2>\n              </ion-col>\n              <ion-col class=\"data\">\n                  <h2 style=\"font-size:18px; color:grey\"> <b> {{ entity.text }} </b></h2>\n                  <h2 style=\"font-size:18px\">{{ entity.type }}</h2>\n                  <ion-progress-bar class=\"confidence\" value={{entity.confidence}} color=\"medium\"> </ion-progress-bar> \n                  <p class=\"score\"> {{ entity.confidence }} </p> \n              </ion-col>\n            </ion-row> \n          </ion-label>\n        </ion-item>\n      </ion-list>\n\n    <ion-button round color=\"dark\" (click)=\"goToSuccess()\" class=\"button\"> Submit </ion-button>  \n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/entityanalysis/entityanalysis.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/entityanalysis/entityanalysis.module.ts ***!
  \***************************************************************/
/*! exports provided: EntityanalysisPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EntityanalysisPageModule", function() { return EntityanalysisPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _entityanalysis_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./entityanalysis.page */ "./src/app/pages/entityanalysis/entityanalysis.page.ts");







const routes = [
    {
        path: '',
        component: _entityanalysis_page__WEBPACK_IMPORTED_MODULE_6__["EntityanalysisPage"]
    }
];
let EntityanalysisPageModule = class EntityanalysisPageModule {
};
EntityanalysisPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_entityanalysis_page__WEBPACK_IMPORTED_MODULE_6__["EntityanalysisPage"]]
    })
], EntityanalysisPageModule);



/***/ }),

/***/ "./src/app/pages/entityanalysis/entityanalysis.page.scss":
/*!***************************************************************!*\
  !*** ./src/app/pages/entityanalysis/entityanalysis.page.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".confidence {\n  height: 10px;\n  margin-top: 7px;\n  width: 80%;\n}\n\n.button {\n  --border-radius: 60px;\n  --padding-bottom: 25px;\n  --padding-top: 25px;\n  width: 40%;\n  display: block;\n  position: relative;\n  float: none;\n  margin: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zaGF3bmVlcml6cWEvUHJvamVjdHMva2x1dGNoL2FwcC9jbGllbnQvc3JjL2FwcC9wYWdlcy9lbnRpdHlhbmFseXNpcy9lbnRpdHlhbmFseXNpcy5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2VudGl0eWFuYWx5c2lzL2VudGl0eWFuYWx5c2lzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQUE7RUFDQSxlQUFBO0VBQ0EsVUFBQTtBQ0NKOztBREVBO0VBQ0kscUJBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsVUFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9lbnRpdHlhbmFseXNpcy9lbnRpdHlhbmFseXNpcy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29uZmlkZW5jZSB7XG4gICAgaGVpZ2h0OiAxMHB4O1xuICAgIG1hcmdpbi10b3A6IDdweDtcbiAgICB3aWR0aDogODAlO1xufVxuXG4uYnV0dG9uIHtcbiAgICAtLWJvcmRlci1yYWRpdXM6IDYwcHg7XG4gICAgLS1wYWRkaW5nLWJvdHRvbTogMjVweDtcbiAgICAtLXBhZGRpbmctdG9wOiAyNXB4O1xuICAgIHdpZHRoOiA0MCU7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGZsb2F0OiBub25lO1xuICAgIG1hcmdpbjogYXV0bztcbn0iLCIuY29uZmlkZW5jZSB7XG4gIGhlaWdodDogMTBweDtcbiAgbWFyZ2luLXRvcDogN3B4O1xuICB3aWR0aDogODAlO1xufVxuXG4uYnV0dG9uIHtcbiAgLS1ib3JkZXItcmFkaXVzOiA2MHB4O1xuICAtLXBhZGRpbmctYm90dG9tOiAyNXB4O1xuICAtLXBhZGRpbmctdG9wOiAyNXB4O1xuICB3aWR0aDogNDAlO1xuICBkaXNwbGF5OiBibG9jaztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBmbG9hdDogbm9uZTtcbiAgbWFyZ2luOiBhdXRvO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/entityanalysis/entityanalysis.page.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/entityanalysis/entityanalysis.page.ts ***!
  \*************************************************************/
/*! exports provided: EntityanalysisPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EntityanalysisPage", function() { return EntityanalysisPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");
/* harmony import */ var src_app_services_firebase_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/firebase.service */ "./src/app/services/firebase.service.ts");





let EntityanalysisPage = class EntityanalysisPage {
    constructor(router, storage, firebaseService) {
        this.router = router;
        this.storage = storage;
        this.firebaseService = firebaseService;
    }
    ngOnInit() {
        this.storage.get('currentID')
            .then(id => {
            console.log("id: ", id);
            this.docID = id;
            this.firebaseService.retrieveData("ENTITY", this.docID).then(res => {
                this.entityData = res;
                console.log("entity analysis:", this.entityData);
            });
        });
    }
    goToSuccess() {
        // update docID
        const newID = this.docID + 1;
        this.storage.set('currentID', newID)
            .then(res => {
            console.log("new ID: ", newID);
            this.router.navigateByUrl(`success`);
        });
    }
};
EntityanalysisPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"] },
    { type: src_app_services_firebase_service__WEBPACK_IMPORTED_MODULE_4__["FirebaseService"] }
];
EntityanalysisPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-entityanalysis',
        template: __webpack_require__(/*! raw-loader!./entityanalysis.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/entityanalysis/entityanalysis.page.html"),
        styles: [__webpack_require__(/*! ./entityanalysis.page.scss */ "./src/app/pages/entityanalysis/entityanalysis.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"], src_app_services_firebase_service__WEBPACK_IMPORTED_MODULE_4__["FirebaseService"]])
], EntityanalysisPage);



/***/ })

}]);
//# sourceMappingURL=pages-entityanalysis-entityanalysis-module-es2015.js.map