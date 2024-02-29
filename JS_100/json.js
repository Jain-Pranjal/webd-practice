// json is the lightweight file that is used to transefer the information across the web easily 
// morover the json is wriiten in the string format only 
// and json is in the key value pair 

// nowdays 99% api returs the repsonse int he form fo json which is just similar to js object with the key and value pair 
// so we can convert any json into js object and vice versa 

// JSON.stringify()
// it converts the js object into the json 

// JSON.parse()
// it convetts the json inot the object 

// json is in the string fornat only which is in the "" 
// also we need to use only the "" in making the json 


// insode the json we can use any datatype in it but it should only be in the key value pair 

// inside json anydataye can be used but the format of the json is only the string 
// so we can pass the object array anything in the json in the key value pair only 

// usign the parse it convetts into the js object 

const URL="https://cat-fact.herokuapp.com/facts"

const getFacts= async ()=>{
    console.log("fetching data...");
    let response=await fetch(URL)
    console.log(response);  //json format
    let mydata= await response.json()
    console.log(mydata); //now in the object 
    console.log(mydata[0].text);
}

// getFacts()

// so basically humko 2 baar rukna padta hai ek baar to data ko fetch karne ke lie await lagana and then usko json me conver tkarne ke lie await lagana 





// .json is also async in nature 
// fetch is a async fucntion hai so we need to wait for it until ke jab promsie fullfill na ho jaye 
// json function is also a async function 

// so basically fetch gices us the promise on the call of the API
// so the fetch gives us the promise 


// the response we getting from the fetch is in the json format so convert the format into object so now iterate therought the object 

// so the fetch is a async func and json is aslo a async function so use the await 

// by promise chaining 
// function getFacts(){
//     fetch(URL).then((res)=>{
//         return res.json()
//     }).then((data)=>{
//         console.log(data);
//         console.log(data[0].text);
//     })
// }

// async and await from CWH
// so then in promise is used when we had a resolve promise and catch when promise is not resolved 

// on calling of this function this will give us the promise ke 2 se ke baad data aa jayega 

// yaha par humne dikha rkha hai ke yeah humko promise return kar rha hai but actulaly hum esa kabhi karte nhi hai 
// mainly jab hum api par call marte hai to vo humko promise return karta hai and fir hum us promiseko resoolve ya reject karte hai 

// su[pose this as as a api which takes 2 sec time to get the data 
// yeha fucntion meko data 2sec baad lakar dega and tab tak ke lie yeah meko ek promise lakar de dega and i can do whatever with that promise 
function getdata(dataid){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            console.log("DATA");
            console.log(dataid);
            resolve(200)  //resolve ka message 
        }, 4000);
    })
}

// so basially yeah code asyn cko follow karta hai matlab agar mera code time lega to yeah neecha vala code execute kar dega an djab vo ho jayega then uska outpu print kar dega lekin humko esa chaoye ke phele 1 ho and then 2 ho
// so what we can do is ke jo getdata hai vo humko ek prmise  lakar de rha hai just like the api jo ke fetch se milte hai 
/**
 * 

console.log("Fetching data...");
// let res=getdata()
// es res ke under vo message hai jo ki humne resolbve me dala tha so that we can us that 
getdata().then((res)=>{
    console.log("data aa gya aab me neeche ka execute karunga and mere message hai ",res);
    console.log("Fetching data...");
    // console.log(2);
    // console.log(3);
    getdata().then((res)=>{
        console.log("data aa gya aab me neeche ka execute karunga and mere message hai ",res);
        // console.log(4);
        
    })
})

*/


// aab agar vo resolve ho gya hai then me aage ke execute karunga matlab eske under aage ke code ayega 
// so eska matlabe mene neeche ka code execurte hone se bacha lia jab tak mere upar vala aa nhi gya from the api 
// as the fetch api bhi humko promise lake deta hai so uska use kareke hum neeche ka code wait karva skte hai 


// yhi same kaam me async and await ke sath kar skta hu 
// await basically code ka wait karega jab tak upar vala promise settle nhi ho jata 
// await humesah ek async funciton ke sath aata hai

