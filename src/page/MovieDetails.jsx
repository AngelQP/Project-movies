import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {get} from "../data/httpClient"
import { getMovieImg } from "../utils/getMovieImg";
import "./MovieDetails.css"

export function MovieDetails() {
  const {movieId} = useParams();
  const [movie, setMovie] = useState([]);
  const [genres, setGeners] = useState([]);
  
  useEffect(() => 
  {
    get("/movie/"+movieId)
    .then((data) => {
      setMovie(data);
      setGeners(data.genres[0])
    })
  },[movieId]);

  const imageURL = getMovieImg(movie.poster_path, 500);

  return(
    <div className="detailsContainer">
      <img className="col movieImage" src={imageURL} alt={movie.title} />
      <div className="col movieDetails">
        <p className="title">
          <strong>Title: </strong>{movie.title}
        </p>
        <p>
          <strong>Genero: </strong> {genres.name}
        </p>
        <p>
          <strong>Descripción: </strong> {movie.overview}
        </p>
      </div>
    </div>
  );
}