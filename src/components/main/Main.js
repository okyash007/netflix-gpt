import React from "react";
import VedioBG from "./VedioBG";
import { useSelector } from "react-redux";
import VedioTitle from "./VedioTitle";

const Main = () => {
  const movies = useSelector((store) => store.movies.playingMovies);
  if (!movies) return;

  return (
    <div className="border-white z-10">
      <VedioBG />
      <VedioTitle/>
    </div>
  );
};

export default Main;
