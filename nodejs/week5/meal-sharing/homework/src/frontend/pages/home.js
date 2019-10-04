import { createECDH } from "crypto";

function homeRouter(req, router) {
  document.body.innerHTML = `
  <nav class="navbar navbar-expand-lg navbar-dark bg-secondary fixed-top">
    <div class ="container">
        <a class="navbar-brand order-1 mr-0">MEAL SHARING </a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav ml-4">
                <a class="nav-item nav-link" href="http://localhost:3000">HOME <span class="sr-only">(current)</span></a>
                <a class="nav-item nav-link" href="http://localhost:3000/meals">MEALS</a>
                <a class="nav-item nav-link" href="http://localhost:3000/reservations">RESERVATIONS</a>
                <a class="nav-item nav-link" href="http://localhost:3000/reviews">REVIEW</a>
            </div>
        </div>
    </div>
  </nav>

  <div class="col-lg order-lg-2 text-center">
    <h3 class = "my-4">Let's Eat</h3>
    <img  class = "mb-4 img-fluid rounded center-block" src="../assets/mealsharing.jpg" alt="meal sharing">
    <h4>Discover Home Cooking in 150+ Counties!</h4>
  </div>

  <div class ="container">
  <h1 class="display-4 text-center my-5 text-muted">Featured Meals</h1>
    <div id="featured-meal-container"></div>
  </div>

  <div class ="container">
    <h1 class="display-4 text-center my-5 text-muted">Featured Meals</h1>
    <div class="row">
        <div class="col-md-6 col-lg-4">
            <div class="card mb-3">
                    <img class="card-img-top img-fluid" src="../assets/pasta.jpg" alt="pasta">
                    <div class="card-body">
                            <h4 class="card-title pasta"></h4>
                            <p class="card-text pasta"></p>
                    </div>
            </div>
        </div>
        
        <div class="col-md-6 col-lg-4">
            <div class="card mb-3">
                    <img class="card-img-top img-fluid" src="" alt="nodestradamus">
                    <div class="card-body">
                            <h4 class="card-title">NodeStradamus</h4>
                            <p class="card-text">"NodeStra" is a software engineer and philosopher trying to leave the world better than he found it. He codes for non-profits, eCommerce, and large-scale web apps.</p>
                    </div>
            </div>
        </div>
        
        <div class="col-md-6 col-lg-4">
            <div class="card mb-3">
                    <img class="card-img-top img-fluid" src="" alt="Robbie">
                    <div class="card-body">
                            <h4 class="card-title">Robbie Redux</h4>
                            <p class="card-text">Robbie is a JavaScript developer working on large-scale applications. He's also a teacher who strives to support students in removing barriers to learning code.</p>
                    </div>
            </div>
        </div>
        <div class="col-md-6 col-lg-4">
            <div class="card mb-3">
                    <img class="card-img-top img-fluid" src="" alt="ecma">
                    <div class="card-body">
                            <h4 class="card-title">Ecma Scriptnstuff</h4>
                            <p class="card-text">Ecma found her passion for programming and teaching over 15 years ago. She is excited to introduce you to all of the wonders of JavaScript.</p>
                    </div>
            </div>   
        </div>
        
        <div class="col-md-6 col-lg-4">
            <div class="card mb-3">
                    <img class="card-img-top img-fluid" src="" alt="jay">
                    <div class="card-body">
                            <h4 class="card-title">Jay Query</h4>
                            <p class="card-text">Jay is a developer, author of CSS: The Missing Manual, JavaScript &amp; jQuery: The Missing Manual, and web development teacher.</p>
                    </div>
            </div>    
        </div>
        
        <div class="col-md-6 col-lg-4">
            <div class="card mb-3">
                <img class="card-img-top img-fluid" src="" alt="Json">
                <div class="card-body">
                        <h4 class="card-title">Json Babel</h4>
                        <p class="card-text">All of his professional life, Json has worked with computers online; he is a polyglot programmer and likes using the right tools for the job.</p>
                </div>
            </div>
        </div>
    </div> <!-- /speaker -->
  </div>  
 
  `;

}

function fetchFeaturedMeal(){
const url = `http://localhost:3000/api/meals`;
  fetch(url)
  .then(response=>response.json())
  .then(meal =>renderFeaturedMeal(meal));
  ;
}
function renderFeaturedMeal(data){
    const selectedMeal=data.filter(meal => {
        return meal.title==="Pasta" || meal.title==="Mushroom risotto" || meal.title==="Penne" || meal.title==="Veggie ribs"; 
    });
    console.log(selectedMeal);
   
        selectedMeal.forEach(meal=> {
            const featuredMeals = document.createElement("div");
            featuredMeals.setAttribute("class", "featured-meal medium-size large-size");
            const featuredMealContainer = document.querySelector("#featured-meal-container");
            featuredMeals.innerHTML= `
                <div class ="featured-meal-sub-container">
                    <div class ="featured-meal-content">
                        <h4>${meal.title}</h4>
                        <p>${meal.description}</p>
                    </div>    
                </div>    
            
            ` 
            featuredMealContainer.appendChild(featuredMeals);
        });
           
    
}


fetchFeaturedMeal();

export default homeRouter;
