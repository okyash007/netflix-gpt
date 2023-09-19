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
    <div className="text-white lg:m-28 max-lg:mt-28 max-lg:mx-12 max-sm:mx-9 z-10 absolute flex flex-wrap max-lg:flex-col justify-center">
      {ytKeys.map((m) => (
        <Thumbnail ytKey={m} />
      ))}
    </div>
  );
};

export default Vedios;
