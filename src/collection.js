"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Colletion = void 0;
var Colletion = /** @class */ (function () {
    function Colletion(size) {
        this.size = size;
        this.items = [];
    }
    Colletion.prototype.add = function (item) {
        if (this.items.length === this.size) {
            this.items.shift();
        }
        this.items.push(item);
        return this;
    };
    Colletion.prototype.average = function () {
        return this.items.reduce(function (acc, current) { return acc + current; }, 0) / this.items.length;
    };
    Colletion.prototype.next = function (val) {
        return this.add(val).average();
    };
    return Colletion;
}());
exports.Colletion = Colletion;
