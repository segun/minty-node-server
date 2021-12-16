"use strict";
exports.__esModule = true;
exports.Response = exports.ResponseUtils = void 0;
var ResponseUtils = /** @class */ (function () {
    function ResponseUtils() {
    }
    ResponseUtils.getSuccessResponse = function (data, message) {
        var r = {
            status: "success",
            message: message,
            data: data
        };
        return r;
    };
    ResponseUtils.getErrorResponse = function (data, message) {
        var r = {
            status: "error",
            message: message,
            data: data
        };
        return r;
    };
    return ResponseUtils;
}());
exports.ResponseUtils = ResponseUtils;
var Response = /** @class */ (function () {
    function Response() {
    }
    return Response;
}());
exports.Response = Response;
