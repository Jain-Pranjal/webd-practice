// js can be used in the frontend as well as in the backend by using th node to make the server 
// so in the frontend we can use it to provide the interactivity with the buttons and do other thongs like the dom manupilaiton and seleting and targeting the elements


// for using the js in th efrontend we first had to add the js insode the html doc and then we can use it for the output in the console 

// in js th earray will contain the multipole datatypes items in it 



const obj={"key":"value",
"name":"prnajal",
"age":55}
console.log(obj);

// so we can aslo change the value kf

// const arr=["fsd",42,541,54,85,48,true]
// console.log(arr);
// arr[2]="jainco"
// console.log(arr);

obj["name"]="laxmi"
console.log(obj);

obj.age=obj.age=90
console.log(obj);
// so object ke keys are mutable in nature we can chaneg them as if we want an error in the object we need to chaneg all th ekeys 
// so object and array are mutbale in natire as js is a looslely types lanng so it allowed the various multuple data types in the array also

// so we can change the value of the object by accessing them 
// we cannot chang the value of the constant 


// if i want to create a new key value pair we can aslo also do that 
obj.class=12
obj.helpme=false
console.log(obj);


 // so we can access the object keys using the for in loop 
// for (const key in obj) {
//         const element = obj[key];
//         console.log(element);
//     }

// so we can chaneg the array as they are mutable in nature so their value can be changed


// there are 7 types of the datatypes 
// undefined null number string symbol boolean  bigint 

// var a=null;
// console.log(a);
// console.log(typeof(a));
// var b;  //no value is defined in this so this is undefined initially 
// console.log(b);
// console.log(typeof(b));
// also rememeber that You can consider it a bug in JavaScript that typeof null is an object.

// a=5;
// let b; //it is undefoined as we dont have provide the defination for it 
// const c=55;// i have to initialises the value first in const it is  necessary 
// console.log(b);


// fat arrow funciton is used to store the function inside a variable only 
// as u can see myfun is treated as a variable only 
// so making of the arrow function 
// let myfun=()=>{

// }


// ternary operator 
// do the typecasting as prompt takes the input in the form of the string
// let num=BigInt(prompt("enter the number "))
// console.log(typeof(num));

// num>100?console.log("good"):console.log("bad");

// condition?if:else
// a?b:c  ternary operator 
// condition?true:flase



// so the prompt take s the input in the form of the string 
// so we need to convert them to nay formanumber format type casting 


//loops and strings
// for(let i=0;i<45;i++){
    //     console.log(i);
    
// }

// let j=5;
// while(j<10){
    //     console.log(j);
    //     j++
    
    // }
    
    
    
    // for in for each for of 
    console.log(obj);
    // for iterating the object 
    // for (const q in obj) {
        //         console.log(q);
        //         console.log(obj[q]);
        
        //     }
        
        // array is mutilpe datatype formed so we can make the array using the multple datatype in js 
        let myarr=["pranjal",true,5,202.212,5,"jain"]
        // for iterating the array 
        
        // we can alsomake the array using the constant values
        // for (const i of myarr) {
            //     console.log(i);
            
            // }
            // for of loop is used for printing the iterable object 
            
            // for(let i=0;i<55;i++){
                //     // code 
                // }
                
// claucualte the sum of fiirst n number 
// let num=Number(prompt("enter the number "))
// let sum=0
// for(let i=0;i<=num;i++){
//     sum+=i
// }
// console.log(sum);


// so we can make thr array asl using the array function 
console.log(
    Array.from(Array(5).keys())  //in this way i can make the continuous array 
);

// // making the do while loop 
// let i=20
// do {
//     console.log(i);
//     i++
// } while (i<=5);
// // so it will run atleadt for the one time in the loop 

// // for of loop  is used for iterating the iterable object like arrays , objects 
// // in this way i can iterate the array or the object using the for of loop for the iterable object 
// for (const iterator of Array.from(Array(10).keys())) {
//     console.log(iterator);
// }

// // for of loop 
// for (const key in obj) {
//         const value = obj[key];
//         console.log(key,value);
        
// }

// Array and objects both are mutable in nature but the strings are not 
let x = Math.ceil(Math.random()*3);
console.log(x);
// this random gnenerates the value from 0 to 1 only so for a range 

// so for generating the random numebr in the range of the given numebr use the Math.random and for a particualr rnge mutiple by the num where the last num is not included 

Math.floor(Math.random()*11)

// template literal is the dynamic literal of the strinf
// let name=prompt("enter the name ")
// console.log(`your name is ${name}`);

// we have to save the changes into the string back 

// using the replaceAll we can change all the occurences of the string 

//  let str=prompt("enter ")
//  console.log("@"+str+str.length);
 

// arrays 
// that will store the information of the similar type homogeneos type of the info 
// to stoe the multiple items inside the one variable access by index 
// console.log(typeof(myarr));
// for(let i=0;i<marks.length;i++){
    //     sum=sum+marks[i]
    // }
    // let avg=(sum)/marks.length
    // console.log(avg);
    
    
let marks=[85,97,44,37,76,60]
let sum=0
// making the function of this to calculate the average 
const average=(marks)=>{  //passing the array into it 
    for(let i=0;i<marks.length;i++){
        sum=sum+marks[i]
    }
    console.log(sum/marks.length);
    
}
average(marks)


//looping through array by using the for each loop 
// marks.forEach(e=>{
//     console.log(e);
    
// })

// we can make the arroe function just like the variable name 
// for looping inside the array use the foreach loop 

