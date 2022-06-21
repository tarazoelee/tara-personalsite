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
              body='Developing scalable components that improve user experience'/>
          </div>
          <div className='card2'>
             <Cards 
             imageUrl={'westerndev.png'}
            title='vp of developer teams'
            date='may 2022 - present'
             body='Managing the progress of all developer portfolios'
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
          <div className='card5'>
            <Cards 
            imageUrl={'westernai.png'}
            title='UI/UX developer & designer'
            date='september 2020-may 2021'
             body='Designed and developed the project website'
          />
          </div>
        </div>
        </div>
    )
  }
}

export default Experience
