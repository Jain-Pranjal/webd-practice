// js is a forgiven lang
// standard is ECMA script to which js follows all the standars 
// so basically js is a dynamic typed language as we can change the datatype at the run time 
let a="prnajal"
a=65;
console.log(a)
// we can change the datatype at the runtime so it is a dynamic type labg 

let b;  //decale is allowed 
const c=63;  //but here we have to initialised the value also 
// the cosnt is always initilaise with the value 

// so js is a dynamic typed language as we can change its datatype at the runtime of the variable 
// b="pranjal jain" 
// console.log(b)
// b=5454.2
// b=true
// console.log(b)
// so basically we can change all the datatype of the variable at the runtime that why js is a dynamiclly typed language 

// var is a global variable can be be redecalre and reupdated 
// let is used as it only allows reupdate of the value 
// let can be used for assigning only one decalration at a time and then we just need to iupdate 
// const for defining the constant value of the variable 


// for the non primitive datatype we have the :- object array funcition 
// basically these are user defined things 
const obj={
    "name":"pranjal",
    "age":20,
    "isfollow":true,
    "city":"delhi"
}

console.log(obj["age"])  //for printing the keys 


// for iterating the object we use the forin loop 

for (const key in obj) {
    const ele=obj[key] //it will print the value of the keys 
    console.log(key , ele)
}

// objects is a collection of th eprimitive datatype only 
console.log(typeof(obj["age"]))  //but inside of th eobject it is made up of th eprimitive only 
// using the objects wee can do the mapping of the keys and values 


// // used for the iterable objects 
// for (const iterator of "pranjal") {
//     console.log(iterator)
// }

// for in loop basically used for iterating inside the objects

// so i can change the obj aslo after the decalaration of it 
obj["blood"]="B+;"
// console.log(obj)
// also we can change the value also or update it 
// iterate the object 
// for (const key in obj) {
//     console.log(key) //it will print all the keys of the obj
//     console.log(obj[key])  // it will print the value corresponding to that particlaur key 
// }

// console.log(obj)
// obj="hello" //as it is declared by the let so we can update the objec tbut if it is declared by const then it cannot be change 
// console.log(obj)
// we can change or add the value and the key inside the const 
obj["country"]="india";
console.log(obj)

// we habve to use the const max 
// postinc will do the operation in the memory but print the previous value 
// pre inc will do the opertaion and print the curreent value after the operation

// ternary operator 
let num1=50;let num2=10;
((num1>num2)?console.log("a is big"):console.log("b is big "))
// console.log(b)
// used for simple statement 
// so the prompt type is always a string same as the python imput type 


// the propmt alwasys take the input in the form of the string so we need to convert it into number then we have to use the typecasting 
// let phone=Number.parseInt(prompt("number plis : "))
// console.log(typeof phone)
// so the prompt always print the type of string 
// console.log(45+phone)  // but it will print the string so it will do the string concatenation

// so using the Parseint funciton of the number we can convert the datatype into the number 
// so typecast the variable into number using the parseint

// use the numebr function to typecast the value of the number into either parseint or by parsefloat

// let tel=Number.parseFloat(prompt("enter the number : "))
// console.log(tel)
// console.log(typeof tel)
// // so tyoecast it into the number type 
// console.log(tel+10)

// switch (tel) {
//     case 1:
//         console.log("f")
//         break;

//     default:
//         console.log("fg")
//         break;
// }

// let age=15;
// (age>18?console.log("dsdsd"))


// this basically is used for traversing the objec tkeys 
// for (const key in object) {
//         const element = object[key];  
//     }
// // this for of loop is used for iterating the iterable object 
// for (const iterator of object) {
   
// }

// prohram to add natural nummber
// let num=Number.parseInt(prompt("Enter number  : "))
// let sum=0
// for (let i =0;i<=num;i++){
//     sum+=i
//     // sum=sum+i
// }
// console.log(sum)

// for arrays i would liketo use the for each loop as in c++ we use the for each loop for the same 

