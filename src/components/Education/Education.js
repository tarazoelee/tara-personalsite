import React from 'react'

function Education(){
    return (
        <div className='subsection'>
         <div className='title-container'>
            <div className='title-text'><span role="img" aria-label="paper"> 📝 </span> 
              <span>&#60;</span>education/<span>&#62;</span>
            </div>
        </div>
        <div className='info-container'>
          <div className='school-container'>
            <div className='program'>Software Engineering, BESc - <span className='school'>Western University, 2020-2024 </span></div>
            <p>Dean's List, 2021-2022</p>
            <p>Western Scholarship of Distinction, 2021</p>
            <p>relevant coursework: Java OOP, algorithms and data structures, digital logic systems, scripting programming </p>
          </div>
          <div className='school-container'>
            <div className='program'>Ontario Secondary School Diploma - <span className='school'>Branskome Hall, 2020 </span></div>
            <p>Ontario Scholar, 2020</p>
            <p>High Honours, 2017-2020</p>
            <p>Duke of Edinburgh Award 2018 </p>
          </div>
          <div className='school-container'>
            <div className='program'>International Baccalaureate Diploma - <span className='school'>Branskome Hall, 2020 </span></div>
          </div>
        </div>
        </div>
  )
}
export default Education
