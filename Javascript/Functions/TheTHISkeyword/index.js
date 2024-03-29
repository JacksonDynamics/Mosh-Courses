// The .this keyword references The Object that is executing the CURRENT function

// method => obj
// function => global (window, global)

const video = {
  title: 'a',
  play() {
    console.log(this);
  }
};

video.stop = function() {
  console.log(this);
}

// Some examples of how you can use the "this" keyword to get the same thing.  We are using a method inside an object to reference the function itself.  both video.stop() and video.play() produce sthe same output.
video.stop();
video.play();

console.log("-".repeat(24))

// when dealing with a regular function, 'this' references the global object, which is window in browsers and global in node
function playVideo() {
  console.log(this);
}

playVideo();

console.log("-".repeat(24))

// if you use a constructor, the 'this' will create a new empty object. The 'this' will point to the new empty {}.  

// The Constructor is the template to create any number of new objects that you want.  You then reference the template by new Video(title, name, year) parameters and give it a const of some name so you can then use the new object.  
function Video(title, name, year) {
  // this.title creates new key:values in the new {}
  this.title = title;
  this.name = name;
  this.year = year;
}

const v = new Video('b', 'Brendon', 1981); // {}
const w = new Video('d', 'Jeff', 1992); // {}

// Now you can reference the new populated objects, like console.log()
console.log(w);
console.log(v);


console.log("-".repeat(24));

// If we want to use the tags value, we can start by referencing this.tags. and then use the forEach since tags is an [].  forEach() runs a function on each element in the array. so put function(tag) in for reference.  Now we want to put that on the console.  If we put just (tag), that will provide the array elements one at a time.  
const video2 = {
  title: 'a',
  tags: ['a', 'b', 'c'],
  showTags() {
    this.tags.forEach(function(tag) {
      // if you only use this inside of a function, it references the window.  Not what we want.
      console.log(this.title, tag);
      // in order to reference the information just inside the showTags() {}, we can use , this as the second parameter in the forEach().  Now we are able to use this.title in the function being passed into the .forEach without it being in the window
    }, this);
  }
};

video2.showTags();

console.log("-".repeat(24));


//  This is another way of writing the same code as video2.  Sometimes you will see this in coding, but it is not the preferred way to code.
const video3 = {
  title: 'a',
  tags: ['a', 'b', 'c'],
  showTags() {
    const self = this;
    this.tags.forEach(function(tag) {
      console.log(self.title, tag);
    });
  }
};

video3.showTags();

console.log("-".repeat(24));



function playVideo2() {
  console.log(this);
}
// using the .call() method will access this new {}
playVideo2.call({ name: 'Mosh' }, 1, 2);
// Alternatively, we can use the .apply() method if parameters include []
playVideo2.apply({ name: 'Mosh' }, [1, 2]);
// Or we can use bind
playVideo2.bind({ name: 'Mosh' })();


// In contrast, if we used just playVideo2(), we would get the Window {}
playVideo2();


console.log("-".repeat(23));

// Yet another way to write the code from above using the .bind() method
const video4 = {
  title: 'a',
  tags: ['a', 'b', 'c'],
  showTags() {
    this.tags.forEach(function(tag) {
      console.log(this.title, tag);
    }.bind(this));
  }
};

video4.showTags();


console.log("-".repeat(23));

// This is the BEST WAY to write code using the =>
const video5 = {
  title: 'a',
  tags: ['a', 'b', 'c'],
  showTags() {
    this.tags.forEach((tag) => {
      console.log(this.title, tag);
    });
  }
};

video5.showTags();