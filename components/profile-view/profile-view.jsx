import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { MovieCard } from "../movie-card/movie-card";

export const ProfileView = ({ user, movies }) => {
  const { Username, Password, Email, Birthday, FavoriteMovies } = user;
  const [email, setEmail] = useState(Email);
  const [birthday, setBirthday] = useState(Birthday);
  const [updateduser, setUser] = useState(user)

//  const handleEmail = (evt) => {
//   const value = evt.target.value;
//   console.log(value)
//    setEmail(value)
//  } 

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
        Birthday: birthday,
        Email: email
    })
  })
    .then((response) => response.json())
    .then ((data) => {
      console.log(data);
      if (data) {
        alert("Profile updated successfuly!");
        setUser(data);
      }
      
    })
    .catch((error) => {
      console.error("Error updating user:", error); // Log any potential errors
    });
 };

 const deleteUser = () => {
  if (window.confirm("Are you sure you want to delete your account? This action cannot be undone.")) {
    fetch("https://movie-api-amy-d13640458d52.herokuapp.com/users/" + Username, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer " + localStorage.getItem("token")
      }
    })
      .then((response) => {
        if (response.ok) {
          alert("Your account has been deleted successfully.");
          localStorage.clear();
          window.location.href = "/";
        } else {
          alert("Failed to delete account. Please try again.");
        }
      })
      .catch((error) => {
        console.error("Error deleting account:", error);
        alert("An error occurred while trying to delete your account.");
      });
  }
};




  return(
    <div>
      <h1>{Username}'s Profile</h1>
      <p>Username: {Username} </p>
      <p>Email: <input type="text" value={email} onChange={(evt)=> setEmail(evt.target.value)} /> </p>
      <p>Birthdat: <input type="text" value={`${new Date(birthday).getMonth()}-${new Date(birthday).getDay()}-${new Date(birthday).getFullYear()}`} onChange={(evt)=> setBirthday(evt.target.value)} /> </p>

    
      <Link to={`/users/${user.Username}`}>
      <Button onClick={() => editUser()}>Edit Profile</Button>
      </Link>
      <Button variant="danger" onClick={deleteUser}>Delete Account</Button>
      < br/> <br />

      <h3>Favorite Movies</h3>
      <ul>
        {FavoriteMovies && FavoriteMovies.length > 0 ? (
          movies.filter(m=>FavoriteMovies.includes(m.id)).map((movie) => (
           <MovieCard movie={movie} />
          ))
        ) : (
          <p>No favorite movies added yet.</p>
        )}
      </ul>

     
    </div>
  );
};