
// Order the [] if the array elements are numbers or strings
const unsorted = [2,3,1,4,5];
unsorted.sort();
console.log(unsorted);

// Reverse the order of the []
unsorted.reverse();
console.log(unsorted);

console.log('\n' + "-".repeat(30))

const courses = [
  { id:1, name: 'Node.js'},
  { id:2, name: 'JavaScript'}
];

// sort array by name in the objects
courses.sort(function(a,b) {
  // a < b => -1
  // a > b => 1
  // a === b => 0

// When dealing with a string, it will use ASCII, so we should change the cases to all being upper case or lower case before trying to sort
const nameA = a.name.toUpperCase();
const nameB = b.name.toUpperCase();


if (nameA < nameB) return -1;
if (nameA > nameB) return 1;
return 0;
})
console.log(courses);
