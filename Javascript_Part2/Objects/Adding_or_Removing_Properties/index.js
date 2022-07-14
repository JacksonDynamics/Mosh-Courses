function Circle(radius) {
    this.radius = radius;
    this.draw = function() {
        console.log('draw');
    }
}


const circle = new Circle(10);

// Dot notation
circle.location = {x:1};


const propertyName = 'center-location';
// Bracket Notation (used when we have spaces, special characters, or do not know the value)
circle[propertyName] =  {x:1};


delete circle.location;