let arr=[2425,5,486,"pranjal"]
// arr.forEach(element => {
//     console.log(element)
// });

// for (const iterator of arr) {
//         console.log(iterator)
    
// }

// so we can use the for of or for each loop for iterating inside the array 

// for of loop is used for the iteratble object but object is not iterable as it has 2 things in it keys and values 
// for (const iterator of obj) {
//     console.log(iterator)
// }
// obj is not iterable
// so for iterating the object and the its key and values we need to use the forin loop

// in this way we can iterate the object keys and value using the forin loop 
for (const keys in obj) {
        const value = obj[keys];
        console.log(keys," ",value)
}

// forof loop is basically used for array or iterable object such as string 
// ehike loop
// let j=0;
// while(j<5){
//     console.log(j)
//     j++
// }

// funtion 
function average(x,y){
    return (x+y)/2
}
let avg=average(4,5)
console.log(avg)


// also we can create a arrow function 
// arrow function means we are making a function just like the variable name 
// the arrow function is used when we want to write the function in the form of the variable name and for that we use the arrow function 
// it simply takes the parameter in it and we will use the  let or const just like the function name to be declared 

// const functionion=(parameter)=>{
    // this is the arrow function
// }

const multiply=(a,b)=>{
    return (a*b)
}
let mul=multiply(10,2)
console.log(mul)

// const func1=(paramert)=>{
//     finction body 
// }

// cosnt arrow=(param)=>{
//     function code 
// }


const marks={
    "pj":52,
    "dfgdg":552,
    "f":5211
}
// by for loop 
for(let i =0;i<Object.keys(marks).length;i++){
    // console.log(Object.keys(marks)[i])
    console.log(marks[Object.keys(marks)[i]])
}

// for (const key in marks) {
//     console.log(marks[key])
// }

console.log(Object.keys(marks))  //it will give in the array form 

// while(true){
//     number=Number.parseInt(prompt("enter : "))
//     console.log("try again")
//     if(number===5){
//         break
//     }
// }
// always try to make the arrow function for the functioning
const mean=(x,y,z,q,r)=>{
    result =((x+y+z+q+r)/5)
    // using the template literal the same way we use the fstring in python 
    console.log(`the value of x is ${x} and mean is ${result}`)
}
mean(1,2,3,4,5)
// strings are immutable in nature 
// we cannit change the value of the string using index value 

// moerover the methods used in the string make a new string , not update the original string 
let myname="pranjal"
myname[0]="l" //cannot change the string once it is declareed
console.log(myname)
console.log(myname.slice(1,5));
// console.log(myname.split("n"));
console.log(myname.replace("l","z"));
console.log(myname); //original string does not change anytime it wilk be intact as it is 

// trim basically eliminates the white spaces and the trailing space it has 
console.log(myname.trim());
console.log(`hi "${myname}"`);

let amt="i have rupees 1000"
console.log("i have rupees ".length)
console.log(amt.slice(14));


// in js arrays contian the multiple datatype items and they are mutable innature means we can add or remove the items inside the array 
// all the changed are made to the main array only 
// console.log(Array.from("pranjal")); //this from function makes the array 
arr=["pranjal",true,"jain",54,6468,478,468,1,351,3,1]
// console.log(arr);
console.log(arr.length);
// for the arrays we use the foreach loop with the arrow function it is more convenient 

// arr.forEach(e=>{
//     console.log(e);
    
// })

// moreover array are mutable in nature so there hanges will be occur in the original one only 
arr[0]="shreya"
// console.log(arr);
//array are mutable in nature
// we can add or change the value of the array 
// moreover for traversing the values inside the array we can do as :

// using the for of loop we can do this as also 
// for (const i of arr) {
//     console.log(i);
    
// }

// also we can use the for each loop for that 
arr.forEach(e=>{
    console.log(e);
})
arr.unshift("jainco")  // so adding the value at the starting of the array 
// console.log(arr);
console.log(arr.toString());
let newarr=[55,66,99,77]
// console.log(arr.join(newarr));

