import React, { Component } from 'react'
import ExperienceItem from '../ExperienceItem/ExperienceItem'
import './AdditionalExperience.css'

export class AdditionalExperience extends Component {
    render() {
        return(
            <div className='additionalexperience-container' id='projects'>
                <div className='title-container'>
                    <div className='title-text'>
                        <span role="img" aria-label="girl-dev">📃 </span> 
                        <span>&#60;</span>additional experience/<span>&#62;</span>
                    </div>
                </div>
                <div className='items-container'>
                    <ExperienceItem
                        img='images/wdslogo.png'
                        companyName='Western Developers Society'
                        role='Vice President of Development'
                        date='2022 - Present'
                        body1='Founding Executive of WU’s first software development focused club. Led the creation of the Development Portfolio' 
                    />
                    <ExperienceItem
                        img='images/westernai.png'
                        companyName='Western AI'
                        role='Front End Developer'
                        date='2021 - 2022'
                        body1='Designed, built, and managed development of project website using Python, HTML, CSS, and JavaScript'
                        
                    />
                    <ExperienceItem
                        img='images/western.png'
                        companyName='Course Outline Manager, Project'
                        date='2022 - 2023'
                        body1='Automated creation and tracking of course outlines using SCRUM framework with a team of 6 developers. ReactJS, Jira' 
                    />
                    <ExperienceItem
                        img='images/western.png'
                        companyName='Streamy, Music Web Application Project'
                        date='2023'
                        body1='Built REST API to interact with music. JavaScript, HTML, CSS, AWS. Rebuilt for users to create accounts, search songs, and create playlists. ReactJS, Firebase'
                    />
                </div>
            </div>
        )
    }
  
}

export default AdditionalExperience
