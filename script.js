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

























