// let blogPost = {
//     title: "a",
//     body: "lorem",
//     author: "Scoot",
//     views: 414,
//     comments: [
//         {author: "Jack", body: "Hello"},
//         {author: "Jack", body: "Hello"}
//     ],
//     isLive: true
// }


function Post(title, body, author, views, comments, isLive) {
    this.title = title
    this.body = body
    this.author = author
    this.views = 0
    this.comments = []
    this.isLive = false
}

const post = new Post('a', 'b', 'c')
console.log(post)