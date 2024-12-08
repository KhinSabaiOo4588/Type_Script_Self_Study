var Human = /** @class */ (function () {
    function Human(age) {
        this._age = age;
    }
    Object.defineProperty(Human.prototype, "age", {
        get: function () {
            return this._age;
        },
        set: function (newValue) {
            if (newValue > 0 && newValue < 100) {
                this._age = newValue;
            }
        },
        enumerable: false,
        configurable: true
    });
    return Human;
}());
var h = new Human(20);
console.log("Age", h.age);
