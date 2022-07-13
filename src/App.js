import React from 'react';
import './App.css';
import Welcome from './components/Welcome/Welcome';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Education from './components/Education/Education';
import Experience from './components/Experience/Experience';
import Slide from 'react-reveal/Slide';
import Navbar from './components/NavBar/Navbar'
import AboutMe from './components/AboutMe/AboutMe';
import Skills from './components/Skills/Skills';


function App() {
  return (
    <div className='whole'>
      <Welcome></Welcome>
       <Slide bottom>
         <Experience></Experience>
       </Slide>
       <div className='ed-about'>
        <Slide left>
          <Education className='education'></Education>
        </Slide>
        <Slide right>
         <Skills className='skills'></Skills>
        </Slide>
       </div>
       <Slide bottom>
          <AboutMe></AboutMe>
       </Slide>
    </div>
  );
}

export default App;
