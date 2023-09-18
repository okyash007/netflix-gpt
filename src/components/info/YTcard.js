import React from 'react'

const YTcard = ({ thumbnailURL, authorName, title }) => {


    console.log({ thumbnailURL, authorName, title })

  return (
    <div className="" >
        <img src={thumbnailURL} alt="thumbnail here" className='w-72 rounded-md m-1 border-red-900 border-2 '  />
        <p className='w-72 mx-1 mb-9'>{title}</p>
    </div>
  )
}

export default YTcard