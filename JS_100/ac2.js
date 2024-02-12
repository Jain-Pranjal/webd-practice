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
// so it will execute the function after the 2 sec 

// fujnction callikng me delay dekhna haij so i use the setikmeout ikniskde it 


// function data(dataid){
//     console.log("data :",dataid);
// }

// so we need to pass the arrow function otherwise it will execute immediately which isnot good

getData(1234,()=>{
    getData(256)  //not passing the next callback so it will give an error
})

// now if i want the next data then i can pass the callback funcion 

// so it will chekc if ke hai to he next data chala varna nhi 
// to deal with the callback hell we use the promises 




































