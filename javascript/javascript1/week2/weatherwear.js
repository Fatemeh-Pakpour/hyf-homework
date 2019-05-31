/*
*** Homework second Week / Hack Your Future, Javascript1, 
*   Author: Fatemeh Pakpour
*  Weather wear
*/

function clothesToWear (temperature) {
    if(temperature < 0) {
        return "Wear a warm jacket, proper bootes and gloves."
    }else if(temperature > 35) {
           return "Stay home and be naked under AC."  
    } else if(temperature > 18) {
       return "Wear a flowery shirt and shorts."
   } else {
       return "Wear a thin jacket."
   }}
   console.log(clothesToWear (50));
   console.log(clothesToWear (20));
   console.log(clothesToWear (-2));