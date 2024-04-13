//Primitives are immutable in js

let x=123;

x+10;

console.log("x =",x)

x=x+10;
console.log("x =",x)

let data=10;
let datacopy=data;

console.log("data =",data)
console.log("datacopy =",datacopy)

//check

data = 200;
console.log("data =",data)
console.log("datacopy =",datacopy)
