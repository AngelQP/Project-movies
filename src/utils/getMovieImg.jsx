import placeholder from "../img/popcorn.png"

export function getMovieImg(path,width){
  return path ? `https://image.tmdb.org/t/p/w${width}${path}` : placeholder;
}

// const imageURL = "https://image.tmdb.org/t/p/w300"+item.poster_path;