"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.Staff = exports.User = void 0;
var User = /** @class */ (function () {
    function User() {
    }
    User.prototype.sayName = function () {
        console.log(this);
    };
    return User;
}());
exports.User = User;
var u = new User();
var Staff = /** @class */ (function (_super) {
    __extends(Staff, _super);
    function Staff(name, age, post, salary, gender) {
        if (gender === void 0) { gender = '男'; }
        var _this = _super.call(this) || this;
        _this.post = post;
        _this.salary = salary;
        _this.name = name;
        _this.age = age;
        _this.gender = gender;
        return _this;
    }
    return Staff;
}(User));
exports.Staff = Staff;
var a = new Staff('王力', 12, '12', 12);
a.sayName();
