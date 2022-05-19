// street
// city
// zipCode
// showAddress(address)

const address = {
    street: 'Pheasant Ridge Trail',
    city: 'Lehi',
    zipCode: '84043'
}

function showAddress(address) {
    for (let key in address)
    console.log(key, address[key]);
}

showAddress(address)