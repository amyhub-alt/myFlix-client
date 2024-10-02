import PropTypes from "prop-types";

export const MovieCard = ({ key, movie, onMovieClick }) => {
  return (
    <div key={key}
      onClick={() => {
        onMovieClick(movie);
      }}
    >
      {movie.title}
    </div>
  );
};


MovieCard.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string
  }).isRequired,
  onMovieClick: PropTypes.func.isRequired
};