// async function getdata(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             console.log("DATA");
//             resolve(200)  //resolve ka message 
//         }, 4000);
//     })
// }

// we can mainly do the return the promise to the originla one 
// in thsi way we can return the promise and use the then and catch operator 
// using the h=the hal ke haal return kar dega promise to the original one 

/**
 * 
PROMISE CHAINING
getdata(1).then((res)=>{
    console.log(res);
    return getdata(2)
}).then((res)=>{
    console.log(res);
    return getdata(3)
}).then(()=>{
    console.log("SUCCESS");
})
*/

// in this way we can do th epromise chaing 

// so using the await it will await jab tak promise fullfill nhi ho jata and hum us fucntion ko async bana denge jo ke dalay casuse kar rha tha 





// so basically we got a promise 
// but i want ke jab tak promise fullfileed na ho jaye tab tak neeche ke code execute na kare so i will do the promsie chaining 
// ke jab tak then ke under nhi ayega fullfilled hoke aage ka code nhi chalega 
// console.log("task 1");
// console.log("task 2");
// let pro=getData()  //here it will get a promise but we want ke jab tak resolve na ho aage ak code na chale so use the await 
// console.log(pro);
/**
 * 
pro.then((res)=>{
    console.log("DATA aa gaya");
    console.log("task 3");
    console.log("task 4");
    console.log("task 5");
    return getData().then((res)=>{
        console.log("good");
        console.log("task 6");
    })
})
*/
// so it will execute onlyv when the promoise is resolved in the then 

// in the async programming we always try ke jab tak data humare pass nhi aa jata tab tak hum aage ka code controll kar ske and for that we use the callback promise and async await 
// in the promise jabtak promise fullfill nhi ho jata using the then tab tak aahge ke steps complete nhi honge 
// in the async await , async is used witht the function only and they send the promise to us and using the await we can wait the execution of the program of neeche vala code jab tak promsie fullfilled nhi ho jayta


// the await is only used inside the async function so make a the async function taht causes delay and use the await to delay the execution of the neeche vala code 


// Promise :- 
/**
when we make a clal to the api we get a promise which is need to tackel by us for 
hum chaite hai ke dekay ke sath age vala code chale and then can be achieved by using the promise or async and await 
ehch measn thaht instead of getting the data on time we get the promise which needs to be ullfilled or reject in that time and agar hum chaiye ke jab tak yeeah kaam pura na ho tab tak neeche ka code na chale so we can use the promise chaining 
eska matlab ke jab tak upar vala promise resolve na ho jaye tab tak neeche vala promsie na chale and fir uske neeche vala na chale 

 */

// async function always retunr a promise to the fucntin call
// async hhum log fucntion ke sath use karte hai and vo kise bhi function ko async bana deta hai and return me vo promise deta hai 
// hum kise bhi function ko async function bana skte hai and vo function hume badle me promise dega 

// jo hum kaam promise se kar rhe the ke jab tak ek prmise resolve nho ho jata tab tak neeche ka code will not execute same kaam await karta hai ke jab tak usko prmise resolve nhi mil jata vo wait karega and neeeche ka code nhi chalne dega 

// async function jo hote hao vo badle me promise return karte hai sok hum kise ko bhi async bana skte hai 
// i can make any function async in nature 
async function greet(){
    console.log("helllo sir ");
}

// await tab tak executin ko hold karega jab tak promise settle na jao matlab ya to promose rejectt ya resolved kuch bhi ho tab tak wait karega 
// ,atlab pemding ke alava state hone chaoye 
// so this function will return a promise after 2 sec of time 
async function api(id){
    return new Promise((resolve,reject)=>{
            setTimeout(() => {
            console.log("....DATA....",id);
            resolve(200)
        }, 4000);
    })
}

// await alays reside inside th easync function 
/**
 * 
(async function() {
    
    console.log("fetching data .....");
    await api(1)  //as we knwo that the async function always gives the promise so 
    console.log("fetching data .....");
    await api(2)  //as we knwo that the async function always gives the promise so 
    console.log("fetching data .....");
    await api(3)  //as we knwo that the async function always gives the promise so 
    console.log("finish ");
})()

*/

