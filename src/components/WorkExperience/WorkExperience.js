import React, { Component } from 'react'
import ExperienceItem from '../ExperienceItem/ExperienceItem'
import './WorkExperience.css'

export class WorkExperience extends Component {
    render() {
        return(
            <div className='workexperience-container' id='work'>
                <div className='title-container'>
                    <div className='title-text'>
                        <span role="img" aria-label="girl-dev">👩‍💻 </span> 
                        <span>&#60;</span>work experience/<span>&#62;</span>
                    </div>
                </div>
                <div className='items-container'>
                    <ExperienceItem
                        img= 'images/scotialogo.png'
                        companyName='Scotiabank'
                        role='Business Analyst, Intern'
                        date='Summer 2023'
                        body1='Re-architectured business capability model on the Global Wealth Engineering Team' 
                    />
                    <ExperienceItem
                        img= 'images/aieralogo.png'
                        companyName='Aiera'
                        role='Software Engineering & Machine Learning, Intern'
                        descript='Event intelligence and insights platform leveraging adaptive deep learning for fundamental investors'
                        date='Summer 2022'
                        body1='Re-factored ReactJS components for audio event scoring and event calendar filtering' 
                    />
                    <ExperienceItem
                        img ='images/hellome.png'
                        companyName='Hello.Me'
                        role='Summer Intern'
                        date='Summer 2021'
                        body1='Led the development of HTML and CSS email templates contributing to a 23.4% increase in message visibility' 
                    />
                </div>
            </div>
        )
    }
  
}

export default WorkExperience
