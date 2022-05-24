
const numbers = [1, -2, 2, 3, -4, 4];

// How to use the filtered method.  Used for []
const filtered = numbers.filter(value =>  value >= 0);

console.log(filtered);

// How to use the map method.  Used for []
const mapped = numbers.map(value => '<li>' + value + '</li>')
console.log(mapped)


console.log('\n' + '-'.repeat(30))

// Use the results to then join together
const html = '<ul>' + mapped.join('') + '</ul>';
console.log(html)


console.log('\n' + '-'.repeat(30))

//  If you want to use the map method on an object

// const items = numbers.map(value => {
//   const obj = {value: value};
//   return obj;
// })

const items = numbers.map(value => ({value: value}))

console.log(items);


console.log('\n' + '-'.repeat(30))


// You can CHAIN these methods together as well to make your code much cleaner

const filteredAndMapped = numbers
    //get just positive numbers (result is:  [1, 2, 3, 4])
    .filter(value =>  value >= 0)
    // map out the objects and put the filtered results in for the values
    // (result is now:  [{value:1},
    //                   {value:2},
    //                   {value:3},
    //                   {value:4}
    //                  ])
    .map(value => ({ value: value}))
    // filter the objects again for values that are greater than 1
    // (result is now:  [{value:2},
    //                   {value:3},
    //                   {value:4}
    //                  ])
    .filter(obj => obj.value > 1)
    // Map the objects again of all object values greater than 1 and just 
    // return the obj.value in a new array.
    // (result is now: [2, 3, 4])
    .map(obj => obj.value)

    console.log(filteredAndMapped);