//so basically using the await will wait for the promise tok SETTLE (resolve or reject no matter) and then it will resume the execution of the code
// await humaeas aek async functionke under kaam karta hai 

/**
 * so remmeber that async function hum kise ko hi bana skte hai and badle me vo ek prmose dega and waoiit ke lie hum await use kar skt ejo ke tab tak wait karega jab tak prmise settle na ho jaye 
 * jab rpmise settle ho jayega then vo aage ka code execute kar dega 
 * humare main problem jo the vo yeah ke hum log asyncronous em wait kaise karaye 
 * how can we wailt the execution of the code in the async js as vo neche ka code excuer kar dega if agar kahi time le th ho sok use hte async and await 
 *  
 */

// os basically as we know ke await ko use karne ke lie humko async funciton bananna he hoga but uske lie humko us fun kok call karna padega so we can also use the iife fucntion which means ke creation ke time par he vo apne aap run ho jayege 
// IIFE se hum private variabel bana skte hai jo ke hum use kar paye 


// so js me async natire ke sath del karne ke lie hum function ko async bana dete hai and use karte hai await ka taki neeche ka coe wait kare 
// await always async function ke under aata hai so make sure ke vo async ke neeche use ho 


// API calls
// fetch api badle me humko ek promise lakar dete hai jiskko hum baaad me tackle karte hai 
// fetch api humko badle me promise return karta hai 

// json format ko humko parse bhi karna hota hai 









// async fucntion alawys return us a promise so we need to tackel i only 

async function hello(){
    return new Promise((resolve,reject)=>{

        setTimeout(() => {
            console.log("hello my friend");
            resolve(200)
        }, 3000);
    })
}
// so basically jab tak vo promise resolve nhi ho jata tab tak neeche ka code execute nhi hoga 
// so basically in api it will erturn a promise which is need to be reoslved and it wil tkae time so async fucntion always humko ek promise denge 

// main()
// await always run inside the async function so we have to make the async function to use the await 

// so it will await for the complete resolved promise tab tak neeche nhi execute karega code and await always used inside the async function 

// so fetch api gives us a promsie and and it is an async functiion so we need to await it as it will take time 
// .json() is used to cobvert the api response into the json file which is alos a async fucntion that take time to complete 

// as the fetch api takes some time and it alsoo gives us the promsie so we need to await the process so use the await and aslo the .json take stime to parse so jab tak sare kaam ho nhi jate we need to wait nhi to neeche ka code chal jayege bina uske upar avala pure hue 

async function apicall(){
    console.log(1);
    console.log("Printing data ....");
    let data= await fetch("https://jsonplaceholder.typicode.com/todos/1")     //poromsie de dega jab tak data na aa jaye 
    data=await data.json()  //it will convert the response from the api into the json format  as it will also take some time to convert 
    console.log(data.completed);
    console.log("final data has beeen printed ");
}

// apicall()

async function main(){
    console.log(1);
    console.log(2);
    await hello()
    console.log(3);
    console.log(4);
    await hello() 
    await apicall()   //so basiaclly esne call mari function par jo ke api call kar rha hai so vo bhi wait karega jab tak data nhi mil jata 
    console.log("final");
}
// main()


// api call 2 awit fetch and json as dono takes the time to complete 

// so fetch api me 2 baar await karna padega like phele data ko lane ke time await fetch and then usko json me parse kearne ke atime  await data.json()
// await vo basically intezzaar karega jab tak promise settle na ho jaye 
// settle ka matlab ya to reslve hoga ya to reject hoga bas pensding se bahar aa jayega promise 


// await tab tak wait karega jab tak usak prmoise settle nhi ho jata (resolve or reject both any )

// get req bsivally use karte hai to get the data from the servwer or the api and post request hum form ko submit karne ke lie karte hai 
// taki post kar skte haid data into the server

// jo promise hota hai vo bhi ek object he hota hai so we need to call the api jo ke humko ek promise he dega at the en and we have to wait it only jab promise SETTLE  na ho jaye (both reject nad resolve included in it )

// fetch hume badle me promise return larega jisko humko wait karana hoga jab tak vo settled na ho jaye 


