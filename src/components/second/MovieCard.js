import React from "react";

import { POSTER_URL } from "../../utils/constants";

const MovieCard = ({ path, large }) => {
  if (!path) return;
  return (
    <>
      {!large && (
        <img
          src={POSTER_URL + path}
          alt="poster here "
          className="w-36 max-lg:w-24  mx-1 my-1 rounded cursor-pointer inline-block"
        />
      )}

      {large && <img src={POSTER_URL + path} className="w-56 max-lg:w-44  mx-3 my-1 rounded cursor-pointer inline-block" alt="" />}
    </>
  );
};

export default MovieCard;
