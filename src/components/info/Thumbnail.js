import React from "react";
import useVedioData from "../../hooks/useVedioData";
import YTcard from "./YTcard";
import { useNavigate } from "react-router-dom";

const Thumbnail = ({ ytKey }) => {

  const navigate = useNavigate();







  return (
    <div
      onClick={() => {
        navigate("/watch/" + ytKey);
      }}
    >
<YTcard ytkey = {ytKey} />
    </div>
  );
};

export default Thumbnail;
