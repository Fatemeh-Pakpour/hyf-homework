const canvas = document.querySelector("#my_canvas");

/* function resizeCanvas() {
    myconvas.style.width = window.innerWidth + "px";
    setTimeout(function() {
      myconvas.style.height = window.innerHeight + "px";
    }, 0);
  };
  resizeCanvas();
 */
canvas.width = window.innerWidth - 20;
canvas.height = window.innerHeight - 20;
canvas.style.width = canvas.width + "px";
canvas.style.height = canvas.height + "px";
class Circle {
  constructor(x, y, r, startAngle, endAngle, fillColor) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.startAngle = startAngle;
    this.endAngle = endAngle;
    this.fillColor = fillColor;
  }
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
function getRandomColor() {
  function color() {
    // The radix number shows as an hexadecimal value
    const hex = Math.floor(Math.random() * 256).toString(16);
    return ("0" + String(hex)).substr(-2);
  }
  return "#" + color() + color() + color();
}
let mouseX = 0;
let mouseY = 0;

function update() {
  const circle4 = new Circle(100, 100, 50, 0, 2 * Math.PI, "#FF6A6A");
  circle4.draw();
  requestAnimationFrame(update);
}
update();

const canvasPos = getPosition(canvas);

function setMousePosition(event) {
  mouseX = event.clientX - canvasPos.x;
  mouseY = event.clientY - canvasPos.y;
}

canvas.addEventListener("mousemove", setMousePosition, false);

function getPosition(element) {
  let xPosition = 0;
  let yPosition = 0;

  while (element) {
    xPosition += element.offsetLeft - element.scrollLeft + element.clientLeft;
    yPosition += element.offsetTop - element.scrollTop + element.clientTop;
    element = element.offsetParent;
    console.log(xPosition);
  }
  return {
    x: xPosition,
    y: yPosition
  };
}

const circle1 = new Circle(
  Math.floor(Math.random() * 200 + 200),
  Math.floor(Math.random() * 200 + 200),
  Math.floor(Math.random() * 100 + 20),
  0,
  2 * Math.PI,
  getRandomColor()
);
const circle2 = new Circle(
  Math.floor(Math.random() * 300 + 160),
  Math.floor(Math.random() * 300 + 160),
  Math.floor(Math.random() * 100 + 50),
  0,
  2 * Math.PI,
  getRandomColor()
);
const circle3 = new Circle(
  Math.floor(Math.random() * 300 + 300),
  Math.floor(Math.random() * 300 + 300),
  60,
  1 * Math.PI,
  2 * Math.PI,
  getRandomColor()
);

circle1.draw();
circle2.draw();
circle3.draw();
