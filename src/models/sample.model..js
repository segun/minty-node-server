"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.Sample = void 0;
var typeorm_1 = require("typeorm");
var Sample = /** @class */ (function () {
    function Sample() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)()
    ], Sample.prototype, "id");
    __decorate([
        (0, typeorm_1.Column)()
    ], Sample.prototype, "email");
    __decorate([
        (0, typeorm_1.Column)()
    ], Sample.prototype, "name");
    __decorate([
        (0, typeorm_1.Column)()
    ], Sample.prototype, "age");
    __decorate([
        (0, typeorm_1.Index)('location-idx'),
        (0, typeorm_1.Column)()
    ], Sample.prototype, "location");
    Sample = __decorate([
        (0, typeorm_1.Entity)("sample"),
        (0, typeorm_1.Unique)("email_uniq", ["email"])
    ], Sample);
    return Sample;
}());
exports.Sample = Sample;
