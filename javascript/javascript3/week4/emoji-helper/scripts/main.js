console.log("Script loaded");
const inputSearch = document.querySelector(".input_search");
const selectCategory = document.querySelector(".emoji_category");
const emojiListElem = document.querySelector(".emoji_list");
const favoriteEmojiUl = document.querySelector(".favorite_emoji");

let favoritEmoji = [];

/**
 * fetch emoji
 *
 */
let listOfEmoji;
function emojiFetch() {
  const url =
    "https://raw.githubusercontent.com/amio/emoji.json/master/emoji.json";
  fetch(url)
    .then(response => response.json())
    .then(json => {
      listOfEmoji = json;
      renderEmoji(listOfEmoji, emojiListElem);
      cateagoryOfEmoji(listOfEmoji);
      JSON.parse(localStorage.getItem("favoritEmoji"));
    });
}

/**
 *
 * render emojis
 * @param {*} listOfEmoji
 * @param {*} [listElement=emojiListElem]
 */
function renderEmoji(listOfEmoji, listElement = emojiListElem) {
  listElement.innerHTML = "";
  listOfEmoji.forEach(emoji => {
    const emojiUl = document.createElement("ul");
    const emojiLi = document.createElement("li");
    emojiLi.innerHTML = emoji.char;
    emojiLi.classList.add("emoji");
    emojiUl.appendChild(emojiLi);

    const emojiName = document.createElement("li");
    emojiName.innerHTML = emoji.name;
    emojiUl.appendChild(emojiName);
    emojiUl.addEventListener("click", () => {
      writeToClipboardOnPermission(emoji.name);
      saveEmoji(emoji);
    });
    listElement.appendChild(emojiUl);
  });
}
inputSearch.addEventListener("keyup", () => {
  const categorySelcted = searchEmoji(
    inputSearch.value,
    filterByCategory(),
    "name"
  );

  renderEmoji(categorySelcted);
});
/**
 *filter the emojis by category
 *
 * @returns
 */
function filterByCategory() {
  let listOfEmojisByCategory;
  if (selectCategory.value === "Select Category") {
    listOfEmojisByCategory = listOfEmoji;
  } else {
    listOfEmojisByCategory = searchEmoji(
      selectCategory.value,
      listOfEmoji,
      "category"
    );
  }
  return listOfEmojisByCategory;
}

/**
 *creat options in the select tag
 *
 */
function cateagoryOfEmoji(listOfEmoji) {
  const selectCategory = document.querySelector(".emoji_category");
  const categories = listOfEmoji.map(emoji => emoji.category);
  const categoriesWithoutRepetition = categories.filter(
    (item, index) => categories.indexOf(item) === index
  );
  categoriesWithoutRepetition.forEach(category => {
    optionTag = document.createElement("option");
    optionTag.textContent = category;
    selectCategory.appendChild(optionTag);
  });
  selectCategory.addEventListener("change", () => {
    inputSearch.value = "";
    const selectedEmoji = searchEmoji(
      selectCategory.value,
      listOfEmoji,
      "category"
    );
    renderEmoji(selectedEmoji);
  });
}
/**
 *search emoji
 *
 * @param {*} searchString
 * @param {*} listOfEmoji
 * @param {*} optionOfSearch
 * @returns
 */
function searchEmoji(searchString, listOfEmoji, optionOfSearch) {
  return listOfEmoji.filter(emoji => {
    return emoji[optionOfSearch].includes(searchString);
  });
}
/**
 *save emoji on favarit section
 *
 * @param {*} emoji
 */
function saveEmoji(emoji) {
  favoritEmoji.unshift(emoji);
  favoritEmoji = favoritEmoji.filter(
    (emoji, index) => favoritEmoji.indexOf(emoji) === index
  );
  if (favoritEmoji.length >= 27) {
    favoritEmoji.pop();
  }

  localStorage.setItem("favoritEmoji", JSON.stringify(favoritEmoji));
  renderEmoji(favoritEmoji, favoriteEmojiUl);
}

emojiFetch();
