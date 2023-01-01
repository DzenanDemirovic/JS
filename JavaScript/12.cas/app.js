// const str = "Ja-idem-u-skolu-nesto";
// let poslednjiRazmak = 0;
// for (let i = 0; i < str.length; i++) {
//   if (str[i] === " ") {
//     poslednjiRazmak = i;
//   }
// }

// console.log(str.length - poslednjiRazmak - 1);

// const niz = str.split("-");
// console.log(niz);
// console.log(niz[niz.length - 1].length);

// const newArray = ["ja", "idem", "na", "kurs", "programiranja"];
// const newStr = newArray.join("/");

// console.log(newStr);

// Izracunati index telesne mase (bmi = tezina / visina**2)
// bmi <= 18.5 return "Mala tezina"
// bmi <= 25.0 return "Normalno"
// bmi <= 30.0 return "Prekomerna tezina"
// bmi > 30 return "Gojazni"

// let tezina = 60;
// let visina = 1.72;
// let bmi = tezina / visina ** 2;

// if (bmi <= 18.5) {
//   console.log("Mala tezina");
// } else if (bmi <= 25.0) {
//   console.log("Normalno");
// } else if (bmi <= 30.0) {
//   console.log("Prekomerna tezina");
// } else {
//   console.log("Gojazni");
// }

//Nadji dve najstarije osobe , godine su date u nizu
const godine = [0, 45, 1, 50, 20, 25, 18, 65, 30];
let nastariji = godine[0];
let drugiNajstariji = godine[0];

for (let i = 0; i < godine.length; i++) {
  if (godine[i] > nastariji) {
    drugiNajstariji = nastariji;
    nastariji = godine[i];
  } else if (godine[i] > drugiNajstariji) {
    drugiNajstariji = godine[i];
  }
}

console.log(nastariji, drugiNajstariji);

// Na godišnjem porodičnom okupljanju, porodica voli da pronađe starost
// najstarijeg  člana porodice i godine najmlađeg člana porodice i izračuna
// razliku između njih.
// Dobit ćete niz godina svih članova porodice, bilo kojim redoslijedom.
// Starosti će biti date u cijelim brojevima, tako da će beba od 5 mjeseci
// imati pripisanu 'starost' od 0. Vratite novi niz sa
// [najmlađa dob, najstarija dob, razlika između najmlađeg i najstarijeg Dob].

const arrayAges = [10, 15, 2, 45, 65, 10, 2, 70];
let max = arrayAges[0];
let min = arrayAges[0];
const newArray = [];

for (let i = 0; i < arrayAges.length; i++) {
  if (arrayAges[i] > max) {
    max = arrayAges[i];
  }

  if (arrayAges[i] < min) {
    min = arrayAges[i];
  }
}

newArray.push(min);
newArray.push(max);
newArray.push(max - min);
console.log(newArray);

// zadatak
//     *
//    * *
//   * * *
//  * * * *
// * * * * *
//* * * * * *
let str = "";
let razmak = "";
for (let i = 1; i < 5; i++) {
  razmak = "";
  for (let j = 1; j < 5 - i; j++) {
    razmak += " ";
  }
  str += "* ";
  console.log(razmak + str);
}

//i=1razmak
//j=1,j=2, j=3,j=4
// *

//i=2
//

//10.zadatak
//     1
//    1 2
//   1 2 3
//  1 2 3 4
// 1 2 3 4 5
//1 2 3 4 5 6

// let str = "";
// let razmak = "";
// for (let i = 1; i < 5; i++) {
//   razmak = "";
//   for (let j = 1; j < 5 - i; j++) {
//     razmak += " ";
//   }
//   str += i + " ";
//   console.log(razmak + str);
// }