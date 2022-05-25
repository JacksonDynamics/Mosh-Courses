const numbers = [1, 2, 3, 4, 5, 6, 5, 4, 3, 2, 1];

const count = countOccurrences(numbers, 1);

console.log(count);

function countOccurrences(array, searchElement) {
  return array.reduce((accumulator, current) => {
    const occurrence = (current === searchElement) ? 1 : 0;
    // If you want to see what is happening under the hood
    console.log(accumulator, current, searchElement);
    return accumulator + occurrence;
  },0);
};



// let total = 0;
// for (let element of array) {
//   if (searchElement === element) total += 1;
// }
// return total
