// FINDING ELEMENTS (Primitives)

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

// -------------------------------------------

// FINDING ELEMENTS (Reference Types)

const courses = [
  {id: 1, name: 'a'},
  {id: 2, name: 'b'}
];

// When we want to find the first {} that contains the .name === 'a', it will return the entire {} found
const course = courses.find(function(course) {
  return course.name === 'a'
})

console.log(course)


// When we want to return the index # of the first {} that contains the .name === 'b'
const course2 = courses.findIndex(function(course) {
  return course.name === 'b'
})

console.log(course2)