"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CaractersCollection = /** @class */ (function () {
    function CaractersCollection(data) {
        this.data = data;
    }
    Object.defineProperty(CaractersCollection.prototype, "length", {
        get: function () {
            return this.data.length;
        },
        enumerable: true,
        configurable: true
    });
    return CaractersCollection;
}());
exports.CaractersCollection = CaractersCollection;
