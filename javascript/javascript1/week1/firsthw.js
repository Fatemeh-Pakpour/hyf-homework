

// Age calculator

let yearOfBirth = 1985 ;
let yearFuture = 2025 ;
let futureYear =  yearFuture - yearOfBirth ;
console.log (futureYear);
console.log ("I will be " + futureYear + " years old in " + yearFuture) ;


// Goodboy-Oldboy (A dog age calculator)
let dogYearOfBirth = 2014;
let dogYearFuture = 2050;
let ageInHumanYear = dogYearFuture - dogYearOfBirth; 
let ageOfDog =  ageInHumanYear * 7 ;
let shouldShowResultInDogYears = true ;
if (shouldShowResultInDogYears) {
    console.log ( " Your dog will be " + ageOfDog +  " dog years old in " +  dogYearFuture  ) ;
  }
  else{
    console.log ( " Your dog will be " + ageInHumanYear + " human years old in " + dogYearFuture ) ; 
  }

// Housey pricey (A house price estimator)
let width = 8 ;
let depth = 10 ;
let height = 10 ;
let gardenSizeInM2 = 100 ;   //SI derived unit of area with symbol m2
let volumeInMeters =  width * depth * height ;
let housePrice = volumeInMeters * 2.5 * 1000 + gardenSizeInM2 * 300 ;
console.log (housePrice) ;
if (housePrice < 2500000) {
    console.log ( "Peter and Julia are paying too much")
}

// Ez Namey (Startup name generator)
let firstName = ["awesome", "easy", "lovely", "dragon", "serpent", "vegi" ,"cheesy", "coco", "toy", "monster"];
let secondName = ["clothes", "fifi", "general","basic", "production", "home", "fact", "real", "visual", "world"] ;

const randomNumberFirst = Math.floor ( Math.random() * 10 ) + 0 ;
console.log (firstName [randomNumberFirst]);
const randomNumberSecond = Math.floor(Math.random() * 10) + 0 ;
console.log (secondName[randomNumberSecond]);
let startupName = firstName[randomNumberFirst] + " " + secondName[randomNumberSecond];
console.log ("The startup:" + startupName  + " contains " + startupName.length + " characters") ;


