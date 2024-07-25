import WatchedMovieCard from "./ui/WatchedMovieCard";

export default function WatchedMovieList({ watched }) {
  return (
    <ul className="list">
      {watched.map((movie) => (
        <WatchedMovieCard movie={movie} key={movie.imdbID} />
      ))}
    </ul>
  );
}
