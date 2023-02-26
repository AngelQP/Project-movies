import styles from  "./MovieCard.module.css";
import {Link} from "react-router-dom";

export function MovieCard({item}) {
  const imageURL = "https://image.tmdb.org/t/p/w300"+item.poster_path;
  return(
    <li className={styles.movieCard}>  
      <Link to={"/movies/"+item.id}>
        <img className={styles.movieImage} width={230} height={345} src={imageURL} alt={item.title} />
      </Link>
        <div className={styles.title}>{item.title}</div>
    </li>
  );
}