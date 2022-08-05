import { useEffect, useState } from "react";
import { get } from "../ultils/httpClient";
import { MovieCard } from "./MovieCard";
import styles from "./MoviesGrid.module.css";

export function MoviesGrid() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    get("/discover/movie").then((data) => {
      setMovies(data.results);
    });
  }, []);
  return (
    <ul className={styles.moviesGrid}>
      {movies.map((prop) => (
        <MovieCard key={prop.id} movie={prop} />
      ))}
    </ul>
  );
}
