import React from 'react'

const Resource = (params) => {
  return (
    <>
    <div className='resource'>
        <img src={params.imgSrc} alt=''/>
        <h3>{params.title}</h3>
        
    </div>
    </>
  )
}

export default Resource
