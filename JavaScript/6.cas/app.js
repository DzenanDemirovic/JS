// 1. zadatak Ukloni element sa n pozicije
// niz=[1,4,6,89,9,77];
// n=3;
// noviNiz=[];
// for(i=0;i<niz.length;i++){
//     if(i===n){
//         continue;
//     }
//     noviNiz.push(niz[i]);
// }
// // console.log(noviNiz);

// for(i=n;i<niz.length;i++){ 
//     noviNiz.push(niz[i]);
//  }
// for(i=0; i<n;i++){
//     noviNiz.push(niz[i]);
// }
// console.log(noviNiz);
//Mesec kao ceo broj od 1-12 vratiti kom kvartalu godine  pripada ceo broj//
// n=Number(prompt("Unesi neki broj"));
// if(n<=3){
//     console.log("Mesec je u prvom kvartalu");
// }
// else if(n<=6){
//     console.log("Mesec je u drugom kvartalu ");
// }
// else if(n<=9){
//     console.log("Mesec je u trecem kvartalu ");
// }
// else if(n<=12){
//     console.log("Mesec je u  cetvrtom kvartalu "); 
// }
// samo iste brojeve//
// niz=[0,1,10,3,4,6,7,8,10,11];
// suma=11;

// for(i=0;i<niz.length;i++){
//     for(j=i+1;j<niz.length;j++){
//         if(niz[i]===niz[j]){
//             console.log("isti su",i,j);
//         }
//      }
// }
// niz=[1,2,3,5,6,7];
// for(i=0;i<niz.length;i++){
//     if(niz[i]+1-niz[i]===1){
//         continue;
//     }else{
//         console.log("Broji koji nedostaje je",niz[i]+1);
//     }

// }