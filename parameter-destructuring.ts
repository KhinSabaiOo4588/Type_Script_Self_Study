type Postition = {
    x:number,
    y:number
}

function showPos({x,y}:Postition){
    console.log('X',x);
    console.log('Y',y);
}

showPos({x:10,y:20})