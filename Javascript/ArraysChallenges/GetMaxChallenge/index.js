const numbers = [1, 2, 3, 4, 5, 6, 5, 4, 3, 2, 1];

const max = getMax(numbers);

console.log(max);

function getMax(array) {
  if (array.length === 0) return undefined;

  return array.reduce((accumulator, current) => ( accumulator > current ) ? accumulator : current);

  
  // let most = array[0];
  // for (let element of array) 
  //     if (element > most) 
  //       most = element;
  //   return most;
  
};
