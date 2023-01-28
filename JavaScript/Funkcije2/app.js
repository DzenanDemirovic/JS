const osoba = {
    ime: "Ajla",
    prezime: "Gudzevic",
    //   imeIprezime: function () {
    //     return this.ime + " " + this.prezime;
    //   },
    godine: 23,
    //   punoletan: function () {
    //     if (this.godine < 18) {
    //       return "NE";
    //     }
    //     return "DA";
    //   },
  };
  
  // console.log(osoba.imeIprezime());
  // console.log(osoba.punoletan());
  // console.log(osoba.prezime);
  // console.log(osoba["ime"]);
  
  // osoba.ime = "Lejla";
  // osoba["ime"] = "Nejla";
  // console.log(osoba);
  
  // // delete osoba.ime;
  // console.log(osoba);
  console.log(Object.keys(osoba));
  console.log(Object.values(osoba));
  console.log(typeof null);
  
  osoba.visina = "170";
  
  console.log(osoba);
  
  let niz = [10, 15, 45, 65, 5, 1, 2, 6, 5, 8, 7, 9];
  
  // reduce((prethodno,trenutno)=>prethodno+trenutno,initialValue)
  let suma = niz.reduce((prethodno, trenutno) => prethodno + trenutno, 5);
  
  // prethodno = 5, trenutno = 10 , suma = 15
  // prethodno=15, trenutno =15, suma=30
  // prethodno=30,trenutno=45, suma=75
  
  console.log(suma);
  // function saberi(prethodno, trenutnu) {
  //     return prethodno+trenutnu
  // }
  
  let arr = [1, 2, 45, 10];
  let sumaPomnozena = arr.reduce((p, t) => p + t * 2, 0);
  console.log(sumaPomnozena);
  
  let sumaSaMap = arr
    .map((x) => x * 2)
    .filter((x) => x < 5)
    .reduce((prethodni, trenutno) => prethodni + trenutno, 0);
  
  console.log(sumaSaMap);
  
  niz = ["Nejla", "Lejla"];
  
  // Napraviti funkciju koja za argument uzima neki niz,
  // i vraca nam poziciju na kojoj se nalazi Lejla,
  // dok ako Lejla nije prisutan neka nam ispise poruka:
  // "Sad ce Lejla doci."
  
  function nadjiLejlu(arr) {
    if (arr.indexOf("Lejla") === -1) {
      return "Sad ce Lejla doci.";
    }
  
    return arr.indexOf("Lejla");
  }
  
  // Set (Setovi) - Setovi su slicni nizovima, sa razlikom kod zapisivanja
  //                     i izmedju ostalih, najbitnija karakteristika kod setova je
  //                     da oni ne mogu imati duplikate.
  //     Zapisivanje setova:
  new Set(["jabuka", "sljiva", "kruska", "jagoda"]);
  
  const nizImena = ["Nejla", "Ahmed", "Anes", "Nejla", "Anes"];
  console.log(nadjiLejlu(nizImena));
  const noviNiz = new Set(nizImena);
  console.log(noviNiz);
  
  //Pivot
  
  const nizBrojeva = [1, 2, 3, 1, 1, 4];
  // 1+2+3 = 4+5+6
  function pivot(arr) {
    let sumaSaLeve = 0;
    let sumaSaDesne = 0;
    for (let i = 0; i < arr.length / 2; i++) {
      sumaSaLeve += arr[i];
      sumaSaDesne += arr[arr.length - 1 - i];
    }
    if (sumaSaLeve === sumaSaDesne) {
      return "Niz je pivot";
    }
    return "Niz nije pivot";
  }
  console.log(pivot(nizBrojeva));