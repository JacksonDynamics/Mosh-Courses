function Circle(radius) {

    this.radius = radius;

    // By setting implementation details to a local variable, it no longer will 
    // be considered a property
    let defaultLocation = { x: 0, y: 0 };

    let computeOptimumLocation = function() {
        // ...
    }
    this.draw = function() {
        computeOptimumLocation(0.1);
        defaultLocation
        // you can still access parent properties by using this.radius
        this.radius
        console.log('draw')
    }
}


const circle = new Circle(10);

// ABSTRACTION = Hide the details.  Show only the ESSENTIALS
// Like a DVD player.  The internals are very complex, but there are only a few 
// buttons on the outside for the consumer to use
