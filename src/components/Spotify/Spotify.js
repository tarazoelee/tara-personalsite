import React from 'react'
import './Spotify.css'

function Spotify() {
  return (
    <div className='spotify-container'>
        <div className='spotify-title'>
            <div className='title-text'><span role="img" aria-label="trumpet">🎺 </span> 
            <span>&#60;</span>what i'm listening to/<span>&#62;</span></div>
        </div>
        <div className='spotify-frame'>
            <script src="https://open.spotify.com/embed-podcast/iframe-api/v1" async></script>
            <iframe src="https://open.spotify.com/embed/playlist/43hprfEQtE1t69ehiXwfhp?utm_source=generator" width="70%" height="475" frameBorder="0" allowfullscreen="" ></iframe>
        </div>
    </div>
  )
}

export default Spotify
