console.log("test-1")
console.log("test-2")
try{
console.log(a)
}catch(err){
    console.log("err is:",err)
}finally{
    //clean up code
    console.log("clean up code")
    console.log("test-3")
    
}


console.log("test-e")

function sample(){
    return "hello"
}

console.log(sample())