async function getfood(){
    console.log("Priniting DATA ....");
    let response=await fetch("https://raw.githubusercontent.com/chompfoods/examples/master/branded-food-response-object.json")
    data=await response.json()  //converting the response into the json object 
    console.log(data.items[0]["barcode"]);
    console.log("DONE....");
}

// getfood()

// so bsically humko 2 baar use karna padta hai await ek baar to jab data kp fetch karte hai tab and jab data ko json me ka==convet karte hai tab as fetch ke time wakt lgta hai and json me convet karne ke time bhi time lgta hai 

// fetch me hum sare request bhej skt ehai get post (data ko submit karvana intot he form vo post se hoga )
// fetch api dono kaam karta hai req an res 


async function gettingFacts(){
    console.log("Getting facts ...");
    let response= await fetch(URL)
    data=await response.json()  //conversion into json also takes the time so use the await 
    console.log(data[0].text);  //so basivaclly yeah humko ek promise dega jisko humko tackle karna hoga 
    console.log("END");
    document.body.querySelector(".catfact").innerHTML=data[0].text
}
// document.getElementById("fact").addEventListener("click",gettingFacts())

// so api call par hum 2 baar wait use karege ek to data ane par and usko json me converrt karne ke lie as data ko ane ke lie bhi time lgta hai and usko json me convert karne ke lie bhi time lagega 
// so await jab api se data ayega us par bhi lagega tai neeche ka code execute na ho jaye 


async function details(){
    console.log("i will print facts ");
    await gettingFacts()
    console.log("these are the facts ");
}


// we can make the fucntions async in the same way arrow functions
const love=async()=>{
// making the fucntion as hte variable name only 
    let data=await fetch(URL)
    data=await data.json()
    console.log(data);
}

// so after getting the data we always have to convert it into the json format so it also takes some time t hats why we have to await it 

// json format is the object format similarity so uskok convert into the stringuse the stringfy 
// jo api hoti hai vo humko response me json format me deti hai so we have to convert it into the javscfript object notation 


// so basicaly response.json will convert the json format into the javascript object and that is easy to achieve the data
// .json input me JSON file leta hai and output me json object banakaradeta hai jo ke use kar skte hai 

// .json karke hum api ke through gye kare call se usko object me convert kar skte hai
// 404 bad req from the clien site 
// jab hum kuch req and res bhejte hai api ke through then we can pass the extra info using the headers 


// advacned js 
// hoisting means ke var bina declare kare aap acess kar skte ho lekin vo error nhi dega tab bhi but not possible in let and const
try {
    console.log(a);
    let a=7845 ;
    throw error
} catch (error) {
    console.log("please declare first");
}
// so it will print undefined as their is not defined yet 


// in the hoisting the declaration will mvoe to the top the file and the initialisation will remain the undefined even as it 
// so in the hoisting the variabkle decalration will move to the top of the document and it is shown only in the var not in the let or const 
// 7 datatype :- number string bool null undefined symbol 

// diff types in js :- -primitive and reference 
// reference contains the () {} [] :-
let arr=[664,45,465,53,453,4,31,5]
new_arr=[...arr]
new_arr.push("pranjal")
// console.log("original one :- ",arr);
// console.log("new one :- ",new_arr);

// so basically copying th evalue in the refernce also changes th eoriginal one also 
// so reference me copy value nhi hoti refercne copy hota hai so vo original vale me bhi change kar deta hai and to save it from the original change then use the [...arrayname]
// primitive me value real copy hoti hai and it will no change the original one 
let obj={
    name:"pranjal",
    age:55,
    contact:556464,
    hello:()=>{
        // this is the method which means fucntion inside the object 
        console.log("hello sir");
    }
}
// this will also chaneg the original oneas we it is passsing a refernce value not a true value 
newobj={...obj} //making the actual copy of the value only 
// newobj=obj
// now only changes will be done in the copied one 
newobj.classs=12;


// console.log("original one :- ",obj);
// console.log("new one :- ",newobj);

// so in the refercne type the refercne value is copied not hte actual one thats why it makes the chnages in th original one also so () { } [] are all the referecne type so to copy the refernce value use the ... [...] {...} (...) only 

