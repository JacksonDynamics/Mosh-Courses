// If you are wanting to use more parameters than JavaScript allows, you can utilize the "arguments" keyword instead.  Arguments will create an object (not an array, even though it looks like one) that is iterable for as many parameters as we wish and loop through them .


// By using ...args in the parameter field, this will implement the Rest Operator to use args instead of the JavaScript standard parameters.  

function sum(...args) {
  console.log(args);
  return args.reduce((a, b) => a + b);

}

console.log(sum(1, 2, 3, 4, 5));


// Good example of using args with .reduce().  The ...prices (Rest Operator) MUST BE the last parameter that we introduce to the function however.  
function shoppingCart(discount, ...prices) {
  const total = prices.reduce((a, b) => a + b);
  return total * (1 - discount);
}

console.log(shoppingCart(0.1, 20 + 30))