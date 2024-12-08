var Car = /** @class */ (function () {
    function Car() {
        console.log("Car Constructor");
    }
    return Car;
}());
var Aeroplane = /** @class */ (function () {
    function Aeroplane() {
        console.log("Aeroplne Constructor");
    }
    return Aeroplane;
}());
var con = Car;
var object = new con();
console.log(object);
con = Aeroplane;
object = new con();
console.log(object);
