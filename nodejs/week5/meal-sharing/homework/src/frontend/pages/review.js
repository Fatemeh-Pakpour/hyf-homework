function reviewRouter(req, router) {
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
                    <a class="nav-item nav-link" href="http://localhost:3000/reservations">RESERVATIONS</a>
                    <a class="nav-item nav-link" href="http://localhost:3000/reviews">REVIEW</a>
                </div>
            </div>
        </div>
    </nav>

    <div class ="container">
    <h1 class="display-4 text-center my-4 text-muted">Reviews</h1>
    <hr>
      <div id="reviews-container"></div>
      <div class ="1">
    </div> 
  </div>
  `
}




  // total star
  const TOTAL_STAR = 5;
  
  
  function fetchAllReviews() {
    const url = `http://localhost:3000/api/reviews`;
    fetch(url)
      .then(response => response.json())
      .then(review => renderAllReviews(review));
  }
  function renderAllReviews(review) {
    review.forEach(review => {
      
      const reviews = document.createElement("div");
      reviews.setAttribute("class", "featured-meal medium-size large-size");
      const reviewsContainer = document.querySelector("#reviews-container");
      
      reviews.innerHTML = `
              <div class ="featured-meal-sub-container">
                  <div class ="featured-meal-content">
                      <h4>${review.title}</h4>
                      <li>Description : ${review.description}</li>
                      <li>Meal's id : ${review.meal_id}</li>
                      <li>Created date : ${review.created_date}</li> 
                      <div class ="stars-outer">
                        <li class ="stars-inner Sony"></li>
                      </div>  
                  </div>    
              </div>   
          `;
  
    reviewsContainer.appendChild(reviews);
 
    });
  }
  

  fetchAllReviews();

  /**
   *get rating
   *
   */
  



  export default reviewRouter;