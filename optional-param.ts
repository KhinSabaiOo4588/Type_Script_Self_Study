function display(message?:string){
    console.log('Display',message)
}

display();// output undefined
display('Hello');// Hello

interface Human1 {
    name: string;
    age1?: number; // Optional property
}

let human: Human1 = {
    name: 'KSO',
    //age1: 24
};

console.log('H', human); // Correct variable name
