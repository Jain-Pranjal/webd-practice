let arr=[10,22,33,40,44,55,99,23,94]
// arr.forEach(val=>{
//     console.log(val);   //justprinting the value of the array 
    
// })

// // the for each loop takes the callback function in it with the 3 optional argument i.e val,index,arr
// arr.forEach((val,index,arr)=>
//     console.log(index,val,arr)
// )

// so we can pass the additional argument inside the foreach loop that takes the callback funciton it 
// callback function are those function that takes the argument as a function in it 
// high order function are those function that either takes the function as an argument or return thr function as output 


// arr.forEach((element,i,arr) => {   //passing a another function in it as a callback function 
//     console.log(i,element,arr);
    
// });

// val index array
// so maintain this order in passing the argument inside the array of foreach 



function hello(name){
    console.log("hello "+name)
}

function namaste(naam){
    return hello(naam)   //it is returning a function so it is  a HOF that is eithe it accepts a fucntion or it reutrns a fucntion 
}

namaste("aman")



// using the map filter and reduce 
// so basically map is used to make a new array by performing the particlaur operation on each elements of the array and mapping it to the the values 
// let newarr=arr.map((val,index,arr)=>{ //it makes the new array 
//     return val*2
// })

// so bascially it maps every operation with each value of the array and makes a new array for 
// mapping of the value is done 


// map is used to create a new array with some operation on it 
// map makes the new array and is similar to the for each only 
// mapping is done of the value and create a new array for this 

let newarr=arr.filter(e=>{
    return e%10==0
    
})
console.log(newarr);
// so it will filter out the result acc to the conditions of the array 
// filter out the results based on some conditions on the array 
// it also create a new array 

// map filter works same as the for each loop as they all takes the callback function in it 
// they make the new array so it can be store 
// let myarr=arr.map(e=>{
//     return e**4
// })
// so it will return to thsi array only as we are returning to the new array 

// console.log(myarr);

// filtering the marks of the students 
/**
 * 

// map and filter make the new array after performing the operation 
let marks=arr.filter(e=>{
    return e>90
})
// filtering out the marks that is greater than 90 
console.log(marks);

let num=Number(prompt("Enter the number : "))
let myarr=Array.from(Array(num+1).keys())
myarr.shift()
console.log(myarr);
let mysum=myarr.reduce((res,current=>{
    return res+current
}))
console.log(mysum);
*/

// class and objects 
// class is a template through which we can make the objects from it 
// whenever we crete a object there is a prototype that automatically be there which provied additional proprty to the object 

// prototype is the property that is there when we create the object so it is created automatically by the web browser 


// obejct contains the property and methods(functions that are define inside the object is called mehtd)
// class is just a template through which we can make the multiple object from it 
// usign the class we can alos pass the consrtucutor which will do the work on makin gon th eobjects only 
class animal{
    constructor(name,age,kingdom){
        this.name=name,
        this.age=age,
        this.kingdom=kingdom
        // we can use this value by accessing them here only 
        console.log(`${this.name} lives in ${this.kingdom} and age is ${this.age}`);
        
    }
    eat="healthy food"
    sleep="night only"
    run(){
        console.log("running and walkingf");
        
    }
}

class hunter extends animal{
    constructor(Hname,name,age,kingdom){
        super(name,age,kingdom) //direclty passing the agument in the parent constructor 
        this.Hname=Hname
        console.log(`hi i m a hunter and my name is ${this.Hname}`);
    }
    run(){
        console.log("this method is overrideen in this class");
        
    }
}


// constructor automativcally invoked wheneer we make a obejct 
// so we cna use the construcutot to pass the value 

// let tiger=new animal("Tiger",12,"land")
let h1=new hunter("lokesh","Tiger",12,"land")
// as it extends the parent class sok first we need to print the parent construcutor first so use the super keyword 

// so we can use the construcutot to use the value instanntly 
// so make the object using the class
// prototype provide the additional feature the object auto matiaclly inject by the web browser 


// with the object we have the priototype inbuilt in it whcih provide the additional property to it 
 
// alll the objects that we make has a default prototype oin it wjich have the various properties
// we can aslo mak the fucntion directly in the object wihout anyv key 
let employee={
    calculateTax(){
        console.log("the tax is 10%");
        
    },
    // here we have using the key value pari of making a method inside the property of the salary
    salary:()=>{
        console.log("the salary is 20LPA");
        
    }
}

let ram={
    perks:"none"
}

ram.__proto__=employee

// __proto___ basically is used for the inheritence inside the object 
// usign this we can access the parent properties an dmethids also 



// Error handling block 
// in the try block we write those bleock that can contain some error in it  theerror will be catch by the catch block

// use the parseint function to covnert the datatype of the strikng into number 

// a=Number.parseInt(prompt("enter the number"))
// console.log(a);
// if(isNaN(a)){  
//     throw ReferenceError("sorry this is not alloweed ")
// }

// so we throw the self made error 
// now for handling the error 
try {
    console.log(a*p);
    // throw SyntaxError()
} catch (error) {
    console.log("error aa gya bhai so we have catch the error and does not break the flow of the program");
    console.log(error);
    // console.log(error.name);
    // console.log(error.message);
    // console.log(error.stack);
    
}

