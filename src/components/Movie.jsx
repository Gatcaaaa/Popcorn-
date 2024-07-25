import { useState } from "react";
import MovieCard from "./ui/MovieCard";

export default function MovieList({ movies }) {
  return (
    <ul className="list">
      {movies?.map((movie) => (
        <MovieCard movie={movie} key={movie.imdbID} />
      ))}
    </ul>
  );
}
