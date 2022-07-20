sayHello()

// Function Declarations ARE HOISTED
function sayHello() {}


// You cannot call sayGoodbye(), or console.log(number) here without getting an error message

// Function Expression are NOT HOISTED
const sayGoodbye = function() {};
// Variables are NOT HOISTED
const number = 1;

// -------------------------------------------- //

// Class Declarations are NOT HOISTED
const c = new Circle();

// Class Declaration
class Circle {
}

// Class Expression
const Square = class {    
};