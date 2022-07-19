function Circle(radius) {
    // Instance members
    this.radius = radius;

    this.move = function() {
        console.log('move')
    }
}

// Prototype members
Circle.prototype.draw = function () {
    console.log('draw');
}


const c1 = new Circle(1);


// Returns Instance Members only.  Not Prototype Members
console.log(Object.keys(c1))

// Returns ALL MEMBERS.  Instance AND Prototype
// Some documents you might hear Own instead of Instance. 
for (let key in c1) console.log(key);

const lineBreak = '-'
console.log(lineBreak.repeat(30));

console.log(c1.hasOwnProperty('radius')); // True, it is an Instance member
console.log(c1.hasOwnProperty('draw'));  // False, it is a prototype member