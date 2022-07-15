function Circle(radius) {
    this.radius = radius;

    let defaultLocation = { x: 0, y: 0 };

    // If you want to be able to read only the defaultLocation value, you can
    // do this by creating a function, returning the value like below.
    this.getDefaultLocation = function() {
        return defaultLocation;
    };

    this.draw = function() {
        console.log('draw')
    };

    // Alternatively, we can use the defineProperty feature. First parameter 
    // is to define the object that we are referencing.  Second parameter is 
    //the name of our property. Third parameter is an object. Key/value. key 
    //is get: and the value is a function.  This will give us the ability to 
    //read from outside
    Object.defineProperty(this, 'defaultLocation', {
        get: function() {
            return defaultLocation;
        },
        // If you want to acces this property from the outside, you can use set
        set: function(value) {
            
            // you can also set some validation for this function
            if (!value.x|| !value.y)
                throw new Error('nvalid location.');

            defaultLocation = value;
        }
    })

}


const circle = new Circle(10);

// This will provide the read only value of the defaultLocation using the 
// function above.  Not always great that we can only access this though by
// calling a method
console.log(circle.getDefaultLocation());

// This provides read-only options without using a function.  The defineProperty
console.log(circle.defaultLocation);



