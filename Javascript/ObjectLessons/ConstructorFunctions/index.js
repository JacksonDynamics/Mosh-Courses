

// Object-oriended Programming (OOP) 


// Factory Function
function createCircle(radius) {
    return {
        radius,

        draw() {
            console.log('draw');
        }
    }
}

const circle1 = createCircle(1);
console.log(circle1);

const circle2 = createCircle(2);
console.log(circle2);

// Constructor Function
// Pascal Notation: OneTwoThree

function Circle(radius) {
    this.radius = radius;
    this.draw = function() {
        console.log('draw');
    }
}

const circle = new Circle(1);