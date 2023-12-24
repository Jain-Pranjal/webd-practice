// Exercise problem of guessing game 
/*
let rand=Math.ceil(Math.random()*100);
console.log(rand);
let count=0;
while(true){
    user_num=Number.parseInt(prompt("enter the guess : "))
    count+=1  //jaise he user input chale count will be +1
    if(user_num==rand){
        console.log("correct guess");
        console.log(`The total trial is ${count}`);
        break
    }

    else if(user_num>rand){
        console.log("go lesser");
        
    }
    else if(user_num<rand){
        console.log("go higher");        
    }
    
    else{
        console.log("incorrect guess try again ");
    }
}
// when the guess was correct then it will be out of the loop 

*/
// console methods 
console.assert(3>12) //so assertion is a statement 
const obj={
    name:"pranjal",
    company:"JAINCO",
    income:"50Cr",
    city:"delhi",
    ispopular:true
}
console.table(obj)
//  time and timeend function of consoile is used to measure the time taken by th eprocess for the execution 
console.time("for")
for(let i =0;i<5;i++){
    console.log(i);
    
}
console.timeEnd("for")

console.time("while")
let i=0;
while(i<6){
    console.log(i);
    i++;
}
console.timeEnd("while")
// so this is used to print the time execution with the same name 

// let a=prompt("enter the number : ")
// if(a>10){
//     confirm("r u sure ?")
//     if(confirm){
//         alert("u r winner")
//     }
// }
// else{
//     alert("sorry")
// }
// so basically to compare the time we can use the console.time and console.timeend with the same label in both 
// bom and dom 

// window is a global object so that we not need to write it again 
// directly access it by document 
// DOM basially reoresents the html in hte form of  javascript document tree 

// so dom makes the document tree of all the html elelmetns and we can access the tree from it by navigating every bracnh of the tree of it 
// so by using the dom we can navigate to any element and can do the manipulation of it 
// in the dom we can get acces to every element by the dom tree of it 

// do in dom all the things the dcoument becomes the object 

// let color=prompt("enter color : ")
// if (color=="yellow"){
//     document.body.style.backgroundColor="yellow"
// }

// so basically we can change the dynamic nature of the css using the js 

// BOM basically provides the more objects that can be used inside the browser
// extra features of the browser in the browser 

// pracice set for js in browser 

// q1
/*
do {
    let age=Number.parseInt(prompt("enter the age : "))
    if(age>18){
        alert("u can drive ")
    }
    // if(age>4){
        //     location.href="https://www.google.com"
        // }
        else{
            alert("not ")
        }
        var conf=confirm("want to see prompt again ")
    } while (conf===true);
*/

// for redirecting to another webpage we can use the location.href 
// location.href will redirwct to the anpther webpage 

// walking the dome 
// document.querySelector(".container").childNodes.forEach(e=>{
//     console.log(e)
//   })
//   this will give all the childnodes by traversing it 

// table basesd navigation 

// let t=document.body.children[2]

// chapter 7 ps
// we need to apply the array methods for using the loop in the array 

let joke=["prnajl","shreua","aalu"]
let rand=Math.floor(Math.random()*joke.length)
console.log(joke[rand]);
// console.log(rand);

// we can use the console.dir to print the elemetn 
// the main diff will be that it will show the element as the object not the element 

// the outer html will also give the outer one as well as the inner part of thr html also but the inner one will only gove the inner one 

// console.dir will print the element as an object with all of the propoerties of it 
// console.log will give the only ditrecctly give the element 

// ot get the text of the website we can do as :-
console.log(document.body.querySelector(".container").textContent);
// by this we get all the text of the webste 



// // we can make any eleemtn insode the html and aslo set their attribute 
// let ele=document.createElement("div")
// ele.setAttribute=("class","insert_ele")
// // ele.setAttribute("style","backgroundColor:red")
// ele.setAttribute("hidden","false")
// // ele.setAttribute("href","insert_ele")
// ele.innerHTML="hi this is inserted element"
// // document.body.append(ele)

// we can also insert the element using the adjeactn property
// document.body.querySelector(".container").insertAdjacentElement("afterbegin",ele)
let ele=document.body.querySelector(".insertion")
let insert=document.createElement("div")
insert.innerHTML="<b>Hola amigo !!!!</b>"
insert.setAttribute("class","another anotherone")
console.log(insert.classList);

// ele.prepend(insert)
ele.insertAdjacentElement("beforeend",insert)
// so we need to add the eleemnt not the htnml as we have predfined th ehtml earlier so we need to insert the elememnt 


// to remove the node use the rmeove function 
// document.body.remove


let myele=document.body.querySelector(".insertion").children[0] 

// for adding the class insode the element we can write it into the className attribute 
// aslso remeber that for the custolmattribute use the data-* method 

console.log(myele.className);

// so fir adding the classinside the element use the classname function of the document 

// to remove the classes remove it from the classlist 
// so we can add or remove ir toggle the class using the class list 



























