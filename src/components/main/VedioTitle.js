import React from "react";
import useMoviesLogo from "../../hooks/useMoviesLogo";
import { MOVIE_LOGO_URL } from "../../utils/constants";
import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/styles.css";
import "./VedioTitle.css";
import { useSelector } from "react-redux";
import Second from "../second/Second";

const VedioTitle = () => {
  const movies = useSelector((store) => store.movies);
  const logoData = movies.logo
  const description = movies.playingMovies[0].overview
  return (
    <>
      <div className="absolute top-0 z-30 mt-[15%]">
        <div>
          <p className="text-gray-400 text-sm w-80 p-6 font-normal">
            {description}
          </p>
          <img
            src={MOVIE_LOGO_URL + logoData?.logos[1]?.file_path}
            alt="movie logo here"
            className="w-80 zoom m-6 hover:w-96"
          />
          <div className="flex flex-row w-48 justify-between mx-6">
            <AwesomeButton
              type="primary"
              after={
                <img
                  src="https://svgsilh.com/svg_v2/1718976.svg"
                  width={30}
                  alt=""
                />
              }
            >
              Play{" "}
            </AwesomeButton>
            <button className="bg-white opacity-80 text-black px-6 rounded">
              More Info
            </button>
          </div>
          <div className="block">
            <Second />
          </div>
        </div>
      </div>
      <div className="absolute top-0 aspect-video w-full bg-gradient-to-t from-black"></div>
    </>
  );
};

export default VedioTitle;
