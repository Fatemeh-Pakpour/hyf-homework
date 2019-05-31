/*
*** Homework second Week / Hack Your Future, Javascript1, 
*   Author: Fatemeh Pakpour
*   Event application
*/


let now = new Date();
let today = now.getDay() 
const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
function getEventDay(daysToEventDay) {
    let calculteIndexOfWeekdays = (today + daysToEventDay) % 7;
    return  weekdays [calculteIndexOfWeekdays];
    }
    console.log("The event is held on " + getEventDay(2));
