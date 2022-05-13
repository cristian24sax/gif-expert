import React from 'react'
// import './GifGridItem.css'
// export const GifGridItem = ({img})  img.title img.url img.id 
export const GifGridItem = ({title, url}) => {
    // console.log(images)
  return (
    <div className='card'>
        {/* {title} */}
        <div>
        <img
          src={url}
          className='cardImg'
          alt={title}
        />
        <p>{title}</p>
        </div>
    </div>
  )
}
