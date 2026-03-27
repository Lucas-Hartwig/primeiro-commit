"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LogInterceptor = void 0;
var operators_1 = require("rxjs/operators");
var LogInterceptor = /** @class */ (function () {
    function LogInterceptor() {
    }
    LogInterceptor.prototype.intercept = function (context, next) {
        var dt = Date.now();
        return next.handle().pipe((0, operators_1.tap)(function () {
            var request = context.switchToHttp().getRequest();
            console.log("URL:".concat(request.url));
            console.log("execu\u00E7\u00E3o levou:' ".concat(Date.now() - dt, " milisegundos"));
        }));
    };
    return LogInterceptor;
}());
exports.LogInterceptor = LogInterceptor;
