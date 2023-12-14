// there are 7 types od primitive datatype in JS 
/*boolean 
string 
number 
bigint 
null 
symbol
undefined */

// in the js we use the let or const keyword to make a variable as let and cosnt are the local based keyword 
// try to avoid the var as it is a local keyword so we will be avoiding this term in the progeam 
// they are basically used to store the value inside the program 
// js is a dynamic labg so we need to mention th edata type while declaring the variable 

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
console.log(obj['age'],"\n")




let saal=20; //out of the function scope 
function year(){
    let saal=50;
    console.log(saal)
}
year()
console.log(saal)  


// so the == compare only the value but 
// === it compare the value as well as the type of the variable 

// == compare only the value 
// === comapre the value as well as the datatype of the variable 
let var1=45 //number 
let var2="45" //string
console.log(var1==var2)  ///== compare the value 
console.log(var1===var2)  ///== compare the value and the datatype  

// === mostly used 
if(var1===45){
    console.log("yupeee !!!")
}

// we use the ternary operator for comparing the simple if else statemtn 
// when we have to check only the 1 condition then we use the ternary operator there only 


// using the ternary operator 
// less used as it is only for comparuiing simple if else statement 
let fname="pj";
fname==="pj"?console.log("yes"):console.log("no")

// so for taking the input in the JS we can use the prompt 
// let num=prompt("enter the numnber :")
// if(num%5===0){
//     console.log("div by 5")
// }
// else{
//     console.log("not ")
// }

// let score=prompt("enter score : ")
// let grade;
// if (score>=90 && score <=100){
//     grade="A"
// }
// else if(score>=80 && score<=90){
//     grade="B"
// }
// console.log(grade)





































