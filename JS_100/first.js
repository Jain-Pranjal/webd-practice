// js is a forgiven lang
// standard is ECMA script to which js follows all the standars 
// so basically js is a dynamic typed language as we can change the datatype at the run time 
let a="prnajal"
a=65;
console.log(a)
// we can change the datatype at the runtime so it is a dynamic type labg 

let b;  //decale is allowed 
const c=63;  //but here we have to initialised the value also 
// the cosnt is always initilaise with the value 

// so js is a dynamic typed language as we can change its datatype at the runtime of the variable 
// b="pranjal jain" 
// console.log(b)
// b=5454.2
// b=true
// console.log(b)
// so basically we can change all the datatype of the variable at the runtime that why js is a dynamiclly typed language 

// var is a global variable can be be redecalre and reupdated 
// let is used as it only allows reupdate of the value 
// let can be used for assigning only one decalration at a time and then we just need to iupdate 
// const for defining the constant value of the variable 


// for the non primitive datatype we have the :- object array funcition 
// basically these are user defined things 
const obj={
    "name":"pranjal",
    "age":20,
    "isfollow":true,
    "city":"delhi"
}

console.log(obj["age"])  //for printing the keys 


// for iterating the object we use the forin loop 

for (const key in obj) {
    const ele=obj[key] //it will print the value of the keys 
    console.log(key , ele)
}

// objects is a collection of th eprimitive datatype only 
console.log(typeof(obj["age"]))  //but inside of th eobject it is made up of th eprimitive only 
// using the objects wee can do the mapping of the keys and values 


// // used for the iterable objects 
// for (const iterator of "pranjal") {
//     console.log(iterator)
// }

// for in loop basically used for iterating inside the objects

// so i can change the obj aslo after the decalaration of it 
obj["blood"]="B+;"
// console.log(obj)
// also we can change the value also or update it 
// iterate the object 
// for (const key in obj) {
//     console.log(key) //it will print all the keys of the obj
//     console.log(obj[key])  // it will print the value corresponding to that particlaur key 
// }

// console.log(obj)
// obj="hello" //as it is declared by the let so we can update the objec tbut if it is declared by const then it cannot be change 
// console.log(obj)
// we can change or add the value and the key inside the const 
obj["country"]="india";
console.log(obj)

// we habve to use the const max 
// postinc will do the operation in the memory but print the previous value 
// pre inc will do the opertaion and print the curreent value after the operation

// ternary operator 
let num1=50;let num2=10;
((num1>num2)?console.log("a is big"):console.log("b is big "))
// console.log(b)
// used for simple statement 
// so the prompt type is always a string same as the python imput type 


// the propmt alwasys take the input in the form of the string so we need to convert it into number then we have to use the typecasting 
// let phone=Number.parseInt(prompt("number plis : "))
// console.log(typeof phone)
// so the prompt always print the type of string 
// console.log(45+phone)  // but it will print the string so it will do the string concatenation

// so using the Parseint funciton of the number we can convert the datatype into the number 
// so typecast the variable into number using the parseint

// use the numebr function to typecast the value of the number into either parseint or by parsefloat

// let tel=Number.parseFloat(prompt("enter the number : "))
// console.log(tel)
// console.log(typeof tel)
// // so tyoecast it into the number type 
// console.log(tel+10)

// switch (tel) {
//     case 1:
//         console.log("f")
//         break;

//     default:
//         console.log("fg")
//         break;
// }

// let age=15;
// (age>18?console.log("dsdsd"))


// this basically is used for traversing the objec tkeys 
// for (const key in object) {
//         const element = object[key];  
//     }
// // this for of loop is used for iterating the iterable object 
// for (const iterator of object) {
   
// }




































