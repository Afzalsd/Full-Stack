let test={
    name:"ravi",
    age:23
}

personalbar.name="kai parker"
console.log(test)

//copy 

let test1={
    a:10,
    b:20
}

//let testcopy=test1;
//console.log("testcopy",testcopy)

//using spread operator
let testcopy={...test1}

console.log("test",test1)
console.log("testcopy",testcopy)


test1.a=200;
console.log("test",test1)
console.log("testcopy1",testcopy)







