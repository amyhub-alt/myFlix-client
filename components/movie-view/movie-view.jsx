import "./movie-view.scss";
import { useParams } from "react-router";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


export const MovieView = () => {
  const [movie, setMovie] = useState({});
  const {movieID} = useParams();

  useEffect(()=>{

    fetch("https://movie-api-amy-d13640458d52.herokuapp.com/movies/" + movieID, {
      headers: {Authorization: `Bearer ${localStorage.getItem("token")}` }
    })
      .then((response) => response.json())
      .then ((data) => {
        setMovie(data);
      })
      .catch((error) => {
        console.error("Error fetching movies:", error); // Log any potential errors
      });
  }, [movieID]);


  return (
    <div>
      <div>
        <img className="w-100" src={movie.ImagePath} />
      </div>
      <div>
        <span> Title: </span>
        <span>{movie.Title}</span>
      </div>
      <div>
        <span>Director: </span>
        <span>{movie.Director && movie.Director.Name}</span>
      </div>
      <div>
        <span>Genre: </span>
        <span>{movie.Genre && movie.Genre.Name}</span>
      </div>
      <Link to={`/`}>
      <button
        className="back-button"
        style={{ cursor: "pointer" }}>
        Back
        </button>
        </Link>
    </div>
  );
};

