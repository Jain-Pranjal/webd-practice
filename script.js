// basically we can perform the js excution at the server side by using the node js 

// alert("welocme to page")
// this is an alert mesaage 
console.log("pranjal jain")
// alert("this is my webpage")
// var a=confirm("are u :")
// if(a){
//     console.log("u are ganda")
// }
// else{
//     console.log("hat bc")
// }

// variable in JS
/*
var a =5;
a=a+5;
var b=22;
var c="pranjal"
console.log(a);
console.log(typeof(a));
console.log(typeof(c));

{
    let a=3;
    console.log(a)
}

*/
// we will use the "let" for decalring thr variable as it can be updated 

// moreover the type of the null is object and object in js is liek the key value pair in the { }brackets 
// 2 types of date type ie primitive that is already predefined in js and other is object that is user dfined that is written in th eform if key value pair {} 


// let x="pranjal jain";
// let y=22;
// let z=3.55;
// const p=true;
// let q=undefined;
// let r=null;
// let o={
//     "name":"pranjal jain",
//     "job":"programmer",
//     "salary":10000000
// }
// so basically it is an object that means we are using the user defined datatype and in the object we use the key value pair of the terms 

// console.log(x,y,z,p,q,r,o)
// console.log(typeof(x),typeof(y),typeof(z),typeof(p),typeof(q),typeof(r),typeof(o))

// we can directly change the value of the object 
// o.salary=55
// console.log(o)

// adding new key and the value of it 
// o.city="Delhi"
// console.log(o)


// conditional statement 

// let age=36;
// if(age>18 && age<25){
//     console.log("u can vote ");
// }
// else if(age>25 && age<40){
//     console.log("chala bhai gadi mast chala")
// }
// else{
//     console.log("cannot vote")
// }


// for matching the value and the type we use the ===

// ternary operator 
// let a=5;
// let b=33;
// console.log(a>b?(a-b):(b-a))
// kaam vali statemtmtn ? if : else


// in js we dont need to define the datatype for the foloowng it will automatically scan the data type 
// Loops
// let a=1;
// for(let i=0;i<5;i++){
//     console.log(a+i)
// }

// basic for loop example 
for(let j=0;j<10;j++){
    console.log(j)
}



// we use the for in and for of loop for thr object 
let o={
    "name":"Pranjal jain",
    "class":12,
    "age":20,
    "year":true
}

// using the forin loop for printing the key of the object 
// for (const i in o) {{
//         // const element = o[key];
//         console.log(i)
//         console.log(o[i])  //for printing the elemnt of the key 
//     }
// }

// i am using the forin loop so it will print only the key of the object in the js 
for (key in o){
    console.log(key)
    // for printing the element also 
    console.log(o[key])
}

// o ke key par kya value hai o[key]
// basicalyy it is an idex so it will be  like o[1],o[2]

// forof loop is used for iterate loop 
for (const index of "pranjal") {
    console.log(index)
}


// while loop 
let c=0;
while(c<5){
    console.log(c)
    c++;
}


// so we uses the forin loop for printing the keys of the obejct 
// forof loop is used for the 
for (const i of "pranjal") {
    
}

// do while loop will execute one time alwasys 


// Functions 
// declaration 
function myfun(name){
    console.log("your name is ",name)
    console.log("hello sir i m "+name+" nice to meet u")
    console.log("hello sir i m ",name," nice to meet u")
}

// try to concatenate the string with the variable only  

myfun("jain")

function sum(a,b){
    // console.log("the sum is : ",a+b);
    return a+b;
}

result=sum(2,4)
console.log("the ans is ",result)

// so we can aslo rturn the value to the variable to the fucntion it had callled to 


// but if we want the value to return to any variable then we can use the return keyw ord
// so remembe that if we want that the function will return the value the the calling  one then we should use the return keyword in the function defination 

// ARROW fucntion 
// basically we can put the function inside the variable name by using the arrow funciton 
// we store the function inside the variable so that we can use that variable inside the function 

//using the arrow function 
const func1=(x)=>{
    console.log("hi i m ",x)
}
// so we have store the function inside the variable name func1

func1(2)
func1(23)
func1(24)
func1(25)


// to store the function inside the variable we use the arrow function 

let multiply=(a,b,c)=>{
    return (a*b*c)
}

console.log("the product ans is :",multiply(5,6,3))
// just we have store the function inside the variable name 


// STRINGS in JS
// so we alwasys try to use the let as it is a block scoped and avoid the use of var as it is a global scope 

// for acessing the all the chatacters in a string we can use the loops and particularly we can use the forof loop 

// in this way we can 
let love="pranjal jain"
// console.log(love[5])
for (const i of love) {
    console.log(i[0])
}

// for of loop is used for iterating evertyhing in the iterable object 
// use the for of loop for iterating in the iterable object 

// we can use the fotmat srting in javascript also 
let real_name="pranjal jain";
let city="Delhi"
console.log(`hello my name is ${real_name} and i am from ${city}`)
console.log(`hello sir ${real_name} and welcome to u in ${city}`)

// function 
console.log(city.length)
console.log(city.toLowerCase())

// for slciing the string 
console.log(city.slice(3,5))   //direclty use the function slice for slicing the string 

// direlctly use the slice fucntion 


// replacing 
console.log(city.replace("Delhi","agra"))
console.log(city)
city=city.replace("Delhi","agra")  // for the permanent replace we need to store them back in the variable 
console.log(city)


// string are immutable in nature means all after the changes strign orginally not changes 
// and if we want to show the changes 


