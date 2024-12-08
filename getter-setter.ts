class Circle1{
    private radius:number;
    constructor(radius:number) {
        this.radius = radius
    }

    get area(){
        console.log("Getter Called");
        return Math.PI * this.radius * this.radius;
    }


}
let circle = new Circle1(3)
console.log('Circle',circle);