import React,{useState, Component} from 'react';
import {Link} from 'react-router-dom';
import './Navbar.css'

class Navbar extends Component {
  render(){
    return (
      <nav className='navbar'> 
      <div className='navbar-container'>
        <ul>
        <li>
           <a  href='/Experience' className='topic'>
            EXPERIENCE
          </a>
          </li>
          <li>
           <a  href='/Interests' className='topic'>
            EDUCATION & SKILLS
          </a>
          </li>
          <li>
          <a  href='/Contact' className='topic'>
            CONTACT
          </a>
          </li>
        </ul>
      </div>
      </nav>
  )

  }
  
}

export default Navbar
