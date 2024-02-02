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
    school:"bmps",
    love:function lovable(){
        console.log(this);
         
    }//this is a method that means it is declared  inside the object so this will point to to the parent object 
}

console.log(obj.love());
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
setInterval(() => {
    // all need to be inside the interval of the 1 sec 
    const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    a=new Date()
    let time=`${a.getHours()} : ${a.getMinutes()} : ${a.getSeconds()}`
    let date=a.toLocaleDateString()
    let day=a.getDay()
    document.querySelector("#time").innerHTML=time
    document.querySelector("#date").innerHTML=date
    document.querySelector("#day").innerHTML=weekday[day]
}, 1000);


// remeber that json is a text interchange format that is used to transfer the message across the web in this particular format so we need to use the json thenat can be originated from the objects by strinfy it and again convered back to objects using the parse() 
// also remeber that json always takes the data into the "" double brackets only 


// one thing to remembet in json is that we can convert any json in object using the using the parse and again baack to the json using json.stringfy 
// so we need to use the json for exchanging the data as it is lightwight in nature so can use it 

// the variable of the function are local scoped variabel in nature 

// we can store the function inside the vcariabel name so we can use them as jsut like the variable 
const name=(param1,param2)=>{
    // function code
}

// // making of the function with no name
// ()=>{
//     console.log("this function has no name so it is anonymous function ");
    
// }

// const help=()=>{
//     return 101
// }
// // fat arrow function 
// // so it will return the value when we call the arrow function to it 
// console.log(help());
// // help()

// const var_fun=(a,b)=>{
//     //fucntion code 
// }
// // now i can access this function from this name 
function vowels(msg){
    let count=0  //as it is declared outside of the loop then it is accessible anywhere ISIDE  the function only as its scope is to function on ly 
    for (const i of msg) {
        if(i==="a"||i==="e"||i==="i"||i==="o"||i==="u"){
            count++
        }  
    }
    console.log(count);
}
// so declaring iknside the large bracket makes it accessible anywhere in the block of code so that we can do any  changes in that 

vowels("pranjal")

// for each loop is used to iterate the array that take the callbak function to it 
// callback fun is a function that takes the argument as a function in it 
// setInterval(() => {
//     console.log("ji");
//     // so it is taking a function as a arguument so setitimeinterval accespt the function as a arg
// }, 200);

// let myarr=[515213,515,4,564,8564,4,5,5,11,415,4,5,3]
// myarr.forEach(e=>{  //passing a arrow function so it is a callbakc fun passing inside the foreach 
//     console.log(e);
    
// })

// object ke under agar we define a function than it is called a method 
// so making a function inside the object is called a method 




obke={
    "name":function hello(){
        console.log("hello")
    }
    // this is a method that is made inside the obejct meansing that making a function inside the object is called the method 
    // so making of the method means making  a function inside the object 
}

// hof :- what are hogh order function ?
// when a fun passes as an argumrnt or function returns another function or either both then it is called the HOF

function printing(){
    try {
        console.log("this is done as there is no error");
        throw new Error("this is the error message ")
        console.log("another statemnet but we have write it after the throw so the flow will go to the catch block and it will not get execute ");
    } catch (error) {  //catch will accept the error in it and we can print the messag ewhat was the error by using the error.message 
        console.log(error.message);
        console.log("this is inside the catch ");
    }
}

// so we can aslo create our own error and throw that into the catch block 

// for each is usd for the array 
// in the callback we can pass the 3 parameter in it index , value , array 

// so making of the callback function bahar and then passing in for each loop 
let print=(e,indx,arr)=>{
    console.log(indx,e,arr);
    // index ppsotiion is second first is the vaclue that is iterating in it 
}
let myarr=[45,4,54,5,45,4,8,4,100]
// myarr.forEach(print)

// /so we can pass the value , index and array as th eoptional parameter in callback 

// callbakc is just liek a regualr function that we pass inot the foreach loop so we can make the function outside also and then directly passng th function 

// imp methods of the array 
// map method 

