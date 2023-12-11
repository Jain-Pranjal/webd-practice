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
// and if we want to show the changes then we have to store them into the original string again 



// ARRAY
// so basiaclly we use the array in order to keep all the things inside a single variable name and and we can access them by suing the index number 
// array are mutable in nature 
// we can access the member inside the array using the index number and and in the array we stote the homogeneous items isndie it 

// objcts and strings are mutbale in natire means we can change them after their creation 

// so we have to remember that in JS array acn have the multiple datatyp ein it as js is a loosely typed language and c++ is statically typed langiauge 
// thats why in c++ it can have only single data type array while in js we can have multiple datatype array 

// array is basially used tok store the multiple items inside a single variable name 
let arr=[51,3,131,5,45,5]
console.log(arr)
console.log(typeof(arr))  //it is of the type object 

// arrays are mutable in nature so we can change them by refering to their index number 
arr[0]="pranjal jain"
console.log(arr)


// this shows that string are immutable in nature we cannot change the orginal string 
// if we don changes in the string it makes the changes by creating a diff string in it 

// let boy="jain sahab"
// console.log(boy.replace("jain","pyara"))
// console.log(boy)

// js arrays are the objects in nature 

// methods of the arrays 

// conversion of array to string 
console.log(arr.toString())

// joining of the operator in th earray 
console.log(arr.join(" * "))

// pop method adn push method 
// we can add and remove the element from the array using the pop and push operation 
arr.pop()  //deletion of the element
console.log(arr)

arr.push("hola")  //addition of the element
console.log(arr)


// push and pop works on the last elemetn of the array 
// for working with the first element we need to use the shift and unshift for the addign and poping out from first 


arr.unshift("hello")
console.log(arr)

// for popping out from first we use shift 
arr.shift()
console.log(arr)


// so basically unshift is push 
// shift is pop ka bhai 

delete arr[4]
console.log(arr)

// basially after using the delete memory is allocating but there is no elelment 

// using the delete operation eleement gets deleted but the memory assined remmains there

// so by usign the concat function we can use the array to merge together
a=["first ","second",54,88.3]
console.log(a)
console.log(arr.concat(a))

console.log(arr)
// so after concating the string dont change the original 

// slice is used for slicing the array from the given index 


// for looping inside th earray we can use the for each loop
console.log(arr)
arr.forEach(element => {
    console.log(element)
});

console.log(arr.slice(1,3))

// for (let i = 0; i < arr.length; i++) {
//     const element = arr[i];
//     console.log(element)
// }


// but we can use the forech loop it is used by using the arrow function 
// arr.forEach(e=>
//     {
//         console.log(arr[e])
//     })


// forof loop id basically used fir iterating only the iterable object isnide the iterating things 
// for (const i of arr) {
//     console.log(i)
// }

// forof loop me we are directly writing the iterator as in the short form it is only the arr[i] same as the i of arr


// map filter and reduce 

let simple=[1,2,3,4,5,6]
// let sqarr=[]
// for (let i = 0; i < simple.length; i++) {
//     const element = (simple[i]**2)
//     sqarr.push(element)
    
// }
// console.log("Square array is : -",sqarr)


// this same thing can be sone by using the map and arrow funciton 
// MAP function 
let newarr=simple.map(e=>{
    return e**2
})

console.log(newarr)


// DOM AND BOM
document.title="pranjal jain"
// in th dom it will add the inline css for the chanegs in document 

// by using the dom we can direclty sleelct the elemetn and apply the chamges to it 
// for th finding if the element we can use the child nods, firstchidlnode. lastchildnode



// so basiaclly first element child will give the first element of the container in the js 
// if we use th childNodes then we get also the all the child of the node but it also aslo include the textnode which is not considered as the element of the parent 
// that why we will use the firstelement child


// the child nodes contains the text node as well as the comments node so if we are using the document.body.childNodes then we will be able to see all the nodes including the comment as well as the text node 

// for the element we use the document.body.firstElementChild


// use the children to get the children of the parent without having the nodes . We will get the children or elelment only of the parent 

// for finding the sibling we use the previouselementsibling 
// nextelelementsibling 
// it will taget only the ELEMENT sibling  taht have the same parent in it 


// nextsibling contains all the nodes in it 
// but nextelementsibling will give only the next element 















































