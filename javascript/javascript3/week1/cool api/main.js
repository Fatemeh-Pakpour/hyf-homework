const imageDiv = document.querySelector("#image_div");

function photo(){
const apiKey = "26d8d016290f13f48088af169ba901361c1bc0cc462eeacf88793d9d7b6ad510";
fetch("https://api.unsplash.com/photos/?client_id="+ apiKey)
.then(response =>response.json())
.then(json => {
  console.log(json);
  displayPhoto(json);
});
}

/**
 * display images of json file
 *
 * @param {*} data =>data of json file
 */
function displayPhoto(data){
  const urlArray = data.map(element => element.urls.regular);
  urlArray.forEach(item => {
    const image = document.createElement("img");
    image.setAttribute("src",item);
    imageDiv.appendChild(image);  
  });
}
document.getElementById("btnReload").addEventListener("click", photo);


