// function getFirst(array:any[]):any{
//     return arr[0];
// }

// console.log('First',getFirst([1,'Hello',true]))

function getFirst<T>(array:T[]):T{
    return array[0];
}

console.log('First',getFirst<number>([1,2,3,4,5]))
console.log('First',getFirst<string>(['a','b','c']))