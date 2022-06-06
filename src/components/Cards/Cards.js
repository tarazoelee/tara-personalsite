import React from 'react'
import {Link} from 'react-router-dom'
import './Cards.css'

function Cards({title,imageUrl,body}) {
  return (
    <div className='card-container'>
        <img src={imageUrl} alt='' className='image-container'></img>
      <div className='overlay'>
          <h3>{title}</h3>
          <p>{body}</p>
      </div>
    </div>
  )
}

export default Cards
