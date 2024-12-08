function greet(message:string){
    console.log('Greet',message);
}

greet("From Greet Method")

function add(a:number,b:number):number{
    return a+b;
}

let addResult = add(3,5)
console.log('Result',addResult);

//Anonymous Function
const names=["Aung","Mya","Chi"]
names.forEach((name)=>{
    console.log(name.toUpperCase)
})