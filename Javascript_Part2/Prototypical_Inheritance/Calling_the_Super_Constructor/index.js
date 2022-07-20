// When you want to pass in a parameter in the Shape {}, you must set up a Super Constructor
function Shape(color) {
    this.color = color;       
}

Shape.prototype.duplicate = function() {
    console.log('duplicate');
}

// Set the same parameter of color into the Circle function
// Use the .call method
function Circle(radius, color) {
    Shape.call(this, color);

    this.radius = radius;
}

Circle.prototype = Object.create(Shape.prototype);
Circle.prototype.constructor = Circle;


Circle.prototype.draw = function() {
    console.log('draw');
}

const s = new Shape();
// Now you can pass in the argument color, and it will be constructed into the new {}
const c = new Circle(1, 'red');