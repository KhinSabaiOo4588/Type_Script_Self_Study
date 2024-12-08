function add(a:number,b:number):number{
    return a+b;
}

function sub(a:number,b:number):number{
    return a-b;
}

type NumericFun = (a:number,b:number) => number;
let numericFun :NumericFun = add;
console.log('Add',numericFun(3,5))

numericFun = sub;
console.log('Sub',numericFun(3,5))