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
year();
saal=100  //reuodae is allowed 
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

// loops 
// there are various types of loops ; for while foreach forof forin 

// in the javascript th earray can have the multiple datatypes in it 
// as js a loose typed language so it can contains the multiple datatype inside the array
let arr=[1,2,3,4,5,6,"pranjal jain"]
// for (let i =0; i<arr.length;i++){
//     console.log(arr[i])
// }

// this is the normal way of looping the items 
// we can use the forof llop

// so we can use the forof loop for the iterable object 
for (const iterator of arr) {
    console.log(arr[iterator])
}


let object={
    "name":"pranjal",
    class:12,
    phone:999985515
}
for (const key in object) {
        const element = object[key];  //so it is printing the value of th ekey 
        console.log(element)
        
    }
console.log(object["name"])


// let home=prompt("enter the house numner ")
// if (home<100){
//     console.log("u r not elligible ")

// }else{
//     console.log("good luck")
// }


// we can add another object inside a object 
let o={
    "name":"pranjl",
    "age":5,
    "is_folllow":true,
    "mynew":{
        "fname":"sachin",
        "lname":"aggarwal"
    }
}
// console.log(o)
o["love"]=true;
// console.log(o)
o["name"]="shreya"
console.log(o)

// === checks the value as wellas the datatype of the varibale 
// == only check the value 
// so to check the value as well as the datatype use the === mostly used 

// loops 
// in the js we have various types of the loop 

// we can iterate this in the array aslo
// array in th JS can have the multiple datatype as JS is a loosely typed language  so the array in the js can have the multiple datatype in it 

console.log("\nusing for loop")
let myarr=["pranjal",665,true,52.55]
for(let i=0;i<myarr.length;i++){
    console.log(myarr[i])
}
console.log("\nusing the while loop")
let i=0
while(i<myarr.length){
    console.log(myarr[i])
    i++
}

// for of loop is used for iterating object like the array or strings means those which can be iteratble in nature 
console.log("\nusing the forof loop")
for (const iterator of myarr) {
    console.log(iterator)
}


console.log("\nusing the forin loop")
// forin loop is used for traversing the keys of th eobject 
// for in loop is used to print the keys and the values inside the object 
for (const i in obj) {
        const element = obj[i];
        console.log(i,element)   //object[key]=value
        
}
// for using the js strign template we ahve to use use the ` ${variable name }`
// it is same as the fstring that we use in pytho =n
// let myname="prabaj"
// console.log(`${myname}`)



// function in JS 
// they are used for code reusabaltiy in the prgram 
function letter(name,_class,rollno){
    console.log(`hello friend, my name is ${name} and i m studying in class ${_class} and my roll no is ${rollno}`)
}
// function calling 
// fullname=prompt("enter the name :")  //we can take the input using the propmt 
letter("sanjay","12",20311502721)
letter("hardik",12,20511502721)


// we can also store the value and use that later on or pass the same value to the another function 
function increase(num){
    return num +10;
}

function Square(num){
    console.log(num**2)
}

let number=increase(5)
console.log(number)
Square(number)


// so use the string template by using the `${variable name}`

// Arrow function 
// we use the arrow function in order to name the funcion as the variable name 
const func1=(parameter1)=>{
    console.log("hello i m a arrow function ",parameter1)
}

// to use the arrow function we can use the fucntion name inside the vairbale so the fucntion can be used as the variable name 
func1(100)

const sum=(a,b,c)=>{
    return a+b+c;
}

let result=sum(10,20,30)
console.log(result)


// use the arrow funciton :- itis basically used for making the funciton as the variable name 
// simple concept 
// for using the string literal template use the `` and the ${variable name }
const myfunction=(bloodgrp,phone,city,country)=>{
    console.log(`my city is ${city} in ${country} with the blood grp of ${bloodgrp}`)
}
// in this way we can use the arrow function with the string template 
myfunction("B+",88946515,"delhi","india")

//  so making const functionname=(parmaenter)=>{code}












