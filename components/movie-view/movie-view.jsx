import PropTypes from "prop-types";

export const MovieView = ({ movie, onBackClick }) => {
  return (
    <div>
      <div>
        <img src={movie.image} />
      </div>
      <div>
        <span> Title: </span>
        <span>{movie.title}</span>
      </div>
      <div>
        <span>Director: </span>
        <span>{movie.director.Name}</span>
      </div>
      <div>
        <span>Genre: </span>
        <span>{movie.genre.Name}</span>
      </div>
      <button onClick={onBackClick}>Back</button>
    </div>
  );
};

MovieView.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string,
    director: PropTypes.object,
    genre: PropTypes.object,
  }).isRequired,
  onBackClick: PropTypes.func.isRequired
};
