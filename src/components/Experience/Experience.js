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
             body1=' Manage a team of 50 to oversee the development of four web applications simultaneously, produced by four separate developer teams, designers, tech leads and community leads'
             body2='Lead a team of five developers in the design and development of the clubs website using Figma, ReactJS, and Github, with a careful attention to detail while turning a technical problem into a tangible solution'
            body3='Conduct the beginning to end hiring process for over 50 positions; Reviewing applications, conducting over 50 interviews, and onboarding new members'
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
