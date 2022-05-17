const array = [0, null, undefined, '', 1, 2, 3]

// Falsy
// undefined
// null
// ''
// false
// 0
// NaN

function countTruthy(array) {
    let count = 0
    for (let index of array) {
        if (array)
            count++
    }
    return count
}

console.log(countTruthy(array))