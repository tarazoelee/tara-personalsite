import React,{useState, Component} from 'react';
import './Navbar.css'
import { Link } from 'react-scroll';

function Navbar() {


return (
  <div className='nav-container'>
    <ul>
          <li><Link  to="work" spy={true} smooth={true} duration={1000}>Work</Link></li>
          <li><Link  to="projects" spy={true} smooth={true} duration={1600}>Projects</Link></li>
          <li><Link  to="education" spy={true} smooth={true} duration={2000}>Education</Link></li>
          <li><Link  to="about" spy={true} smooth={true} duration={2000}>About</Link></li>
    </ul>
  </div>
  )

  }
  //          <li><Link activeClass="active" to="welcome" spy={true} smooth={true}>Home</Link></li>

export default Navbar
