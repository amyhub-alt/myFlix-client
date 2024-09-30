import { useState, useEffect } from "react";
import { MovieCard } from "../movie-card/movie-card";
import { MovieView } from "../movie-view/movie-view";

export const MainView = () => {
  const [movies, setMovies] = useState([]);


  const [selectedMovie, setSelectedMovie] = useState(null);

useEffect(() =>{
  fetch("https://movie-api-amy-d13640458d52.herokuapp.com/movies")
  .then((response) => response.json())
  .then ((data) => {
    console.log(data)
    const moviesFromApi = data.map((movie) => {
      return {
        id: movie._id,
        title: movie.Title,
        image :movie.ImagePath,
        director: movie.Director.Name
      };
    });

    setMovies(moviesFromApi);
  })
  .catch((error) => {
    console.error("Error fetching movies:", error); // Log any potential errors
  });
}, []);


  if (selectedMovie) {
    return (
      <MovieView movie={selectedMovie} onBackClick={() => setSelectedMovie(null)} />
    );
  }

  if (movies.length === 0) {
    return <div>The list is empty!</div>;
  }

  return (
    <>
      {movies.map((movie) => (
        <MovieCard
          key={movie._id}
          movie={movie}
          onMovieClick={(newSelectedMovie) => {
            setSelectedMovie(newSelectedMovie);
          }}
        />
      ))}
    </>
  );
};