function hello(){
 console.log("Hello")
}

let fun = hello;
fun();

function excute(fn){
    console.log('Execute');
    fn();
}

excute("Hello")