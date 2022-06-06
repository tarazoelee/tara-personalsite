import React,{useState, Component} from 'react';
import {Link} from 'react-router-dom';
import './Navbar.css'

class Navbar extends Component {
  render(){
    return (
      <nav className='navbar'> 
      <div className='navbar-container'>
        <div>
          <source srouce="/public/logo.mp4" type='/video/mp4'></source>
        </div>
           <a  href='/Experience' className='topic'>
            EXPERIENCE
          </a>
           <a  href='/Interests' className='topic'>
            INTERESTS & AWARDS
          </a>
            <a  href='/Education' className='topic'>
            EDUCATION
          </a>
          <a  href='/Contact' className='topic'>
            CONTACT
          </a>
          <div className='menu-icon'>

          </div>
      </div>
      </nav>
  )

  }
  
}

export default Navbar
