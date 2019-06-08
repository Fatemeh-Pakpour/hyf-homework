/*
*** Homework Third Week / Hack Your Future, Javascript1, 
*   Author: Fatemeh Pakpour
*   When will we be there?
*/
// The function has to return the time it will take to arrive at your destination

const travelInformation = {
    speed: 50,
    destinationDistance: 432,
  };
  
 function travelTime () {
      return travelInformation.destinationDistance / travelInformation.speed ;
  }

//   converting time to hours and minutes
  const hour = parseInt( travelTime ()) ;
  let minute =  (travelTime () - Math.floor( travelTime ()))*60 ;
  minute = minute.toFixed(0);
  
  // Execute the code
  console.log( travelTime ()); 
  console.log( hour + " hours and " + minute + " minutes ");