// join bascially adds the char at the between of all th array elements
// basically join joins all the elemets using a separator bw them 

console.log(arr.length);
// delete operation deletes the value but keeps the memory allocated for them 
delete arr[1]
// console.log(arr); //so baically it will leave the empty space for the memory 
console.log(arr.length);

// so the delete operator will reserve the space in the array and lenght will remain same but the element will be delete 
delete(arr[2])
console.log(arr);
console.log(arr.sort());  //it will sort the array into the alphabetically order and also do the changes into the origianl array also 
// console.log(arr);
// the sort basiallly sorts the array into the alphabetvially order 
// so sabse phele 1 se then 2 se then 3 se ......

// the sort function of the array will sort the array (original array ) into the alphabetically order  only 
// the sort method sort the array into the alphabetvcially order not into the sequence 
// + the sort also modifies the original array also 

// delete method is used to delete the array element keeping reserve of it s memory intact and length of the array also 
// so the space will be reserved in the memory 

delete arr[2]
console.log(arr);
console.log(arr.sort());
// concat joins the 2 array with eacjh other 

// the sort method sort the elements of thr aarray into the alphabetcailly order not in the sequence order 
// the changes made by the sort is done into the original array also 


// so the sort method in Js arranges the elements in alphbetivally order and also it changes the original array by sorting the elements 
const compare=(a,b)=>{
    return a-b
}
console.log(arr.sort(compare))  //now the array is sorted in ascending order 

// splice function is used to add and remove the elements from the array 
console.log(arr.splice(1,5,"item1","item2","item3","item4","item5"));  //so splcie returns the array of the deleted items and aslo it  takes the parmaeter of thr adding 
// console.log(arr.splice(1,4));
console.log(arr);

// splice and the sort modifies the original array 


// rememner that we have to use only mostly the extnal script tag for the 2 benefits :
//  separtion of concern and for web caching for the faster reload of the pages

console.assert(33>55)  //asseration means the statement that we give 

// console.table shows the key and values of the obj in the table manner 
console.log(obj);
console.table(obj);
// so by using the table we can print the key and values in the tabular formant 

console.info("this is an information")
// assertion will show an error message when it is failed 


// we can use the time and timeend for calculating the time execution of the process 
// but we have to give the same label for it 

/*

console.time("forloop")
for (let i=0;i<=10;i++){
    console.log(i)
}
console.timeEnd("forloop")

console.time("whileloop")
let i =0;
while(i<=10){
    console.log(i)
    i++;
}
console.timeEnd("whileloop")

*/


// prompt take the user input in the form of string 
// to covert it use the Number.parseint or parsefloat 
// let hello=prompt("enter he njumber ")
// document.write(hello)  // so documnent will write the thing onto the webpage 

// ARRAY
// all the operation done on the array will be done on thr original array 
// string aer immutable in naure while arrays are mutable in nature 
let myarr=["jain",52,44,55,66,99,5555,88,77,true,"prnajal"]
console.log(myarr)
// using the foreach function we can loop the array 
myarr.forEach(e=>{
    console.log(e);
    
})

// the changes done or the operation perforamed on array are done on the original array only 
// funcion of the array 
console.log(myarr.toString()); //convert in inot the string 

// we can crete the array from using the from 
console.log(Array.from(Array(5).keys()));

// if we want to create the array to any specific number then we can use the sybtax 
// console.log(Array.from(Array(50).keys()));

// moreover we can create a array by using the from keyword 
console.log(Array.from("pranjal jain").join(" % "));  //so it will make the array from this string 
// join is used to separate all the elements using a separator 

// push pop shif unshif t sort :- works on the original array as array is mutable in nature 

let r=myarr.pop()
console.log(r);  //it will return the popped elemetn of the array 
// console.log(myarr);

// delete is the operator that bascially remove the leemetn from the index but keeps the memory of the element 
delete myarr[2];
console.log(myarr);
// the space of the element is remains same 
console.log(myarr.length);
// the lenght also remains the same it does not change 

