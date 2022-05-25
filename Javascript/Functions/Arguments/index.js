// If you are wanting to use more parameters than JavaScript allows, you can utilize the "arguments" keyword instead.  Arguments will create an object (not an array, even though it looks like one) that is iterable for as many parameters as we wish and loop through them .

function sum() {
  console.log(arguments);
  let total = 0;
  for (let value of arguments)
    total += value;
  return total;
}

console.log(sum(1, 2, 3, 4, 5));
