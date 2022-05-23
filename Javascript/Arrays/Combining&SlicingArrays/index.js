
const first = [1, 2, 3];
const second = [4, 5, 6];

const combined = first.concat(second);
console.log(combined)

// Elements start after and end after (in this case after 2 and after 4) [1,2,3,4,5,6] gives us [3, 4]
const slice = combined.slice(2, 4);
console.log(slice)
