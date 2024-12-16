import { useState, useEffect } from "react";
import { MovieView } from "../movie-view/movie-view";
import { LoginView } from "../login-view/login-view";
import { SignupView } from "../signup-view/signup-view";


import Row from "react-bootstrap/Row";
import Col from 'react-bootstrap/Col';
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { MoviesList } from "../movie-list/movie-list";
import { NavigationBar } from "../navigation-bar/navigation-bar";
import { setMovies, setFilter } from "../../reducers/movies";
import { useDispatch, useSelector } from "react-redux";
import { ProfileView } from "../profile-view/profile-view";

export const MainView = () => {
  // const [movies, setMovies] = useState([]);
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  const [search, setSearch] = useState("");
  const dispatch = useDispatch()
  const movies = useSelector(state => state.movies.list);
  // console.log(movies)
useEffect(() => {
  if (!localStorage.getItem('token')) {
    return;
  }

  fetch("https://movie-api-amy-d13640458d52.herokuapp.com/movies", {
    headers: {Authorization: `Bearer ${localStorage.getItem("token")}` }
  })
    .then((response) => response.json())
    .then ((data) => {
      // console.log(data)
      const moviesFromApi = data.map((movie) => {
        return {
          id: movie._id,
          title: movie.Title,
          imagePath :movie.ImagePath,
          director: movie.Director.Name,
          genre: movie.Genre
        };
      });
      console.log(moviesFromApi)
    if (search.length != 0)
    {
      const m = moviesFromApi.filter(x=>x.title === search || x.title[0] === search[0] || (x.title[0] === search[0] && x.title[1] === search[1]));
      dispatch(setFilter(m));
    }
    else {
      dispatch(setMovies(moviesFromApi));
    }
      // dispatch(setMovies(moviesFromApi));
    })
    .catch((error) => {
      console.error("Error fetching movies:", error); // Log any potential errors
    });
}, [token, search, movies, user]);

// const handleSearch = (search) => {
//   const preMovies = movies;
//   const m = movies.filter(x=>x.title === search || x.title[0] === search[0] || (x.title[0] === search[0] && x.title[1] === search[1]));
//   // console.log(m)
//   if (search.length != 0)
//     dispatch(setFilter(m));
//   else {
//     dispatch(setMovies(preMovies));
//   }
// } 
return(
  <BrowserRouter>
  <NavigationBar user={user} onLoggedOut={() => setUser(null)} />
    <Row className="justify-content-md-center">
      <Col>Search <input type="text" placeholder="Search for a movie" onChange={(evt) => setSearch(evt.target.value)} /></Col>
      <Routes>
        <Route 
          path="/login" 
          element={user ? <Navigate to="/" /> : <Col><LoginView onLoggedIn={(user) => setUser(user)} /></Col>} 
        />

        <Route 
          path="/signup" 
          element={user ? <Navigate to="/" /> : <Col><SignupView /></Col>} 
        />

        <Route 
          path="/" 
          element={
            <>
              {!user ? (
                <Navigate to="/login" replace />
              ) : movies.length === 0 ? (
                <Col>The list is empty!</Col>
              ) : (
                <MoviesList movies={movies} user={user} setUser={setUser} /> 
              )}
            </>
          }
        />

        

        <Route 
          path="/movies/:movieID" 
          element={
            <>
            {!user ? (
                <Navigate to="/login" replace />
              ) : movies.length === 0 ? (
                <Col>The list is empty!</Col>
              ) : (
                <Col>
                  <MovieView />
                </Col>
              )}
           </>
          }
        />

        <Route
          path="/users/:username"
          element={
            !user ? (
              <Navigate to="/login" replace />
            ) : (
              <Col>
                <ProfileView user={user} movies={movies} setUser={setUser} />
              </Col>
            )
          }
        />

      </Routes>
    </Row>
  </BrowserRouter>
  );
};