import React from 'react'
import './Skills.css'

function Skills() {
  return (
    <div className='skills-container'>
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
                <img src={'images/html5.png'} ></img>
                <div>html5</div>
            </div>
            <div className='skill'>
                <img src={'images/css3.png'}></img>
                <div>css3</div>
            </div>
            <div className='skill'>
                <img src={'images/react.png'}></img>
                <div>reactjs</div>
            </div>
            <div className='skill'>
                <img src={'images/csharp.png'}></img>
                <div>c#</div>
            </div>
             <div className='skill'>
                <img src={'images/figma.png'}></img>
                <div>figma</div>
            </div>
            <div className='skill'>
                <img src={'images/mysql.png'}></img>
                <div>mysql</div>
            </div>
        </div>
   </div>
  )
}

export default Skills

