

// Age calculator

const yearOfBirth = 1985 ;
const yearFuture = 2025 ;
const futureYear =  yearFuture - yearOfBirth ;
console.log (futureYear);
console.log ("I will be " + futureYear + " years old in " + yearFuture) ;


// Goodboy-Oldboy (A dog age calculator)
const dogYearOfBirth = 2014;
const dogYearFuture = 2050;
const ageInHumanYear = dogYearFuture - dogYearOfBirth; 
const ageOfDog =  ageInHumanYear * 7 ;
const shouldShowResultInDogYears = true ;
if (shouldShowResultInDogYears) {
    console.log ( " Your dog will be " + ageOfDog +  " dog years old in " +  dogYearFuture  ) ;
  }
  else{
    console.log ( " Your dog will be " + ageInHumanYear + " human years old in " + dogYearFuture ) ; 
  }

// Housey pricey (A house price estimator)
const width = 8 ;
const depth = 10 ;
const height = 10 ;
const gardenSizeInM2 = 100 ;   //SI derived unit of area with symbol m2
const volumeInMeters =  width * depth * height ;
const housePrice = volumeInMeters * 2.5 * 1000 + gardenSizeInM2 * 300 ;
console.log (housePrice) ;
if (housePrice < 2500000) {
    console.log ( "Peter and Julia are paying too much")
}

// Ez Namey (Startup name generator)
const firstName = ["awesome", "easy", "lovely", "dragon", "serpent", "vegi" ,"cheesy", "coco", "toy", "monster"];
const secondName = ["clothes", "fifi", "general","basic", "production", "home", "fact", "real", "visual", "world"] ;

const randomNumberFirst = Math.floor ( Math.random() * 10 ) + 0 ;
console.log (firstName [randomNumberFirst]);
const randomNumberSecond = Math.floor(Math.random() * 10) + 0 ;
console.log (secondName[randomNumberSecond]);
const startupName = firstName[randomNumberFirst] + " " + secondName[randomNumberSecond];
console.log ("The startup:" + startupName  + " contains " + startupName.length + " characters") ;


