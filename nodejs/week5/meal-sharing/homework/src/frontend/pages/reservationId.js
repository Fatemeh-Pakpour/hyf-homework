// import mealRouter from "./pages/meal";

const reservationButton = document.querySelector(".reservation");
console.log(reservationButton);

function reservationIdRouter(req, router) {
    document.body.innerHTML = `
    <h1>hi</h1>`
}

function fetchreservationById(){
    const url = `http://localhost:3000/api/reservations`;
      fetch(url)
      .then(response=>response.json())
      .then(meal =>renderFeaturedMeal(meal));
      ;
    }


export default reservationIdRouter;