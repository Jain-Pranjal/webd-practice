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

// async function getData(){
//     let x=await fetch('https://jsonplaceholder.typicode.com/todos/1')  //collecting the data or fetching it from the link 
//     // console.log(x);
//     let data=await x.json()  //will convert the data intojson 
//     console.log(data);
    
    
// }

// getData()

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

// callback function and promises 
// as we know that js has a async nature means we can delay the execution of the processs int he js 
// passing a ficntion as an argument to the another function 
// it is just a funciton that runs inside the another function 

// js has a asyn nature which means that if js encounter any of the async function then it will delay its execution and moves frward and do the async later 


// settimeout funciton is an asyn funciton so its eceution will be donelater in the script 
console.log("first");
console.log("second");
setTimeout(() => {
    console.log("this is inside the tiemout ");
    
}, 2000);

console.log("fourth");
// so setimeout is an async function which means that it will be delayed by the script 

// callback function is a fucntion that is passed to another function as an argument 

// so callback fucntion is the fucntion that is passed as an argument to another fucntion 
// basciallyw e are passing a fucntion into the another function as an argument 

function display(result){
    console.log(result);
}
// here passing a fucntiona as a argument
const calc=(a,b,display)=>{
    let sum=a+b;
    display(sum);
}

calc(3,4,display)

// asyn fucntion will be deal later in the script as they are delayed
// callback is the function thay is passed as an argument inside the another function 
// just we are passign a function as an argumrnt into the fucntion 


// passing of a function as an argument into another function is called the Callback function 


const phone=(comment)=>{
    console.log(comment);
}

const details=(fname,lname,phone)=>{
    console.log(`the name of person is ${fname} ${lname}`);
    let number=phone("good going ")
    console.log(number);
}

details("prnajal","jain",phone)

// thats why we use the promise instead of the callback 
// promise is the promise of the execution of the code 
// thats why we use promise to avoide to callback heell 
// promise is the call of execution of code 


let prom2=new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("yes i am done");
        reject("oofooo")
        // resolve("bittuu")  //it will give the value on resolving the fucntion 
    }, 3000);

})

// the value recieved on resloving will be access by using the then 

prom2.then((a)=>{
    console.log(a);
}).catch((error)=>{
    console.log(error);
})

// so it willl passt the value jiske sath vo resolve hua hai 
// .catch is used to catch the error and hold it 


// the resolve promise will give a value and it is don insde the then 
// the reject is tackle inside the catch 

// resolve and settle means settle means either it will resolve or reject 
// resolve will give a value after resolving without giving any error 

let prom3=new Promise((resolve, reject) => {
    rand=Math.random()
    if(rand<0.5){
        resolve("less than 0.5")
    }
    reject("greter than 0.5")
    
})
let prom4=new Promise((resolve, reject) => {
    rand=Math.random()*3
    if(rand<1.5){
        resolve("less than 1.5")
    }
    reject("greter than 1.5")
    
})

let P=Promise.allSettled([prom3,prom4])
P.then((a)=>{
    console.log(a);
}).catch(err=>{
    console.log(err);
    
})

// async and await concept in js 
// basically we can make a function to be async in nature and then its executiin will be delayed 
// callback is the function that is passed as an argument to anothr function but to avoud the callback hell we use the promises


// so basically if we want to wait for the executuion of the code belwo then we use the await 

// async function getData(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             console.log("hemloooooooooooo");
//             resolve(123321)
//         }, 5000);
//     })
// }
async function getData(){
    
    let x= await fetch('https://jsonplaceholder.typicode.com/todos/1')
    let data=await x.json()
    console.log(data);
    
    
      
}
async function main(){

    console.log("start");
    console.log("process");
    let data= await getData()
    console.log("data is ",data);  //data is resolve value 
    // so the resolve value is the data 
    console.log("end");
}

// so baically the function wait for the execution to complete then it will move further to next code

main()
//async fucntion will be running in the background 

// for making the async fiunction we need tok used the async command and 
// for using the await function we need to pack that fucntiion again into a async fucntion to control the flow of the that fucntion 

// await is used in async function only
// instead of using the then and catch use the async and await 


// when we use the fetch then we will be getting 2 promise 
// data ko lane ka promise and then data ko convert karne ke promise 


// both these things takes time to complete so we will wait for them to complete 
// await function runs into the async function only 
/*
async function kuchbhi(){
    data= await fetch("link")
    jsonvaladata= await data.json()
    return jsonvaladata
}*/

// so remember that while fetching from the API we have to get 2 promise as fetching from API and converting into the json both takes small time so we will wait for them 
// they will both give promise that they will complete 


// card ques 

// let title= prompt("Enter the title : ")
// document.querySelector(".card").children[1].children[0].innerHTML=title
// let views= Number.parseInt(prompt("Enter the views : "))
// document.querySelector(".card").children[1].children[1].innerHTML=views





function createCard(title,cname,views,monthsOld,duration,thumbnail)
{
let viewStr;
if(views<1000000){
    viewStr=views/1000 + "K"
}
else if(views>1000000){
    viewStr=views/1000000 + "M"
}
else{
    viewStr=views/1000 
}

let html=`<div class="card">
<div class="img">
  <img src="${thumbnail}" alt="">
  <div class="capsule">${duration}</div>
</div>
<div class="text">
<h1>${title}</h1>
  <p>${cname} . ${viewStr} views . ${monthsOld} months ago</p>
</div>
</div>`
document.querySelector(".container").innerHTML=document.querySelector(".container").innerHTML+html
}

createCard("pranjal jain ke video","jaincoo",54000,2,"52:5","https://cdn.pixabay.com/photo/2015/03/10/17/23/youtube-667451_1280.png")

















