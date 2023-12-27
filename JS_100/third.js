// callback and promises function 
// callback function are used to call the function when the function executes 
// callback function is simply a fucntion that runs inside the another function 

// javascroipt has a asyn nature in it 
// means it is not necessary that the element will do the work same as they are typed . they can be delayed in the executuion aslo 

// so basically this settimeout shows the asyn nature of the js as it will be delayed by the other element and will execute later on in the script 
// setTimeout(() => {
//     console.log("sdfsf");
// }, 0);
// console.log("df");
// console.log("pp");
// console.log("85");
const callback=(arg)=>{
    console.log(arg);
    // alert(arg)
    
}
const loadScript=(src,callback)=>{
    let sc=document.createElement("script")
    sc.src=src;
    sc.onload=()=>{callback("pranjal")}
    document.head.append(sc)
}

// so basically callback function is a type of function that is passed into another function as an argument into it 

loadScript("https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js",callback)
// so for the solution of the callback hell is promise 
// we will be using the promise insetead pf callback to eleminate the callback hell


let prom1=new Promise((resolve,reject)=>{
    setTimeout(() => {
        console.log("hola amigo");
    }, 3000);
    resolve("pranjal jaincooooo")
})

prom1.then=((a)=>{
    console.log(a);  
})

// .then will be used for the resolve 
// .catch for the error resolve 
// resolve means that we will get a value in return 
// settle means that either it will resolve or settle

// async / await 
// then will be used only when it is resolved so it will wait for the resolving
// for usign the await we need to use it under the asyn only 



// asyn functuion will takes its own time for the execution 
// we will use the fetch APi

async function getData(){
    let x=await fetch('https://jsonplaceholder.typicode.com/todos/1')  //collecting the data or fetching it from the link 
    // console.log(x);
    let data=await x.json()  //will convert the data intojson 
    console.log(data);
    
    
}

getData()

// so as u know that js has a Async nature means it can delay the task and for that we use callback and promise 
// callback means calling of a function inside a function which means that  we are passing a function to another as an argument 
// but we dont use the callback as they can lead to the doom pyramid or callback hell 
// instead of callback we use the promise 
/**
now what is promise 
promise is actually a primise for the code of the execution 
basically what we are doing delaying the executiion of code sok we will do it by iusing the promise 
in promsie we use async / await 
which means that we need to make the fucntion async which stated that it will dealay as it will take time for the data to be collected so it will process later 
now what await do it will wait for the fucntion to complete first and then i will allow next code tok execute 
if we dont put the await then it will process the next instruction and will keep waiting in the background but it will not stoo the execution of the program 
 */

document.body.querySelector(".wow-but").addEventListener("click",(e)=>{
    console.log(e);
})

// the e is the event object and with that we can perform many operation like stop the propagation of the event of the parent 

// so addng a event listener to provide the interactivity is as follows:- 
document.body.querySelector(".wow-but").addEventListener("dblclick",(e)=>{
    alert("this is double click ")
})
// we will try to use the maximum evet listenir


const sum=(a,b)=>{
    console.log("the sum is :" , a+b);
}


// let mynum=Number.parseInt(prompt("Enter kar apna number : "))
// if (mynum==1){
//     removeEventListener(e)
// }

// handler nust be same so as to remove the evenet

document.body.querySelector(".wow-but").addEventListener("click",(e)=>{
    // console.log(e.keyCode,e.key);  
    let n1=Number.parseInt(prompt("enter the 1 : "))
    let n2=Number.parseInt(prompt("enter the 2 : "))
    sum(n1,n2)
})

// os make the event handler by using the event handler by using th addevenet 


const small_ele=document.querySelector(".small")
small_ele.addEventListener("dblclick",(e)=>{
    sum()
    console.log("You are clicking this element")
    small_ele.innerHTML ="this is SUPRISE !!!!"
    // document.querySelector("small").style.height="55px";
})

// make the event object for removeing the same event listerner

// so with the event listener we aslo pass the eveent object which is used for add or remove the event from it
// client x and client y basically shows the coordinated of the cursor 


// PS of the event and DOM


document.body.querySelector(".btn-1").addEventListener("click",(e)=>{
    alert("this is 1")
    location.href="https://www.google.com"
})
document.body.querySelector(".btn-2").addEventListener("click",(e)=>{
    alert("this is 2")
})
document.body.querySelector(".btn-3").addEventListener("click",(e)=>{
    alert("this is 3")
})

// we can pass a link to the DOM using the location.href 
// and then we can chane the link href 

// 
// json bacially is the javascript object notation in whcih we can store the data in the json format that means we need to create the element just like the objects in the javascript 


let bulb=document.querySelector(".bulb")
bulb.addEventListener("click",(e)=>{
    console.log("glow");
    bulb.classList.toggle("bulb-on")
})
// bulb.addEventListener("click",(e)=>{
//     bulb.classList.toggle("bulb-off")
// })


// location.href to change the link 
// location.reload to refresh the website 


// jokes random on screeen 
let myjoke=[11,22,33,44,55,66,77,88,99,110]
let rand=Math.floor(Math.random()*myjoke.length)
// setInterval(() => {
//     location.reload()
// }, 2000);
// setInterval(() => {
//     console.log(myjoke[rand]);
// }, 1000);
// console.log(rand);



// so to create a new date then use the new Date() and then we can access eveerything form it liek hours month date year






































