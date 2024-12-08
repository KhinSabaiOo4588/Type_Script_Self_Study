type Address ={
    city:string,
    street:string
}

interface Human{
    name:string;
    age:string;
    address?:Address
}

let h1:Human = {
    name:"KSO",
    age:'24',
    address:{
        city:'Yangon',
        street:'YwaMaKaung'
    }
}
console.log(h1)

interface Animal {
    name:string;
}

interface Bear extends Animal{
    honey:boolean
}

let bear: Bear= {
    name:'Panda',
    honey:true
}