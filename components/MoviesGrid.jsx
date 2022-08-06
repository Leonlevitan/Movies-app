import { useEffect, useState } from "react";
import { useQuery } from "../hooks/useQuery";
import { get } from "../ultils/httpClient";
import { MovieCard } from "./MovieCard";
import styles from "./MoviesGrid.module.css";

export function MoviesGrid() {
  const [movies, setMovies] = useState([]);

  const query = useQuery();
  const search = query.get("search");

  useEffect(() => {
    const searchUrl = search
      ? "/search/movie?query=" + search
      : "/discover/movie";
    get(searchUrl).then((data) => {
      setMovies(data.results);
    });
  }, [search]);
  return (
    <ul className={styles.moviesGrid}>
      {movies.map((prop) => (
        <MovieCard key={prop.id} movie={prop} />
      ))}
    </ul>
  );
}