// the ... is called the spread operator 
// so we can copy the value from th ereferenc etype using the spread operator ...

// so all the words such as null none undefined 0 are fasle only sik they will we ijn the false state 

// if(0){
//     console.log("love");
// }else{
//     console.log("aaaa");
// }

// the main thing abut the primitive and referce  is that in the primitive the actual copy is passd to it and it will not hcange th eoriginal one 
// in the reference the reference value is passed and thus in copying it will change the original one also so we need to use the ... in it to pass the actual copy which will not change the original oneth erefernce one include the () {} [] all the bracketts vale so passing th evalue in the reference use the ... operator 
// 
// we use the for each loop for the array 
Array.from(Array(5).keys())
// in arrays we store all the multiple homon data inside the one variable 
// arrays are basically the objects in the js 
// splice is basically used to add , replace r delete the elemetns insdie the array 


// some method in array basically check the condition and is simialr to filtrt

function checkage(age){
    return age>19
}

const ages=[12,55,66,44,88,99,33,22]
console.log(ages.some(checkage));

// so basically some returns the true if any elemetn inside the array matches the function and returns false if none will match 
// array methids that chege :-push pop shoft unshift sort splice these all changes the original array 

// in the ibjects we have the property and methods (functions that has been declared inside object is called the method )
// so if we want to coopy the reference vale matlab jo bi( { [ ]}) en backets me aati hai then we have to use the ... operator whcih will copy the copyied value not the reference value from it 

// window object is of the browser not of the js 
// var adds to iteslef into the woindow object where let and cosnt dont 
// window is the object that contaisn additional functionalyty which is not a part of the js it is a part of the web browser 
// window is a global object jiske features ko hum access karskte hai 
// var khud ko window me add karta hai but let and const nhi karte in the window . var adds itself inside the window object whereas the let and cosnt did not 

// var is accessible inside th ewindow thats why we dont use this as it is globally availbelint he window object 

// so var adds itself int he wndow object whereas the let and const dont 
var name="bittu"
let naam="pranjal"
// browser context api contains 3 things in it window , heap memory and stack "
//window to global object hai jo ke browser provide karta hai with lots of te featurs in it .




// /the browser provide 3 things which is calle dht browser context api which include the window , stack and the heap memory 
// heap memory ke ander hum bacilly imtermediate data store karte hai 
// so basically jo bhi intermediate data generate ho rha hai vo aapka heap memory me store ho rha hai 
// so jo variable sata store karta hai and the intermediate data vo basicall heap memory me store hota hai 


// what is execution context ?
/**
 * jab bhi hum koi fucntion chalate hai to vo ek img container baman leta ahi jisme 3 cheeze hoti hai variable , fucntions inside it and the lexical env 
 * 3 variabnle fucntion inside and the lexical env 
 * so on the execution of th efunc it make th eimg container jiske ander 3 cheeze hoti hai variabel , funciton inide it and the lexcial env of the function 
 */
// bowser context api kuch nhi hai bas browser humko 3 cheeze det ahai jo ke hai window (global object), stack and the heap memory ko ke contain karta hai the data or he intermediate data of th evariabel 

// ot remember ke jabbhi aapka funciton execute hota hai use vakte uska a execution context ban jata hai jo ke ek img contianer hai jiske under 3 cheeze aati hai jo ke hai variable , funciton insdei it and the lexical en v of that funciton 

// lexical env humko yeah bata skta hai ke function kya  acess kar skt ahai aur kya nhi so fucniton apne ander fun ke varoabelko kabhi access nhi kar skta 

// so at last execution context fucniton ke execution ke waqt chalt ahai jiske under 3  chezze hoti hai variable , funciton inside it and th lexical env jok ke bataat hia ke funciton kis kis se accessable hai 

// function execute uske sath he aapka executuion context ban jata haiu jisme 3 cheezxe hoti hai variable , funciton inside it and lexical env (ke vo function kaha kaha aceessible hai) so lexical env humko bataat he ke fucntion kis kis ko access kar skta hai and uska scope kaha tak haii


