
const numbers = [1, 2, 3, 4, 5, 6];

console.log(numbers);

// ADDING ELEMENTS TO AN ARRAY

// End
numbers.push(5, 6);

console.log(numbers);
// Beginning
numbers .unshift(1,2)

console.log(numbers);

// Middle (first arg is the starting index of the [].  
// Second arg is the amount of indexes you wish to delete from the starting position.
// Third arg is what things do you wish to add into this starting position index)
numbers.splice(2, 0, 'a', 'b')

console.log(numbers);


console.log("\n" + "-".repeat(30));

//REMOVING ELEMENTS FROM AN ARRAY

// Removes the FIRST element in our array
numbers.shift();

console.log(numbers);

// Middle (first arg is the starting index of the [].  
// Second arg is the amount of indexes you wish to delete from the starting position.
numbers.splice(2, 1)

console.log(numbers);