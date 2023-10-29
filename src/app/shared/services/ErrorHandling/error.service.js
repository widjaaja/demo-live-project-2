"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var http_1 = require("@angular/common");
var ErrorService = /** @class */ (function () {
    function ErrorService(injector, toastService) {
        this.injector = injector;
        this.toastService = toastService;
    }
    ErrorService.prototype.handleError = function (error) {
        var router = this.injector.get(router_1.Router);
        if (Error instanceof http_1.HttpErrorResponse) {
            console.log(error.status);
        }
        else {
            this.toastService.show(error, { classname: 'bg-danger text-light', delay: 20000 });
            console.log(error);
        }
        //nagivate to error page
        //router.navigate(['error']);
    };
    ErrorService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], ErrorService);
    return ErrorService;
}());
exports.ErrorService = ErrorService;
//# sourceMappingURL=error.service.js.map