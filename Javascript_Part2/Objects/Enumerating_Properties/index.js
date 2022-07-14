function Circle(radius) {
    this.radius = radius;
    this.draw = function() {
        console.log('draw');
    }
}


const circle = new Circle(10);

// if you wish to access the keys or values in an object, you can use the following approach.
for (let key in circle) {
    // If you wish to only display properties, use an if statement
    if (typeof circle[key] !== 'function')
    // use bracket notation to access the values
    console.log(key, circle[key]);
}

// With this approach, we cannot separate properties from methods
const keys = Object.keys(circle);
console.log(keys)

// if an object has a given property
if ('radius' in circle) 
    console.log('Circle has a radius.')