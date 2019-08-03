const selectCurrency = document.querySelector("#currency");
/* class of product inclusing name and price of each product */
class Product {
  constructor(name, price, currentCurrency) {
    this.name = name;
    this.price = price;
    this.currentCurrency = currentCurrency;
  }
  /**
   *
   *
   * @param {*} currency => the currency that is going to be convereted
   * @memberof Product => the name of the class
   */
  convertCurrency(currency) {
    const apiKey = "7576dc507b6854322178";
    fetch(
      `https://free.currconv.com/api/v7/convert?q=${
        this.currentCurrency
      }_${currency}&compact=ultra&apiKey=${apiKey}`
    )
      .then(response => response.json())
      .then(data => {
        console.log(typeof this.price);
        this.price = this.price * data[`${this.currentCurrency}_${currency}`];
        this.currentCurrency = currency;
        console.log(this.price);
      });
  }
}
/* class including some functions to add and render then delete the products */
class ShoppingCart {
  constructor(products) {
    this.products = products;
  }

  /**
   *
   *
   * @param {*} product => every product that is going to have in the shopping cart
   * @memberof ShoppingCart =>
   */
  addProduct(product) {
    this.products.push(product);
  }

  /**
   *
   *
   * @param {*} product => the item of product is going to remove
   * @memberof ShoppingCart
   */
  removeProduct(product) {
    const index = this.products.indexOf(product);
    this.products.splice(index, 1);
    this.renderProducts();
    // console.log(this.products);
  }

  /**
   *
   *
   * @param {*} productName => the product name we are looking for
   * @returns
   * @memberof ShoppingCart
   */
  searchProduct(productName) {
    const searchItem = this.products.filter(
      item => convertToLowerCase(item.name) === convertToLowerCase(productName)
    );
    return searchItem;
  }

  /**
   *
   *calculate the total price
   * @returns
   * @memberof ShoppingCart
   */
  getTotal() {
    const totalPrice = this.products.reduce(
      (sum, price) => sum + price.price,
      0
    );
    return totalPrice;
  }

  /**
   *render all products
   *
   * @memberof ShoppingCart
   */
  renderProducts() {
    /**
     *Creat button
     *
     * @param {*} parent
     */
    function creatButton(parent) {
      const removeItemButton = document.createElement("button");
      removeItemButton.classList.add("delete_button");
      removeItemButton.textContent = "Delete";
      parent.appendChild(removeItemButton);
      return removeItemButton;
    }
    /**
     *creat list of each product
     *
     * @param {*} parent
     * @param {*} data
     * @returns
     */
    function creatList(parent, name, price, currency) {
      const itemList = document.createElement("li");
      itemList.innerHTML = `
      <li>${name}</li>
      <li>${formatNumber(price)} ${currency}</li>
      `;
      parent.appendChild(itemList);
      return itemList;
    }
    const productList = document.querySelector(".product_list");
    productList.innerHTML = "";
    this.products.forEach(product => {
      const productName = creatList(
        productList,
        product.name,
        product.price,
        product.currentCurrency
      );
      productList.appendChild(productName);
      const that = this;
      creatButton(productName).addEventListener("click", () => {
        that.removeProduct(product);
      });
    });
    // render Total price
    const totalPrice = document.querySelector("#total_price");
    totalPrice.textContent = `Total Price : ${formatNumber(this.getTotal())} EUR  `;
  }
  /**
   *fetch api of user
   *
   * @memberof ShoppingCart
   */
  getUser() {
    const url = "https://jsonplaceholder.typicode.com/users/1";
    fetch(url)
      .then(response => response.json())
      .then(json => this.renderUsername(json))
      .catch(err => alert(err));
  }
  /**
   *
   *disply the username
   * @param {*} data
   * @returns
   * @memberof ShoppingCart
   */
  renderUsername(data) {
    const username = document.querySelector("#urername");
    username.classList.add("username");
    const promise = new Promise((resolve, reject) => {
      resolve((username.textContent = `${data.username}'s Shopping Basket`));
      reject(Error("fail"));
    });
    return promise;
  }
}
/**
 *
 * convert the string to lowecase letters
 * @param {*} string
 * @returns
 */
function convertToLowerCase(string) {
  return string.trim().toLocaleLowerCase();
}

 /**
  *format the number
  *
  * @param {*} number
  * @returns
  */
 function formatNumber(number) {
   return number.toLocaleString("en", { maximumSignificantDigits: 21 });
 }


// List of products
const productList = [
  new Product("Computer", 2000, "EUR"),
  new Product("iphone 7", 1000, "EUR"),
  new Product("T-Shirt", 10, "EUR"),
  new Product("ipad", 1000, "EUR"),
  new Product("Sneakers", 100, "EUR"),
  new Product("Apple watch", 1200, "EUR"),
  new Product("ipad", 1300, "EUR")
];

const shoppingCart = new ShoppingCart([]);

/**
 *run renderProducts to show all Items
 *
 */
function runRender() {
  shoppingCart.addProduct(productList[0]);
  shoppingCart.addProduct(productList[1]);
  shoppingCart.addProduct(productList[2]);
  shoppingCart.renderProducts();
}

shoppingCart.getUser();

/**
 *autocomplete search
 *
 */
function autocompleteSearch() {
  const list = document.querySelector("#product_search_list");
  // const inputItem = document.querySelector("#search_product_input")
  productList.forEach(item => {
    const option = document.createElement("option");
    option.textContent = item.name;
    list.appendChild(option);
  });
}
autocompleteSearch();

const addButton = document.querySelector(".add_button");
const searchInput = document.querySelector("#search_product_input");
addButton.addEventListener("click", () => {
  productList.forEach(item => {
    if (item.name === searchInput.value) {
      shoppingCart.addProduct(item);
    }
  });

  shoppingCart.renderProducts();
});
runRender();
