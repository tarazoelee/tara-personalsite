import React from 'react'
import './Skills.css'

function Skills() {
  return (
    <div className='skills-container'>
        <div className='title'>
            <div className='title-text'><span role="img" aria-label="girl-dev">👩‍💻 </span> 
              <span>&#60;</span>my tools/<span>&#62;</span></div>
        </div>
        <div className='tools-container'>
            <div className='skill'>
                <img src={'java.png'}></img>
            </div>
            <div className='skill'>
                <img src={'javascript.png'}></img>
            </div>
        </div>
    </div>
  )
}

export default Skills

