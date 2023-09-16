import React from 'react'

import { POSTER_URL } from '../../utils/constants'

const MovieCard = ({ path }) => {

    if(!path) return
  return (
<>
        <img src={POSTER_URL + path} alt="poster here " className='w-36 max-lg:w-24  mx-1 my-2 rounded cursor-pointer' />
        </>
  )
}

export default MovieCard