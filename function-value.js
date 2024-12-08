function add(a, b) {
    return a + b;
}
function sub(a, b) {
    return a - b;
}
var numericFun = add;
console.log('Add', numericFun(3, 5));
numericFun = sub;
console.log('Sub', numericFun(3, 5));
