// let arrayNumber=[12,44,112,13];
//pop metoda- uklanjanje pooslednjeg elementa iz niza
// arrayNumber.pop();
 // console.log(arrayNumber);

//push-da se dodaje novom nizu
// arrayNumber.push(20);
// console.log(arrayNumber);

// let str = "Danas je drugi cas drugog cikluisa"
//toLoweCase()-da prebaci sve u velika slova

// console.log(str.toLocaleLowerCase);

//toUperCase()-da sve prebaci u vellika slova
// console.log(str.toUpperCase);

//contacr-omogucava nam da sastavimo 2 niza ili string
// let str1 = "Hello"
// let str2 ="Pozdrav"
// let newStr= str1.concat(str2);
// console.log(newStr);

//trim()-da uklonim0 space sa pocetka i kraja
// const exampleTrim="Centar Nit"
// console.log(exampleTrim.trim())

//slice(start,end)-uzimamoo deo nekog niza od starta pocinje a end ne uzima
// const exampleSlice="Hello world"
// console.log(exampleSlice.slice(2,6));

//substring-izdvaja karakterr i vraca kao novi niz za stringoveee
// const exampleSubstring=" Neki text";
// console.log(exampleSubstring.substring(2,5));

//unshift()-da doda u pocetku nizaaa
// const exampleUnshift=[10,12,13];
// exampleUnshift.unshift()
// console.log(exampleUnshift)

//shift-uklanja elemennt sa poslednjeg niza
// 
// includes()-proveravamooo da li se neki element nalazi u niz string
// const exampleIncludes=[12,11,44,43];
// console.log(exampleIncludes.includes(12));

//split();-string prebaxcuje u niz
// const exampleSplit="Danas je drugi cas"
// console.log(exampleSplit.split(" "))

//join();-niz prebacuje u string
// const exampleJoin=["a","b","d","c","f"];
// console.log(exampleJoin.join("-"));
//replace(   ,   )menja elemente All( da promeni sve )

// const exampleReplace=" Ucimo u centru nit"
// console.log(exampleReplace.replaceAll("i","u"));
//map()-vraca ceo niz,ali sa izmenama

// const exampleMap = [12,11,34,55,2];
// const newExample=exampleMap.map(x=> x*2);
// const exampleMap = [10,20,25,100]
// const newExample=exampleMap.map(x => x / 10);
// console.log(newExample);

//sort()-da sortira
// let newA = [1,2,3,4,5];
// newA.sort();
// console.log(newA);

// //reverse()
// let exampleReverse = [1,3,4,6,7,89,5];
// exampleReverse.reverse();
// console.log(exampleReverse)

//charAt()-da prikaze karaktere  na nekoj poziciji
// let exampleChartAt = "Nestooooooo"
// console.log(exampleChartAt.charAt(2))

//filter izdvaja neki element
//  let exampleFilter[1,4,5,7,8,9,2];
// console.log(exampleFilter.filter(x=>x%2===0));

//indexOf(" ")-vraca nam index trazenog elementa
// console.log(exampleFilter.indexOf(7));

//map() - vraca nam ceo niz, ali izmenjen
// const exampleMap = [10, 15, 45, 65, 7, 8, 9];
// const newExample = exampleMap.map((x) => x * 2);
// console.log(newExample);


// Type JavaScript here and click "Run Code" or press Ctrl + s
console.log('Hello, world!');


// Challenge 1
function addTwo(num) {
  return num+2;

}

// To check if you've completed it, uncomment these console.logs!
// console.log(addTwo(3));
// console.log(addTwo(10));


// Challenge 2
function addS(word) {
return word+"s";
}

// uncomment these to check your work
// console.log(addS('pizza'));
// console.log(addS('bagel'));


// Challenge 3
function map(array, callback) {
 const newArray=[];
for(let i=0;i<array.length;i++){
newArray.push(callback(array[i]));
}
  return newArray;
}
 console.log(map([1, 2, 3], addTwo));


// Challenge 4
function forEach(array, callback) {
for(let i=0;i<array.length;i++){
  callback (array[i]);
  
}

}

// see for yourself if your forEach works!


// Challenge 5
function mapWith(array, callback) {
const newArray=[];
forEach(array,function(num)){
  newArray.push(callback(num));
}
return newArray;
}


// Challenge 6
function reduce(array, callback, initialValue) {
    for(let i =0;i<array.length;i++){ 
      value initialValue=callback(initialValue,array[i]);
     } return initialValue
     
   
   
   }
   console.log(reduce([1,2,3])addTwo 0);
}
