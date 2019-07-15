const redBox = document.querySelector("ul.marks li:nth-child(1)");
const blueBox = document.querySelector("ul.marks li:nth-child(2)");
const greenBox = document.querySelector("ul.marks li:nth-child(3)");
const btnTrtranslateOne = document.querySelector("#btn_transle_one");
const btnTranslateAll = document.querySelector("#btn_translate_all");
const btnReset = document.querySelector("#btn_reset");
const span = document.querySelector("span");

const targetPosition = {
  red: {
    x: 20 - parseInt(redBox.style.left),
    y: 300 - parseInt(redBox.style.top)
  },
  green: {
    x: 400 - parseInt(greenBox.style.left),
    y: 20 - parseInt(greenBox.style.top)
  },
  blue: {
    x: 400 - parseInt(blueBox.style.left),
    y: 300 - parseInt(blueBox.style.top)
  }
};
function translateOne() {
  const r = 20 - parseInt(redBox.style.left);
  const b = 300 - parseInt(redBox.style.top);
  return moveElement(redBox, targetPosition.red)
    .then(() => {
      console.log("red circle has been moved");
      return moveElement(blueBox, targetPosition.blue);
    })
    .then(() => {
      console.log("blue circle has been moved");
      return moveElement(greenBox, targetPosition.green);
    })
    .then(() => {
      console.log("green circle has been moved");
    })
    .then(() => {
      setTimeout(() => span.classList.add("shown"), 300);
    })
    .catch(err => console.log(err));
}

function translateAll() {
  moveElement(redBox, targetPosition.red);
  moveElement(blueBox, targetPosition.blue);
  moveElement(greenBox, targetPosition.green);
  setTimeout(() => span.classList.add("shown"), 2000);
}
function reset() {
  location.reload(true);
}

// events
btnTrtranslateOne.addEventListener("click", translateOne);
btnTranslateAll.addEventListener("click", translateAll);
btnReset.addEventListener("click", reset);
