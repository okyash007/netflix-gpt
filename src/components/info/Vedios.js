import React from "react";
import { useSelector } from "react-redux";
import Thumbnail from "./Thumbnail";

const Vedios = () => {
  const vedios = useSelector((store) => store?.movieDetails?.Vedios);

  if (!vedios) return;

  const ytKeys = [];

  vedios.results.map((m) => ytKeys.push(m.key));

  if(!ytKeys) return

  return (
    <div className="lg:mx-10  max-lg:mx-12 max-sm:mx-3">

    <div className="text-white  z-10 absolute flex flex-wrap max-lg:flex-col justify-start">

      {ytKeys.map((m) => (
        <Thumbnail ytKey={m} />
      ))}
    </div>
    </div>
  );
};

export default Vedios;
