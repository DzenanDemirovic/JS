// Challenge 13
// function prioritize(array, callback) {
// let newArray = [ ];
// let newArray1=[];
//   for(let i=0;i<array.length;i++){
//     if(callback(array[i])){
//       newArray.push(array[i]);
//     }else {
//       newArray1.push(array[i]);
//     }
//   }


// }return newArray1.concat(newArray2);

// // /*** Uncomment these to check your work! ***/
//  const startsWithS = function(str) { return str[0] === 's' || str[0] === 'S'; };
// // console.log(prioritize(['curb', 'rickandmorty', 'seinfeld', 'sunny', 'friends'], startsWithS)); // should log:
// ['seinfeld', 'sunny', 'curb', 'rickandmorty', 'friends']


// // Challenge 14
// function countBy(array, callback) {
// const obj={};
//   for(i=0;i<array.length;i++){
//     let kljuc=callback(array[i]);
//     if(obj[kljuc]){
//       obj[kljuc]+=1;
//     }else{
//       obj[kljuc]=1;
//     }
//   }
// return obj;
// }

// /*** Uncomment these to check your work! ***/
// console.log(countBy([1, 2, 3, 4, 5], function(num) {
// if (num % 2 === 0) return 'even';
// else return 'odd';
// })); // should log: { odd: 3, even: 2 }


// Challenge 15
function groupBy(array, callback) {
    //   let obj={};
    //   let kljuc=callback(array[i])
    //   for(let i=0;i<array.length;i++){
    // if(obj[kljuc]){
    //   obj[kljuc].push(array[i]);
      
    // }else{
    // obj[kljuc]=array[i]
    // }
    //   }
    //   return obj;
    // }
    
    
    // // /*** Uncomment these to check your work! ***/
    //  const decimals = [1.3, 2.1, 2.4];
    //  const floored = function(num) { return Math.floor(num); };
    //  console.log(groupBy(decimals, floored)); // should log: { 1: [1.3], 2: [2.1, 2.4] }
    
    
    // Challenge 16
    // function goodKeys(obj, callback) {
    //  let newArray=[];
    //   for( let el in obj){
    //     if(callback(obj[el])){
    // newArray.push(el)
    //     }
    //   }
    // return newArray;
    // }
    // //el je kljuc u objektu
    // // /*** Uncomment these to check your work! ***/
    //  const sunny = { mac: 'priest', dennis: 'calculating', charlie: 'birdlaw', dee: 'bird', frank: 'warthog' };
    //  const startsWithBird = function(str) { return str.slice(0, 4).toLowerCase() === 'bird'; };
    //  console.log(goodKeys(sunny, startsWithBird)); // should log: ['charlie', 'dee']
    
    
    // Challenge 17
    function commutative(func1, func2, value) {
    let prvaVrednost=func1(value);
    let prviRez=fun2(prvaVrednost);
      let drugaVrednost =func2(value);
      let drugiRez=func1(value);
      
      return prviRez===drugiRez
    
      
    }
    
    // /*** Uncomment these to check your work! ***/
    // const multBy3 = n => n * 3;
    // const divBy4 = n => n / 4;
    // const subtract5 = n => n - 5;
    // console.log(commutative(multBy3, divBy4, 11)); // should log: true
    // console.log(commutative(multBy3, subtract5, 10)); // should log: false
    // console.log(commutative(divBy4, subtract5, 48)); // should log: false
    
    