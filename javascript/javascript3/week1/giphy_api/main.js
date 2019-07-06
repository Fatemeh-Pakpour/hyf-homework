const searchWordInput = document.querySelector("#search_giphy");
const searchButton = document.querySelector("#search_button");
const giphyNumber = document.querySelector("#input_number_of_giphy");

function giphy(searchWord, limitNumber) {
  const apiKey = "IYgRlVgzfHVNLpy1XEsunbC9Tya21NJQ";
  fetch(
    "https://api.giphy.com/v1/gifs/search?q=" +
      searchWord +
      "&api_key=" +
      apiKey +
      "&limit=" +
      limitNumber +
      "&offset=0&rating=G&lang=en"
  )
    .then(resp => resp.json())
    .then(json => {
      console.log(json);
      showGiphy(json);
    });
}
/**
 *remove images
 *
 * @param {*} item => the parentNode
 */
function cleanItems(item) {
  while (item.firstChild) {
    item.removeChild(item.firstChild);
  }
}
/**
 *function for creating image of giphy
 *
 * @param {*} dataOfJson
 */

function showGiphy(dataOfJson) {
  const imageDiv = document.querySelector("#image_div");
  cleanItems(imageDiv);
  const urlArray = dataOfJson.data.map(element => element.images.original.url);
  urlArray.forEach(element => {
    const image = document.createElement("img");
    image.setAttribute("src", element);
    imageDiv.appendChild(image);
  });
}
searchButton.addEventListener("click", () => {
  if (searchWordInput.value === "") {
    alert("Enter your gif name");
  }
  giphy(searchWordInput.value.toLowerCase().trim(), giphyNumber.value);
});
