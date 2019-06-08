/*** Homework Third Week / Hack Your Future, Javascript1, 
*   Author: Fatemeh Pakpour
*   CactusIO-interactive (Smart phone usage app)
*/
const activities = [] ;
const today  = new Date();

// Add the activities 
function addActivity(date , activity , duration ) {
    onlineActivity = {
        date: date ,
        activity : activity ,
        duration :  duration ,
    };
     activities.push(onlineActivity ) ;
}

// ShowStatus
let sum =0 ;
function showStatus(limit=true , limitTime = 0) {
    if (activities.length < 1 || activities == undefined){
        console.log ("Add some activities"); 
    } 
    else {
    for(let i =0 ; i < activities.length ; i++){
            sum= sum + activities[i].duration;
    }  
    console.log(`You have added ${activities.length} activities.They amount to ${sum} min. of usage`  )
    
        if( limit){
            if(limit && sum>=limitTime){
    console.log ("You have reached your limit, no more smartphoning for you!");
}
         } 
    } 
} 

//  Showing the number of actitivies for that specific day
const activityByDate= [] ;
function addActivityByDate (date) {
    for(let i =0 ; i < activities.length ; i++){
        if ( activities[i].date === date){
            activityByDate.push(activities[i]);  
        }
    } 
     console.log(`You have ${activityByDate.length} activities on ${today.toLocaleDateString("en-UE")}`  )  
}
// Calculating the activity a user has spent the most time on
function getMaximumDurationActivity(){
    let result= 0;
    for(let i =0 ; i < activities.length ; i++){
        if(activities[i].duration > result){
            result = activities[i].duration;
        }
    }
         return result;
}

 // Execute the code
addActivity(today.toLocaleDateString("en-UE") , "watching Youtube" , 30 );
addActivity(new Date(Date.UTC(2012, 11, 20)).toLocaleDateString("en-UE") , "facebook" , 50 );
addActivity(new Date(Date.UTC(2012, 11, 20)).toLocaleDateString("en-UE") , "cheking Instagram" , 40 );
addActivity(today.toLocaleDateString("en-UE") , "cheking Instagram" , 20 );
console.log ( activities );
showStatus( true, 300);
addActivityByDate(today.toLocaleDateString("en-UE"));
console.log(activityByDate);
console.log(`The Maximum minutes that you spent is: ${ getMaximumDurationActivity()} min`);


