const numbers = [1, -2, 2, 3, -4, 4];

let sum = 0;

// One way to add up all the numbers in the []
for( let n of numbers)
  sum += n;

console.log(sum)

// Alternatively, we can use the .reduce() 
// accumulator a is the starting value (sum = 0), which is defined at the end of the {} with the ,0.
// a = 0, c = 1 => a = 1
// a = 1, c = -2 => a = -1 
// a = -1, c = 2 => a = 1
// a = 1, c = 3 => a = 4
// a = 4, c = -4 => a = 0
// a = 0, c = 4 => a = 4

const total = numbers.reduce((accumulator, currentValue) => {
    return accumulator + currentValue
}, 0);

// OR CLEANER VERSION

const total = numbers.reduce((accumulator, currentValue) =>  accumulator + currentValue);

console.log(total)
