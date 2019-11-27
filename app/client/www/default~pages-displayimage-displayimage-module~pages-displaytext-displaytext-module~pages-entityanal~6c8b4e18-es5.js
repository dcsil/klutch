(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~pages-displayimage-displayimage-module~pages-displaytext-displaytext-module~pages-entityanal~6c8b4e18"],{

/***/ "./src/app/services/firebase.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/firebase.service.ts ***!
  \**********************************************/
/*! exports provided: FirebaseService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FirebaseService", function() { return FirebaseService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var angularfire2_storage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angularfire2/storage */ "./node_modules/angularfire2/storage/index.js");
/* harmony import */ var angularfire2_storage__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(angularfire2_storage__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! angularfire2/firestore */ "./node_modules/angularfire2/firestore/index.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(angularfire2_firestore__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");









var FirebaseService = /** @class */ (function () {
    function FirebaseService(http, router, storage, fireStorage, db, loadingCtrl) {
        this.http = http;
        this.router = router;
        this.storage = storage;
        this.fireStorage = fireStorage;
        this.db = db;
        this.loadingCtrl = loadingCtrl;
        this.ip = "100.65.108.71";
    }
    FirebaseService.prototype.showLoader = function (msg) {
        var loading = this.loadingCtrl.create({
            message: msg,
            spinner: 'circles',
            cssClass: 'loader'
        }).then(function (res) {
            res.present();
        });
    };
    FirebaseService.prototype.hideLoader = function () {
        this.loadingCtrl.dismiss();
    };
    /**
     * 1. Checks DB if "patients" collection already exists.
     *    If not, create a new collection and set current
     *    docID to 0.
     * 2. Else, retrieve, the ID of the last doc in the collection
     *    and set current docID to lastID + 1.
     * 3. Save this ID into local storage.
     */
    FirebaseService.prototype.initializeDB = function () {
        var _this = this;
        var docRef = this.db.collection('patients').get()
            .subscribe(function (collection) {
            var length = collection.docs.length;
            if (length == 0) {
                console.log("Collection doesn't exist! Creating a new one...");
                _this.docID = 0;
                _this.storage.set('currentID', _this.docID);
            }
            else {
                console.log("Collection has docs");
                // create a listener to query
                _this.unsub = collection.query.orderBy("patientID")
                    .limitToLast(1)
                    .onSnapshot(function (res) {
                    _this.docID = Number(res.docs[0].id.slice(7)) + 1;
                    console.log("docID initialize: ", _this.docID);
                    _this.storage.set('currentID', _this.docID);
                });
            }
        });
    };
    FirebaseService.prototype.uploadImageToDB = function (url, id) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var docID, docRef, patientID, imageUrl, imageText, entity;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log("id: ", id);
                        docID = "patient" + id;
                        docRef = this.db.collection('patients').doc(docID);
                        patientID = id;
                        imageUrl = url;
                        imageText = "";
                        entity = [];
                        return [4 /*yield*/, docRef.set({ patientID: patientID, imageUrl: imageUrl, imageText: imageText, entity: entity })
                                .then(function (res) {
                                _this.hideLoader();
                                console.log("data uploaded to database");
                                _this.router.navigateByUrl("displayimage");
                            })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * This function does the following:
     * 1. Creates a new document in Firebase database.
     * 2. Uploads image to Firebase storage and retrieves the download URL.
     * 3. Saves image URL into the newly created document in DB.
     * 4. Navigates to the displayimage page as the final step.
     *
     * @param {String} base64 Image representation as a base-64 encoded string.
     */
    FirebaseService.prototype.uploadImage = function (base64, docID) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var loadingMsg, id, path;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                loadingMsg = "Uploading your image. Please wait.";
                this.showLoader(loadingMsg);
                id = this.db.createId();
                path = id + ".jpg";
                this.ref = this.fireStorage.ref(path);
                this.task = this.ref.putString(base64, 'data_url');
                // get download URL
                this.task.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["finalize"])(function () {
                    _this.ref.getDownloadURL().subscribe(function (url) {
                        console.log("download url:", url);
                        _this.uploadImageToDB(url, docID);
                    });
                })).subscribe();
                // unsubscribe from query listener
                this.unsub();
                return [2 /*return*/];
            });
        });
    };
    /**
     * Retrieves the corresponding image document in DB and updates
     * the imageText field with the analyzed text.
     *
     * @param {String} imageText Analyzed text returned from the Google Vision API.
     */
    FirebaseService.prototype.uploadImageData = function (dataType, data, id) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var docID, patientRef;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                docID = "patient" + id;
                patientRef = this.db.collection('patients').doc(docID);
                if (dataType == 'TEXT') {
                    patientRef.update({ imageText: data });
                }
                else if (dataType == 'ENTITY') {
                    patientRef.update({ entity: data });
                }
                return [2 /*return*/];
            });
        });
    };
    /**
     * This function does the following:
     * 1. Submits HTTP POST request to call the Google Vision API in
     * backend to perform document text detection.
     * 2. Uploads the retrieved analyzed text to DB.
     * 3. Navigates to displaytext page as the final step.
     *
     * @param {String} imageUrl Download URL for the image.
     */
    FirebaseService.prototype.recognizeImage = function (imageUrl, docID) {
        var _this = this;
        var loadingMsg = "Analyzing your image. Please wait.";
        this.showLoader(loadingMsg);
        var header = { "Content-Type": "application/json" };
        var data = {
            id: 1,
            image: imageUrl
        };
        var serverUrl = "https://klucth-app.herokuapp.com/vision";
        this.http.post(serverUrl, data, { headers: header, responseType: 'text' })
            .subscribe(function (response) {
            _this.imageText = response;
            console.log("http response: ", _this.imageText);
            _this.uploadImageData('TEXT', _this.imageText, docID)
                .then(function (res) {
                _this.hideLoader();
                _this.router.navigateByUrl("displaytext");
            });
        });
    };
    /**
     * Retrieves selected data from Firebase DB.
     *
     * @param {String} dataType Either the image itself or the analyzed text.
     */
    FirebaseService.prototype.retrieveData = function (dataType, id) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var docID, patientRef, getDoc;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (dataType == "IMAGE") {
                            this.dataField = "imageUrl";
                        }
                        else if (dataType == "TEXT") {
                            this.dataField = "imageText";
                        }
                        else if (dataType = "ENTITY") {
                            this.dataField = "entity";
                        }
                        docID = "patient" + id;
                        console.log("docID:", docID);
                        patientRef = this.db.collection('patients').doc(docID);
                        return [4 /*yield*/, patientRef.get()
                                .toPromise()
                                .then(function (doc) {
                                if (!doc.exists) {
                                    console.log('No such document!');
                                }
                                else {
                                    console.log("data field: ", _this.dataField);
                                    _this.data = doc.get(_this.dataField);
                                    console.log('Document text:', _this.data);
                                }
                            })];
                    case 1:
                        getDoc = _a.sent();
                        console.log("Text after: ", this.data);
                        return [2 /*return*/, this.data];
                }
            });
        });
    };
    FirebaseService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_8__["Storage"] },
        { type: angularfire2_storage__WEBPACK_IMPORTED_MODULE_6__["AngularFireStorage"] },
        { type: angularfire2_firestore__WEBPACK_IMPORTED_MODULE_7__["AngularFirestore"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"] }
    ]; };
    FirebaseService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _ionic_storage__WEBPACK_IMPORTED_MODULE_8__["Storage"],
            angularfire2_storage__WEBPACK_IMPORTED_MODULE_6__["AngularFireStorage"],
            angularfire2_firestore__WEBPACK_IMPORTED_MODULE_7__["AngularFirestore"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"]])
    ], FirebaseService);
    return FirebaseService;
}());



/***/ })

}]);
//# sourceMappingURL=default~pages-displayimage-displayimage-module~pages-displaytext-displaytext-module~pages-entityanal~6c8b4e18-es5.js.map