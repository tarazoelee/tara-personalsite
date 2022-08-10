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
              companyName='aiera'
              imageUrl={'images/aieradesignlogo.png'}
              title='machine learning intern'
              date='may 2022 - august 2022'
              body1='Collaborated with a team of six developers to develop scalable components and features, using ReactJS, that improve user experience such as: UI Sentiment analysis refactor for audio events, enable filter by starred events, implement ability to exclude sectors from monitor level filters, and create column view for Calendar dashboard.'
              body2='Use MySQL and Python to refine logic for conference promotion'/>
          </div>
          <div className='card2'>
             <Cards 
             companyName='western developers society'
             imageUrl={'images/westerndev.png'}
              title='vp of developer teams'
              date='may 2022 - present'
             body1=' Oversee the clubs entire portfolio by collaborating with each of 3-4 teams as they develop a web app for their client'
             body2='Create a comprehensive Team Roadmap for the year, develop role descriptions, and detailed documentation to support developers and team leads in their roles'
            body3='Work as a team lead to design and develop the clubs website using Figma, ReactJS and Github'
          />
          </div>
          <div className='card3'>
            <Cards 
            companyName='hello.me'
            imageUrl={'images/hellome.png'}
            title='summer intern'
            date='may 2021 - august 2021'
            body1='Lead the development of HTML and CSS email templates (leveraging Klaviyo APIs), sent out to 4,000+ customers, contributing to a 23.4% increase in message visibility'
            body2='Conducted projects to: advance the customer outreach pipeline, create a dynamic landing page, extend post-purchase drip campaign, and develop customer guide cards. '
          />
          </div>
          <div className='card4'>
            <Cards 
            companyName='westernAI'
            imageUrl={'images/westernai.png'}
            title='UI/UX developer & designer'
            date='september 2020 - may 2021'
            body1='Build a website from scratch using Python, HTML, CSS, Flask, and JavaScript to deploy a machine learning model that classifies metal defects with >95% accuracy (to be deployed using heroku). Utilized Github and VSCode'
          />
          </div>
        </div>
        </div>
    )
  }
}

export default Experience
