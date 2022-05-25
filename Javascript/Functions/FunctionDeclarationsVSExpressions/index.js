// Function Declaration
function walk() {
  console.log('walk')
}
walk()

// Anonymous Function Expression.  
// Alternatively, you can make a Named Function Expression by calling 
// function walk() {};
let run = function() {
  console.log('run')
};
let move = run;
run()
move()