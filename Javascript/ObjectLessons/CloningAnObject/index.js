const circle = {
    radius: 1,
    draw() {
        console.log('draw');
    }
}

//  Older way to clone an object
// const another = {}
// for (let key in circle)
// another[key] = circle[key];

// Another Older way to clone an Object
// const another = Object.assign({}, circle)

// BEST WAY to clone an Object
const another = {...circle};

console.log(another)