// mow using the spread operator actual me value copy hue hai na ke refernce value aye hai so basically aab it will not change the originalone 
// at las tthe imp thing is that o the excution of the funciton their th=is the executuion context which is the img contianer that is made up of contian 3 thongs in it whcih is the variable , funciton inisde it and the lexical env of it 
// so allt hhebrackets items are the reference datatype inw hcih the refernce value is passed so we need to use the spread operator in it (...) operator 

// so copy like the 
// newarr=[...arr]
// newonbj={...obj}
// this is how we real copy of hte reference datatype 
// agar hum en new mw hcange karege so it will not hcange the old one as now no refernce is passed only the copied value is passed in it 
// falsy me  0 nan  false undefined null document.all use hota hai jo ke intercept karte hai false ko 
// foreach for the array in whcih we pass the callback funciton it 

// for the values obj[key]
// for (const key in obj) {
//     const element = obj[key];
//     console.table(key,element)
// }


// first class functions 
// high order function are those function that either return a function to us or we pass function as an argument to anothe rfujnciton sok call back is a HOF

// high order function are those function that either takes the function as an argument or return thr function as output 


let fun1=((name)=>{
    console.log("your name is ",name);
})
// in js functions are the first class functions 
// so basically i can store a function as a variable just like a variable in it 
// in js functions are called the first class function which means that we 


// so first class function me we pass the function as an argument to another one only 
function details(Person){
    Person()  //now the person contaisn the function which we can access it 
}

details(function name(){console.log("my name is jain sahab");})
// array type is the object so the element is stored in the format of the object in it 
// thats why we can store the elemnt at the index value of -1 alos 


// for removing something from the object use the delete 
delete obj.name;
console.log(obj);
// so use the delete operator in order to delete the property from the object 


// browser context api humko bascailly 3 cheeze provide karta hai window , stack and the heap memory to us 
// window ke ander vo sare functionalties hoti hai jo ke hum use kar skte hai they are not oprovide by the js they are provided by the window obbject of the js
// heap memory basically intermediate result store kata hai in the memory of the calc 
// so basically intermediate result ko store karne ke lie we use the heap memory in it 
// so the intermediate data is sotred insode the heap memory 
// the browser context api provides us the 3 things to us :- window heap memory and the stack 

// the execution context provied 3 things means jab bhi funciton execute hoga tab hi vo ek imaginary container bana dega jiska matlab usme 3 things jogi variable , functions inside it and the lexcical env
// so the browser context api humko 3 cheeze dete hai window object , stack and the heap memory to us e
// executuin context matlab jab bhi function execute hota hai vo ek imaginary container bana deta hai jisme 3 cheeze hoti hai vacriables, funciton and the lexical env it will  be perfomed 
// us finction ke cheeze hogi us execution ocntext container me 

// so remember jaise he function execute hota hai vaise he us function ka imginary box ban jayega jisme 3 cheeze hoti hai :- variable , funciton inside it and the elxical env of the function which means ke us fucntion ka scope kaha tak hoga 


// lexical env tells that the function can access which ? so basically jo jo function access kar skta hai vo lexical env batta hai 


function hello(){
    var a=5;
    console.log(a);
    return function hi(){
        var b=55;
        console.log(b);
    }
}

let c=hello() //c ke pass ek function aa gya hai return me so it now acts as  a function so we can run it also 
c()
// so the lecical env will tell ke aapka funciton aone under kin xheezo ko access kar skta hai 
// refernce data type me sare beracket vale aata hai and we can copy them fully by using the spread operator in it 


let show=document.getElementById("password")
let eye=document.getElementsByClassName("ri-eye-off-line")
document.querySelector(".ri-eye-off-line").addEventListener("click",()=>{
    if(show.type==="password"){
        show.type="text"
    }
    else{
        show.type="password"
    }
})

// document.querySelector(".ri-eye-off-line").addEventListener("click",()=>{
//     show.type="password"
// })
// use the if else condition to change the type of the inorder to oglle the class 

// making a alohabet generator and stopping it 
/**
 * 
let alphabets="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
alpha=document.querySelector(".alphabets")

let i=0;
function updated(){
    let start=setInterval(() => {
        alpha.textContent=alphabets[i]
        i++
        
    }, 20);
    if(i==25){
        i=0
    }
}


document.getElementById("stop").addEventListener("click",()=>{
    clearInterval(start)
})

updated()
*/

