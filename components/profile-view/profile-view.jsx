import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export const ProfileView = ({ user }) => {
  const { Username, Password, Email, FavoriteMovies } = user;
  const [email, setEmail] = useState(Email);
  const [updateduser, setUser] = useState({})

 const handleEmail = (evt) => {
  const value = evt.target.value;
  console.log(value)
   setEmail(value)
 } 

 const editUser = () => {
  console.log( { Username, Password, Email, FavoriteMovies });
  fetch("https://movie-api-amy-d13640458d52.herokuapp.com/users/"+Username, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      "Authorization": "Bearer "+ localStorage.getItem("token")
    },
    body: JSON.stringify({
        Username,
        Password,
        Email: email
    })
  })
    .then((response) => response.json())
    .then ((data) => {
      console.log(data)
      if (data) {
        alert("Profile updated successfuly!")
      }
      setUser(data);
    })
    .catch((error) => {
      console.error("Error updating user:", error); // Log any potential errors
    });



 }


  return(
    <div>
      <h1>{Username}'s Profile</h1>
      <p>Username: {Username} </p>

      <p>Email: <input type="text" value={email} onChange={handleEmail} /> </p>
      
    
      <Link to={`/users/${user.Username}`}>
      <Button onClick={() => editUser()}>Edit Profile</Button>
      </Link>
      <Button variant="danger">Delete Account</Button>
      < br/> <br />

      <h3>Favorite Movies</h3>
      <ul>
        {FavoriteMovies && FavoriteMovies.length > 0 ? (
          FavoriteMovies.map((movie) => (
            <li key={movie._id}>{movie.Title}</li>
          ))
        ) : (
          <p>No favorite movies added yet.</p>
        )}
      </ul>

     
    </div>
  );
};