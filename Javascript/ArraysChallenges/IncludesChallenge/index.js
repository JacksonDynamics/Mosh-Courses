const numbers = [1, 2, 3, 4, 5]

// Best method for finding if an [] includes an element
console.log(numbers.includes(1));


// When creating the method from scratch
function includes(array, searchElement) {
    for (let element of array) {
        if (element === searchElement) return true
    }
    return false
}

console.log(includes(numbers, 30))
