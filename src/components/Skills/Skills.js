import React from 'react'
import './Skills.css'

function Skills() {
  return (
    <div className='skills-container'>
        <div className='tools-container'>
            <div className='title-text'>
                <span role="img" aria-label="hammer">🔨 </span> 
                <span>&#60;</span>my tools/<span>&#62;</span>
            </div>
            <div className='logo-container'>
            <div className='skill'>
                <img src={'images/java.png'}></img>
                <div>java</div>
            </div>
            <div className='skill'>
                <img src={'images/javascript.png'}></img>
                <div>javascript</div>
            </div>
            <div className='skill'>
                <img src={'images/github.png'}></img>
                <div>github</div>
            </div>
            <div className='skill'>
                <img src={'html5.png'} ></img>
                <div>html5</div>
            </div>
            <div className='skill'>
                <img src={'images/css3.png'}></img>
                <div>css3</div>
            </div>
            <div className='skill'>
                <img src={'images/react.png'}></img>
                <div>react</div>
            </div>
            <div className='skill'>
                <img src={'images/csharp.png'}></img>
                <div>c#</div>
            </div>
            </div>
        </div>
        <div className='spotify-container'>
        <div className='spotify-title'>
            <div className='title-text'><span role="img" aria-label="trumpet">🎺 </span> 
              <span>&#60;</span>what i'm listening to/<span>&#62;</span></div>
        </div>
        <div className='spotify-frame'>
        <script src="https://open.spotify.com/embed-podcast/iframe-api/v1" async></script>
        <iframe src="https://open.spotify.com/embed/playlist/43hprfEQtE1t69ehiXwfhp?utm_source=generator" width="550" height="450" frameBorder="0" allowfullscreen="" ></iframe>
        </div>
    </div>
   </div>
  )
}

export default Skills

