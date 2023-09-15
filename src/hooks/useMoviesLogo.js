import { useEffect, useState } from "react";
import { API_OPTIONS } from "../utils/constants";
import { addLogo } from "../utils/moviesSlice";
import { useDispatch } from "react-redux";

const useMoviesLogo = (id) =>{
  const dispatch = useDispatch();

    const logo = async () => {
      const data = await fetch(
        "https://api.themoviedb.org/3/movie/"+id+"/images",
        API_OPTIONS
      );
      const json = await data.json();
      dispatch(addLogo(json));
    };

    

    useEffect(() => {
      logo();
    }, []);



  }

  export default useMoviesLogo