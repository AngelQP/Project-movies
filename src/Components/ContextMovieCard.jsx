import * as React from "react"
import { get } from "../data/httpClient";
import { MovieCard } from "./MovieCard";
import "./ContextMovieCard.css";

export function ContextMovieCard() {

  const [movies,setMovies] = React.useState([]);

  React.useEffect(() => {
    
    get("/discover/movie")
      .then((data) => {
        setMovies(data.results);
        console.log(data);
      })

  }, []);

  return(
    <ul className="container">
      {movies.map((item) => <MovieCard key={item.id} item={item} />)}
    </ul>
  );
}