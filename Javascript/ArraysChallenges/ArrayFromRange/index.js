const numbers = arrayFromRange(1, 5);

function arrayFromRange(min, max) {
  let newArray = [min]
  if (min >= max) newArray =[]

  while (max > min) {
    newArray.push(min += 1)
  }
  return newArray
}

console.log(numbers);

// OR

const numbers2 = arrayFromRange2(1, 5);


function arrayFromRange2(min, max) {
  const output = [];
  for (let i = min; i <= max; i++) 
    output.push(i);
  return output;
}

console.log(numbers2)
