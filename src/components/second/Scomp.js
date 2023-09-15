import React from 'react'
import { useSelector } from 'react-redux'
import MovieList from './MovieList'

const Scomp = () => {

const movies = useSelector( (store) => store.movies )

  return (
    <div className='mt-24 max-lg:mt-12'>
        <MovieList title={"Now Playing"} movies={movies.playingMovies} />
        <MovieList title={"Now Playing"} movies={movies.playingMovies} />
    </div>
  )
}

export default Scomp