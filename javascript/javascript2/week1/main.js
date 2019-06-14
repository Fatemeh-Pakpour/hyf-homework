/*
*** Homework Fourth Week / Hack Your Future, Javascript2, 
*   Author: Fatemeh Pakpour
*   hyfBay - get the okay'est products here
*/

console.log('Script loaded');

console.log(getAvailableProducts());
// function for improving the renderProducts function

// const products = getAvailableProducts() ;
// function renderProducts(items){
//     const ul = document.querySelector("ul");
//     for( const product of items ){
//     const li = document.createElement("li");
//     li.innerHTML =  product.name + " | " + product.price +" | "+product.rating + " | " +product.shipsTo ;
//     // Flat screen | 4000 | 4.2 | [ 'denmark', 'germany']
//     ul.appendChild(li);   
// }
// }  
// // Execute the code
// renderProducts(products);


// function for creating li element and class of li and the text in the list

function createHTMLElement(tagName, className, text) {
    const element = document.createElement(tagName);
    element.className = className;
    element.innerHTML = text;
    return element;
}

// creat a ul 
function creatInsideUl(product) {
    const ul = document.createElement("ul");
        ul.appendChild(createHTMLElement('li', 'name', product.name)); // <li class="name">My Product</li>
        ul.appendChild(createHTMLElement('li', 'price', product.price));
        ul.appendChild(createHTMLElement('li', 'rating', product.rating));
        ul.appendChild(creatUlShipping(product.shipsTo));
     return ul ;     
}
// creat a ul for shipTo 
function creatUlShipping(shipsTo) {
    const ul = document.createElement("ul");
        for (const item of shipsTo ){
            ul.appendChild(createHTMLElement('li', ' ', item));    
        }
    return ul ;    
}

// creat list of product with all detail
function renderProducts (productList){
    const ul = document.querySelector("section.products > ul");
    console.log(creatInsideUl(productList[0]))
    for (const item of productList)  {
        const li = document.createElement("li");
        li.appendChild(creatInsideUl(item)) ;
        ul.appendChild(li);
        console.log(li);
    }
}

renderProducts(getAvailableProducts());