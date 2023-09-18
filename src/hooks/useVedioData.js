import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addVedioData } from "../utils/movieDetailsSlice";

const useVedioData = (ytKey) => {
  const dispatch = useDispatch(); 
  const [finalData , setfinalData] = useState(null)

  const vedioData = async () => {
    const data = await fetch(
      "http://www.youtube.com/oembed?url=https://www.youtube.com/watch?v=" +
        ytKey +
        "&format=json"
    );
    const json = await data.json();
    console.log( json )
    setfinalData(json)
  };

  useEffect(() => {
    vedioData();
  }, []);

  return finalData
};

export default useVedioData;
