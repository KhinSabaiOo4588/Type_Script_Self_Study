function hello1() {
    console.log("Hello");
}
hello1.description = "This functioin print hello";
function greet() {
    console.log("Greet");
}
var funs = hello1;
hello1();
console.log(funs.description);
