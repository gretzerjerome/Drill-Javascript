//Exercice 1 math 

//A 

let chiffre = [ 7, 5, -12, 6, 32, 18, 14, -2]; 
let min = chiffre.reduce(function(a, b){ return Math.min(a, b);

 }
 
 ; console.log(min); 
 
 
 //B 
 
 let chiffreA = [-3, 9, 21, 36, 27, 54, 17, 35]; 
 
 let max = chiffreA.reduce(function(a, b) { return Math.max(a, b);
 
 }); 
 
 console.log(max); 
 
 //C
 
let result = min + max; 

console.log(result);