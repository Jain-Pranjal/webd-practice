// Events in JS 
function table(num){
    for(let i=1;i<=10;i++){
        console.log(`${num}*${i}=${num*i}`)
    }
}

let button=document.getElementById("btn")
button.addEventListener("dblclick",()=>{
    // let num=prompt("enter the number")
    // table(num)
    document.querySelector(".firstpara").toggleAttribute("clicked")
    document.querySelector(".clicked").innerHTML="this is NOW clicked"

})

// so for adding the event we need the event and the function what will do work

button.addEventListener("contextmenu",()=>{
    alert("this is opened by right click")
})

// button.addEventListener("mouseover",()=>{
//         alert("this is done by mouse over")
// })
    

// the second argument that the function takes is the event object 
// so it will show which event has occured

// applying the keyboard event 
button.addEventListener("keydown",(e)=>{
    console.log(e,e.key)
})
    

// event bubbling 
// so basicalyy when we add the eveent to the container and then to its chikd so the evenet listener that is applid to child aslo propagete to the parenet also 
// so to stop the propagation of the event of the child to the parent then we use the eveent object propagation stop 
// in this way we can stop the propagation of the event into the parent also 


// in this way we can stop the propagation of the event by using the stop propagation 

document.querySelector(".child").addEventListener("click",(e)=>{
    alert("this is child")
    e.stopPropagation()
})
document.querySelector(".parent").addEventListener("click",(e)=>{
    alert("this is parent")
    e.stopPropagation()
})
document.querySelector(".bigbox").addEventListener("click",(e)=>{
    alert("this is bigbox")
    e.stopPropagation()
})

// so basically u r seeing that by clickikng the child also we are getting the access to the parent evenet also 
// so to stop this propagation we can say that stop the propagation bby using the evenet object that we pass with the event 



// we can also use the setinterval for doing therepeatative work again and again 

function randcolor(){
    let var1=Math.floor(Math.random()*256)
    let var2=Math.floor(Math.random()*256)
    let var3=Math.floor(Math.random()*256)
    return (`rgb(${var1} ,${var2}, ${var3})`)

}

setInterval(() => {
    document.body.querySelector(".child").style.backgroundColor=randcolor()
}, 20000);
setInterval(() => {
    document.body.querySelector(".parent").style.backgroundColor=randcolor()
}, 20000);
setInterval(() => {
    document.body.querySelector(".bigbox").style.backgroundColor=randcolor()
}, 20000);


// we can also clear the interval of the fucntion using the 
let myint=setInterval(() => {
    document.body.querySelector(".child").style.color=randcolor()
}, 300);

console.log(myint)
clearInterval(myint)

// settimeout works only 1 time after a specifc time 
setTimeout(() => {
    document.body.querySelector(".parent").style.backgroundColor=randcolor()

}, 3000);

// callback function is a function that runs inside a anoher function 

// so in JS we have the Asynchronous actions that means those will be executed later in the script 
// settimeout is an achronous action that means it will be executed later on in the script as it is a async action 

const callback=(arg)=>{

}
const loadScript=(src,callback) => {
  let sc=document.createElement("script")
  sc.src=src;
  sc.onload=callback("harry")
}

























