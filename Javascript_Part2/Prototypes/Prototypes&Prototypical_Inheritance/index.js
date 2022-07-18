// Base/Super/Parent
// A prototype is defined as a PARENT of another Object

let x = {};

x.toString()

let y = {};

// If you use .getPrototypeOf(), it will let you know what the parent {} is
Object.getPrototypeOf(x) === Object.getPrototypeOf(y)

// A prototype is just a regular object!!!