// so on passing the error in the catch block we can print the error message and name and stack in it 

// so koi bhi error ho we can catch that and ahndle it 

// whenever we encountered some error the execution of the program stips there only so we cannot move formward 
console.log("Error ");
// we use the finally in the function to check that the code will run even aftet the return keyword 


// Async js 
// we shoudl use the async and await for the execution of the asyncronous js 

// we have to handel the promise of its resolve and reject things 
// using the fetch api it gives usj the promise to us 


// in set timeout we pass the callback function whcih means we are passing a funciton inside the another function as a parameter

// whenever we have the async function then it will move into the paralle; thread and from that it will execute after the time has complete
// THE SET timout function is an async function as it executes afetr the given time  it takes the callback function it 

function deployHello(){
    console.log("hello this is deployed hello");
}
// so pass the callback function inside the settimeout function 
// setTimeout(deployHello, 200);


// making a callback function whcih meand we pass a function as a argument in another function

// callback is passing a funciton as a argument in anothe function 

function callback(a,b){
    console.log("this is the sum ");
    console.log(a+b);

}

function calculator(x,y,Sumcallback){
    // return x+y
    Sumcallback(x,y)
    // here the sumCAllbaclk contains the callback funcion 
}


// so we have to pass a fujnction as a agument in the function calling
calculator(5,9,callback)
// calculatork is a function in whoch i have pass the anpothet functiona s a argument 
// we can create any funciton using the arroew fucntion 
// let diff=(a,b)=>{
//     console.log( a-b);
// }

// diff(4,2)
// for passing the callback function we never pass witht he parenthesis with 
// setTimeout(() => {
//     // arrow function
// }, 1000);
// // passikng the direct fuction 
// setTimeout(calculator, 5000);

// the nesting of the callback is called the callback hell which is worst

// now on calling of this fycntion it will execyte after 2 sec

/**
 * 
function getData(dataId,getnextdata){
    console.log("getting data.....");
    setTimeout(() => {
        console.log("data with the",dataId);  
        if(getnextdata){
            getnextdata()
        }
    }, 2000);
    // console.log("jello hello");  //it will not waoit fr the program to complete
}
*/


// so it will execute the function after the 2 sec 

// fujnction callikng me delay dekhna haij so i use the setikmeout ikniskde it 


// function data(dataid){
//     console.log("data :",dataid);
// }

// so we need to pass the arrow function otherwise it will execute immediately which isnot good

// getData(1234,()=>{
//     getData(256)  //not passing the next callback so it will give an error
// })

// now if i want the next data then i can pass the callback funcion 

// so it will chekc if ke hai to he next data chala varna nhi 
// to deal with the callback hell we use the promises 

// Promises
// so we make a promise either it will resolved or reject the promise and then we had to tackle the situation 

// inside it we alaso pass the callback function that is resolve and reject 

// promise is also a object whcih means it has the prototype in it 
// let promise=new Promise((resolve,reject)=>{
//     console.log("i m a promise");
//     resolve(200)
//     // reject("Bad error")
// })

// so th epromise give the status and reson for the pass and failure

// so prmise has 3 states in it 
// fullfilled (resolved ), ject and pending 
// the pending state takes the time to get get either resolved or reject in it so we can pass the message with it


// resolve and reject botht are the callback function 
// when we fetch from ai it gives su the pronmise to us 
// we need to handel the promise onl that means we need to hadel the resolve and reject of the promise 

/*
// Api retuens us the promise


function getData(dataId,getnextdata){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            console.log("Data is :",dataId);
            resolve("Successfull fetched")
            // reject(500)
            if(getnextdata){
                getnextdata()
            }
        }, 3000);
    });
}

let val=getData(44,()=>{
    getData(55)
})

// so then will work only when promise is resoved
val.then((res)=>{
    console.log("Fetching next data... ");
})
// the err contains the reject message in it 
val.catch((err)=>{
    console.log("error aa gya bhai ",err);
})

*/



// this will give 100% data to the calling nbut we need tok tackel all the promise given by the API call using the fetch 

// we need to tackel the promise geneerlaly goven by the api call 


// if we fetch thre data from the aPI they gives us the promise and then we have to handel the promise only 
// API returns back the rpomise to us so we need to handel the promise using the then 
// eith the rpomise will be resolve or reject and till then it is in the pending state 

// when the data is not there till then the promise will be in the pending zone so we need to fullfill the promise or reject it 



// tpo tackel the promise we need to use the then and catch 
// then for resolve and catch for the reject error showing 
// we generally dela wittht he promise given to us usinkg the then and catch as then for eresolve and catrch for the reject (error showing )

// so the aclling of the api gives us the promise to which we doe the tehn and catch


// for handling the promise if fullfill we use the then and for reject the promise we use the catch 


// then and cartch is used for handling promise ke agar fullfill hota hai promise then ko chala do and agar reject hota hai promise so catch ko chala do 

