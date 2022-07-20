// We can create a mixin function that defines the prototype in the first parameter, and 
// the ... (spread operator) sources for the different const mixins we created below.
function mixin(target, ...sources) {
    Object.assign(target, ...sources);
}

// Instead of inheritances, we can use mixins like canEat, canWalk, canSwim
const canEat = {
    eat: function() {
        this.hunger--;
        console.log('eating');
    }
};

const canWalk = {
    walk: function() {
        console.log('walking');
    }
};

const canSwim = {
    swim: function() {
        console.log('swim')
    }
}

// Now we can create whatever constructor {}'s we want
function Person () {
}

function Goldfish() {
}

// We can utilize our mixin function now and create our desired mixins to access our functions above
mixin(Person.prototype, canEat, canWalk);

mixin(Goldfish.prototype, canEat, canSwim);


// Now we can use the constructor options to get our desired results for each object
const person = new Person();
console.log(person);

const goldfish = new Goldfish();
console.log(goldfish);