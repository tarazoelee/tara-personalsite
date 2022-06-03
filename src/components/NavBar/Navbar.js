import React,{useState, Component} from 'react';
import {Link} from 'react-router-dom';
import './Navbar.css'

class Navbar extends Component {
  render(){
    return (
      <nav className='navbar'> 
      <div className='navbar-container'>
          <Link  to='/' className='education'>
            education
          </Link>
           <Link  to='/' className='experience'>
            experience
          </Link>
           <Link  to='/' className='interests'>
            interests & awards
          </Link>
          <Link  to='/' className='contact'>
            contact
          </Link>
          <div className='menu-icon'>

          </div>
      </div>
      </nav>
  )

  }
  
}

export default Navbar
