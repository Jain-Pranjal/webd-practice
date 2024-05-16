let options=["rock","paper","scissor"]
let comp_score=0,player_core=0;
let comp_choice=options[Math.floor(Math.random()*3)]


var user_choice;
{
    document.body.querySelector("#rock").addEventListener("click",(e)=>{
        user_choice=options[0]
    // console.log(user_choice);
})
document.body.querySelector("#paper").addEventListener("click",(e)=>{
    user_choice=options[1]
    // console.log(user_choice);
})
document.body.querySelector("#scissor").addEventListener("click",(e)=>{
    user_choice=options[2]
    // console.log(user_choice);
})
console.log(user_choice);
}

// if (user_choice===comp_choice)
// document.body.querySelector(".msg-container").innerText="hello"






























