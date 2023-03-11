// const { rejects } = require("assert");
// const { resolve } = require("path");

// const { rejects } = require("assert");
// const { default: fetch } = require("node-fetch");
// const { resolve } = require("path");

// const { rejects } = require("assert");
// const { resolve } = require("path");

//  function pozitivanBroj(broj){
//     new Promise((resolve,reject) =>{
//         if(broj>0){
//             resolve("Broj je pozitiva")
//         }
//     }else{
//         reject("Broj je negativan")
//     }
//  });
//  pozitivanBroj(6).then((value)=>{
//     console.log(value)
//  });
//  .catch((err){
//     console.log(err)
//  });
// function punoletan(god){
//     new Promise((resolve,rejects)=>{
//         if(god<17){
//             resolve("punoletan je")
//         }else{
//             rejects("Negativan")
//         }
//     }
// });
// punoletan(17).then((value)=>{
//     console.log(value)
// });
// .catch((err){
//     console.log(err)
// });// Ispisati poruku da li je dobijen niz ili nije.
  // Nakon toga ispisati sve parne brojeve niza.
  
//   function niz(array){
//     new Promise ((resolve,reject) =>{
// const response = 200
// if(response === 200){
//     resolve ([1,2,3,4,5,6])
// }else{
//     reject("greeskaaa")
// }

//     }
//   });
//   niz.then((value) ->{
//     console.log ("Dobili smo niz")
//     const parni = niz.filter((el) => el % 2 === 0);
//     retunr parni;
//   });
//   .then((parni)={
//     console.log(parni)
//   });
//   .catch((err)=>{
//     console.log(err)
//   });
// Napraviti promise koji proverava da li je neki objekat ispunio uslova da je njegov property godine veci od 17 ili nije.
// U slucaju da je osoba punoletna then() funkcija vraca poruku "Vi ste punoletni".
// U slucaju da osoba nije punoletna catch() vraca broj godina osobe.

// const adult = new Promise((resolve,rejects) = >{
//     const osoba = {
//         ime: "Dzenan",
//         prezime: "Kosuta",
//         godine: 26,
//       };
// if(osoba.godine>17){
//     resolve("Osoba je punoletna")
// }else{
//     console.log(osoba.godine);
// }


// });
// adult.then((value)=>{
//     console.log(value)
// });
// .catch((osoba.godine) =>{
// console.log(osoba.godine)
// }
//fetch get 
// fetch("https://run.mocky.io/v3/e9becdcf-3dd2-41d9-a499-049b392172f2");
//  .then((response)=>response.json())
//  .then((data)=>console.log(data);
// fetch("https://run.mocky.io/v3/e9becdcf-3dd2-41d9-a499-049b392172f2"){ 
//     method : "Delete",
// }
// .then((response)=> console.log("Odogvot je",response.status);