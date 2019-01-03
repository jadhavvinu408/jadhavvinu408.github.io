(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/adddataform/adddataform.component.html":
/*!********************************************************!*\
  !*** ./src/app/adddataform/adddataform.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--<form >\n  <div class=\"form-group\" >\n    <label for=\"title\">Title</label>\n    <input class=\"form-control\" id=\"title\" name=\"title\" #title=\"ngModel\" [(ngModel)]=\"title\">\n  </div>\n  <div class=\"form-group\">\n    <label for=\"description\">Description</label>\n    <input class=\"form-control\" id=\"description\" name=\"description\" [(ngModel)]=\"description\">\n  </div>\n  <button type=\"submit\" class=\"btn btn-default\">Submit</button>\n</form>-->\n"

/***/ }),

/***/ "./src/app/adddataform/adddataform.component.less":
/*!********************************************************!*\
  !*** ./src/app/adddataform/adddataform.component.less ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkZGRhdGFmb3JtL2FkZGRhdGFmb3JtLmNvbXBvbmVudC5sZXNzIn0= */"

/***/ }),

/***/ "./src/app/adddataform/adddataform.component.ts":
/*!******************************************************!*\
  !*** ./src/app/adddataform/adddataform.component.ts ***!
  \******************************************************/
/*! exports provided: AdddataformComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdddataformComponent", function() { return AdddataformComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AdddataformComponent = /** @class */ (function () {
    function AdddataformComponent() {
    }
    AdddataformComponent.prototype.ngOnInit = function () {
    };
    AdddataformComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'add-formdata',
            template: __webpack_require__(/*! ./adddataform.component.html */ "./src/app/adddataform/adddataform.component.html"),
            styles: [__webpack_require__(/*! ./adddataform.component.less */ "./src/app/adddataform/adddataform.component.less")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AdddataformComponent);
    return AdddataformComponent;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var routes = [];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar  navbar-inverse\">\n      <div class=\"container-fluid\">\n        <div class=\"navbar-header\">\n          <a class=\"navbar-brand\" href=\"#\">MY CRUD APP</a>\n        </div>\n      </div><!-- /.container -->\n</nav>\n<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-lg-4\">\n      <!--<add-formdata></add-formdata>-->\n      <div *ngIf=\"newRow\">\n      <div class=\"form-group\">\n        <label for=\"title\">Title</label>\n        <input class=\"form-control\" id=\"title\" name=\"title\" [(ngModel)]=\"title\">\n      </div>\n      <div class=\"form-group\">\n        <label for=\"description\">Description</label>\n        <input class=\"form-control\" id=\"description\" name=\"description\" [(ngModel)]=\"description\">\n      </div>\n      <button type=\"submit\" *ngIf=\"submitBtn\" class=\"btn btn-default btn-primary\" (click)=\"onSubmitRecord(data)\">Submit</button>\n      <button type=\"submit\" *ngIf=\"saveBtn\" class=\"btn btn-default\" (click)=\"saveRecord(data,index)\">Save</button>\n      </div>\n    </div>\n    <div class=\"col-lg-8\">\n      <div class=\"row\">\n        <div class=\"col-lg-12\"><h2>Image</h2></div>\n      </div>\n      <table class=\"table table-bordered table-striped\">\n        <thead>\n          <tr>\n            <th>Title</th>\n            <th>Description</th>\n            <th>Action</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr *ngFor=\"let postCont of postContent.documents; let indx = index\">\n            <td class=\"col-lg-4\">{{postCont.fields.title.stringValue}}</td>\n            <td class=\"col-lg-5\">{{postCont.fields.description.stringValue}}</td>\n            <td class=\"col-lg-3\">\n            <button class=\"btn btn-warning btn-sm float-right\"> <span class=\"glyphicon glyphicon-trash\" aria-hidden=\"true\"></span>\n              <span (click) = removePost(postCont)> Delete</span>\n            </button>\n            <button class=\"btn btn-primary btn-sm\"> <span class=\"glyphicon glyphicon-pencil\" aria-hidden=\"true\"></span>\n              <span (click) = updatePost(postCont,indx)> Update</span>\n            </button>\n            \n            </td>\n          </tr>\n        </tbody>\n      </table>\n      <button class=\"btn btn-primary\" (click)=\"addRowFunction()\">Add a new row</button>\n    </div>\n\n  </div>\n</div>\n<footer class=\"footer\">\n      <div class=\"container\">\n        <p class=\"text-muted text-center\">Created by vinayak Jadhav</p>\n      </div>\n</footer>"

/***/ }),

