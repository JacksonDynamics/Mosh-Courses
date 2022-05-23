const numbers = [3, 4];

console.log(numbers);
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