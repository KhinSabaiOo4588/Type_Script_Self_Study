//Circle/Rectangle
//Shape-> Circle, Rectangle

// | or type union type

type Circle = {
    radius:number
}

type Recatangle = {
    width:number,
    height:number
}

type Shape = Circle | Recatangle

let shape:Shape ={
    radius:100
}

shape = {
    width:100,
    height:200
}

