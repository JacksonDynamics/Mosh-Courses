const numbers = [1, 2, 3, 4, 5, 6, 5, 4, 3, 2, 1];


function countOccurences(array, searchElement) {
    // let sum = 0;
    // for (let n of array) 
    //     if (n === searchElement)
    //         sum++
    //     return sum
    
    return array.reduce((accumulator, current) => {
        const occurrence = (current === searchElement) ? 1 : 0;
        // If you want to see what is happening under the hood
        console.log(accumulator, current, searchElement)
        return accumulator + occurrence;
    }, 0);
}


const count = countOccurences(numbers, 1)

console.log(count)
