interface TwoD{
    x:number;
    y:number;
}

interface ThreeD extends TwoD{
    z:number;
}

interface Color{
    color:String
}

interface Border{
    width:number
}

type BorderColor = Border & Color
let b:BorderColor = {
    color:"red",
    width:10
}