function meals(req, router) {
  console.log("hello");
  document.body.innerHTML = `
  
  <nav class="navbar navbar-expand-lg navbar-dark bg-secondary fixed-top">
    <div class ="container">
        <a class="navbar-brand order-1 mr-0">Meal Sharing</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav ml-4">
              <a class="nav-item nav-link" href="http://localhost:3000">HOME <span class="sr-only">(current)</span></a>
              <a class="nav-item nav-link" href="http://localhost:3000/meals">MEALS</a>
              <a class="nav-item nav-link" href="http://localhost:3000/reviews">REVIEW</a>
            </div>
        </div>
    </div>
  </nav>

  <div class ="container">
    <h1 class="display-4 text-center my-4 text-muted">Meals</h1>
    <hr>
      <div id="meals-container"></div>
  </div>
  
  `;
}

function fetchAllMeals() {
  const url = "/api/meals";
  fetch(url)
    .then(response => response.json())
    .then(meal => renderAllMeals(meal));
}
function renderAllMeals(data) {
  data.forEach(meal => {
    const meals = document.createElement("div");
    meals.setAttribute("class", "featured-meal medium-size large-size");
    const mealsContainer = document.querySelector("#meals-container");
    meals.innerHTML = `
            <div class ="featured-meal-sub-container">
                <div class ="featured-meal-content">
                    <h4>${meal.title}</h4>
                    <li>${meal.description}</li>
                    <li>${meal.location}</li>
                    <li>Data ${meal.when}</li>
                    <li>Price is ${meal.price}</li>
                    <li>The maximum reservations is ${meal.max_reservations}</li>
                    <li>${meal.created_date}</li>
                    <div class="btn-group float-right" role="group" aria-label="Basic example">
                    <button type="button" class="btn btn-info reservation">Reservation</button>
                    <button type="button" class="btn btn-info review">Review</button>
                  </div
                   
                </div>    
            </div>    
        
        `;
    mealsContainer.appendChild(meals);
  });
}

fetchAllMeals();


export default meals;
