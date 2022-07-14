// Value Types

// Number
// String
// Boolean
// Symbol
// undefined
// null


// Reference Types

// Object
// Function
// Array


// In Value Types, a and b are 2 independent primitives
let a = 10;
let b = a;

a = 20;
// when you check the console,  a = 20 and b = 10

// In Reference Types, x and y are 2 independent primitives
let x = { value: 10 };
let y = x;

x.value = 20;
// when you check the console, x = {value:20} AND y = {value:20}

// When you use an Object, that value is NOT stored in that variable. It is stored somewhere else in the memory, and the address of the location of that object is stored in the variable instead

// Primitives are copied by their VALUE
// Objects are copied by their REFERENCE address

let number = 10;

function increase(number) {
    number++;
}

increase(number);
console.log(number);

// This is a primitive value, so number is going to be 10 still, despite that the function increased it's value

let obj = { value: 10 };

function increase(obj) {
    obj.value++;
}

increase(obj);
console.log(obj);

// This is a Reference Type, so obj is going to be 11