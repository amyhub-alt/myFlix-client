import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

export const MovieCard = ({ movie, user, setUser, displayButton=true }) => {
  const [isFav, setIsfav] = useState(false);
  const handleFav = () => {

    fetch("https://movie-api-amy-d13640458d52.herokuapp.com/users/"+user.Username+"/"+"movies/" + movie.id, 
      {
      headers: {Authorization: `Bearer ${localStorage.getItem("token")}` },
      method: "POST"
    })
      .then((response) => response.json())
      .then ((data) => {
        console.log(data)
        if(data) alert("Movie Added!")
        setUser(data)
      })
      .catch((error) => {
        console.error("Error fetching movies:", error); // Log any potential errors
      });

  }

  const handleDelFav = () => {

    fetch("https://movie-api-amy-d13640458d52.herokuapp.com/users/"+user.Username+"/"+"movies/" + movie.id, 
      {
      headers: {Authorization: `Bearer ${localStorage.getItem("token")}` },
      method: "DELETE"
    })
      .then((response) => response.json())
      .then ((data) => {
        if(data) alert("Removed!")
        setUser(data)
       console.log(data)
      })
      .catch((error) => {
        console.error("Error fetching movies:", error); // Log any potential errors
      });

  }

  useEffect(() => {
    setIsfav(user && user.FavoriteMovies.includes(movie.id))
  }, [user])

  return (
   
    <Card className="h-100" style={{ cursor:"pointer", width: "300px" }}>
      
      <Card.Img variant="top" src={movie.imagePath} />
      <Card.Body>
      <Link to={ "/movies/"+movie.title} >
        <Card.Title>{movie.title}</Card.Title>
        <Card.Text>{movie.director}</Card.Text>
        </Link>
        
          <button onClick={() => isFav? handleDelFav() : handleFav() } style={{backgroundColor: `${isFav? "red": "blue"}`, color: "white"}}>{isFav ? "Remove" : "Add" }</button>
        {/* Try to use just one button for adding and removing of fav movies.
        For example, when i click on 'Add' it adds the movie and the button bgcolor changes to red with the text  'Remove' */}
        {/* <button onClick={() => handleFav()}>Add</button><button onClick={() => handleDelFav()}>Remove</button> */}
      </Card.Body>
      

    </Card>

  );
};




MovieCard.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    imagePath: PropTypes.string.isRequired,
    director: PropTypes.string.isRequired,
  }).isRequired,
};