'use strict';

const Circle = function() {
    this.draw = function() { console.log(this); }
};

const c = new Circle();
// Method Call
c.draw()

const draw = c.draw;

// Function Call
draw();