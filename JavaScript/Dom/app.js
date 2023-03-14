// //1
// let naslov = document.getElementById("naslov");
// console.log(naslov);
// naslov.innerText = "nesto";
// naslov.style.color="red";
// naslov.style.fontSize = "4rem";
// naslov.innerText = "promena"
// // console.log(naslov.innerText);
// // naslov.style.color= "red";
// //preuzeli h1 u htmlu
// // 2.nacin
// let naslovClass =document.getElementsByClassName("nas")
// console.log(naslovClass);
// //3.
// let naslovByQuery = document.querySelector("nas");
// console.log(naslovByQuery);
// //4
// // let naslovByQueryAll = document.querySelectorAll("nas");
// // console.log(naslovByQueryAll);

// // let lista = document.getElementsByClassName("lista");

// // for(let i=0;i<lista.length;i++){
// // lista[i].style.color = "green";
// // lista[i].style.fontSize = "4rem";
// // }
// // let dugme = document.querySelector("button");
// // dugme.addEventListener("click", ()=>{
// // naslov.style.color = "purple";

// // });

// // let lis = document.querySelector(".lis");
 
// // let item1 = document.createElement("li");
// // item1.innerText = "Item1";
// // item1.style.color = "Red ";

// let incr = document.querySelector(".increment");
// let decr = document.querySelector(".decrement");
// let broj = document.querySelector(".brojac")

// let brojac = 0;
// broj.innerHTML = brojac;

// incr.addEventListener("click", () =>{

//     brojac++;
//     broj.innerHTML = brojac
// });
// function decrement (){
//     brojac--;
//     broj.innerHTML=brojac;
// }
// localStorage.setItem("name","Dzenan")
// let ime=localStorage.getItem("Lejla");
// console.log(ime)
// sessionStorage.setItem("name","Amsal");
let inp = document.querySelector(".inp");
let btn = document.querySelector(".btn");
let card = document.querySelector(".card");
btn.addEventListener("click", ()=>{
if(inp.value === ""){
    alert("Unesite nesto")
}else {
let h = document.createElement("h1");
h.innerText= inp.value;
card.appendChild(h);
}
});