import React from "react";
import useVedioData from "../../hooks/useVedioData";
import YTcard from "./YTcard";
import { useNavigate } from "react-router-dom";

const Thumbnail = ({ ytKey }) => {
  const VedioData = useVedioData(ytKey);
  const navigate = useNavigate()

  if (!VedioData) return;

  return (
    <div onClick={ () => { navigate( "/watch/"+ytKey ) } }>
      <YTcard
        thumbnailURL={VedioData.thumbnail_url}
        authorName={VedioData.author_name}
        title={VedioData.title}
      />
    </div>
  );
};

export default Thumbnail;
