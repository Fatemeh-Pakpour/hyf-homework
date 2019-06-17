let numbers = [1 , 2 , 3, 4];
let oddNumbers= numbers.filter(element => element % 2 !== 0);
newNumbers = oddNumbers.map(element =>element *2);
console.log( "The array is :" ,newNumbers);
