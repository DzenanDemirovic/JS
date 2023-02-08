// const person ={
// firstName: "Dzenan";
// lastName: "Demirovic";
// age: 20;
// fullName: function naziv(){
//     return this.ime + " " + this.prezime;
// }

// }
// console.log(person.firstName);
// console.log(person["firstName"]);
// console.log(person.fullName());
// Object.freeze(person);
// person.firstName="amin";
// console.log(person);
// Object.seal(person);
// person.firstName="Amin";
// console.log(person);
// person.height=180;
// console.log(person);

// Unutar postojeceg objekta dodati nova svojstva:
// 1. trenutnaBrzina: 0,
// 2. maksimalnaBrzina: 260,
// 3. povecanjeBrzine: (metoda koja uzima jedan argument),
// 4. smanjenjeBrzine: (metoda koja uzima jedan argument),
// 5. koci: (metoda koja dodeljuje 0 za vrednost trenutne brzine).
 
const myCar = {
    id: 1,
    marka: "Audi",
    model: "a4",
    boja: "Crvena",
    pogon: "prednji",
    menjac: "automatski",
    kontakt: [0622222, 02033322],
    servis: {
      datum: "04,maj",
      km: 23000,
      serviser: "Pasovic",
    },
    udaran: true,
  };
   
//    1.
    myCar.trenutnaBrzina = 100;
    myCar.maksimalnaBrzina = 260;
    console.log(myCar);
    myCar.povecanjeBrzine= function (ubrznje){
        if(this.trenutnaBrzina+ubrznje > this.maksimalnaBrzina){
            return " nije moguce povecati brzinu datog ubrzanja";
        }
        else { 
        this.trenutnaBrzina+=ubrznje;
    }

    }
    myCar.smanjenjeBrzine = function(brzina){
        if(this.trenutnaBrzina-brzina<0){
           return  "Nije moguce voziti manje od 0 km/h"
        }else {
            this.trenutnaBrzina-=brzina;
        }


        myCar.kocenje = function (){
this.trenutnaBrzina=0;

        }


    }

    console.log(myCar);