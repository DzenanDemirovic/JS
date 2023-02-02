//Napraviti funkiciju grow i pomnoziti sve brojeve
// array = [1,3,4,5,6,7,8];
// function mnozenje (array){ 
// array.reduce((a,b)=>a*b, 1)
// }
// console.log(mnozenje(array));
// Naprabiti funkciju i napisati rec tj pretvoriti u niz i pored nje napisati duzinu te reci
// str = " You will win";
// function addLength(str){
// return str.split(" ").map((x)=>x + x.length );


// }
// console.log(addLength(str));

// function setAlarm(zaposlen,odmor){
//  return zaposlen && !odmor;

// }
// console.log(setAlarm(true,false))
//Kreiratu funkciju u kojoj ako ima vise od 4 reci okrece naopacke ,a manje od 4 vraca isto
// sentence ="Ovo je neka recenica"
// function spinSingleWord(str){

//      return sentence.length >4 ?  sentence.split(" ").reverse().join() : sentence;
// } 
//   console.log(spinSingleWord(sentence));
// uslov ? ako je ispunjen : ako uslov nijen ispuinjen
// const i let ne mogu da se ispisuju van viticastih zagrada 
// dok var je na globalnom nivou 
// Napisati funkciju i proveriti da li se  neka rec nalazi u tom nizu
array=["Mallarda","Hook Bill","African","Crested","Pilgram"];
function geese (array){

let find = "African";
return array.filter((x)=> x!== find);

}
console.log(geese(array));
