import React, { useEffect } from "react";
import Header from "./Header";
import usePlayingMovies from "../hooks/usePlayingMovies";
import useMoviesLogo from "../hooks/useMoviesLogo";
import Main from "./main/Main";
import useMoviesVedio from "../hooks/useMoviesVedio";

const Browse = () => {
  usePlayingMovies();
  useMoviesLogo(337167);
  useMoviesVedio(337167);

  return (
    <div>
      <Header />
      <Main />
    </div>
  );
};

export default Browse;
