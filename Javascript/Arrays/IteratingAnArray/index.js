
const numbers = [1, 2, 3];

for (let number of numbers)
  console.log(number)

// Iterating through an array has the .forEach option.  This also can 
// provide an index along with the element being displayed
numbers.forEach((number, index) =>  console.log(index, number))