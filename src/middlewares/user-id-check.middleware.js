"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserIdCheckMiddleware = void 0;
var common_1 = require("@nestjs/common");
var UserIdCheckMiddleware = /** @class */ (function () {
    function UserIdCheckMiddleware() {
    }
    UserIdCheckMiddleware.prototype.use = function (req, res, next) {
        console.log('UserIdChechMiddleware', 'antes');
        if (isNaN(Number(req.params.id)) || Number(req.params.id) <= 0) {
            throw new common_1.BadRequestException('ID invalido');
        }
        console.log('UserIdChechMiddleware', 'depois');
        next();
    };
    return UserIdCheckMiddleware;
}());
exports.UserIdCheckMiddleware = UserIdCheckMiddleware;
