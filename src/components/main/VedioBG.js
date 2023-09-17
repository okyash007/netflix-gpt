import React from "react";
import { useSelector } from "react-redux";

const VedioBG = () => {

  const vedioData = useSelector((store) => store.movies.Vedio)

  const ytKey = vedioData?.results[0]?.key


  return (
    <div className="text-white">
      
      
      <iframe
      className="w-full aspect-video" 
      
        src={"https://www.youtube.com/embed/"+ytKey+"?rel=0&autoplay=1&mute=1&modestbranding=1&autohide=1&showinfo=0&controls=0&loop=1&playlist="+ytKey}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      >

      

      </iframe>
      
    </div >
  );
};

export default VedioBG;
