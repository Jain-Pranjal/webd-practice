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

// prohram to add natural nummber
// let num=Number.parseInt(prompt("Enter number  : "))
// let sum=0
// for (let i =0;i<=num;i++){
//     sum+=i
//     // sum=sum+i
// }
// console.log(sum)

// for arrays i would liketo use the for each loop as in c++ we use the for each loop for the same 

let arr=[2425,5,486,"pranjal"]
// arr.forEach(element => {
//     console.log(element)
// });

// for (const iterator of arr) {
//         console.log(iterator)
    
// }

// so we can use the for of or for each loop for iterating inside the array 

// for of loop is used for the iteratble object but object is not iterable as it has 2 things in it keys and values 
// for (const iterator of obj) {
//     console.log(iterator)
// }
// obj is not iterable
// so for iterating the object and the its key and values we need to use the forin loop

// in this way we can iterate the object keys and value using the forin loop 
for (const keys in obj) {
        const value = obj[keys];
        console.log(keys," ",value)
}

// forof loop is basically used for array or iterable object such as string 
// ehike loop
// let j=0;
// while(j<5){
//     console.log(j)
//     j++
// }

// funtion 
function average(x,y){
    return (x+y)/2
}
let avg=average(4,5)
console.log(avg)


// also we can create a arrow function 
// arrow function means we are making a function just like the variable name 
// the arrow function is used when we want to write the function in the form of the variable name and for that we use the arrow function 
// it simply takes the parameter in it and we will use the  let or const just like the function name to be declared 

// const functionion=(parameter)=>{
    // this is the arrow function
// }

const multiply=(a,b)=>{
    return (a*b)
}
let mul=multiply(10,2)
console.log(mul)

// const func1=(paramert)=>{
//     finction body 
// }

// cosnt arrow=(param)=>{
//     function code 
// }


const marks={
    "pj":52,
    "dfgdg":552,
    "f":5211
}
// by for loop 
for(let i =0;i<Object.keys(marks).length;i++){
    // console.log(Object.keys(marks)[i])
    console.log(marks[Object.keys(marks)[i]])
}

// for (const key in marks) {
//     console.log(marks[key])
// }

console.log(Object.keys(marks))  //it will give in the array form 

// while(true){
//     number=Number.parseInt(prompt("enter : "))
//     console.log("try again")
//     if(number===5){
//         break
//     }
// }
// always try to make the arrow function for the functioning
const mean=(x,y,z,q,r)=>{
    result =((x+y+z+q+r)/5)
    // using the template literal the same way we use the fstring in python 
    console.log(`the value of x is ${x} and mean is ${result}`)
}
mean(1,2,3,4,5)
// strings are immutable in nature 
// we cannit change the value of the string using index value 

// moerover the methods used in the string make a new string , not update the original string 
let myname="pranjal"
myname[0]="l" //cannot change the string once it is declareed
console.log(myname)
console.log(myname.slice(1,5));
// console.log(myname.split("n"));
console.log(myname.replace("l","z"));
console.log(myname); //original string does not change anytime it wilk be intact as it is 

// trim basically eliminates the white spaces and the trailing space it has 
console.log(myname.trim());
console.log(`hi "${myname}"`);

let amt="i have rupees 1000"
console.log("i have rupees ".length)
console.log(amt.slice(14));






















