import { useState } from "react";
import { MovieCard } from "../movie-card/movie-card";
import { MovieView } from "../movie-view/movie-view";

export const MainView = () => {
  const [movies, setMovies] = useState([
    {
      id: 1,
      title: 'Kill Bill',
      director: {
        name: 'Quentin Tarantino',
        bio: 'Quentin Tarantino is an American filmmaker known for his stylized violence, sharp dialogue, and nonlinear storytelling. He has directed numerous critically acclaimed films and is considered one of the most influential directors of his generation.',
        birth_year: 1963,
        death_year: 'Present'
      },
      genre: 'Action, Thriller',
      description: '"Kill Bill" follows The Bride, a former assassin seeking revenge on her ex-team and boss, Bill, after being betrayed and left for dead. Directed by Quentin Tarantino, this action-packed thriller features stylized violence and a gripping tale of vengeance.',
      imageURL: 'images/killbill_image.png'
    },
    {
      id: 2,
      title: 'Scott Pilgrim vs. the World',
      director: {
        name: 'Edgar Wright',
        bio: 'Edgar Wright is a British filmmaker known for his unique visual style and comedic timing. He has directed a number of popular films, often collaborating with actor Simon Pegg.',
        birth_year: 1974,
        death_year: 'Present'
      },
      genre: 'Action, Comedy',
      description: '"Scott Pilgrim vs. the World" follows Scott Pilgrim, a young musician who must defeat his new girlfriend\'s seven evil exes in battle. Directed by Edgar Wright, this film blends action and comedy with a unique visual style.',
      imageURL: 'images/scottpilgrimvstheworld_image.jpg'
    },
    {
      id: 3,
      title: 'Whiplash',
      director: {
        name: 'Damien Chazelle',
        bio: 'Damien Chazelle is an American filmmaker and screenwriter known for his work on musical dramas and intense character studies. He gained acclaim for his films "Whiplash" and "La La Land."',
        birth_year: 1985,
        death_year: 'Present'
      },
      genre: 'Drama, Music',
      description: '"Whiplash" tells the intense story of a young drummer under the mentorship of a ruthless music instructor. Directed by Damien Chazelle, it explores themes of ambition and obsession in the world of music.',
      imageURL: 'images/whiplash_image.jpg'
    },
    

  ]);

  const [selectedMovie, setSelectedMovie] = useState(null);

  if (selectedMovie) {
    return (
      <MovieView movie={selectedMovie} onBackClick={() => setSelectedMovie(null)} />
    );
  }

  if (movies.length === 0) {
    return <div>The list is empty!</div>;
  }

  return (
    <div>
      {movies.map((movie) => (
        <MovieCard
          key={movie.id}
          movie={movie}
          onMovieClick={(newSelectedMovie) => {
            setSelectedMovie(newSelectedMovie);
          }}
        />
      ))}
    </div>
  );
};