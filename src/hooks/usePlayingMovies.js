import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addPlayingMovies } from "../utils/moviesSlice";
import { API_OPTIONS } from "../utils/constants";

const usePlayingMovies = () => {
  const dispatch = useDispatch();

  const nowPlayingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?page=1",
      API_OPTIONS
    );
    const json = await data.json();
    dispatch(addPlayingMovies(json.results));
  };

  useEffect(() => {
    nowPlayingMovies();
  }, []);
};

export default usePlayingMovies;
