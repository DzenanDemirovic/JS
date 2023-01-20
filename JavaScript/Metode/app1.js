//Najduza rec u stringuu
let  str="Ja volim programiranje";
let strArray= str.split(" ")
let theLongestWorld = " "
for(let i =0 ; i<strArray.length;i++){
    if(strArray[i].length >= theLongestWorld.length){
        theLongestWorld= strArray[i]
      debugger
    }
}
console.log(theLongestWorld);
