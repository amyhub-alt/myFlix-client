import { useState, useEffect } from "react";
import { MovieCard } from "../movie-card/movie-card";
import { MovieView } from "../movie-view/movie-view";
import { LoginView } from "../login-view/login-view";
import { SignupView } from "../signup-view/signup-view";
import Row from "react-bootstrap/Row";
import Col from 'react-bootstrap/Col';

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
          director: movie.Director.Name,
          genre: movie.Genre
        };
      });
      setMovies(moviesFromApi);
    })
    .catch((error) => {
      console.error("Error fetching movies:", error); // Log any potential errors
    });
}, [token]);

return(
  <Row className="justify-content-md-center">
    {!user ? ( 
    <Col md={5}>
    <LoginView
      onLoggedIn={(user, token) => {
        setUser(user);
        setToken(token);
      }} />
      <center>or</center> 
      <SignupView />
      </Col>
  ) : selectedMovie ? (
      <Col md={8} style={{ border: "1px solid black" }}> 
      <MovieView 
        style={{ border: "1px solid green" }}
        movie={selectedMovie} 
        onBackClick={() => setSelectedMovie(null)} 
      />
    </Col>
    ) : movies.length === 0 ? (
    <div>The list is empty!</div>
    ) : (
    <>
      
      {movies.map((movie) => (
        <Col className="mb-5" key={movie.id} md={3}>
          <MovieCard
            movie={movie}
            onMovieClick={(newSelectedMovie) => {
              setSelectedMovie(newSelectedMovie);
            }}
          />
        </Col>
      ))}
    </>
    )}
    {user && (
      <button
        onClick={() => {
          setUser(null);
          setToken(null);
          localStorage.clear();
          location.reload();
        }}
      >
        Logout
      </button>
    )}
    </Row>
  );
};