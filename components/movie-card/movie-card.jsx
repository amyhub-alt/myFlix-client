import PropTypes from "prop-types";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

export const MovieCard = ({ movie, user }) => {
  const handleFav = () => {

    fetch("https://movie-api-amy-d13640458d52.herokuapp.com/users/"+user.Username+"/"+"movies/" + movie.id, 
      {
      headers: {Authorization: `Bearer ${localStorage.getItem("token")}` },
      method: "POST"
    })
      .then((response) => response.json())
      .then ((data) => {
       console.log(data)
      })
      .catch((error) => {
        console.error("Error fetching movies:", error); // Log any potential errors
      });

  }

  return (
   
    <Card className="h-100" style={{ cursor:"pointer" }}>
      
      <Card.Img variant="top" src={movie.imagePath} />
      <Card.Body>
      <Link to={ "/movies/"+movie.title} >
        <Card.Title>{movie.title}</Card.Title>
        <Card.Text>{movie.director}</Card.Text>
        </Link>
        <button onClick={() => handleFav()}>Add</button><button>Remove</button>
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