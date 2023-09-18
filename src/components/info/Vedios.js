import React from "react";
import { useSelector } from "react-redux";
import Thumbnail from "./Thumbnail";

const Vedios = () => {
  const vedios = useSelector((store) => store.movieDetails.Vedios);

  if (!vedios) return;

  const ytKeys = [];

  vedios.results.map((m) => ytKeys.push(m.key));

console.log(ytKeys)
  return (
    <div className="text-white m-28 z-10 absolute flex flex-wrap justify-center">
      {ytKeys.map((m) => (
        <Thumbnail ytKey={m} />
      ))}
    </div>
  );
};

export default Vedios;
