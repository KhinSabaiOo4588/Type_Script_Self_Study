function sum(n) {
    var m = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        m[_i - 1] = arguments[_i];
    }
    var total = 0;
    for (var i = 0; i < m.length; i++) {
        total += m[i];
    }
    return total;
}
var a = sum(1, 2, 4, 2);
console.log(a);
