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
                <div className='school-name'> Western University, 2020 - 2024 </div>
                <div className='program'> Software Engineering, Bachelor of Engineering </div>
              </div>
            </div>
            <div className='school-body'>
              <li> Dean's Honors List (2020-2023) </li>
              <li> Current GPA: 3.9</li>
              <li> Western Scholarship of Distinction: $2,500 awarded to students with an admissions average of 92% or higher</li>
              <li> Courses: Operating Systems, Project Management, Databases, Algorithms & Data Structures, HCI Design, Web Programming</li>
            </div>
          </div>
        </div>
        </div>
  )
}
export default Education
