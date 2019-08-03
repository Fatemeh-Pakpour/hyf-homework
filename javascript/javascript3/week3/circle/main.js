const canvas = document.querySelector("#my_canvas");

class Circle {
  /**
   *Creates an instance of Circle.
   * @param {*} x
   * @param {*} y
   * @param {*} r
   * @param {*} startAngle
   * @param {*} endAngle
   * @param {*} fillColor
   * @memberof Circle
   */
  constructor(x, y, r, startAngle, endAngle, fillColor) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.startAngle = startAngle;
    this.endAngle = endAngle;
    this.fillColor = fillColor;
  }
  /**
   *draw circle
   *
   * @memberof Circle
   */
  draw() {
    const context = canvas.getContext("2d");
    context.beginPath();
    context.arc(this.x, this.y, this.r, this.startAngle, this.endAngle);
    context.fillStyle = this.fillColor;
    context.fill();
    context.stroke();
    context.closePath();
  }
}
/**
 *creat random color
 *
 * @returns
 */
function getRandomColor() {
  function color() {
    // The radix number shows as an hexadecimal value
    const hex = Math.floor(Math.random() * 256).toString(16);
    return ("0" + String(hex)).substr(-2);
  }
  return "#" + color() + color() + color();
}

/**
 * creat randon number between two numbers
 *
 * @param {*} min
 * @param {*} max
 * @returns
 */
function getRandomNumber(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

/**
 *
 *
 * @param {*} x => x coordination
 * @param {*} y => y coordination
 * @returns
 */
function randomCircle(x, y) {
  const r = getRandomNumber(5, 100) + 1;
  const color = getRandomColor();

  return new Circle(x, y, r, 0, 2 * Math.PI, color);
}
/**
 * display the random circles on the canvas
 *
 */
function renderCircles() {
  //full screen canvas
  canvas.width = window.innerWidth - 20;
  canvas.height = window.innerHeight - 20;
  canvas.style.width = canvas.width + "px";
  canvas.style.height = canvas.height + "px";
  canvas.addEventListener("mousemove", event => {
    console.log(event.clientX, event.clientY);
    randomCircle(event.clientX, event.clientY).draw();
  });
}
renderCircles();
