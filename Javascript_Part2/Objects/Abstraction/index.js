function Circle(radius) {
    this.radius = radius;

    // Implementation details that the consumer does not need to know
    this.defaultLocation = { x: 0, y: 0 };
    // Implementation details should be hidden inside the function, rather than separated
    this.computeOptimumLocation = function() {
        // ...
    }
    this.draw = function() {
        this.computeOptimumLocation();

        console.log('draw')
    }
}


const circle = new Circle(10);

// ABSTRACTION = Hide the details.  Show only the ESSENTIALS
// Like a DVD player.  The internals are very complex, but there are only a few 
// buttons on the outside for the consumer to use
