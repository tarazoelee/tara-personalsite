import React, { Component } from 'react'
import './Experience.css'
import Cards from '../Cards/Cards'



export class Experience extends Component {
  render() {
    return (
      <div className='section'>
        <div className='title-container'>
            <div className='title-text'><span role="img" aria-label="girl-dev">👩‍💻 </span> 
              <span>&#60;</span>some relevant experience/<span>&#62;</span></div>
        </div>
        <div className='cards-container'>
          <div className='card1'>
            <Cards 
              imageUrl={'aieradesignlogo.png'}
              title='machine learning intern'
              date='may 2022 - present'
              body='developing scalable components that improve user experience'/>
          </div>
          <div className='card2'>
             <Cards 
             imageUrl={'westerndev.png'}
            title='vp of developer teams'
            date='may 2022 - present'
             body='managing the progress of all developer portfolios'
          />
          </div>
          <div className='card3'>
            <Cards 
            imageUrl={'hellome.png'}
            title='summer intern'
            date='summer 2020 '
             body='Conducted projects to: advance the customer outreach pipeline, create a dynamic landing page, extend post-purchase drip campaign, and develop customer guide cards. '
          />
          </div>
        </div>
        </div>
    )
  }
}

export default Experience

{/** <div className='cards-conatiner'>
        <div className='card'>
          
          <Cards 
            title='ML INTERN'
            imageUrl={'aieradesignlogo.png'}
            body='currently here'/>
        </div>
          
            <div className='card'>
            <Cards 
            title='SUMMER INTERN'
            imageUrl={'hellome.png'}
            body='testing body '
          /></div>
      
        <div className='card'>
            <Cards 
            title='SUMMER INTERN'
            imageUrl={'westerndev.png'}
            body='testing body '
          /></div>
        </div>
        </div>*/}