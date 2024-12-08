function hello1(){
    console.log("Hello")
}

hello1.description = "This functioin print hello";

function greet(){
    console.log("Greet");
}

type Descriablefunction = {
    description:string;
    ():void;
}

let funs:Descriablefunction = hello1;
hello1();
console.log(funs.description);