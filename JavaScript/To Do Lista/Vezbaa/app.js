
// let card = document.querySelector(".card")
// let niz = ["red","blue","green"];

// function promena(){
// let index = Math.floor(Math.random()  * niz.length);
// card.style.backgroundColor = niz[index];

// }

let inp = document.querySelector(".number")
function provera(){
let index = Math.floor(Math.random () * 5 );
if(inp.value == index){
   alert(`Pogodili ste ${index}`);
}else{
    alert(`Pogresili ste broj ${index}`);
}
}