/***/ "./src/app/app.component.less":
/*!************************************!*\
  !*** ./src/app/app.component.less ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQubGVzcyJ9 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _post_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./post.service */ "./src/app/post.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");



var AppComponent = /** @class */ (function () {
    function AppComponent(posts) {
        this.posts = posts;
        this.updateData = {};
        this.postContent = {};
        this.submitBtn = true;
        this.saveBtn = false;
        this.newRow = false;
    }
    AppComponent.prototype.ngOnInit = function () {
        this.getTableData();
    };
    AppComponent.prototype.getTableData = function () {
        var _this = this;
        this.posts.getPost().subscribe(function (Response) {
            _this.postContent = Response;
            console.log(_this.postContent);
        });
    };
    AppComponent.prototype.removePost = function (postCont, indx) {
        var _this = this;
        this.posts.removePosts(postCont).subscribe(function (Response) {
            _this.getTableData();
            console.log(Response);
        });
    };
    AppComponent.prototype.onSubmitRecord = function (data) {
        var _this = this;
        this.posts.onSubmit(this.title, this.description).subscribe(function (res) {
            _this.getTableData();
            _this.title = '';
            _this.description = '';
        });
    };
    AppComponent.prototype.updatePost = function (postCont, index) {
        this.updateIndex = index;
        this.updateData = postCont;
        this.saveBtn = true;
        this.submitBtn = false;
        this.title = postCont.fields.title.stringValue;
        this.description = postCont.fields.description.stringValue;
    };
    AppComponent.prototype.saveRecord = function () {
        var _this = this;
        this.posts.onSave(this.updateData).subscribe(function (res) {
            _this.getTableData();
            _this.title = '';
            _this.description = '';
            _this.saveBtn = false;
            _this.submitBtn = true;
        });
    };
    AppComponent.prototype.addRowFunction = function () {
        this.newRow = true;
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.less */ "./src/app/app.component.less")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_post_service__WEBPACK_IMPORTED_MODULE_1__["PostService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _post_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./post.service */ "./src/app/post.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _adddataform_adddataform_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./adddataform/adddataform.component */ "./src/app/adddataform/adddataform.component.ts");









var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _adddataform_adddataform_component__WEBPACK_IMPORTED_MODULE_8__["AdddataformComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"]
            ],
            providers: [_post_service__WEBPACK_IMPORTED_MODULE_6__["PostService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/post.service.ts":
/*!*********************************!*\
  !*** ./src/app/post.service.ts ***!
  \*********************************/
/*! exports provided: PostService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostService", function() { return PostService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var PostService = /** @class */ (function () {
    function PostService(http) {
        this.http = http;
        //private _url:string = "https://firestore.googleapis.com/v1beta1/projects/angular-taske7f39/databases/(default)/documents/tasks";
        this._url = "https://firestore.googleapis.com/v1beta1/projects/angular-task-e7f39/databases/(default)/documents/tasks";
        this._urlBase = "https://firestore.googleapis.com/v1beta1";
    }
    PostService.prototype.getPost = function () {
        return this.http.get(this._url);
    };
    PostService.prototype.removePosts = function (postCont) {
        var delurl = this._urlBase + '/' + postCont.name;
        return this.http.delete(delurl);
    };
    PostService.prototype.onSubmit = function (title, description) {
        var obj = {
            "fields": {
                "title": {
                    "stringValue": title
                },
                "description": {
                    "stringValue": description
                }
            }
        };
        return this.http.post(this._url, obj);
    };
    // this.http.post(
    //    "http://localhost:3000/contacts",
    //    JSON.stringify({id: 4, name: 'some'}),
    //    httpOptions 
    // ).subscribe();
    PostService.prototype.onSave = function (updateData) {
        var obj = {
            "fields": {
                "title": {
                    "stringValue": updateData.fields.title
                },
                "description": {
                    "stringValue": updateData.fields.description
                }
            }
        };
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Authorization': 'my-auth-token'
            })
        };
        var updateUrl = this._urlBase + '/' + updateData.name;
        return this.http.put(updateUrl, obj, httpOptions);
    };
    PostService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], PostService);
    return PostService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! I:\AngularLatest\my-task\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map