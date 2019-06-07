/*
*** Homework Third Week / Hack Your Future, Javascript1, 
*   Author: Fatemeh Pakpour
*   Series duration of my life
*/
// The function has to return the time it will take to arrive at your destination
const myLife = 80 ;
class SeriesDurations {
    constructor(title, days, hours,  minutes){
    this.title= title;
      this.days= days;
      this.hours=hours ;
      this.minutes= minutes; 
} 
time (){
    // calculating how much time based on year
    var timeOfMyLife = (((this.days* this.hours )+(this.minutes/60))*100/(365*myLife));
    return parseFloat(timeOfMyLife.toFixed(2));
  }
}  
// The TV series data base
  const series = [
  new SeriesDurations ("Game of thrones", 3 , 1, 0),
  new SeriesDurations ("Sopranos", 3 , 14, 0),
  new SeriesDurations ("The Wire", 2 , 12, 0)];
  
  // Calculate how much time based on my life
  let sum = 0;
  for (let i =0 ; i <series.length ; i++){
    (sum += series[i].time());
    console.log(`${series[i].title} took ${series[i].time()} of my life`)
  } 
  // Execute the code
  console.log(`In total that is ${sum.toFixed(2)} of my life.`)


