
  class Circle {
      constructor(radius){
          this.radius = radius;
      }
      getDiameter(){
          return this.radius*2
      } 
      getCircumference(){
        return 2 * Math.PI * this.radius;
      }
      getArea(){
          return  Math.PI * Math.pow(this.radius, 2);
      }

  }

const circle = new Circle(10);
const a = circle.getDiameter();
console.log(a);