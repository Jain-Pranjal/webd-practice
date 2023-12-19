// there are 7 types od primitive datatype in JS 
/*boolean 
string 
number 
bigint 
null 
symbol
undefined */

// in the js we use the let or const keyword to make a variable as let and cosnt are the local based keyword 
// try to avoid the var as it is a local keyword so we will be avoiding this term in the progeam 
// they are basically used to store the value inside the program 
// js is a dynamic labg so we need to mention th edata type while declaring the variable 

// object is not a primitive it is made by using them as it contain the key value pair in it 

// we will use the let varibale for dcalring the variable in th ejs as let is the block scoped and var is the global scoped thats why we prefer to use the block scope only


// JS is a dynamically typed language means we need not to tell the variable what type of value we are storing inside it 
// it typically means it will automatically analyse the datatype of the value a variable is storing inside it 
// we need not to mention explictily about the datatype a variabel is storign

// let and var diff 
/*let keyword and cosnt is a local scoped keyword 
var is a global scope keyword 
var keyword can be used for redeclaration and can be used for reupdation 
let can be used for reupdation but cannot redecalration and it is a local scoped 
const can neither be redeclaration nor reupdataion  */
let a;
console.log(a)
// it will give the undefined as there is no defination of the variable

let name="jain"
function naam(){
    // let name=prompt("what your name ")
    console.log(name)
}
console.log(name)
naam()
console.log(name)

// so we can see that let is a local scope and its scope is basically there in the block of the code only and not outside of it 

// we can chnage the keys of the const object 
const obj={
    name:"prnajal",
    age:54,
    school:"bmps",
    isfollow:true
}
console.log(obj)
// this is how we can update the object key in it 
obj["name"]="rahul sharma "
console.log(obj["name"])

obj["age"]=obj["age"]+5
console.log(obj['age'],"\n")




let saal=20; //out of the function scope 
function year(){
    let saal=50;
    console.log(saal)
}
year();
saal=100  //reuodae is allowed 
console.log(saal)  


// so the == compare only the value but 
// === it compare the value as well as the type of the variable 

// == compare only the value 
// === comapre the value as well as the datatype of the variable 
let var1=45 //number 
let var2="45" //string
console.log(var1==var2)  ///== compare the value 
console.log(var1===var2)  ///== compare the value and the datatype  

// === mostly used 
if(var1===45){
    console.log("yupeee !!!")
}

// we use the ternary operator for comparing the simple if else statemtn 
// when we have to check only the 1 condition then we use the ternary operator there only 


// using the ternary operator 
// less used as it is only for comparuiing simple if else statement 
let fname="pj";
fname==="pj"?console.log("yes"):console.log("no")

// so for taking the input in the JS we can use the prompt 
// let num=prompt("enter the numnber :")
// if(num%5===0){
//     console.log("div by 5")
// }
// else{
//     console.log("not ")
// }

// let score=prompt("enter score : ")
// let grade;
// if (score>=90 && score <=100){
//     grade="A"
// }
// else if(score>=80 && score<=90){
//     grade="B"
// }
// console.log(grade)

// loops 
// there are various types of loops ; for while foreach forof forin 

// in the javascript th earray can have the multiple datatypes in it 
// as js a loose typed language so it can contains the multiple datatype inside the array
let arr=[1,2,3,4,5,6,"pranjal jain"]
// for (let i =0; i<arr.length;i++){
//     console.log(arr[i])
// }

// this is the normal way of looping the items 
// we can use the forof llop

// so we can use the forof loop for the iterable object 
for (const iterator of arr) {
    console.log(arr[iterator])
}


let object={
    "name":"pranjal",
    class:12,
    phone:999985515
}
for (const key in object) {
        const element = object[key];  //so it is printing the value of th ekey 
        console.log(element)
        
    }
console.log(object["name"])


// let home=prompt("enter the house numner ")
// if (home<100){
//     console.log("u r not elligible ")

// }else{
//     console.log("good luck")
// }


// we can add another object inside a object 
let o={
    "name":"pranjl",
    "age":5,
    "is_folllow":true,
    "mynew":{
        "fname":"sachin",
        "lname":"aggarwal"
    }
}
// console.log(o)
o["love"]=true;
// console.log(o)
o["name"]="shreya"
console.log(o)

