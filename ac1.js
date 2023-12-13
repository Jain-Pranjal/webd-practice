// there are 7 types od primitive datatype in JS 
/*boolean 
string 
number 
bigint 
null 
symbol
undefined */

// object is not a primitive it is made by using them as it contain the key value pair in it 

// we will use the let varibale for dcalring the variable in th ejs as let is the block scoped and var is the global scoped thats why we prefer to use the block scope only


// JS is a dynamically typed language means we need not to tell the variable what type of value we are storing inside it 
// it typically means it will automatically analyse the datatype of the value a variable is storing inside it 
// we need not to mention explictily about the datatype a variabel is storign

// let and var diff 
/*let keyword and cosnt is a local scoped keyword 
var is a global scope keyword 
var keyword can be used for redeclaration and can be used for reupdation 
let can be used for reupdation but cannot redecalration and it is a local scoped 
const can neither be redeclaration nor reupdataion  */
let a;
console.log(a)
// it will give the undefined as there is no defination of the variable

let name="jain"
function naam(){
    // let name=prompt("what your name ")
    console.log(name)
}
console.log(name)
naam()
console.log(name)

// so we can see that let is a local scope and its scope is basically there in the block of the code only and not outside of it 

// we can chnage the keys of the const object 
const obj={
    name:"prnajal",
    age:54,
    school:"bmps",
    isfollow:true
}
console.log(obj)
// this is how we can update the object key in it 
obj["name"]="rahul sharma "
console.log(obj["name"])

obj["age"]=obj["age"]+5
console.log(obj['age'])


















































