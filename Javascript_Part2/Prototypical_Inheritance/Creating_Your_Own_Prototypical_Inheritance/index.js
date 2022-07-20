
// Let's say we want to create many shape objects, like Circle, Square, etc.  You can create
// this object and then place all the shape constructors as children of this Shape {}.
function Shape() {       
}

// Now we can place any prototypes under this shape {}, which then can be inherited to any 
// new shape object children, like the Circle constructor.  duplicate is now able to be inherited.
Shape.prototype.duplicate = function() {
    console.log('duplicate');
}

// Circle constructor created
function Circle(radius) {
    this.radius = radius;
}


// c inherits from circleBase (Circle.prototype), which then inherits from objectBase
// s inherits from shapeBase (Shape.prototype), which then inherits from objectBase
// We want to have circleBase inherit from shapeBase, which then inherits from objectBase

// In order to connect the Circle prototype to the Shape, we create a new {}
// We want a new circleBased object to inherit from shapeBase (Shape.prototype), instead of objectBase
// Below will return an object that inherits from shapeBase, and use this object as the 
// prototype of our circle 
Circle.prototype = Object.create(Shape.prototype);


// This creates a Circle Parent {} and includes the function of draw
Circle.prototype.draw = function() {
    console.log('draw');
}

const s = new Shape();
const c = new Circle(1);