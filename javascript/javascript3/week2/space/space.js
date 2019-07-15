const wikiUrl = "https://en.wikipedia.org/api/rest_v1/page/summary/";
const austranusList = document.querySelector("#austranus_list");
const btnSearch = document.querySelector("#btn_search");

btnSearch.addEventListener("click", () => {
  fetch("https://api.open-notify.org/astros.json")
    .then(response => response.json())
    .then(getProfiel)
    .then(displaySearchInfo)
    .catch(err => console.log(err))
});

function getProfiel(json) {
  const profiles = json.people.map(person => {
    const craft = person.craft;
    return fetch(wikiUrl + person.name)
      .then(response => response.json())
      .then(profile => {
        return { ...profile, craft };
      })
      .catch(console.log("Error From Fetching Wiki: "));
  });
  return Promise.all(profiles);
}
function displaySearchInfo(data) {
  data.forEach(person => {
    const section = document.createElement("section");
    section.innerHTML = `
    <img src=${person.thumbnail.source}>
    <span>${person.craft}</span>
    <h2>${person.title}</h2>
    <p>${person.description}</p>
    <p>${person.extract}</p>
    `;
    austranusList.appendChild(section);
  });
}

