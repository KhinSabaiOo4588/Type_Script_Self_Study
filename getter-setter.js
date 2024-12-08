var Circle1 = /** @class */ (function () {
    function Circle1(radius) {
        this.radius = radius;
    }
    Object.defineProperty(Circle1.prototype, "area", {
        get: function () {
            console.log("Getter Called");
            return Math.PI * this.radius * this.radius;
        },
        enumerable: false,
        configurable: true
    });
    return Circle1;
}());
var circle = new Circle1(3);
console.log('Circle', circle);
