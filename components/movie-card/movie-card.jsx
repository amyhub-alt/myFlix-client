import PropTypes from "prop-types";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

export const MovieCard = ({ movie }) => {
  return (
    <Link to={ "/movies/"+movie.title} >
    <Card className="h-100" style={{ cursor:"pointer" }}>
      <Card.Img variant="top" src={movie.imagePath} />
      <Card.Body>
        <Card.Title>{movie.title}</Card.Title>
        <Card.Text>{movie.director}</Card.Text>
      </Card.Body>
    </Card>
    </Link>
  );
};




MovieCard.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string
  }).isRequired,
    imagePath: PropTypes.string.isRequired,
    director: PropTypes.string.isRequired
};