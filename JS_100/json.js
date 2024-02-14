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

// const getFacts= async ()=>{
//     console.log("fetching data...");
//     let response=await fetch(URL)
//     console.log(response);  //json format
//     let mydata= await response.json()
//     console.log(mydata); //now in the object 
//     console.log(mydata[0].text);
// }

// getFacts()
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
(async function() {

    console.log("fetching data .....");
    await api(1)  //as we knwo that the async function always gives the promise so 
    console.log("fetching data .....");
    await api(2)  //as we knwo that the async function always gives the promise so 
    console.log("fetching data .....");
    await api(3)  //as we knwo that the async function always gives the promise so 
    console.log("finish ");
})()


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































