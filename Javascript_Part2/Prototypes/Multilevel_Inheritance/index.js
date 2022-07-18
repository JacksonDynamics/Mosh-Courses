let myArray = [];
// When you create an array, it will have a prototype {} with methods

// created array    the Prototype {} with methods
        myArray -----------> array base

// When you inspect the Prototype now of the array base, you will find the root 

// created array    the Prototype {} with methods       root base prototype {}
    myArray ----------------> array base ------------------> Object base

// This is what is called MULTI-LEVELED INHERITANCE


function Circle(radius) {
    this.radius = radius;

    this.draw = function() {
        console.log('draw');
    }
}

const circle = new Circle(10);

// created circle    the Prototype {} with methods       root base prototype {}
circle ----------------> circle base ------------------> Object base

// Objects and arrays created by a given constructor will have the same prototype

