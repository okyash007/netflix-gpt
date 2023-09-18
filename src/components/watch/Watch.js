import React from 'react'
import Header from '../Header'
import { useParams } from 'react-router-dom'

const Watch = () => {

  const params = useParams()

  console.log (params.waid)

  return (
    <div>
        <Header/>
        Watch</div>
  )
}

export default Watch