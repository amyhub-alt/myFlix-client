import Col from 'react-bootstrap/Col';
import { MovieCard } from "../movie-card/movie-card";

export const MoviesList = ({movies})=> (
  movies.map((movie) => (
    <Col className="mb-5" key={movie.id} md={3}>
      <MovieCard
        movie={movie}
        onMovieClick={(newSelectedMovie) => {
          setSelectedMovie(newSelectedMovie);
        }}
      />
    </Col>
))) 

