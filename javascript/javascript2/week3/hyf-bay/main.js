console.log("Script loaded");

const products = getAvailableProducts();

// variables
const inputItem = document.querySelector(".search > input");
const select = document.querySelector(".country > select");
const selectSort = document.querySelector(".sort > select ");
const listOfShopping = document.querySelector("section.products ul");

renderProducts(products);

function convertToLowerCase(str) {
  return str.trim().toLocaleLowerCase();
}

//search product by name
function filterByName(productsList, searchText) {
  searchText = convertToLowerCase(searchText);

  if (!searchText) {
    return productsList;
  }

  return productsList.filter(product => {
    const name = convertToLowerCase(product.name);
    return name.includes(searchText);
  });
}
// showing products that ships to country
function filterByCountryName(productsList, countryName) {
  countryName = convertToLowerCase(countryName);

  if (!countryName) {
    return productsList;
  }

  return productsList.filter(product => {
    for (let shippingCountry of product.shipsTo) {
      shippingCountry = convertToLowerCase(shippingCountry);
      if (shippingCountry === countryName) {
        return true;
      }
    }
    return false;
  });
}


// sort the products by name and price(expensive and cheap) 
function sortList(list) {
  if (selectSort.value === "cheap") {
   return list.sort((a, b) =>{return a.price - b.price});
  }
  if (selectSort.value === "expensive") {
   return  list.sort((a, b) =>{ return b.price - a.price});
  }
  if (selectSort.value === "name") {
    return list.sort((a, b) => {return a.name > b.name ? 1 : -1});
  }
  return list;
}

// clean the lsit of products
function cleanItems() {
  while (listOfShopping.firstChild) {
    listOfShopping.removeChild(listOfShopping.firstChild);
  }
}
/**
 * render the products in the table
 *
 * @param {array} list => list of product
 */
function renderProducts(list) {
  cleanItems();
  list.forEach(product => {
    const btnCart = document.createElement("button");
    btnCart.innerHTML = "Add to cart";

    const li = document.createElement("li");
    const shipsToHTML = product.shipsTo.reduce(
      (acc, country) => `<li>${acc}</li><li>${country}</li>`
    );
    li.innerHTML = `
            <ul>
                <li>${product.name}</li>
                <li>${product.price}</li>
                <li>${product.rating}</li>
                <ul class="ships-to">${shipsToHTML}</ul> 
            </ul>
        `;
    li.appendChild(btnCart);
    btnCart.addEventListener("click", () => {
      const ulChart = document.querySelector("section.cart ul");
      const liChart = document.createElement("li");
      liChart.innerHTML = `
            <ul>
                <li>${product.name}</li>
                <li>${product.price}</li>
            </ul>
      `;
      ulChart.appendChild(liChart);
    });
    listOfShopping.appendChild(li);
  });
}
// function to call the rederProduct function to render the list of
//  product based on ffilterByCountryName or filterByName or sortList
function refreshProductsView() {
  let filteredProducts = filterByCountryName(products, select.value);
  filteredProducts = filterByName(filteredProducts,  inputItem.value);
  filteredProducts = sortList(filteredProducts);

  renderProducts(filteredProducts);
}

//  event 
select.addEventListener("change", refreshProductsView);
selectSort.addEventListener("change", refreshProductsView);
inputItem.addEventListener("keypress", refreshProductsView);
// renderProducts(products);

sendPricesToServer(products.map((element) => {
  return element.price
})
 ,
(string)=>{
  alert(string);
}
);

