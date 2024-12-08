class Car{
    constructor() {
        console.log("Car Constructor")
    }
}

class Aeroplane{
    constructor(){
        console.log("Aeroplne Constructor")
    }
}

type SomeConstructor={
    new ():object
}

let con:SomeConstructor = Car;
let object= new con()
console.log(object);

con=Aeroplane
object=new con()
console.log(object)