//vrati index traazenog elementa u nizu

// const niz = [10, 15, 78, 45, 65, 98, 2, 4, 5, 6];
// let element = 65;

// for (let i = 0; i < niz.length; i++) {
//   if (niz[i] === element) {
//     console.log("Nas trazeni element se nalazi na indexu ", i);
//     break;
//   }
// }

// Zadatak. Napisati program koja udvostručuje svaki drugi cijeli broj na listi,
//počevši s lijeve strane
//[1,2,3,4,5,6] => [1,4,3,8,5,12];

// const arrNum = [10, 15, 48, 1, 2, 3, 4, 6];
// const newArray = [];
// for (let i = 0; i < arrNum.length; i++) {
//   if (i % 2 !== 0) {
//     newArray.push(arrNum[i] * 2);
//     continue;
//   } else {
//     newArray.push(arrNum[i]);
//   }
// }

// console.log(newArray);

//Dat je string, ako string ima vise velikih slova pretvoriti ceo string u velika slova,
//u suprotnom u mala.

// const str = "ViP";
// let countS = 0;
// let countL = 0;

// for (let i = 0; i < str.length; i++) {
//   if (str[i] === " ") {
//     continue;
//   } else if (str[i] === str[i].toLowerCase()) {
//     countS++;
//   } else {
//     countL++;
//   }
// }

// if (countS > countL) {
//   console.log(str.toLowerCase());
// } else if (countL > countS) {
//   console.log(str.toUpperCase());
// } else {
//   console.log("Isti je broj velikih i malih slova");
// }

//Napišite program koja uzima niz stringova kao argument i
//vraća sortirani niz koji sadrži iste stringove,
//poredane od najkraće do najduže.
// Na primjer, ako je ovaj niz proslijeđen kao argument:
// ["Teleskopi", "Naočare", "Oči", "Monokli"]
// Vaša funkcija bi vratila sljedeći niz:
// ["Oči", "Naočare", "Monokli", "Teleskopi"]
// Svi nizovi u nizu proslijeđeni vašoj funkciji bit će različite dužine,
//tako da nećete morati odlučivati kako naručiti više nizova iste dužine.

// niz = ["Teleskopi", "Naočare", "Oči", "Monokli"];
// for (let i = 0; i < niz.length; i++) {
//   for (let j = i + 1; j < niz.length; j++) {
//     if (niz[i].length > niz[j].length) {
//       let pom = niz[i];
//       niz[i] = niz[j];
//       niz[j] = pom;
//     }
//   }
// }
// console.log(niz);

// Napišite funkciju koja može vratiti najmanju vrijednost niza
//ili indeks te vrijednosti.
// Drugi parametar funkcije će reći da li treba da vrati vrijednost ili indeks.
// Pretpostavimo da će prvi parametar uvijek biti niz popunjen s najmanje 1
// brojem i bez duplikata. Pretpostavimo da će drugi parametar biti
//niz koji sadrži jednu od dvije vrijednosti: 'value' i 'index'.
// [10, 5, 4, 154, 45, 1, 2, 3, 4, 5], "value"; // => 1
// min([10, 5, 4, 154, 45, 1, 2, 3, 4, 5], "index"); // => 5

// const niz = [10, 5, 4, 154, 45, 2, 3, 4, 5];
// let valueOrindex = "index";
// let najmanji = niz[0];
// let indexNajm = 0;

// for (let i = 0; i < niz.length; i++) {
//   if (niz[i] < najmanji) {
//     najmanji = niz[i];
//     indexNajm = i;
//   }
// }

// if (valueOrindex === "value") {
//   console.log(najmanji);
// } else {
//   console.log(indexNajm);
// }
// co