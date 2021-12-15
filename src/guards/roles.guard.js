"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AuthGuard = void 0;
var crypto_js_1 = require("crypto-js");
var common_1 = require("@nestjs/common");
var AuthGuard = /** @class */ (function () {
    function AuthGuard(reflector) {
        this.reflector = reflector;
        this.logger = new common_1.Logger(AuthGuard_1.name);
    }
    AuthGuard_1 = AuthGuard;
    AuthGuard.prototype.canActivate = function (context) {
        var roles = this.reflector.get('roles', context.getHandler());
        var authHeader = context.switchToHttp().getRequest().headers['apiKey'];
        if (authHeader === undefined) {
            authHeader = context.switchToHttp().getRequest().headers['apikey'];
        }
        if (authHeader === undefined) {
            authHeader = context.switchToHttp().getRequest().headers['api-key'];
        }
        if (!roles) {
            return true;
        }
        else {
            return this.matchRoles(roles, context.getHandler().name, authHeader);
        }
    };
    AuthGuard.prototype.matchRoles = function (roles, handler, authHeader) {
        var decrypted = "";
        this.logger.log("authHeader: ".concat(authHeader));
        this.logger.log("roles: ".concat(roles));
        if (authHeader !== undefined) {
            decrypted = crypto_js_1.AES.decrypt(authHeader, process.env.KEY).toString(crypto_js_1.enc.Utf8);
            decrypted = authHeader;
        }
        if (roles.indexOf('all') >= 0) {
            return true;
        }
        if (roles.indexOf('admin') >= 0) {
            return decrypted === process.env.ENCRYPTED;
        }
        if (roles.indexOf('api') >= 0) {
            return decrypted === process.env.ENCRYPTED;
        }
        // this is where we do handler specific stuffs.
        switch (handler) {
            case 'someHandlerWithASpecialRole':
                if (decrypted === process.env.ENCRYPTED) {
                    return true;
                }
        }
        return false;
    };
    var AuthGuard_1;
    AuthGuard = AuthGuard_1 = __decorate([
        (0, common_1.Injectable)()
    ], AuthGuard);
    return AuthGuard;
}());
exports.AuthGuard = AuthGuard;
