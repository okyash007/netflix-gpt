import React from "react";
import useVedioData from "../../hooks/useVedioData";
import { useNavigate } from "react-router-dom";

const YTcard = ({ ytkey }) => {
  const navigate = useNavigate()

  const Data = useVedioData(ytkey);

  const title = Data?.snippet?.localized?.title;
  const thumbnail = Data?.snippet?.thumbnails?.maxres?.url;

  if (!Data?.snippet) return;

  console.log(thumbnail);

  return (
    <div className="">
      {thumbnail && (
        <div onClick={ ()=> { navigate( "/watch/"+ytkey ) } }>
          <img
            src={thumbnail}
            alt=""
            className="w-72 rounded-md m-1 border-red-900 border-2 "
          />
        </div>
      )}
      {!thumbnail && (
        <div className="w-72 aspect-video border-red-900 border-2 rounded-md m-1 backdrop-blur-[5px] flex items-center justify-center ">
          {" "}
          <p className="text-xs font-semibold text-gray-400">
            Thumbnail not Available
          </p>{" "}
        </div>
      )}
      <p className="w-72 mx-1 mb-9 text-sm font-semibold text-gray-300">
        {title}
      </p>
    </div>
  );
};

export default YTcard;