// map and filter makes the new array for the operation 
// so basically it s is used for mapping by making a new array 
let new_arr=myarr.map((val)=>{
   return val**3
// so basically it will return to the new array after performig and mapping the values to the new array from th eolder one 
})
// map makes the new array an
// console.log(new_arr);
// so basically map will return the values into the new array whereas the foreach make the changes in the orriginal one only
// so baically it will store the values insde the variable that we have created 
// so map and filter makes the   new array 

// let new_arr2=myarr.filter(e=>{
//     if(e%10===0){
//         return e
//     }
// })
// map and filter makes the new array form the older one
// filter makes the filtering vlaue if condition is true
// it also returns the new array for it 

// ṃap and filter makes the new array 
// let marks=[56,66,99,89,93,94]
// let marks_90=marks.filter(e=>{
//     return e>90
// })
// so basically it will filter out the value from the array and makes the new array 

let fact=[1,2,3,4,5,6]
// so we calculate the mlitplaction and save it in the one term by using the reduce 
// so basically we can find the fatorail in this way also 
let re_arr=fact.reduce((prev,curr)=>{
    return prev*curr
})
console.log(re_arr);
// so baically reduce makes the operation on the one item only 

// evenets provides th einteraction 
// mouseover
// using the add event listener wecan have the multiple evenets on the same element 

let upd=document.querySelector("#number")
let counter=0  //it is a actual number so we can use it directly 
// make a additional counter and and then update it and use it in the inner html counter to update the real value 

// using the event listener we can do the multiple work inside the event listerenr whcoh is not possible in the simple node function 
let plus_event=()=>{
    counter++;
    upd.innerHTML=counter
    console.log("love");
    
    // console.log(e.type);

}

document.querySelector("#plus").addEventListener("click",plus_event)

document.querySelector("#minus").addEventListener("click",function(){
    counter--;
    upd.innerHTML=counter
})

// so we can also use the event object 

// we also have the evenet object which stores l the info abt the event 
// so the proir importance will be given to the js file not the inline js for th eevent handling 

// so to remove the funtion we need to pass the same event handler that will remove it 
// document.querySelector("#plus").removeEventListener("click",plus_event) //here we pass the same event as we had store the finction tin it

// so we hav ot pass the same handler inorder to delete the event listerner as it will store in the same memeory for that
// now this handler will be refered to one only so it will be removed callback reference should be same 


// // window.onload = function(){
//     var button=document.querySelector("#plus");
//     setInterval(function(){ 
//       button.click();
//     }, 100);
// //   }

// the coiunter is only counting but not cliclking so i need to use the click() for making the click of the button 
let id=setInterval(() => {
    document.querySelector("#plus").click()
}, 1);
clearInterval(id)
// classes and objects 
// this operator 
function t(){
    console.log(this);
}
t()
// global , function this will give the global object 
// insde theevent listenre this will point to the same element to ehich we had givent hr event lister 
// inside the methdo (funciton that i sbeing declared inside the objecy)
// so inside the methdo it will point to the object 

// whenever we make some object we alos got the some functionn provided by the browser that is by proto 
let myobj=
{//inside the object we can store some variable and some methdods(function that are made inside the object is called the method)
    name:"jain",
    age:55,
    method:function hello(){
        console.log("hello everyone");
        
    }
}

// class making 
class details{
    constructor(name,subject){
        this.name=name
        this.subject=subject
        console.log(`${this.name} ka subject hai ${this.subject}`);
    }

    country="india"
    age=20
}

// objects contains the properties and methdos

let student1=new details("pranjal","english")
// whenever we make the object the constructor automatically starts and we can pass the values to it 
// so the webbrowser create the prototype for every object automatically for every object jtere is a prototype by the webbrowser

//so the objects or the array s(type of onject ) caontains th eprototype that has the special features for them so we need to use them 
// w can directly writ the method insde the object also 