// thast y we use the async await function which means jo bhi function time laga rha haiexecute hone me make it async and then put await ke jab tab vo resolve na ho jaye tab tak neecce ka code will not work

// first class finction

// HOF are those fucntion in which fucntion is passed as an argument or a fucntion returns a another function 

// in js fucntion are the first class function means we can save them in the variable name 
let myfun=function(a){
    console.log("hello sir ");
    a()
}
// myfun="prnajal"
// so basically we can treat the fucntion just like the normal function and we can store them in the variable also 

myfun(function greet(){
    console.log("helloooaosoaoa");

})
// so basically first class function ek concept hai jisme hum funcitons ko variable ke tarah treat kar skte hai so we can store the function inside the variable and use them 


// advanced more concept 
// HOF are those functions in which they accept the function as the argument like the callback or they return a fujnction 
// so we can pass a function as a argument inside the hof or we can return a fucntion inside the another function also 

function greet(a){
    a()
    return function(){
        console.log("kjaadjksnjs");
    }
}
// passing a function isnde the anotherr function is also a HOF
let b=greet(function(){
    console.log("jain");
})
console.log(b);


class animal{
    constructor(){
        console.log("hey i m constructuor ");
    }
    age=55
    name="poin"
}

// so just by making the construcutor the construcutor function invokes and do the following task in it 
// so as u have seen it is used insde the clas but we can use it a s the constructor fucntion alone 
// let myobj=new animal

// construcutor runs by the new keyword 

// inside the event listneer it will give me a that thing on which mene vo event listener lagaya hai 
let myitem=document.querySelector(".item")
myitem.addEventListener("click",()=>{
    
})
// open and funciton me this will return a window 
// in the method it will return a parent object 
// in the evenet listenner it will return a parent object 


function sancha(){
    this.width=55;
    this.flavour="good"
}

let a =new sancha()
console.log(a);
// so casically we have the same constructor function inside the class and objects similarly same as in the class or the objects 

// making a fucntion with the this keyword and the 
function book(author,publisher,price){
    this.author=author;
    this.publisher=publisher;
    this.price=price;
    console.log(`the name of the book is ${this.author}`);
}
// so jsut use the new keyword to make the construcutor function it is just like the sancha that we can make manyv instnace sout of one 
let book1=new book("prnajal","jaicno",5000)
// console.log(book1);
// ocnstructir me aap jo bhi likhoge vo direclty execute kar dega bina uske calling ke just humko uska ek instance banna padega 

// as we know that in js the functions are the first class function this means that we can save the function as a variable type only this means that ke funcion ek dum varibale ke tarah save kar skte hai hum 
// and just like the variable we can change the function also 


const myname=function (name){
    return (`my name is ${name}`);
}
// this funciton basically retutn the value on calling to the calling function 
console.log("so hello every ",myname("pranjal jain"));

// ocnstr function hota hai co ek tareka hai bkejct ko instance banne ka 
function jain(playername){
    this.player=playername
}
// let jainco=new jain("loe")
// any instance made wtht the constrcutor function of the jain will have the player in  it to whcih i will pass the playwr name 

// iife 
// helps us to avoid the polluting th eglobal space and the also helps to making of the private variable 
let ans=(function(){
    console.log(" this is IIFE love");
    var hate="hateable "  //this variable is private and we cannot access this 

    // i will return a object 
    return {
        // getter is used to get the private value 
        getter:function(){
            console.log(hate);
        },
        setter:function(val){
            hate=val;
            console.log(hate);
        }
    }
})()
// so use the in nustry words only getter and setter 
// iife are the things that we want to use single in the program only  
// any variable that we make inside it will become private
// iife ke ander jo variable bante hai vo private hote so we cannot access them so humko unko return karvana hota hai inside the object using the getter and setter 

// using the iife we can make the private variable and it will aslo dont pollute the globalspace in the code 

// so basically iife will make the variable as a private variable so that it cannot be accesseasily 
// inside the iife varriable decalred are private in nature so we cannot access them outisde of that so we need to use the getter and setter that will give the value of the private variable to us 

