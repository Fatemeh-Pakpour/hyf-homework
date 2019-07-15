const btnClick = document.querySelector("#btn_click")
function getJson(){
    fetch("https://gist.githubusercontent.com/pankaj28843/08f397fcea7c760a99206bcb0ae8d0a4/raw/02d8bc9ec9a73e463b13c44df77a87255def5ab9/movies.json")
    .then(response =>response.json())
    .then(json=>{
        // console.log(json);
    displayBadMovies(json) ;
    }
    )};

/**
 *
 *display the title of bad movies 
 * @param {*} data json data
 */
function displayBadMovies(data){
   const arrayOfBadMovieSince2000 =data.filter(movie => movie.rating < 4 && movie.year > 2000)
   const arrayOfMovieTitle = arrayOfBadMovieSince2000.map(movie => movie.title);
   const section =document.querySelector("#section");
   arrayOfMovieTitle.forEach(element => {
    const list = document.createElement("li") ; 
    section.appendChild(list);
    list.innerHTML =element;
   });
   
}
btnClick.addEventListener("click",getJson);



       
  