// so we can direclty write the method inside the object without the name 
// to access anything inside the object use the this operator as it will point to the main person obejct 
const employee={
    calcualteTax(){
        console.log("tax is 10%");
        
    },
    salary(){
        console.log(this.name," ke salary is kuch nhi ");   
    },
    king:function kingdom(){
        console.log("i have a large kingdom");
    },
    name:"lov bhai",
}
// so we dfine th efunction directly in object without the key pair 
// so we can make th eproto of the object using the __proto__ that will actulaly inherit the peorty and methos id one to another 

const rampal={
    dept:"engineering"
}

rampal.__proto__=employee
// so in this way i can make the use of the obejct 1 proprty and methods inside the some else just liek the inheritence
// so if the same method is in the object and also in the same proto then the method will be override and the object method is usde in place of the proto

/**
 * 
class car{
    constructor(mybrand,tyre){
        this.brand=mybrand  //we have to store the value also befire using it 
        this.tyre=tyre  //we have to store the value also befire using it 
        console.log(`the brand name is ${this.brand}`);
        console.log(`the tyre number is ${this.tyre}`);
    }

    start(){
        console.log("start the car");
        
    } //so direclty write the function wihtout using the key name 
    stop(){
        console.log("stop the car");
}
    setprice(price){
        this.setprice=price
    }
}

// to pass the value form one con to another use the super by passing the argument in it 

class engine extends car{
    constructor(brand,tyre){
        super(brand,tyre)  //this will be used to invoke the parent class construcutor 
        // to pass the argument to the aprent construcutor we can pass the argument inside the super that will be accepted by the paent 
        console.log("this is the child class construcutor");
        
    }
    

    engine(){
        console.log("the engine is horse power 244");
        
    }
    stop(){
        console.log("stop the car as engine died");  //in the child class i override the parent class method 
}
}
let toyata=new car("zing bus") //if we pass as this so it will go to the construcutot not the specific funtion 
// so we need to accessse tthe value explicitly 

// so if we make the object ans pass the value it will go the the constrcutor that will be immediately used 
toyata.setprice=900000
// at the time of the initialisatio construcutor do its work seemlessly 
let maruti=new engine("maruti",4)
// super keyword is used to invoke the parent construcutor first then the child construvutor later so it will go to parent then child 


// so we accept as many as the argument inside the cosn and using the super we will send only those whose are needde for the parent one 
class admin extends car{
    // constructor(brand,tyre){
    //     super(brand,tyre)
    // }
    printIntro(){
        console.log("hola");
        
    }
}

let admin1=new admin("ferrai",5)
*/

// Async js
// if("geolocation" in navigator){
//     navigator.geolocation.getCurrentPosition(function(position){
//         let lat=position.coords.latitude
//         let long=position.coords.longitude
//     })

// }

// for(var i=1;i<=3;i++){
//     setTimeout(() => {
//         console.log(i);
        
//     }, 1000);
// }
// callback function is the passing of the funciton in the arg
function sum(a,b){
    console.log(a+b);
}

function calc(a,b,sumcallback){
    sumcallback(a,b)  //it stores the function 
}
// passing a function as an argumet is called a callback 
calc(5,1,sum)
// const intro=() => {
//     console.log("callback funciton");
    
// }
// setTimeout(intro(), 1000);

// nesting of the callback is called the callback hell

function getdata(id,nextdata){
    setTimeout(() => {
        console.log("data :" ,id);
        if(nextdata){
            nextdata()  //it containts the getdata(5)

        }
    }, 2000);
    
}

// matlab ek function 2 sec ke baad run and then again 2 sec ke baad run 

// passing a the  function as a callback 
// getdata(3,()=>{
//     getdata(5)
// })

// now to soleve the problem of callback hell we need the promise 
// promise are the object in js 

// we have 3 states :- pendning , resolved and rejected
// so this is returning a new promise to the called function
const getpromsie=()=>{
    return new Promise((resolve,reject)=>{  //the resolve and reject is createed auto
        console.log("i m a promise");
        resolve("success")
        // reject("error aa gya bhai !!!")
        // so we can decide wheter the promise will be fullfilled or rejected 
        // mkaing this promise a RESOLVE
    })
};
let p1 = getpromsie();  // Assign the promise to p1

