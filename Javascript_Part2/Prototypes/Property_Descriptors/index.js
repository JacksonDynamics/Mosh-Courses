let person = { name: 'Jackson'}
console.log(person)

// This will create a prototype with methods() available

// If you iterate through the object, you no longer have access to the methods()
// The only result you get is the key "name"
for (let key in person)
    console.log(key)

console.log(Object.keys(person));



let objectBase = Object.getPrototypeOf(person);
let descriptor = Object.getOwnPropertyDescriptor(objectBase, 'toString')
console.log(descriptor)


Object.defineProperty(person, 'name', {
    // writable: false makes the object read-only
    writable: false,
    //enumerable: false will cause the property to not show up in Object.keys()
    enumerable: false,
    // configurable: false makes the property unable to be deleted
    configurable: false
});

// writable, enumerable, and configurable are always set to true by default

person.name = 'John';
delete person.name 
console.log(person)

console.log(Object.keys(person))

