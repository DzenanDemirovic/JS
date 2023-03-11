// (function (a){
//     console.log(1)
// setTimeout(funtion(){
//     console.log(2)
// },1000)

// const { default: fetch } = require("node-fetch");
// const { json } = require("stream/consumers");

// etTimeout(funtion(){
//     console.log(3)
   
// },0)
// console.log(4);
// )}


// get-da pokupimo podatke i da koristimo te podatke
// post-da mi posaljemo neke podatke
// put-izmenitit podatle
// delete izbrisati
// razlika izmedju json i objekta je jer su kljucevi pod navdonicima
// JSON.stringify()-pretvara objekat u jaison pa u string
// JSON.parse()-obrnuto,string pretvara u objekat

// const promis = new Promis ()=>{
//     console.log("ispisati nesto");
// }); 

// let p = new Promise((resolve,reject) => {

// let = 1+2;
 
// if(a===2)
// {
//     resolve("succes")
// }else{
//     rejecct("failed")
// }




// });
// p.then((message)=>{
//     console.log("this is in the then"+message);

// }).catch(message){
//     console.log("this is in the catch"+message)
// });
// function ispis (vrednost){
//     console.log(vrednost)
// }
// const punoletan = new Promise(( resolve,reject) =>{
// let a= 12
// if(a<18){
//     rejects("Maloletan")
// }else{
//     resolve("Punoletan")

// });

// punoletan.then(value)=>ispis(value))
// .catch(err)){
//     console.log(err);
// }
// }

// function wait(){
//     return new Promise(resolve,reject)=>{

// setTimeout(()=>{
//     resolve("Proslo je 2 sec")
// },200)



// });
// wait().then((value)=>{
//     console.log("Koliko je vremena proslo "value);
// }
// function pozitivanBroj(broj){
//     new Promise ((resolve,reject)=>}
//     if(broj<0){
//         resolve('broj je pozitivan'${broj})
//     }else{
//         reject("Boj je negativan"${broj}))
//     }
        
// });

// }
// isPozitivan(5).then((value)=>{
//     console.log(value);

// });
// .catch((err) =>{
//     console.log(err);
// });
// async function mojaF(){
//     return "Hello"
// }//
// mojaF().then((val)=>{
//     console.log(val)
// });
// async function myDisplay(){
// let myPromise = new Promise ((resolve,reject)=>{
//     resolve("Ispisi nesto")
// });
// await myPromise.then((v)=>{
//     console.log(v)
// });


// }
// myDisplay()


// //fetch post
// const data={
//     title : "Nova obaveza"
//     compli
// 
// fetch()
fetch("https://run.mocky.io/v3/e9becdcf-3dd2-41d9-a499-049b392172f2")
.then((response)=> response.json())
.then((data)=>console.log(data));
//delete kada uspe pojavi se status 200
fetch("https://run.mocky.io/v3/e9becdcf-3dd2-41d9-a499-049b392172f2"){
    method : "Delete",
}).then((response)=> console.log("Odogvot je",response.status);