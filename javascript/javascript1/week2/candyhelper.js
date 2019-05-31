/*
*** Homework second Week / Hack Your Future, Javascript1, 
*   Author: Fatemeh Pakpour
*   Candy Helper
*/

//candy class expression

class Candy {
    constructor(typeOfCandy, pricePerGeram) {
      this.typeOfCandy = typeOfCandy;
      this.pricePerGeram = pricePerGeram;
    };
    addCandy(weight) {
        return this.pricePerGeram * weight;}
    }

//Generating random number for weight

const randomWeight = Math.floor(Math.random() * 100 +20);

const boughtCandyPrices = [
   new Candy("sweet",0.5).addCandy(20) ,
   new Candy("Chocolate", 0.7).addCandy(20) ,
   new Candy("Toffee", 1.1).addCandy(randomWeight) ,
   new Candy("Chewing-gum", 0.03).addCandy(randomWeight)
 ] ;
 console.log(boughtCandyPrices) ;
 
 //calcu,ating total price
 let totalPrice=0;
for(let i = 0 ; i < boughtCandyPrices.length ; i++) {
    totalPrice += boughtCandyPrices[i] ;
}
console.log(totalPrice) ;

 const amountToSpend = Math.floor(Math.random() * 100 + 100 ) ;
 console.log(amountToSpend);
 
 //if we can more candy

    if (amountToSpend > totalPrice) {
        console.log("You can buy more, so please do!");  
    } else {
        console.log("Enough candy for you!");   
    }
