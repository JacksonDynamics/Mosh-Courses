const movies = [
  { title: 'a', year: 2022, rating: 4.5},
  { title: 'b', year: 2022, rating: 4.7},
  { title: 'c', year: 2022, rating: 3},
  { title: 'd', year: 2021, rating: 4.5}
];

// All the movies in 2022 with rating > 4
// Sort them by their rating
// Descending order
// Pick their title

  const filtered = movies
    .filter(movies => movies.year === 2022 && movies.rating >= 4)
    .sort((a, b) => a.rating - b.rating)
    .reverse()
    .map(movie => movie.title)
  console.log(filtered);
