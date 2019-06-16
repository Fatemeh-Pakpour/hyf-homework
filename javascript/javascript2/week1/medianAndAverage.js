
// a number of array's items are odd
const housePrices = [3000000, 3500000, 1300000, 40000000, 100000000, 8000000, 2100000];

// a number of array's items are even
const myHousePrice =[3000000, 3500000, 1300000, 40000000, 100000000, 8000000, 2100000 , 2200000];

// function to calulate median
function median(array) {
    const item =(array.length)/2;
    if (array.length % 2 === 0){
    return (array[item] + array[item-1])/2;
    } else { 
        return array[Math.floor(item)]
    }
}

// function to calculate avarage
function avarage (array) {
let total=0;
   for (const item of array){
   total += item;
}
return  total/array.length ;
}


// Execute the code 
console.log(median(housePrices)) ;     // The numebers of items are odd number
console.log(median( myHousePrice)) ;  //The numebers of items are even number
console.log(avarage(housePrices)) ;