// === checks the value as wellas the datatype of the varibale 
// == only check the value 
// so to check the value as well as the datatype use the === mostly used 

// loops 
// in the js we have various types of the loop 

// we can iterate this in the array aslo
// array in th JS can have the multiple datatype as JS is a loosely typed language  so the array in the js can have the multiple datatype in it 

console.log("\nusing for loop")
let myarr=["pranjal",665,true,52.55]
for(let i=0;i<myarr.length;i++){
    console.log(myarr[i])
}
console.log("\nusing the while loop")
let i=0
while(i<myarr.length){
    console.log(myarr[i])
    i++
}

/**
 


// for of loop is used for iterating object like the array or strings means those which can be iteratble in nature 
console.log("\nusing the forof loop")
for (const iterator of myarr) {
    console.log(iterator)
}


console.log("\nusing the forin loop")
// forin loop is used for traversing the keys of th eobject 
// for in loop is used to print the keys and the values inside the object 
for (const i in obj) {
    const element = obj[i];
    console.log(i,element)   //object[key]=value
    
}
// for using the js strign template we ahve to use use the ` ${variable name }`
// it is same as the fstring that we use in pytho =n
// let myname="prabaj"
// console.log(`${myname}`)



// function in JS 
// they are used for code reusabaltiy in the prgram 
function letter(name,_class,rollno){
    console.log(`hello friend, my name is ${name} and i m studying in class ${_class} and my roll no is ${rollno}`)
}
// function calling 
// fullname=prompt("enter the name :")  //we can take the input using the propmt 
letter("sanjay","12",20311502721)
letter("hardik",12,20511502721)
// letter(fullname,12,20511502721)
// `${name}`


// we can also store the value and use that later on or pass the same value to the another function 
function increase(num){
    return num +10;
}

function Square(num){
    console.log(num**2)
}

let number=increase(5)
console.log(number)
Square(number)

*/

// so use the string template by using the `${variable name}`

// Arrow function 
// we use the arrow function in order to name the funcion as the variable name 
const func1=(parameter1)=>{
    console.log("hello i m a arrow function ",parameter1)
}

// to use the arrow function we can use the fucntion name inside the vairbale so the fucntion can be used as the variable name 
func1(100)

const sum=(a,b,c)=>{
    return a+b+c;
}

let result=sum(10,20,30)
console.log(result)


// use the arrow funciton :- itis basically used for making the funciton as the variable name 
// simple concept 
// for using the string literal template use the `` and the ${variable name }
const myfunction=(bloodgrp,phone,city,country)=>{
    console.log(`my city is ${city} in ${country} with the blood grp of ${bloodgrp}`)
}
// in this way we can use the arrow function with the string template 
myfunction("B+",88946515,"delhi","india")

//  so making const functionname=(parmaenter)=>{code}

// faulty calc
random=Math.random()
console.log(random)
if (random<0.1){
    console.log("wrrong operation ")
}
// use the if else 
// try not to use the eval 
// math.random generate the random from 0 to 1


// strings
// so use the literal template we use the 
// console.log(`${variable name}`)


// all these operation are not going to change the original string they just make a another string and if we want the string to change then we have to store it back to it 

let friend="                 shreyaaa is a grill"
// use the slice operation to slice the string 
// console.log(friend.slice(1,5))  //it will slice the string 
// console.log(friend.replace("grill","boy"))  //replace of the string
// console.log(friend)
// console.log(friend.trim())


// in this we do the slcing of the string by using the slice function 
// console.log(friend.slice(5,10))

// original string will remain the same as they are immutable in nature 


function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}

/**
 * Returns a random integer between min (inclusive) and max (inclusive).
 * The value is no lower than min (or the next integer greater than min
 * if min isn't an integer) and no greater than max (or the next integer
 * lower than max if max isn't an integer).
 * Using Math.round() will give you a non-uniform distribution!
 */
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
// in the js we can us ehte random number bw the 0 and 1 only vo  bhi in lfoat 


// business name generator 
let adjective=["crazy","amazing","fire"];
let shop=["engine","food","garment"];
let last=["bros","limited","hub"];
// let companyname=adjective[]
// making it mire random by using the the random in all thiggs 
// let rand1=getRandomInt(0,2)
// let rand2=getRandomInt(0,2)
// let rand3=getRandomInt(0,2)
// console.log(rand1,rand2,rand3)
// console.log(adjective[rand1]+" "+shop[rand2] + " "+ last[rand3])

