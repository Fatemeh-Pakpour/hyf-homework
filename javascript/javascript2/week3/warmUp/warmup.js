// Log out the text Called after 2.5 seconds
setTimeout(() => {console.log("Come on!")}, 2500);

// function to show the script with delay
function delay(delay , stringToLog){
    setTimeout(() => {console.log(stringToLog)}, delay);  
}
delay(3500, "Slow slow !")

// log out the text after 3.5 seconds that button is clicked
const btn = document.querySelector("button.btn");
btn.addEventListener("click", ()=>{
    setTimeout(() => {console.log("That was really slow!")}, 2500);
});

function firstLogOut(){
    console.log("Earth");
}
function secondLogOut(){
    console.log("Saturn");
}
function planetLogFunction(){
    setTimeout(() => {firstLogOut()}, 3200);
}   setTimeout(() => {secondLogOut()}, 3500);
planetLogFunction();


// double click
// const body = document.querySelector("body");
// body.addEventListener("click", ()=>{
//     setTimeout(()=>{doubleclick()}, 500);
// });
function doubleClickfunc(){
       console.log("double click!");  
}
// doubleClick.addEventListener("dblclick", doubleClickfunc);
const body =document.querySelector("body");
body.addEventListener("click", () => {
     setTimeout(() =>{body.addEventListener("click", doubleClickfunc)},500);
 });

//  

