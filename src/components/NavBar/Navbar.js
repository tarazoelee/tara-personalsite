import React,{useState, Component} from 'react';
import {Link} from 'react-router-dom';
import './Navbar.css'

class Navbar extends Component {
  render(){
    return (
      <nav className='navbar'> 
      <div className='navbar-container'>
          <Link  to='/' className='topic'>
            education
          </Link>
           <Link  to='/' className='topic'>
            experience
          </Link>
           <Link  to='/' className='topic'>
            interests & awards
          </Link>
          <Link  to='/' className='topic'>
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
