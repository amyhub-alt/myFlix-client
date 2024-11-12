import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export const ProfileView = ({ user }) => {
  const { Username, Email, FavoriteMovies } = user;

  return(
    <div>
      <h1>{Username}'s Profile</h1>
      <p>Email: {Email}</p>

      <h3>Favorite Movies</h3>
      <ul>
        {FavoriteMovies && FavoriteMovies.length > 0 ? (
          favoriteMovies.map((movie) => (
            <li key={movie._id}>{movie.Title}</li>
          ))
        ) : (
          <p>No favorite movies added yet.</p>
        )}
      </ul>

      <Link to={`/users/${user.Username}`}>
      <Button>Edit Profile</Button>
      </Link>
      <Button variant="danger">Delete Account</Button>
    </div>
  );
};