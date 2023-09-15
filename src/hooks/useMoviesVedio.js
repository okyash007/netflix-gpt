import { useEffect, useState } from "react";
import { API_OPTIONS } from "../utils/constants";
import { addVedio } from "../utils/moviesSlice";
import { useDispatch } from "react-redux";

const useMoviesVedio= (id) =>{
  const dispatch = useDispatch() 

    const Vedio = async () => {
      const data = await fetch(
        "https://api.themoviedb.org/3/movie/"+id+"/videos",
        API_OPTIONS
      );
      const json = await data.json();
      dispatch(addVedio(json));
    };

    

    useEffect(() => {
      Vedio();
    }, []);




  }

  export default useMoviesVedio