p1.then((res) => {
  console.log("This is done because the promise is being resolved due to the ",res," result");
});
p1.catch((err)=>{
    console.log("this is rejected due to the ",err," error ");
    
})

// so we can use the message that we passed during the resolve and reject of the promise in the then and catch

// we use the promsie with the API as in return they give us the promise whether they will be fullfilled or reject an don that wee take the decision 
// how to use the promise 
// if we want to do some work after the promiswe had been resolved then use the promise.then and if rejectd then use the promise.catch 


// on calling of this functionit will return a new promise that can be either resolved or rejected 
// so if resolved then what are we to do use the promise.then
// if reject then use the promise.catch to do the next thing with them 


// we dont know wheter on calling on api it will resolved or reject . it will only give the promise that have the state pending (if it takes time )
// we can only handle the resolve and reject condition for the promise using the then and catch and also if we pass any messag eto them we can show them 


// Promise Chaining 
// this fun will return the promise 
function asyncFunc1(){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            console.log("this will be printed after 2 s");
            resolve("this is the resolved message of 1 ")  //resolve message after the resolving of the promise 
            // reject("bhai sorry promise rejected")
            
        }, 2000);

    })
}
function asyncFunc2(){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            console.log("this will be printed after 2 s");
            resolve("this is the resolved message of 2 ")   //resolve message after the resolving of the promise 
            // reject("bhai sorry promise rejected")
            
        }, 2000);

    })
}
// promise works on the async type of the function 

function asyncFunc3(){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            console.log("this will give the third promise");
            resolve("issue resolved ")
        }, 3000);
    })
}


// ya to promise fullfiled hoga ya to reject hoga so we need to tackle both the situation to handlel the promise either fullfilled or rejected 

// so on resolveing what should it do will be taken in the promise.then 
// it iwll return the promise to the one who called the async function 
// let p2=asyncFunc1()    //this is returning a promise whose next outocme will be handled by the .then
// p2.then((res)=>{
//     console.log(res);
//     console.log("fetching the data 2.........");
//     let p3=asyncFunc2()
//     p3.then((res)=>{
//         console.log(res);
//     })
    
// })

// directly use the then operator as both the function is just returning a promise to the called function 
// also can write in this way

/**
 * 
asyncFunc1().then((res)=>{
    console.log(res);
    asyncFunc2().then((res)=>{
        console.log(res);
        asyncFunc3().then((res)=>{
            console.log(res);
            
        })
        
    })
})

*/

// so it will print the data only when the resolove of 1 is true and then i will print the resolve of 2


// in the chaining process we can chanin the promise so that after the resolve of 1 promise then the 2 promise will execute 
// passing of the then inside the then is called the promise chaining means it will show the resolved only after once then 1 was was shown 

// when we make a request to an API it takes some time oto process but givs a promise instantly in a apending state 
// that promose can either be resolve (fulfilled ) or reject so we need to tackle the situation ke dono ke situation me kya hoga 
// so if the promise is resolved then use the then 
// if reject then use the catch ti do the foloowign gtask after the promise 

// promise chaining is the promise ke agar yeha kaam ho gya hai tehn iske baad yeah kaam karo 


// Async and Await 
// async function always returns a promise 
// async is used to make the function asynchronous in nature 


// now this function will return a promise alwasys
async function hello(){
    console.log("hello peeps");
    
}

// await keywrod can only be used in the async function only 
// remmeber to ise the await insid the async only that means it will for thr promise by the async func to get resolvd 

// await only uses in the async function 
function api(){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            console.log("weather data");
            resolve(200)
            
        }, 2000);
    })
}

(async function(){
    // await api() //1st call
    // await api() //2st call
    for(let i=0;i<=5;i++){
        await api(i)
    } 

})()

// iife can be used only once for the executuoin of async nd await 
// it makes the variable proivate in the iife


// so now it will do the work only when one work is finish 
// getWeatherdata()




