// the delete operator bascially resserves the spacce of the element inside the array  

// for slciing we can use the slice function 
console.log(myarr.slice(2,5));  //goes to n-1 element

// sort changes the original array and it orders the array elemets into the alphabetically order 
// it change the original array 
console.log(myarr.sort());  //it changes the orignal array and arranges the array into the alpabetivcally order 

// if we want to change the order intot he asc or desc then pass the argumen t
const compares=(a,b)=>{
    return b-a  //ascending order
}
console.log(myarr.sort(compares))



/*
const age_comparison=(a,b)=>{
    return a-b   //ascending order of the array 
}
age_array=[36,88,41,32,65,10,3,26,96,41,12,55,43,22]
console.log(age_array);
// os if we want to sort the array into the ascending order then 
console.log(age_array.sort(age_comparison));
*/

// splice is basically used to add and remove the element from the array at a same time 
console.log(myarr.splice(1,4,"SRK","shreya","sanya","yash","vishnu"));
console.log(myarr)
// do from the index 1 to 4 it will delete the element and pop out and in place of that it will add the element to it 
// it not necessary that we will gove fixwd amt of the elements inside the array to add in splice 

// so just splice remove the element fromt he index mentioned and add to those position given
// splice also modifies the original array as array are mutable in nature 

// so there are push pop shift unshift sort splice reverse all will modify the original array 

// looping inside the array 
// using the for each loop to traverse the array 
// myarr.forEach(e=>{
//     console.log(e);
    
// })

// using the traditional for loop 
// for (let i=0;i<myarr.length;i++){
//     console.log(myarr[i]);
    
// }

// using the forof loop for the iterable things 
// for (const iterator of myarr) {
//     console.log(iterator);
    
// }

// using the forin loop to iterate the array 
// for (const key in myarr) {
//         const element = myarr[key];
//         console.log(element);    
// }

// array from is used to creare the array 
// for eg 
// we can create the array from the string value as well :- 
// it is used to create an array from any other object 
console.log(Array.from("jain sahab"));
console.log(Array.from(Array(10).keys()));
// it will give the array of the numbers of the range specified to it f

// we cannot apply the foreach loop on the html collection thats why we need to convert them into the array using the for method 


// so remember that for each is not applicable on the html collection thats why we need to convert them into the array onto ehich we can apply the foreach method 
// Array.from(htmlcollection).foreach(e=>{console.log(e)})

// Array.from is used to make the array from any other things 

// Arrays is the kind of object 
// just like the object it has keys , Arrays has also the keys to whcih we can crreate the array out of ot 
console.log(Array.from(Array(11).keys()));


// map filter and reduce are the modern js methods 

let odd_arr=[1,3,5,7,9,11,13,15]
let div_by_3_arr=[]

function divby3(odd_arr){
    return 
}
console.log(odd_arr.filter(divby3));

// map and the foreach takes value index and array as the argument 
// it makes a new array 
odd_arr.map((value,index)=>{
    console.log(value,index);
    
})


// filter function 
div_by_3_arr=odd_arr.filter((d)=>{
    return d<10
})
console.log(div_by_3_arr);

// the filter function bacailly filters out the value of the array and make a new arrya of it 
let new_arr=odd_arr.filter(d=>{
    return d%3==0
})
console.log(new_arr);

// PRACTISE QUESTION 
// Q!
let user_arr=[]
while (true){
    let num=(prompt("enter the number "))
    if(num=="q"){
        break
    }
    user_arr.push(Number.parseInt(num))
}
console.log(user_arr);

// Q3
// filter the numbers
divby10=[]
// user_arr=[10,21,20,30,51,50]
divby10=user_arr.filter(e=>{
    return e%10==0
})
console.log(divby10);

// this will take the input from the user and then produce the array by filtering the values div by 10 

// map and filter makes the new array out of the old one by perfoming some function on it 




