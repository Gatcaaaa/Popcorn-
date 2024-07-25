import NavBar from "./components/NavBar";
import Main from "./components/Main";
import { useState } from "react";
import { tempMovieData } from "./data";
import Logo from "./components/ui/Logo";
import Search from "./components/ui/Search";
import Result from "./components/ui/Result";
import ListMovie from "./components/ListMovie";
import WatchedMovie from "./components/WatchedMovie";

function App() {
  const [movies, setMovies] = useState(tempMovieData);

  return (
    <>
      <NavBar>
        <Logo />
        <Search />
        <Result result={movies} />
      </NavBar>
      <Main>
        <ListMovie movies={movies} />
        <WatchedMovie />
      </Main>
    </>
  );
}

export default App;
