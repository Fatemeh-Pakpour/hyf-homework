jokes = {

}

const creatJoke = document.querySelector("#crearJoke");
creatJoke.addEventListener("click",jokeCreator);

    
function jokeCreator(shouldTellFunnyJoke=true ,logFunnyJoke, logBadJoke ){
if (shouldTellFunnyJoke){
    logFunnyJoke();
}
else {
    logBadJoke();
}

    }

function logFunnyJoke(){
    console.log("Funny Joke");
}
function logBadJoke(){
    console.log("Bad Joke");
}
executeFunction();