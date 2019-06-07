
/*
*** Homework Third Week / Hack Your Future, Javascript1, 
*   Author: Fatemeh Pakpour
*   Item array removal
*/
// Remove the item in names that is equal to nameToRemove

const names = ['Peter', 'Ahmad', 'Yana', 'kristina', 'Rasmus', 'Samuel', 'katrine', 'Tala'];
const nameToRemove = 'Ahmad';
if (names.includes(nameToRemove)){
   names.splice(names.indexOf(nameToRemove), 1); 
}
 console.log(names);