// Create a function sum() and add up all elements inside it.
// if parameter is an [], make sure to add the elements inside the []


// Since the items being check for the parameters is more than the standard JavaScript parameters, we must use the Rest Operator ...items
function sum(...items) {
  // Check to see if the element is an array by finding the length and using Array.isArray
  if (items.length === 1 && Array.isArray(items[0]))
  items = [...items[0]];
  console.log(items);
  // .reduce will add all elements for us
  return items.reduce((a, b) => a + b);  
}

console.log(sum(1, 2, 3, 4, 5))

console.log('-'.repeat(25))

console.log(sum([1, 2, 3, 4, 5]))
