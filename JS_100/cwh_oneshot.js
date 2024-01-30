// modern js workd on the jit just in time compiled languag e
// forgiven language as it does not show errro much and error handling is quite good in js 
// we change anything dynamiclaly using the js which means that on executing the script we can change the script and other settings also so we can us that 


// there are 2 types of the datatypes that is primitive and referece datatype that menas that primiteove and referecec 
// primitive copy -> copy 
let a=55
b=a
b=99
console.log(b);
console.log(a);
// primitive copy he chnage hogi it will not hcnage th eoriginal one 

// diff bw the primitive and the reference datatype 
/**
 * 
// reference :- {}[]() refence hote hai 
let arr=[5145,45,415,15,21,55]
let arr_copy=arr
arr_copy.push("pranjal")
console.log(arr_copy);
console.log(arr);
// so it has change the original one also as it has pass the reference value not the copy of the value so it will chamge the original one also 
// how to pass the copy of th reference value 
let arr2=[...arr]  //so by this we pass only the copy not the referece 
arr2.push("jainco")
console.log(arr2);
console.log(arr);  // this is not changed as only the copy change not the 
*/

// this is how we can pass the copy of the reference datatype items 

// .basically we passed the function inside the 
// arr.forEach(e=>{
//     console.log(e);
    
// })
// console.log(arr.reverse());
// console.log(arr);
// so push pop shift unshift sort splice reverse all change the original array 
// sorting is done by onvertking thr numerica values into string so we need to pass an additional argument ot get sorted in the form of numbers
const points = [40, 100, 1, 5, 25, 10];
points.sort(function(a, b){
    return b-a
});
console.log(points);
// to sort the numbers into the form of the ascending then we have pass the function in it 
// for the strings method we can use the indexof 
// on applying diff methods on the strings it will give the copy of the strings only 
// if we want to sav e the string then we need to store the string back also 


// dates in js
mydate=new Date()
console.log(mydate);

// in the global and funciton this basially points to the window 
// inside the method (fucntion created inside the object ) points ot the parent obejct 
// in the event listener this points to the tag that has been listened 


// document.querySelector(".note").addEventListener("click",function(){
//     this.style.border="2px solid green"
// })
// so basically instead of saving the eleemtn inside the another variable we need to access them by the this operator as inside the evenet listenre this point to the same elemet to whom we had added the event listenr 


let obj={
    name:function rahul(){
        console.log(this);
        
    }
}
obj.name()


// window.onload=()=>{
//     console.log("i m loaded");
    
// }

// document.querySelector(".note").addEventListener("click",function(e){
//         console.log("the button was clicked ");
//         e.stopPropagation()
//         // so pass the event object to stop the propagation of the event and  
        
//     })

//     // when we click the small one so it also trigger the large one so we have to stop the regenerating 
// document.querySelector(".outBtn").addEventListener("click",function(){
//         console.log("outside button contianer  ");
        
//     })

// // settimeout and setinterval :- async funcions of the js 

// const clr=setTimeout(() => {
//     console.log("this is timeout after 2 sec");
    
// }, 2000);

// console.log("jola");

// to remove the settimeout 
// clearTimeout(clr)

// so to use the clear time out interval we can use the clear interval property 
// we have to give the same handler to stop the execution of the program either tiume interval or time out 


// local storage to store the data in browser 
// we can use the local storage to store the data 
// so dont store the heavy amt of data inside it as it is less secure to write the localstorege

// json is used for the text format for the information exchange 
// siilar the exchange of the information on the web is done on the json format 
// object is a datatpy ethat stores the complex store in it in a key value pair 

obj={
    "name":'Jai\\"n',
    age:55,
    school:"bmps"
}

console.log(obj);
// console.log(typeof obj);
// to conver this object into the json 
let jso=( JSON.stringify(obj))  //json is converted into the string format 
// now this is in the format of the string 
// so json basiaclly converts the info into the form of the string where we we use the stringfy and then it is converted to json fomart 
console.log(jso);
// json always always take the double quotes in it 



// json basically is used for the data exchange among the vairous env 
// Used for data interchange between different environments
// and json is written in the string format 

// now it is converted into the object again 
// console.log(
//   typeof  JSON.parse(jso)
// );

// so to cnovert  into json we have to use the json.stringfty and to again convert back to the obeject to the object we have to use the json.parse 


// json is a text format through whcih we exchange the information acroos the web and we can convert the object into json using the json.stringfy and again back using the json.parse 
// json dataype is of the string format 

// json always accept the double quotes 
// it should have always the double quotes in it so always use the double quotes in it 

// so to convert any object into json whoch is a text format for the exchange of the info on the web we use json 
// json baically is string format strucutire whcih only accepts the double quotes in it 
// .stringfty and .pasrse is usde for the conversion 


// ecma script is the standard through whcih js is maintainede and sustained 
// it maintains the varsion and standard the js by the ecmascript as it is the main body 
// ES6 is the modern js as we got the let and const 



































