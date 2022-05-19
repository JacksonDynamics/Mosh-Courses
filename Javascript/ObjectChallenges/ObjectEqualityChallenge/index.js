// street
// city
// zipCode
// showAddress(address)


// Constructor Function
function Address(street, city, zipCode) {
    this.street = street;
    this.city = city;
    this.zipCode = zipCode;
}

let address1 = new Address('Pheasant Ridge Trail', 'Lehi', '84043')
let address2 = new Address('Pheasant Ridge Trail', 'Lehi', '84043')

// IF you create a pointer for address3 to point to the same 
// memory location as address1, then they will equal TRUE
let address3 = address1;

// All properties in object are the same
function areEqual(address1, address2) {
    return address1.street === address2.street &&
           address1.city === address2.city &&
           address1.zipCode === address2.zipCode;
}

// Although the objects are the same, they are saved in different
// places of memory, so they do not result as true.  NOT POINTING 
// at the same place of memory
function areSame(address1, address2) {
    return address1 === address2;
}

console.log(areEqual(address1, address2));
console.log(areSame(address1, address2));

// IF you create a pointer for address3 to point to the same 
// memory location as address1, then they will equal TRUE
console.log(areSame(address1, address3));