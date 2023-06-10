import React from 'react'
import './Education.css'

function Education(){
    return (
        <div className='ed-container'>
         <div className='title-cont'>
            <div className='title-text'><span role="img" aria-label="paper"> 📝 </span> 
              <span>&#60;</span>education/<span>&#62;</span>
            </div>
        </div>
        <div className='info-container'>
          <div className='school-container'>
            <div className='school-header'>
              <div className='school-title'>
                <div> Western University </div>
                <div>Software Engineering, Bachelor of Engineering</div>
              </div>
              <div className='school-date'>
                  2020 - 2024
              </div>
            </div>
            <div className='school-body'>
              <li> Dean's List </li>
            </div>
          </div>
        </div>
        </div>
  )
}
export default Education
