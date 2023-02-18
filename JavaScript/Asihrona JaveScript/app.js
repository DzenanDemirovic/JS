//calstack - funkcija koja se pozivao kao argument druge funkcije
// function PomnoziDvaBroja(a,b){
//     return a*b;
// }
// function mnozenje(callback){
// return callback (5,7);
// }
// const rezultat = mnozenje(PomnoziDvaBroja);
// console.log(rezultat)

// function Provera(i){

//         if(i%2===0){
//             return true;
//         }else{
//             return false;
//         }
    
// }
    
// function ParniElemeniti(callback,array){
// let newArray= [];
//     for(i=0;i<array.length;i++){
// if(callback(array[i])){
//     newArray.push();
// }
//     }
// return newArray

// }
// array = [1,5,6,2,3,4];
// const rez = ParniElemeniti(Provera,array);


function reduce(array, callback, initialValue) {
    if(typeof initalValue==='undefined'){
      initialValue===array[0];
      array.shift();
    }
    
    function Checking(array1,array2){
    newArray = [];
      for (let i =0;i<array.length;i++;){
        if(array1.includes(array2[2])){
    newArrray.push(array2[i]);
       return newArray;
        }
        
        
      }
    }
    // Challenge 7
    function intersection(arrays) {
    return reduce(arrays,Checking,);
    }
    
    
       } console.log(intersection([[5, 10, 15, 20], [15, 88, 1, 5, 7], [1, 10, 15, 5, 20]]));
     should log: [5, 15]
     / Type JavaScript here and click "Run Code" or press Ctrl + s
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
         

