// a function inside the obejct is called a method 
// any variable that is made insdei the iife is the private variable 

// so we can print the value using the getter and update the value using the setter 
//we can return th eprivate variable using the getter and update the value using the setter so that no one can access the private value easily
// using the iife we can not only invoked the functions instantly but also we can make the private variable there so that it will not accessed by outside and it will be only safe


// in js the funcitons are called the first class function which means that we can store the functions inside thevariable name and also use them as the variable only 
// os basically we just return the value inside the object whcih will gives the value back to the user in the blank object only
// so prototype is used for ht enuild in methods inside the object for the work

// so basiaclly we can so the inheritenvce in 2 ways either with the class and objects or the object me proto proprry ka use kkre bhi hum log inheritence kar skte hai 
let prajal={
    "love":"no"
}
// so basiaclly it inhertis the property inside it using the proto fucntion of the prototype 
obj.__proto__=prajal


// this keyword 
// in the global scope it gives the window and in the function alsok 
// in the method it gievs the parent object 
// a function that is made inside the object is called the method  

// so inside the fucntion also it scope is limited to the variavle only 
obj.myfun=function (){
    console.log("hello this is methdod");
}

// so inside the object the value of this keyword id the parent object means ke agar humne koi method banaya hai (funciton inside the object is called a method ) then usk thsi ke value will give the whole parent object 
let myobj={
    name:"pranjal",
    age:55,
    college:"BMPS",
    // inside the object the fucntion made is called the method means ke properry ke value is a method (a funcion )
    greet:function(){
        console.log("hello sir madam ");
        console.log(this);  // this wil give the parent object isndie the methhod 
    }
    // inside the method the this will return a parent object 
    // so this will give the parent ibjct inside the method 
}

// call apply bind 
// os if we want to change the this value we can use the call 

// call is basically ke jab tumhe function cahlana hai and by default jo uski this ke value hai wondow usko change karke kise aur ke tarf pint karvana hai then use the call
function abcd(val1,val2){
    // console.log(this.greet());
    console.log(this.college);
    this.bloodgrp="B+"
    console.log(this.bloodgrp);
    console.log(val1,val2);
}
// now by using this function i can point to the object and changes or uses its value 
// now this function will point to the obj and we can access the mehtod and the variable of the objnect using that function 

// abcd.call(myobj)
// bsiaclly jab hume function kise obje par chalana ho then we can use the .call funciton which means that now the this will poin tot the object 

// so if we have the parameter aslo we can pass in the call only 
// so we pass the value as well as we pass the this to which we have to make the this operator 
// abcd.call(myobj,5,9)

// apply is similar to the call only 
// we aoss the value of the paramaet inside the array by using the apply 
// so just pass the value of the parameter insdie the array 


// passing the value in the array only by using the apply 
abcd.apply(myobj,[33,44])

// then what is the use of the call apply bind 
// they are used when ke jab bhi hume koi function chalana ho and by default jo fucntion me this ke value window hoti hai then we an change that this ke value to any other object so we use the call or apply 

// so bind ko basivally store karna hota hai so that we can use the value 
// binds basivaclly binds th efunction wiht the object and returs us the new function to us 

// jab bhi funation cahlana hai jisme me this ke value kuch aur hai and we want le this ke value ke koi obj ho then we use the call apply bind 
// the .bind will give the funcvtion and then we have to store tit 

// bindedfun=abcd.bind(myobj,111,222)


// this operator :-
/**
 * global scope and the fucntion ke ander this is window 
 * inside the method(funciton that is made in the obejct ) this refers to the parent object 
 * and in the event listenrer this refers to the element only 
 * 
 * sometimes we want to aply the function on the object and changing the default value of the  this from windw to the object then we use thr call and apply 
 * function.apply(myibject , parameter if any ) 
 * bind is used to bind the fucntion with the obejct and it returns back the function to us 
 */

// now the abcd function is binded to the obj and we this is set to the obj 
bindedFun=abcd.bind(myobj,1111,2222)


// pure and impure functions 
// pure function measn ke har baar ame input par humko same output mil rha hai and it does not changing the global variale 



