// marks.forEach(e=>{
//     console.log(e);
    
// })


// 10% off 
let price=[250,645,300,900,50]
let offered_price=[]
const offer=(price)=>{
    for(let i=0;i<price.length;i++){
        price[i]=price[i]-price[i]*0.1
        // newPrice=price[i]-price[i]*0.1
        // offered_price.push(newPrice)    //we can also crreate a new array for this and add the new updated value for it also 
    }
    console.log(price);
    
}


offer(price)

// learn the 5 methods that actuallly change the array push pop shift unshift sort splice
// for sorting in desc do first sort and then reverse it 

// splice(position to add , to remove . ele 1 , ele2)

// splice changes to the original array but the slice does not change to the orginal array 
// splice can be used to add , delete or replace inide the array that changes the original array as well 


// splice se hum kuch add , delete orr a fir replace bhi kar skte hai jo ke changes ORIGINAL ME HINGE 

// splice do the changes in the original array 
// so we can use the splice for adding replace and the deleteing in the original array 

// arrow functions
// writing th efucntion in the arrow means that fat arrow function name is lke the variable name 
const diff=(a,b)=>{   //arrow function v usefule 
    return (a-b);   
    
}
diff(4,1) 
// u can store the function just like the variable ans uses in the same way like the normal function 

// fat arrow function means we cna storew the function inside the variable and can be accessable anywhere 

// so the arrow function is just a normal variable that stores the function in it witht the functioninside it and have the variable name 
// let hello=()=>{
//     // function code 
//     console.log("hemloo");
    
// }

// hello()
// we can change the value also inside the arrow function 




function countVowels(mess){
    let v=0
    for (const i of mess) {
        if(i==="a"||i==="e"||i==="i"||i==="o"||i==="u"){
        // if(i==="a"||"e"||"i"||"o"||"u"){  //wrong
            v+=1
        }
        
    }
    console.log(`vowels are ${v}`);
    
}


countVowels("missiippii")

// coersicion measn inplicit type of the conversion done by the system 
//  2+"2" =4


// for each loop  is same like the arrow function that iterates inside the array 
// Array.from(Array(10).keys()).forEach(e=>{
//     console.log(e);
    
// })




// using the foreach we can aslo loop the arrray or string 
// callack function is the function that is passed as an argument to another function 
function prnajal(myfun){
    console.log("hello");
    // passign a function as a argument to another function is called the callback function 

}



// function hello(num){
//     console.log("hello sir ",num);
    
// }

// function namaste(n){
//     return hello(n)
// }
// // passing a function as an argument in another function is called the callback function 
// namaste(50)


// array of the students 
let mystu=[1,2,3,4,5,6,7,8,9]
let squared=[]
mystu.forEach(e=>{
    squared.push(e**2)
    // console.log(e)
})
console.log(squared);

// in js we can pass the function as an argumet ans we can make a function return also a function 
// function love(variable){
//     console.log("Sds");
//     return variable
//     // initially we can pass the vacriable in argument and in return but in js we can pass the fucntion as an argument an also make a function to return a function to it 
// }

// function lll(love){
//     return love()  //returning a functuin again back 
// }

//  in js we can pass a function isnide th eargument of the fucntion and can also return a function form a function
// in the foreach loop we pass the function as an callback function and for that we use the arrow function 
// Array.from(Array(20).keys()).forEach(e=>{
//     console.log(e);
    
// })

// arroe function const var=()=>{}

// HOF high order function are those function that either take function as an argument in it or returning a function so callback is an high orde function as callback takes argument of another function 

// in passing of the callback function we can pass the 3 parameter as well val , index , array 

mystu.forEach((val,inx,mystu)=>{
    console.log(val,inx,mystu);
    
})

// so the foreach loop takes the callback function into it 


// DOM manipulation 
// window is a global tha twhy we dont need to write again inside the code 
// it will automatically be understand by the code 

// dir and log me diff hai 
// dir will gve the things of th body wheras log will just print all the body content 
console.log(document.body);
// window is the global object that is created by the webbrowser not by js 
// inside the window we can asccess the html in the document which is the object 


// so dom hai basicakly we can access the html by th ejs through it 
// the browser creates a dom tree that stores the html and by js we can access the html which is stored inside the documnt that is the object of the window 

// so to access the html in js we can access it by the doucment whcih is object and it have the dom tree in it and we can controll thewhole html through it 

// so to do the changes dynamcillay we need to dom manipualtion 
// all the dynamic changes in the webpage we need the dom manipualtion 

// html collection is similar to the array 

// document.body.querySelectorAll(".class1").forEach(e=>{   //we have pass the arrow function so callback function it is 
//     console.log(e);
    
// })

// function change(){
//     document.body.querySelector(".class1").classList.toggle("blackie")
// }


document.body.querySelector("#black").addEventListener("click",function change(){
    document.body.querySelector(".class1").classList.toggle("blackie")
});
// so we can do this way toggle the class 

// the inner html will give th einer one but the outer html will give the inner as well as the outer tag html aslo
// the basic diff bw the innertect and textcontent is that 
// text content will show the hidden element also but not the inner text 

// how to insert the elements 
// document.body.querySelector(".class1").insertAdjacentElementf("beforeend","div")


// first of all we need to create the elemetn and then add the eleemnt at the 4 either pisiton 

let ele=document.createElement("div")
ele.style.height="55px"
document.body.querySelector(".class1").insertAdjacentElement("beforebegin",ele)

// create anythin insde thedoc only 
// so it always be created inside the document only  










































































