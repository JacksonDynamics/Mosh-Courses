// When you want to pass in a parameter in the Shape {}, you must set up a Super Constructor
function Shape(color) {
    this.color = color;       
}

Shape.prototype.duplicate = function() {
    console.log('duplicate');
}

// We can create Intermediate Function Inheritance and include the following in a function
// instead of retyping out all the info multiple times whenever we create a new shape {}
function extend(Child, Parent) {
    Child.prototype = Object.create(Parent.prototype);
    Child.prototype.constructor = Child;
}

function Circle(radius, color) {
    Shape.call(this, color);

    this.radius = radius;
}

// Any time we need to set the prototypes, we can now just call the function that we created
extend(Circle, Shape);


Circle.prototype.draw = function() {
    console.log('draw');
}

function Square(size) {
    this.size = size;
}

// Any time we need to set the prototypes, we can now just call the function that we created
extend(Square, Shape)

const s = new Shape();
const c = new Circle(1, 'red');