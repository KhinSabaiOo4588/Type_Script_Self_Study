interface Flyable{
    name:string
    fly:()=>void
}

class Bird implements Flyable{
    name:string
    constructor(name:string){
        this.name = name
    }

    fly(): void{
        console.log('Bird Flying'+this.name)
    }  
}

class Aeroplane implements Flyable{
    name:string
    constructor(name:string){
        this.name = name
    }

    fly(): void{
        console.log("Aeroplane Flying"+this.name)
    }
}

let Flyable:Flyable = new Bird("Cockatoo");
Flyable.fly();

Flyable = new Aeroplane("Boing");
Flyable.fly();
