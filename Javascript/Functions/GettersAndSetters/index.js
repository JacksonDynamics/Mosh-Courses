const person = {
  firstName: 'Mosh',
  lastName: 'Hamedani',
  // getters => access properties.  But are read only
  get fullName() {
    return `${person.firstName} ${person.lastName}`;
  },
  // setters => change (mutate) them.  Similar to get, but can update values
  set fullName(value) {
    // value = person.fullName = 'John Smith'.  Then we create an array with the info by splitting them using(' ').
    const parts = value.split(' ');
    // Define the parts as firstName and lastName
    this.firstName = parts[0];
    this.lastName = parts[1];
  }
};

// Using getter, at this point the fullName is 'Mosh Hamadani'
console.log(person.fullName)

// Using the setter, we now update the {fullName} value to 'John Smith'
person.fullName = 'John Smith'

// Now when we call person.fullName, the name of 'John Smith' is displayed
console.log(person.fullName)
