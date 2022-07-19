
// circle.__proto
// Constructor.prototype ()

function Circle(radius) {
    this.radius = radius;
}

const circle = new Circle(10);


// both these vaules are exactly the same
console.log(Object.getPrototypeOf(circle));

console.log(Circle.prototype)