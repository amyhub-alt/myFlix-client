import PropTypes from "prop-types";
import "./movie-view.scss";


export const MovieView = ({ movie, onBackClick }) => {
  return (
    <div>
      <div>
        <img className="w-100" src={movie.imagePath} />
      </div>
      <div>
        <span> Title: </span>
        <span>{movie.title}</span>
      </div>
      <div>
        <span>Director: </span>
        <span>{movie.director}</span>
      </div>
      <div>
        <span>Genre: </span>
        <span>{movie.genre.Name}</span>
      </div>
      <button onClick={onBackClick} 
      className="back-button"
        style={{ cursor: "pointer" }}
        >
        Back
        </button>
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
