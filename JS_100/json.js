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
document.getElementById("fact").addEventListener("click",gettingFacts())

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

























