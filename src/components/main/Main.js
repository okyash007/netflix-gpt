import React from "react";
import VedioBG from "./VedioBG";
import { useSelector } from "react-redux";
import VedioTitle from "./VedioTitle";
import Second from "../second/Second";

const Main = () => {
  const movies = useSelector((store) => store.movies.playingMovies);
  if (!movies) return;

  return (
    <div className="z-10">
      <VedioBG />
      <VedioTitle/>
    </div>
  );
};

export default Main;
