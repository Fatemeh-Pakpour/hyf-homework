fetch("https://jsonplaceholder.typicode.com/users")
  .then(response => response.json())
  .then(json =>
    json.forEach(element => {
      console.log(element.name);
    })
  );
function loadAnswer(){
    fetch("https://yesno.wtf/api")
    .then(response => response.json())
    .then(json => {console.log(json)
        const img = document.querySelector("#image");
        const display = document.querySelector("h1");
         display.textContent = json.answer.toUpperCase();
        img.src = json["image"];
    });
}
loadAnswer();
document.getElementById("btnReload").addEventListener("click", loadAnswer);

window.addEventListener("load", event => {
  
  if(localStorage.getItem("city") !== null){
    const data = JSON.parse(localStorage.getItem("city"));
    display(data);
  }

});

