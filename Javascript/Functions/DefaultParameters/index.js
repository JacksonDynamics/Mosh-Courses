
//  You can always add a default value as an = in the parameter vaules.  ONLY catch to this is that if you give default values, the default values have to be located at the end of the parameters, not anywhere towards the front or middle. 
function interest(principal, rate = 3.5, years = 5) {
  return principal * rate / 100 * years;
}

console.log(interest(10000));
