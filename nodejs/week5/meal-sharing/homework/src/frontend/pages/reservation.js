function reservationRouter(req, router) {
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
    </nav>`
}

export default reservationRouter;