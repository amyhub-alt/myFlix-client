import PropTypes from "prop-types";
import { Button, Card } from "react-bootstrap";

export const MovieCard = ({ movie, onMovieClick }) => {
  return (
    <Card onClick={() =>onMovieClick(movie)} style={{ cursor:"pointer" }}>
      <Card.Img variant="top" src={movie.imagePath} />
      <Card.Body>
        <Card.Title>{movie.title}</Card.Title>
        <Card.Text>{movie.director}</Card.Text>
      </Card.Body>
    </Card>
  );
};



// export const MovieCard = ({ key, movie, onMovieClick }) => {
//   return (
//     <div key={key}
//       onClick={() => {
//         onMovieClick(movie);
//       }}
//     >
//       {movie.title}
//     </div>
//   );
// };


MovieCard.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string
  }).isRequired,
    imagePath: PropTypes.string.isRequired,
    director: PropTypes.string.isRequired,
  onMovieClick: PropTypes.func.isRequired
};



