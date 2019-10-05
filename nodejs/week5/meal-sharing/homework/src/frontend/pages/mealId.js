//  I am still working on it

function mealId(req, router) {
    console.log("hello");
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
                <a class="nav-item nav-link" href="http://localhost:3000/reviews">REVIEWS</a>
            </div>
        </div>
    </div>
  </nav>
<div class= "container">
    <form>
    <div class="form-group">
        <label for="exampleInputName">Full Name</label>
        <input type="text" id = "name" class="form-control my-3" placeholder="Enter Name">
        <label for="exampleInputEmail1">Email Address</label>
        <input type="email" id = "email" class="form-control my-3" placeholder="Enter email">
        <small id="emailHelp" class="form-text text-muted mb-3">We'll never share your email with anyone else.</small>
        <label for="exampleInputPassword1">Password</label>
        <input  type="tel" id = "phone" class="form-control my-3"  placeholder="Enter Phone Number">
    </div>
    <button type="submit" id = "btn-submit" class="btn btn-primary">Submit</button>
    </form>
</div>
<div class="container">
<div class= "reservation"></div>
</div>
    `

fetchMeal(req.param.id);

const btnSubmit = document.querySelector("#btn-submit");
const name = document.querySelector("#name");
const phone = document.querySelector("#phone");
const email = document.querySelector("#email");



btnSubmit.addEventListener('click', () => {
    const url = '/api/reservations/';
    const data = {
        "Name": name.value,
        "Telephone": phone.value,
        "Email": email.value,
        "MealId": req.param.id
      }
    postRequest(url,data);
});
}

function fetchMeal(params){
    fetch('/api/meals/' + params)
    .then(response => response.json(params))
    .then(meals => {
      console.log(meals)
    });
}

function postRequest(url, data) {
    return fetch(url, {
      credentials: 'same-origin', // 'include', default: 'omit'
      method: 'POST', // 'GET', 'PUT', 'DELETE', etc.
      body: JSON.stringify(data), // Coordinate the body type with 'Content-Type'
      headers: new Headers({
        'Content-Type': 'application/json'
      }),
    })
    .then(response => response.json())
    .then(info =>{
        console.log(info);

    }
    );
  }


export default mealId;
