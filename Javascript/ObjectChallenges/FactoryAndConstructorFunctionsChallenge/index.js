// street
// city
// zipCode
// showAddress(address)


// Factory Function
function createAddress(street, city, zipCode) {
    return {
        street,
        city,
        zipCode
    };
}

let address1 = createAddress('Pheasant Ridge Trail', 'Lehi', '84043')
console.log(address1)


// Constructor Function
function Address(street, city, zipCode) {
    this.street = street;
    this.city = city;
    this.zipCode = zipCode;
}

let address2 = new Address('Pheasant Ridge Trail', 'Lehi', '84043')
console.log(address2)
