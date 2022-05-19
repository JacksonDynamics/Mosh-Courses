// title
// body
// author
// views
// comments
//    (author, body)
// isLive

// Title, Body, and Author are parameters we add, but the other 
// parameters are something we set a default initialization to in 
// the function itself.  

// Constructor functions are just references to then use the command
// new Post('a', 'b', 'c')
function Post(title, body, author) {
    this.title = title;
    this.body = body;
    this.author = author;
    this.views = 0;
    this.comments = [];
    this.isLive = false;
}

// This is how you create a constructor function
let post = new Post('Eye of the World', 'This author is great', 'Brandon Sanderson');

console.log(post)