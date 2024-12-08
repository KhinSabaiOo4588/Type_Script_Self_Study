var Bird = /** @class */ (function () {
    function Bird(name) {
        this.name = name;
    }
    Bird.prototype.fly = function () {
        console.log('Bird Flying');
    };
    return Bird;
}());
var Aeroplane = /** @class */ (function () {
    function Aeroplane(name) {
        this.name = name;
    }
    Aeroplane.prototype.fly = function () {
        console.log("Aeroplane Flying");
    };
    return Aeroplane;
}());
var Flyable = new Bird("Cockatoo");
Flyable.fly();
Flyable = new Aeroplane("Boing");
Flyable.fly();
