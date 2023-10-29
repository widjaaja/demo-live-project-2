"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var rxjs_1 = require("rxjs");
var operators_1 = require("rxjs/operators");
var HttpinterceptorService = /** @class */ (function () {
    function HttpinterceptorService() {
    }
    HttpinterceptorService.prototype.handleError = function (error) {
        return rxjs_1.throwError(error);
    };
    HttpinterceptorService.prototype.intercept = function (req, next) {
        return next.handle(req)
            .pipe(operators_1.retry(2), operators_1.catchError(this.handleError));
    };
    ;
    HttpinterceptorService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], HttpinterceptorService);
    return HttpinterceptorService;
}());
exports.HttpinterceptorService = HttpinterceptorService;
//# sourceMappingURL=httpinterceptor.service.js.map