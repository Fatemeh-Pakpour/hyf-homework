// loading movie array
console.log("Script loaded");
const movie = movieList();

// movies with a short title
const shortTitle = movie.filter(element => element.title.length < 2);
// console.log(shortTitle) ;

// // movie titles with long movie titles
const longTitle = movie.filter(element => element.title.length > 60);
// console.log(longTitle);

// Count the number of movies made between 1980-1989 (including both the years)
const numberOfMovie = movie.filter(
  element => element.year >= 1980 && element.year <= 1989
);
 console.log(numberOfMovie.length) ;

// Create a new array that has an extra key called tag. The tag is based on the rating: Good (>= 7), Average (>= 4 and < 7), Bad (< 4)
function addTag() {
  movie.forEach(element => {
    if (element.rating >= 7) {
      element.tag ="Good";
    } else if (element.rating < 7 && element.rating >= 4) {
      element.tag = "Average";
    } else {
      element.tag = "Bad";
    }
  });
}
addTag();

// movies rated higher than 6
function rateHiger6() {
  const rateHiger6 = movie.filter(element => element.rating > 6);
  const mapRateHiger6 = rateHiger6.map(element => element.rating);
  // console.log(mapRateHiger6);
}
rateHiger6();

function splitIntoWords() {
  return  movie.map(element => element.title.toLowerCase().trim().split(/[^a-z0-9]+/gi)); 
}

// Count the total number of movies containing any of following keywords: Surfer, Alien or Benjamin
function search(word) {
  const movieContainKeywords = splitIntoWords().filter(element =>
  element.includes(word));
  return movieContainKeywords;
}
const numberOfMovies = search("surfer").length + search("alien").length + search("benjamin").length;
// console.log(numberOfMovies);
// It shows 11, surfer=2 , Alien = 7, Benjamin = 2

// Create an array of movies where a word in the title is duplicated
function getDuplicate() {
  const mapDuplicate = splitIntoWords().map(element =>
    element.filter((item, index) => element.indexOf(item) !== index));
    return mapDuplicate;
}
const arrayOfDuplicate = getDuplicate().filter(element=> 
  element.length > 0);
 console.log(arrayOfDuplicate);

// Find the word that is mostly duplicated using sort
const maxDuplicate = arrayOfDuplicate.map(element => 
  element.length);

// show the maximum length of duplicate arrays
console.log( Math.max(...maxDuplicate ));

// filter the maximum length of array
const mostlyDuplicateWord = arrayOfDuplicate.filter(element => element.length === 4);
console.log(mostlyDuplicateWord); 
// "the" was the mostely word which is duplicated


// Calculate the average rating of all the movies
function calculateAvarageRating() {
  const ratingArr = movie.map(element => element.rating);
  let reducer =
    ratingArr.reduce(
      (accumulator, currentValue) => accumulator + currentValue
    ) / ratingArr.length;
  reducer = parseFloat(reducer).toFixed(1); 
  console.log(reducer);
}
calculateAvarageRating();

// Count the total number of Good, Average and Bad movies
 function counctTag(word) {
   return movie.filter(element => element.tag === word);
}
console.log("Total number of Good movies :" , counctTag("Good").length);
// result is 2602
console.log("Total number of Average movies :", counctTag("Average").length );
// result is 3837
console.log( "Total number of Bad movies :", counctTag("Bad").length);
// result is 88



