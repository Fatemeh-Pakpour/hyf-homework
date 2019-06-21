console.log("Script loaded");

const products = getAvailableProducts();

// variables
const inputItem = document.querySelector("div.search input");
const select = document.querySelector(".country > select");
const selectSort = document.querySelector("div.sort select ");

// add event to the input
inputItem.addEventListener("keypress", searchInput);

//search product by name
function searchInput() {
  const searchName = products.filter(element =>
    element.name.includes(select.value)
  );
  renderProducts(searchName);
}

function convertToLowerCase(str) {
  return str.trim().toLocaleLowerCase();
}

// showing products that ships to country
function searchByCountryName() {
  const selectedCountryName = convertToLowerCase(select.value);
  result = products.filter(item => {
    return item.shipsTo.some(shippingCountry => {
      return convertToLowerCase(shippingCountry) === select.value;
    });
  });
  renderProducts(result);
}
select.addEventListener("change", searchByCountryName);

// sort the products
function sortProducts() {
  if (selectSort.value === "cheap") {
    const sortCheapPrice = products.sort((a, b) => a.price - b.price);
    renderProducts(sortCheapPrice);
  }
  if (selectSort.value === "expensive") {
    const sortHighPrice = products.sort((a, b) => b.price - a.price);
    renderProducts(sortHighPrice);
  }
  if (selectSort.value === "name") {
    const sortName = products.sort((a, b) => (a.name > b.name ? 1 : -1));
    renderProducts(sortName);
  }
}

selectSort.addEventListener("change", sortProducts);

// table of products
const productsUl = document.querySelector("section.products ul");
console.log(productsUl);

// clean the table of products
function cleanItems() {
  while (productsUl.firstChild) {
    productsUl.removeChild(productsUl.firstChild);
  }
}
// render the products in the table
function renderProducts(products) {
  cleanItems();
  products.forEach(product => {
    const btn = document.createElement ("button");
    btn.innerHTML = "Add to cart" ;
    
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
    li.appendChild(btn);
    btn.addEventListener("click", ()=>{
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
    productsUl.appendChild(li);
  });

}


renderProducts(products);
