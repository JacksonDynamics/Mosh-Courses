const numbers = [1, 2, 3, 4, 3, 2 ,1];

// Will bring back the FIRST index instance that specific element is found
console.log(numbers.indexOf(1));

// Will bring back the FIRST index instance that specific element is found
// but in this case, there is a second element.  This element uses this index
// as the starting index. 
console.log(numbers.indexOf(1,3));

// Will bring back the LAST index instance that specific element is found
console.log(numbers.lastIndexOf(1));

console.log(numbers.indexOf(1) !== -1);
console.log(numbers.includes(1));