// if promise is resoled then the function using the then will activated and if it is rejectd then function inside the catch will be activated 
// Promise.then((res)=>{
    // the res contains the message that wee had gien to the resolve oen so we can print this in this also 
// })

function asyncFun1(){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            console.log("some data 1");
            resolve("SUCCESS")
            // reject("Errorrrrrr")
        }, 4000);
    })
}
function asyncFun2(){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            console.log("some data 2");
            resolve("SUCCESS")
            // reject("Network Error")
        }, 4000);
    })
}
// these fucntion will give the promise after the 4 sec and then it will get resolve 

function asyncFun3(){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            console.log("some data 3");
            resolve("SUCCESS")
            // reject("Network Error")
        }, 4000);
    })
}
// so basically it gives the promise after 4 s and then we can hadel the promise by using the then and catch 
// use then for resolve and use catch for reject

/**PROMISE CHAINING 
 * 

console.log("fetching data 1 .....");
asyncFun1().then((res)=>{
    console.log(res);  //printing the 4sec vala promise 
    console.log("fetching data 2 .....");
    asyncFun2().then((res)=>{
        console.log(res);
        console.log("fetching data 3.....");
        asyncFun3().then((res)=>{
            console.log(res);
        })
    })
})
*/



    
// but abhi yeah dono together aa rhe hai and we want ke ek promise fullfill ho jaye then next promise ho fullfill and aage chalta jaye bas 

// promise chaining ho gey matlab ke agar phele vlaa resolve ho gay then next vala chalu hoga and then agar vo resolve hua then next vala hoga chalu 

// so we do the chaining that means if one is resoled then only the second will get resolved and then thrd and so on 
// so we had done the chaining of the promis ewhich means that if one will resolved then only other will get resolved and so on 


// if it encounter the error then it will not solve further as there is no resolve of the function 
// we can directly use the fucntion.then to get the promise from it 


// WE CAN DIRECTLY GOVE THE FUCNTION NAME IN RESOLVE AND REJECT USING HE THEN AND CATCH 




/**
 * PROMISE CHAINING OF GET DATA

getData(111).then((res)=>{
    console.log(res);
    return getData(333)  //thsi will also give the promise
}).then((res)=>{
    console.log(res);
    return getData(555)
}).then((res)=>{
    console.log(res);
})

*/





// so we can do the poromise chains by providing thre promise inside the resolved of another one inside other 



// so resolve ke ander naya resolve likho matlab second vala tab he dega result jab phelea vala resolve hoga 

// as it os returnig the promise only so we direclty return it and resolve it 


// so bascially we are returnig the getdata promise and and using then to resolve the operatr 

// ASYNC AND AWAIT
// async is used witht the functions and it returns a promise to us
// async is used witht the functions and it gives a promise 
async function hello(){
    console.log("hello friends chai pee lo");
}

// so it is returnig a promise to us so async function alwasys return a promise to use and then we can use that 
// async is always applied to the functiona nd it gives us a prmiseand awai basically paiused th eexecurtion till the promise is settled on 


// await is alays be used in the async functiokn 


// this is a asyn fucntion
function api(){
    // this will returna  promise after 2 s
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            console.log("Weather data !!");
            resolve(200);
    }, 2000);
    })
}

// so this api call is async call as it will take the 2 sec to execute 
// // await alaways lies insdie the async function and it will wait for the promise tpo be resolved then it will execute the next one 
// async function getWeather(){
//     console.log("fetching one.....");
//     await api();  //so it will pause the neeeche ka code jab tak eska code fullfill  hi hota as async function always gives the promise 
//     console.log("fetching two.....");
//     await api();
// }
// getWeather()


// so basically the await will wait for the current code until the promise is resolved


// by doing this all the call of the api has encountered together but we need ke 2 sec ke delay ke baad ek ek karke aye 
// api()
// api()
// api()

// await kabhi bhi akela nhi chalta we need to put await inside the async function for the working
// 

// await always come under the async function so we need to use the asynawait inside the async only 

// basically what we want ke async me wait hok ke phele ek kaam ho then other then ohter 

async function getData(dataID){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            console.log("DATA");
            resolve("Success")
        }, 2000);
    })
}
// await alays be in the async fucntion 

// IIFE fucmtion that automatically executes on creation 
(async function(){
    console.log("fetching data 1...");
    await getData(111)
    console.log("fetching data 2...");
    await getData(222)
    console.log("fetching data 3...");
    await getData(333)
})()

// so baiacll it await baically woats for the code to be fullfille the promise and then holds the neeche ka execution part
getAllDetails()
// getDetails9
// humae eyah chaiye ek phele ek kaam ho then other kaam ho then aage ka kaam ho matlab async tareeke se kaam ho kste hai '
// so agar neeche ka code hum chaite ke wait kare jab tak vo coed nhi execute hota so we use the await whoch is always used inside the async function 
// we make onmly the async function 
// async function automatically returns a promise to its calling 

// await matlab us koo rukna oadega jab tak uska pomid excute nhi ho jata ans when jab vo execute ho jayega then neeceh ka code execute hoga 

// so remember that tasyn cis always used by the function and it gives us the prmoise which is uised b the await which is always use inside hte async function 











