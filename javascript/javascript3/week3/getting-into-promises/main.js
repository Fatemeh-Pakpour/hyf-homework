const repoList = document.querySelector("#ul_repository");

const token = "f3cc8cf3817705fae91ce8dbe332158fafea11e4";

const usernames = ["Laila1222", "fatemeh-pakpour", "azinkamran"];

/**
 *
 * fetch from githb api
 * @param {*} user => username
 * @returns
 */
function fetchGithubRepositories(user) {
  const url = `https://api.github.com/search/repositories?q=user:${user}`;
  return fetch(url, { headers: { Authorization: `token ${token}` } })
    .then(response => response.json())
    .then(searchResult => searchResult.items);
}

Promise.all(usernames.map(fetchGithubRepositories))
  .then(reposForUsers => {
    console.log(reposForUsers);
    const buttonShow = document.querySelector("#show");
    buttonShow.addEventListener("click", () => {
      reposForUsers.forEach(rendersReposForUser);
    });
  })
  .catch(err => alert(err));

/**
 * render the repository information
 *
 * @param {*} reposList
 */
function rendersReposForUser(reposList) {
  const username = reposList[0].owner.login;
  const addUrl = reposList.reduce((acc, repo) => {
    return `${acc}
      <li>${repo.url}</li>`;
  }, "");

  const repositoryUrlList = document.createElement("li");
  repositoryUrlList.innerHTML = `
        <li> ${username}'s repository 
        <ul>${addUrl} </ul>
        </li>
    `;
  repoList.appendChild(repositoryUrlList);
}
