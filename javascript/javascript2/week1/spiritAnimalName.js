/*
*** Homework Fourth Week / Hack Your Future, Javascript2, 
*   Author: Fatemeh Pakpour
*   Spirit animal name generator
*/
// variables
// const nameDatabase = ["The crying butterfly" , "Wisdom like fox" , "Patient like camel " , "Beloved like swan" , "Scary rat" ,"Pinky pig" ,"Strong lion" , "beautiful peacock" , "Lazy panda " ,"Fast rabbit" ] ;
const nameDatabase = [
  {
    name: "The crying butterfly" ,
    image:"https://www.mysticconvergence.com/image/cache/catalog/oberonzell/Psyche-large-900x900.gif " 
  }
  ,
  {
    name: "Wisdom like fox" ,
    image:"https://i0.wp.com/whatismyspiritanimal.com/wp-content/uploads/2016/12/Fox-Spirit-Totem-Power-Animal-Symbolism-Meaning-1200x1200.jpg?x20483"
  }
  ,
  {
    name: "Patient like camel ",
    image:"https://img1.etsystatic.com/134/0/6366562/il_570xN.929446627_lm02.jpg"
  }
  ,
  {
    name: "Beloved like swan" ,
    image:"https://s-media-cache-ak0.pinimg.com/originals/11/c1/81/11c18159b94cb03effa01bb4a6f2df11.jpg"
  }
  ,
  {
    name:"Scary mouse" ,
    image:"https://s3.amazonaws.com/crowdsalefiles.thegamecrafter.com/DF1F3A8E-1701-11E7-ADB8-745E4AD31284/24-spirit-animal-oracle-card-Mouse.png"
  }
  ,
  {
    name:"Intelligent like Pig",
    image:"https://i.etsystatic.com/6366562/r/il/d9aba1/800309777/il_fullxfull.800309777_42bw.jpg"
  }
  ,
  {
    name:"Master of courage like Lion" ,
    image: "https://www.universeofsymbolism.com/images/lion-spirit-animal.jpg"
  }
  ,
  {
    name:"Beautiful peacock",
    image:"https://www.bing.com/th?id=OIP.dQy-7aTYTeBikE2AvdbCTgHaFQ&w=266&h=189&c=7&o=5&dpr=1.5&pid=1.7"
  }
  ,
  {
    name:"Rabbit",
    image: "https://www.bing.com/th?id=OIP.xsHQBXG9MehGPHVfTFSaYwHaHZ&w=194&h=186&c=7&o=5&dpr=1.5&pid=1.7"
  }
  ,
  {
    name:"Take it easy like panda",
    image:"https://s-media-cache-ak0.pinimg.com/originals/b1/9e/50/b19e50ec69a32c9f2f6de2fca3ee3e1b.jpg"
  }

];

const inputName = document.querySelector("input");
const myBtn = document.querySelector ("button.myBtn") ;
const select = document.querySelector ("select") ;
const img = document.querySelector('img');
const h2 = document.querySelector("h2");
 
// Creating random number
function getRandomNumber() {
    return Math.floor(Math.random()*10) ;
  }

// calling the random string from the nameDatabase array
  function getRandomObj(){
    return  nameDatabase[getRandomNumber()];
  }

// creating alert message
function message(){
    if (inputName.value == ""){
       h2.innerHTML ="Add your Name" 
    }
    else{
    const rand = getRandomObj();
    h2.innerHTML= `Name : ${inputName.value} : ${inputName.value} - ${rand.name}`
    img.src =rand.image ; 
  }
}

// creating functionality for hover    
inputName.addEventListener("mouseout", () =>{
   message() ;      
    }) ;   
select.addEventListener("change", ()=>{
    if (select.options.selectedIndex === 1){
      inputName.removeEventListener('mouseout',  switchHover);
      myBtn.addEventListener("click" , switchClick);
    } else {
      myBtn.removeEventListener("click", switchHover);
      inputName.removeEventListener('mouseout',  switchHover);
}
})
function switchClick(){
 message() ; 
}          
function switchHover(){
    message();
}
