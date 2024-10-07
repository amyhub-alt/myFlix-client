import { useState, useEffect } from "react";
import { MovieCard } from "../movie-card/movie-card";
import { MovieView } from "../movie-view/movie-view";
import { LoginView } from "../login-view/login-view";
import { SignupView } from "../signup-view/signup-view";

export const MainView = () => {
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);

useEffect(() => {
  if (!token) {
    return;
  }

  fetch("https://movie-api-amy-d13640458d52.herokuapp.com/movies", {
    headers: {Authorization: `Bearer ${token}` }
  })
    .then((response) => response.json())
    .then ((data) => {
      console.log(data)
      const moviesFromApi = data.map((movie) => {
        return {
          id: movie._id,
          title: movie.Title,
          imagePath :movie.ImagePath,
          director: movie.Director,
          genre: movie.Genre
        };
      });
      setMovies(moviesFromApi);
    })
    .catch((error) => {
      console.error("Error fetching movies:", error); // Log any potential errors
    });
}, [token]);

if (!user) {
  return (
    <>
    <LoginView
      onLoggedIn={(user, token) => {
        setUser(user);
        setToken(token);
      }} />
      or 
      <SignupView />
      </>
  );
}

  if (selectedMovie) {
    return (
      <>
      <button
      onClick={() => {
        setUser(null);
        setToken(null);
        localStorage.clear();
      }}
      >
        Logout
      </button>
      <MovieView 
      movie={selectedMovie} 
      onBackClick={() => setSelectedMovie(null)} 
      />
    </>
    );
  }

  if (movies.length === 0) {
    return <div>The list is empty!</div>;
  }

  return (
    <div>
      {movies.map((movie) => (
        <MovieCard
          key={movie.id}
          movie={movie}
          onMovieClick={(newSelectedMovie) => {
            setSelectedMovie(newSelectedMovie);
          }}
        />
      ))}
    </div>
  );
};