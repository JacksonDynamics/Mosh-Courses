const numbers = [1, -2, 2, 3, -4, 4];

// Will iterate through [] from left to right until it finds a false value
const allPositive = numbers.every(value => {
  return value >= 0;
});

console.log(allPositive)

// Will iterate through [] from left to right until it finds a false value
const allPositive2 = numbers.some(value => {
  return value >= 0;
});

console.log(allPositive2)
