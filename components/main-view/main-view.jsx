import { useState, useEffect } from "react";
import { MovieCard } from "../movie-card/movie-card";
import { MovieView } from "../movie-view/movie-view";
import { LoginView } from "../login-view/login-view";
import { SignupView } from "../signup-view/signup-view";

import Row from "react-bootstrap/Row";
import Col from 'react-bootstrap/Col';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { MoviesList } from "../movie-list/movie-list";

export const MainView = () => {
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);

useEffect(() => {
  if (!localStorage.getItem('token')) {
    return;
  }

  fetch("https://movie-api-amy-d13640458d52.herokuapp.com/movies", {
    headers: {Authorization: `Bearer ${localStorage.getItem("token")}` }
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
  <BrowserRouter>
  <Row className="justify-content-md-center">
  <Routes>
    <Route path="/login" element={<LoginView />} />
    <Route path="/signup" element={<SignupView />} />
    <Route path="/" element={<MoviesList setSelectedMovie={setSelectedMovie} movies={movies} />} />
    <Route path="/movies/:movieID" element={<MovieView />} />
  </Routes>
  </Row>
  </BrowserRouter>
  );
};