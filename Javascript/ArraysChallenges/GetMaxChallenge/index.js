const numbers = [1, 2, 3, 4, 5, 6, 5, 4, 3, 2, 1];

function getMax(array) {
    if (array.length === 0) return undefined;

    // let max = array[0];
    // for (let m of array) {
    //     if (m > max) 
    //     max = m;
    // }
    // return max

    return array.reduce((accumulator, current) => 
        (accumulator > current) ? accumulator : current);
}        

   

const max = getMax(numbers);

console.log(max);
