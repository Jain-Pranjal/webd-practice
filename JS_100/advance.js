// q1 magical sorting hat 
/**
 * 

// adding names from the user
let student=[]
let len=Number.parseInt(prompt("how many u want to add : "))
for(let i=0;i<len;i++){
    let name=prompt("Enter the names : ")
    student.push(name)  //push operration in the array to add
}
console.log("the student array is : ",student);


// taking the individual length of the student 
for(let i=0;i<len;i++){
    let student_len=student[i].length
    // console.log(student_len);
    
    if(student_len<6){
        console.log(student[i],student[i].length,"gryffindor");
        
    }
    else if(student_len>6 && student_len<8){
        console.log(student[i],student[i].length,"Hufflepuff");

    }
    else if(student_len>8 && student_len<12){
        console.log(student[i],student[i].length,"RavenClaw");

    }
    else if (student_len>=12){
        console.log(student[i],student[i].length,"Slytherin");
        
    }
}

*/

// Q : sum of the array 
/**
 * 

let arr=[2,4,5,6,9,-5,2]
let sum=0
for (const i of arr) {
    if(i<0){
        break
    }
    sum=sum+i;
}
console.log("the sum is :",sum);
*/

// Q7 local storage in browser
// in the local storage we can store the key value pair in the borwser 
/**
 * 

if(localStorage.getItem("name")){
    a=localStorage.getItem("name")
    document.write("hello "+a)
    
}
else{
    
    let a=prompt("Enter the name : ")
    localStorage.setItem("name",a)
    document.write("hello "+a)
}
*/



// tok onvert any js object into string we can use the json.stringfy 
let o={pranjal:54,sam:55,preet:45}
o=JSON.stringify(o)
console.log(o);

console.log(typeof o);

// we can only store the string in the local storage so if we want to store the
// to covert the object into the string use the json.stringfy and then store it in the local storag e
// then from the local storage if we want the object then convert it into the object by using the parse
// JSON.parse(localStorage.getItem("list"))
// so the local storgae store the content in the form of string only 


function saveToLocalStorage(note){
    localStorage.setItem("note",note)
}

if(localStorage.getItem("note")){
    console.log(localStorage.getItem("note"));
} 
document.querySelector(".note").addEventListener("click",()=>{
    let note=prompt("enter the note : ")
    document.write(note);
    saveToLocalStorage(note)
    
})













































































