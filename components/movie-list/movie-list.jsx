import Col from 'react-bootstrap/Col';
import { MovieCard } from "../movie-card/movie-card";

export const MoviesList = ({movies, setSelectedMovie})=> (
  movies.map((movie) => (
    <Col className="mb-5" key={movie.id} md={3}>
      <MovieCard
        movie={movie}
        onMovieClick={() => {
          location.href= "/movies/"+movie.title
        }}
      />
    </Col>
))) 

