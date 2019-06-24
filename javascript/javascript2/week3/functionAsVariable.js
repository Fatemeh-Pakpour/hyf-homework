const array = [10, 20, 3, 5, 6];
function randNum() {
  console.log("This is function randNum:", Math.floor(Math.random() * 10));
}
function evenNum() {
  const evenNum = array.filter(num => num % 2 === 0);
  console.log("this is function evenNum :", evenNum);
}
function pushNum() {
  const addNumToArray = array.push(40);
  console.log("this is function pushNum :", array);
}
// Create an array with 3 items
var arrayOfFunction = [randNum, evenNum, pushNum];

while (arrayOfFunction.length) {
  arrayOfFunction.shift().call();
}
// Create a function as a const

const oddNumber = function() {
  const oddNum = array.filter(num => num % 2 !== 0);
  console.log("this is function oddNumber :", oddNum);
};
oddNumber();

// Create an object that has a key whose value is a function
obj = {
  arr: oddNumber,
  name: "odd number"
};
obj.arr();