let ran1=Math.floor(Math.random()*3)+1;
console.log(ran1)

// as we know that mah. rnadom generate a random number from 0 to 1 0 include and 1 not inlcdued(0.999)
// so if we multipley the number then it range will be incrrese to it by that number 



// we are generating a rnadom numbe form the range of 0 1 2 which willbe used as the index iside the array 
function randomnum(){
    rand=Math.floor(Math.random()*3)  //it will never go to 3 so floor value will be 0 1 2
    // console.log(rand)
    return rand;
}
console.log(adjective[randomnum()]+" "+shop[randomnum()] + " "+ last[randomnum()])

// and if the number random is ranging from the 0 then increase the 1 

// DOM manipulation 
// 
// all the elelments will be in the tree like strucutre which can be chanegs by using the DOM manipulatuon 
// doucment object model is basically used to map the entire html as the document tree 
// means we are making the tree like strucutre of all the tags and elements using the DOM so we can 

// widnow is the main global object that is a global object and inside it wr have the document 

// nodes contain both the comment nodes as well as the text node 
console.log(document.body.firstChild)  //firstchild also takes the nodes such as the text or the comment 
console.log(document.firstElementChild)  // it will give only the element first of the html

// the querselector will select only the first class witht the matching one 
// for selectong all the elements with the same class we need to use the wueryselectorall in the for each loop
// use the arrow function with the queryselector in order to select all the boxes of the same class

// document.querySelectorAll(".box").forEach(e=>{
//     console.log(e)
// })




// in this way a arrow function work 
// normal arrow function :- we use the arrow funciton in order to store the funcion inside the variabel name 
// const minus=(a,b)=>{
//     return a-b
// }
// let diff=minus(3,1)
// console.log(diff)

// the first child or the last child includes the nodes also suchas the comment or text node 
// whereas if we write the firstelement or lastelement hen it will only give the element to us i.e. only the elements of the html

// for the parent we can use the 
let cont=(document.body.firstElementChild)

// to find the elemenet sibling we can use the previous element sibling 
console.log("previous sibling is of box 2: -",cont.children[1].previousElementSibling)
console.log("next sibling is of box 2: -",cont.children[1].nextElementSibling)

// to find the content from the table 
console.log(document.body.children[2].rows[0].cells[0].innerHTML )
console.log(document.body.querySelector("table").children[0].children[2].children[0].innerHTML="jain sahab" )  //jist going inside the tree

// there are vaeious methods for the selelction insiede the DOM
document.getElementById("myid").style.color="purple"


// the queryselector will select the clss of the first elemetn only 
// if we want to access alal the elements of the class then we have to use th eforeach loop 

document.querySelector(".box").style.color="red"
// it will select only the first element of the matched class 

// the queryseletotrall will give all the elements in the html collection which need to be iterate by the loop
document.querySelectorAll(".box").forEach(e=>{    //by using the arrow fucn
    e.style.color="blue"
})

// let items=document.querySelectorAll(".box")
// for (let i = 0; i < items.length; i++) {
//     const element = items[i];
//     console.log(items)
// }


// so th queryselectorall gives the nodelist that we need to iterate it so that we can change the properties of it 

// mathces clossest and contains methods 
// use the matches to match the css selector 
console.log("it will match the css id or any selector : ",cont.children[2].matches("#myid"))

// the main thing in this we had learnt that "document.querySelector(".box")" will select only the first box which matches the class name with it 
// if we want to select all the boxes having the same class then we have to use the "document.querySelectorAll(".box")" with the for loop to iterate all the elements of the container 

// ARRAYS
//to store multiple elements imside a single name we use the array 
// in JS we can store multple datatype inside the array as js is a losseley typed language so it will store multiple vallues of multiple datatype 
// os to convert the array into string we can use the tostring 


let array=["pranjal",false,true,54.21,4,"school","home"]
console.log(array)
console.log(array.length)

// arrays are mutable in nature we can change the array 
array[0]="khanna"
console.log(array)


// array methods 
console.log(array.toString())  //converts the array into the string separated by commas 
console.log(array.slice(1,4))  //sliing of the array 

// there are 4 methods for insertion and deletion of eleements in the array 
// push and pop :- at the end of the array 
// shift and unshift  :- from the starting of the array 

