// Function Declaration
// You can call the function before the function is written in Declarations.
// JavaScript automatically moves all Function Declarations to the top of our page.  This is called HOISTING.
walk();

function walk() {
  console.log('walk')
}

// Anonymous Function Expression.  
// Alternatively, you can make a Named Function Expression by calling 
// function walk() {};

// YOU CANNOT call the function before it is written in Expressions. 
// Same as calling a variable before it is written.
console.log(x);
let x = 1;

run()

let run = function() {
  console.log('run')
};

