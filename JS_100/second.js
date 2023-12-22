// Exercise problem of guessing game 
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


