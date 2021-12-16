"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ExceptionsFilter = void 0;
var common_1 = require("@nestjs/common");
var ExceptionsFilter = /** @class */ (function () {
    function ExceptionsFilter() {
        this.logger = new common_1.Logger(ExceptionsFilter_1.name);
    }
    ExceptionsFilter_1 = ExceptionsFilter;
    ExceptionsFilter.prototype["catch"] = function (exception, host) {
        var ctx = host.switchToHttp();
        var response = ctx.getResponse();
        var request = ctx.getRequest();
        var status = common_1.HttpStatus.INTERNAL_SERVER_ERROR;
        this.logger.error("Error: ");
        this.logger.error(exception);
        var message = exception;
        if (exception.message) {
            message = exception.message;
        }
        if (exception.response) {
            message = exception.response.message;
        }
        if (message.indexOf !== undefined) {
            if (message.indexOf("not found") >= 0) {
                status = common_1.HttpStatus.NOT_FOUND;
            }
        }
        response.status(status).json({
            status: "error",
            data: {
                statusCode: status,
                timestamp: new Date().toISOString(),
                path: request.url,
                error: message
            }
        });
    };
    var ExceptionsFilter_1;
    ExceptionsFilter = ExceptionsFilter_1 = __decorate([
        (0, common_1.Catch)()
    ], ExceptionsFilter);
    return ExceptionsFilter;
}());
exports.ExceptionsFilter = ExceptionsFilter;
