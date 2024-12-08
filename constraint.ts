type TwoD = {
    x:number,
    y:number
}

type Box<T extends TwoD> = {
    value:T
}

type ThreeeD = TwoD & {
    z:number
}

let box:Box<TwoD> = {
    value:{
        x:10,
        y:20
    }
}

let box2:Box<ThreeeD> = {
    value:{
        x:10,
        y:20,
        z:30
    }
}