console.log(array.push("last"))
console.log(array)
console.log(array.pop())  //it will remove the element from last 
console.log(array)

console.log(array.unshift("first"))  //adding the new element in the start 
console.log(array)
console.log(array.shift())  //removing the new element in the start 
console.log(array)

console.log(array.join(" & "))

// push and pop works on last 
// unshift and shift works on first 

console.log(delete(array[2]))
console.log(array)
// so delete basicall remove the element from the array but its space will be remain there
// memory is allocattess

// so for concating the array we can use the concat functionn
// AFTER THE CONCATINATION IT DOES NOT CHANGE THE ORGINAL ARRAY 


// we can aslo sort the array and this will do the changes in the ORIGINAL ARRAY ALSO 
// array.sort()

// so splice is basically used for removing elemts from a position and kitne hatana hai 
console.log(array.splice(1,2,"love","cute"))
console.log(array)

// splice takes the parameter (from what positioon to delete , how many delete , what are the items to be inserted to that deleted position )
// so splice basically change the actual array 


// LOOPS IN ARRAY 
// in c++ we also had learned that for traversing the array foreach loop is best for it 

// for each loop in array 
array.forEach(element => {
    console.log(element)
});
console.log("\n")


// we can also use the forof loop for traversing in array 
for (const iterator of array) {
    console.log(iterator)
}


// map filter and reduce 
let simple_arr=[1,2,3,4,5,6,7,8,9,10]
let sq_arr=[]
// for (let i = 0; i < simple_arr.length; i++) {
//     const element = simple_arr[i];
    // sq_arr.push(element**2)   //in this we are pushing the elements inside a new array 
// }

// easy way of doing this 
// let sq_arr=simple_arr.map(e=>{
//     return e**2
// })

// console.log(sq_arr)


// filter :- it will make the array based on certain condition 
const greaterthan7=(e)=>{  //arrow function of making the function as trhe vacriable name 
    if(e>7){
        return true
    }else{

        return false
    }
}

console.log(simple_arr.filter(greaterthan7))
// console.log(sq_arr)

// so basiaclly we are making a array out of a used aray using some filter condition in that 
let new_arr2=[]
let new_arr=[5465,4684,8,48,651,1,31,56,46,48,4,51,5,13,13,1,5,84,864,84,65,13,132,3,0,1,564,84,8,4]
// now i have to make a array using this by satisfying some condition in it 
const greaterthan100=(e)=>{
    if(e>100){
        return true
    }else{
        return false
    }
}
// i have to apply the filter on the original array 
console.log(new_arr.filter(greaterthan100));

// thats why when we need to make a new array from a older one then we can use the filetr property which will make after true of th ecertain conditiom


// const cubic=(a,b)==>{
//     return a*b;
// }

// reduce 
// console.log(new_arr.reduce(cubic))


// array.from 
console.log(Array.from("harry"))
// we can use the array.from to make the array from any object 

// factorial 
let fact=1
// let num=prompt("enter the number : ")
num=5;
for(let i =num;i>0;i--){
    // fact=fact*i
    fact*=i
}
console.log(fact)


// generating a array 
let sample=5;
ar=Array.from(Array(sample).keys())
console.log(ar)
// making an array from the number 
// ar=Array.from(Array(sample).keys())


// Array.from //this from is used to make th array from the value given into it 
// we have given Array(number).keys()  //this keys function is an iterable object that will iterate to every value of the number to make the array


// to make the array we use the array.from and inside we pass the array(any number to which we make the array).keys 
// so we can make the array by using the shortcut like  we want the array from a range of number 
let Numbers=5
Array.from(Array(Numbers).keys())
// so we can make the array by this shortcut trick 
// we can make the array from the "from" keyword 
console.log(Array.from(Array(520).keys()))

let color=["red","orange","blue","yellow","green"]
let backcolor=["red","orange","blue","yellow","green"]

rand_color=Math.floor(Math.random()*5)
rand_backcolor=Math.floor(Math.random()*5)

console.log(rand_backcolor)
console.log(rand_color)
document.querySelectorAll(".box").forEach(e=>{
    e.style.backgroundColor=backcolor[rand_backcolor];
    e.style.backgroundColor=`rgb(222,62,45)`
    e.style.color=color[rand_color]
})

