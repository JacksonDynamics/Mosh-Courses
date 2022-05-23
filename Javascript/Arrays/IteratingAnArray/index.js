
const numbers = [1, 2, 3];

// One way how to iterate through an array is a for of loop
for (let number of numbers)
  console.log(number)


console.log('\n' + "-".repeat(30))

// Iterating through an array has the .forEach option.  This also can 
// provide an index along with the element being displayed
numbers.forEach((number, index) =>  console.log(index, number))


console.log('\n' + "-".repeat(30))

// how to use Join() and split()
const joined = numbers.join(' ')
console.log(joined)


console.log('\n' + "-".repeat(30))

// You can create an [] of elements by splitting a string 
const message = 'This is my first mesage';
const parts = message.split(' ');
console.log(parts);

console.log('\n' + "-".repeat(30))

// Use join to add hyphens or anything else you wish as well
const combined = parts.join('-');
console.log(combined)

console.log('\n' + "-".repeat(30))