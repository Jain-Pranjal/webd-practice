// ASync and await

// so basically we are getting the data using the async and await 
// we need to wait for the data to come so that we can control the execution of the flow of the code
// async nature of js means it will not wait for the code it will go further but if we use await then it has to wait for the executuion then move to next 

async function getData(){
    // so by using the fetch aoi we have to use the await twice as first we have to wait for the data to come and secondly we have to wait for the data to convert into the json format 
    let x=await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
          title: 'foo',
          body: 'bar',
          userId: 1,
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
    data=await x.json()
    return data
}

// stringfy vonverts into the json strings
// if i will not use the await then i will get the promise but that pomise cannot be converted into the json sok we need to use the await tok convert it into the json format


// also remember that we can only use the await in the async function 
async function main(){
    console.log("start");
    console.log("getting data");
    let data=await getData()
    console.log("the data is : -",data);
    console.log("end");
// so it will wait for the data to come and then it will proceeds further in the execution
}

main()


// Error handling in js 
// we can throw the error intentionally in js 

/**
 * 
let a =Number.parseInt(prompt("Enter 1 : "))
let b =Number.parseInt(prompt("Enter 2 : "))
if(isNaN(a)||isNaN(b)){
    // throw SyntaxError("sorry wrong operation entered")
    throw RangeError("balle balle")
}
// so basically we introduced the error intentioally
let sum=a+b;
console.log(sum);
*/

// whenever we wncountet the error then the script will stop at that point only 
// it will not execute further and for that we can handel the error 

/**basically error are of 2 types :
 * the one that is given by js 
 * the second that we want to throw to the user which was not given by js as it is a forgiven lang
 * if we know that eske ander error aa skta hai then we put it in the try block and then we can hadle the error in the catch block 
 * for throwing the custom error we can use the throw which will throw the error to the user 
 

IMP:-
try catch block works sync in nature so if we use the async function then try catch will not be able to execute it 

 */

// try{
//     hei
// }catch(error){
//     console.log(error.name);
//     console.log(error.message);
//     console.log(error.stack);
    
// }

// so basically we have 3 prop with the error object 
// name , mesasge , stack 



// checking ke jab bhi function kuch return karte hai uske baad ka code nhi chalta 
const diff=(a,b)=>{
    console.log("done");
    return a-b
    // unreachable code after return statement
    
}
// so it is cleared that after the turn the fucntion does not execute the code 
diff(4,6)
// when we want that the code will execute even after the return has been executed in the function then we use the finally 
// finallyv does not only mean that it will 100% execute its main work will eb shown in function that after the return it will still execute but the normal statement will not 


/**
 * 
let num1,num2;
num1=Number.parseInt(prompt("Enter the 1 number : "))
num2=Number.parseInt(prompt("Enter the 2 number : "))

if(num1===1||num2===0){
    throw ReferenceError ("yeah mera custom error hai so i can do anything with it ")
}
console.log(num1+num2);
*/
// so i can throw any error to the user by using the throw to it 

// so if we encounter any of the error then the program will stop executing and the script will stop 


// so it produce the error and handle by the catch block 

let hi;
try{
    console.log(hi+" bool");    
}catch(err){
    console.log(err);
}
finally{
    console.log("this will be only executed after the eveytime and even aftert the function return ");
}


// the finally will also be executed even after the return statement in the fucntion 

// Classes and Objects 
// objects are the instance of class without the class no memory is assigned to the obejct 
// object bascially are the real workd enetites 
// class os the blue print and oject is the instance of the class 

let obj={
    name:"pranjal",
    class:12
}
console.log(obj);
// prototype are the additional property of the object  such as we can inheritence the prototype 

// let animal={
//     eats:true,
//     male:true
// }
// let rabbit={
//     "jump":true
// }

// rabbit.__proto__=animal
// so basically prototype provides the additional proprty to the object in it 

// so bascailly we had created a general template and in this template we can we can create as many as real world onjects

class animal{
    constructor(name){
        this.name=name
        console.log("object is created");
        console.log("name is : ",name);
    }
    eats=true
    jumps(){
        console.log("i m jumping");
        
    }
}

let tiger=new animal("sheru")

// so bacially we can pass the real time value inside the construcutor that will save the value for us and then we can access the valiue of it 

// for making the object we need to uset he new keyword with the class
let rabbit=new animal("bunny")

// on the initialisation of the object the construcutor will automatically work 
// aslo we can pass the value to the construcutor whcih can be used by the function inside the class 

// for the inheritence we will use the extends keyword for it 
class jungle extends animal{
    constructor(name){
        super(name)  //for calling the papa i need to pass the value also
        this.name=name
        console.log("i m jungle ka raja",name)
    }
    roar(){
        console.log("i will roar");
    }
    jumps(){
        console.log("this function has been override in the inheritence");
        
    }
}

let lion=new jungle("Raju")

// so basically by extending we have done the inheritnce of the parent into the child now we can access both the child as weel as the parent property into it 
// super is keyword jo bolta hai ke phele mere papa ko chala ke ayo then i will run 


// METHOD OVERRIDING 
// so basically method overriding means that we overrie the function which can only be happen in the case of inheritence and in this we take the same name of the function , smae arguments and same return type but just we change the defination of the function 


// as we know that object are the instance of a class so we can also check by using the fucntion isinstanceof




























