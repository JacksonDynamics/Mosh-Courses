const person = {
  firstName: 'Mosh',
  lastName: 'Hamedani',
  // getters => access properties.  But are read only
  get fullName() {
    return `${person.firstName} ${person.lastName}`;
  },
  // setters => change (mutate) them.  Similar to get, but can update values
  set fullName(value) {

    // We need to implement Error Handling into this function above
    const e = new Error();
    if (typeof value !== 'string') 
      throw new Error('Value is not a string');


    // value = person.fullName = 'John Smith'.  Then we create an array with the info by splitting them using(' ').
    const parts = value.split(' ');
    if (parts.length !== 2)
      throw new Error('Enter a first and last name')
    // Define the parts as firstName and lastName
    this.firstName = parts[0];
    this.lastName = parts[1];
  }
};

// Using getter, at this point the fullName is 'Mosh Hamadani'
console.log(person.fullName)

// Using the setter, we now update the {fullName} value to 'John Smith'
// This is what we are trying to invoke, so start with a try {}.  If it works, then everything will display correctly.
try {
  person.fullName = 'Jackson Dynamics';
}
// If the value entered does not pass the tests implemented above, then the catch(e) statement will trigger and throw the newError() message as an alert(e) shown on the screen for users.
catch (e) {
  alert(e)
}
// Now when we call person.fullName, the name of 'John Smith' is displayed
console.log(person)


