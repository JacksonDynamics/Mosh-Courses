// add the try and catch block around the areas that will be tested
try {
  const numbers = [1, 2, 3, 4, 3, 2, 1];
  const count = countOccurrences(true, 1);
  console.log(count);
}
catch (e) {
  console.log(e.message)
}

// add new Error if the array value passed into the parameter is not an []
function countOccurrences(array, searchElement) {
  const e = new Error();
  if (!Array.isArray(array))
    throw new Error('Value is not an array');

    return array.reduce((accumulator, current) => {
    const occurrence = (current === searchElement) ? 1 : 0;
    return accumulator + occurrence;
  },0);
};
