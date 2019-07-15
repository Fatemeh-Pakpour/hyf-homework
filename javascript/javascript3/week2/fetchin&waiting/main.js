const btnSearch = document.querySelector("#btn_search");
const inputSearch =document.querySelector("#input_search");
const displyDiv = document.querySelector("#display_div");
const wikiUrl = "https://en.wikipedia.org/api/rest_v1/page/summary/"; 

btnSearch.addEventListener("click", (event)=>{
  event.target.textContent = "Loading...";
    fetch(wikiUrl + inputSearch.value)
    .then(response => response.json())
    .then(displaySearch)
    .catch( err => {
      displyDiv.innerHTML = '<h3>Something went wrong!</h3>';
      console.log(err);
    });
})

function cleanItems(item) {
  while (item.firstChild) {
    item.removeChild(item.firstChild);
  }
}
 function displaySearch(data){ 
     const section = document.createElement("section");
     cleanItems(displyDiv);
     if(data.hasOwnProperty('thumbnail')){
      section.innerHTML =`
      <h2>${data.title}</h2>
      <p> ${data.extract}</p>
      <img src= ${data.thumbnail.source}>
      `
     
     } 
     else{
      section.innerHTML =`
      <h2>${data.title}</h2>
     <p> ${data.extract}</p>
      `
     }
     return new Promise(resolve => {
      setTimeout(()=> {
      resolve(displyDiv.appendChild(section));
      }, 3000);
    });
   
        
    

    }
    