// or we can select the value of the color from the color codign
// let R=Math.floor(Math.random()*256)
// let G=Math.floor(Math.random()*256)
// let B=Math.floor(Math.random()*256)
// console.log(R,G,B)
// document.querySelectorAll(".box").forEach(e=>{
//     e.style.backgroundColor=rgb(R,G,B);
//     e.style.color=rgb(R,G,B);
// })
// rgb(144, 238, 144)

// taking the random number from the math module and from a given range 


// some things about using the random in JS 
// in js the math,ramdom basicalyy produces a value from 0 to 1 (not include ) so if we wnat that to generate the random number then multiply it by that specific number so that we can get the range 



let Random=Math.ceil(Math.random()*10)   //so basically it will give the value bw 0 and 1 
console.log(Random)  
// so it will always be less than 10 as it is not included in 10 so we can also use the math function floor and ceil 
// floor round off to low and ceil round of to upper 
// and if we wnat ke value upar jaye so at last we can add the number 

// in this way we ca generate the random number from the random module 



// we can make the array by using the from and iterate them 
let q=(Array.from(Array(5).keys()))
// by using the from we can create a array from it 
console.log(q)
// for iterate the array we can use the traditional for loop or foreach loop with the arroe function 
q.forEach(e=>{
    console.log(e)
}) // so byv using this we can make the iterateion in the array by usign the foreach loop 


// Array.from(Array(5).keys()+1).forEach(e=>{
//     console.log(e)
// })


// inserting and removing elements from the dom 
// the outerhtml includes the full html inside it + the element itelsf also 


// hasattributes will check wheter the given have the foloowing attribuyte or not 
console.log(document.body.querySelector(".link").hasAttribute("href"))
// hasattrbiute bascially check whether we have that attribute or not 

// get attriebute to get the value of the attribute 
console.log(document.body.querySelector(".link").getAttribute("href"))

// setatrribute is used to set the value of the attribute 
console.log(document.body.querySelector(".link").setAttribute("href","###"))  //it will set the new value of the attirbuye
console.log(document.body.querySelector(".link").getAttribute("href"))


// to get all the atrribiutes we can use the .attributes 
console.log(document.body.querySelector(".link").attributes)

// to set the attribiutes use the set attribiutes 

// wec an also store the info in the data attribute 
// by using the dataset we get all the data attributes
console.log(document.body.querySelector(".link").dataset)



// insertion methods in the js 
// we can dynamiclyy add the element in the js 
// working with the attributes 
// we can add set and shiw the attributes

// lets make a element 
// to make the element we just write the name of the element in the create element 
let mylink=document.createElement("a")
mylink.setAttribute("href","https://www.google.com")
mylink.setAttribute("target","_blank")
mylink.setAttribute("class","orangeLink")
mylink.innerHTML="this is the <b>inserted link</b>"
// document.body.insertAdjacentElement(mylink)
// document.body.after(mylink)
// document.body.before(mylink)
document.body.append(mylink)
// document.body.prepend(mylink)

// using the append we can insert the element at the end 
// we can insert the element before afer append or prepend 

// append measn ke sabse end me 
// after means ke us element ke baad 

// if we can insert the html we can use the insertAdjacentHTML

// we can make the elemnt just by previous method and make the inner html and place it at the position 
let mypara=document.createElement("p")
mypara.innerHTML="this is the paragraph <i>jain</i>";
mypara.setAttribute("class","redpara")
document.body.querySelector(".container").after(mypara)


// so to make th eelement there is need to  use the document.createelemtn 
// we can aslo use the inser html 
let mycont=document.body.querySelector(".container")
mycont.insertAdjacentHTML("afterend","<b>this is pranjal</b>")  //adding the html 
mycont.insertAdjacentElement("beforebegin",mylink)  //adding the element 
// so we can insert the html like this 


// we can also get the class name and the class list 
console.log(document.body.querySelector(".container").classList)  //here we can get all the class list   // it will give the list 
console.log(document.body.querySelector(".container").className)  //here we can get all the class names    //it will give the name

// we can also add or remove thr class from the list 
console.log(document.body.querySelector(".container").classList.add("new_class"))   //adding the new class in the list 
console.log(document.body.querySelector(".container").classList)  


console.log(document.body.querySelector(".container").classList.toggle("bg-lightBlue"))  
// so we can toggle the class inside the element on or off








































