// Constructor Function
function Circle(radius) {
    this.radius = radius;
    this.draw = function() {
        console.log('draw');
    }
}

const another = new Circle(2);
console.log(another)

// Functions are OBJECTS!!!

//apply, bind, call are methods.  Blue icons are properties.

const Circle1 = new Function('radius', `
    this.radius = radius;
    this.draw = function() {
        console.log('draw');
}
`);

const circle = new Circle1(1);

Circle.call({}, 1) // This is exactly like new Circle()
Circle.apply({}, [1, 2, 3]) // This is like the circle.call(), but instead of one property, you can use an array