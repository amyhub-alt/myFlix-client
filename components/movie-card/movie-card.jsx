export const MovieCard = ({ key, movie, onMovieClick }) => {
  return (
    <div ID={key}
      onClick={() => {
        onMovieClick(movie);
      }}
    >
      {movie.title}
    </div>
  );
};




