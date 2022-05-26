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

console.log("-".repeat(25))

// when dealing with a regular function, 'this' references the global object, which is window in browsers and global in node
function playVideo() {
  console.log(this);
}

playVideo();

console.log("-".repeat(25))

// if you use a constructor, the 'this' will create a new empty object. The 'this' will point to the new empty {}.  
function Video(title, name, year) {
  this.title = title;
  this.name = name;
  this.year = year;
}

const v = new Video('b', 'Brendon', 1981); // {}
const w = new Video('d', 'Jeff', 1992); // {}

console.log(w);
console.log(v);

console.log("-".repeat(25));

const video2 = {
  title: 'a',
  tags: ['a', 'b', 'c'],
  showTags() {
    this.tags.forEach(function(tag) {
      console.log(this.title, tag);
    }, this);
  }
};

video2.showTags();
