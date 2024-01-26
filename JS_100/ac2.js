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










