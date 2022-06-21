import React from 'react';
import './App.css';
import Welcome from './components/Welcome/Welcome';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Education from './components/Education/Education';
import Experience from './components/Experience/Experience';
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';
import Navbar from './components/NavBar/Navbar'
import AboutMe from './components/AboutMe/AboutMe';
import Skills from './components/Skills/Skills';

function App() {
  return (
    <>
      <Router>
        <div className='welcome-container'>
          <Navbar/>
          <Welcome></Welcome>
          <Routes>
            <Route pattern='/' exact component={Welcome}></Route>
            <Route pattern='/Experience' exact component={Experience}></Route>
            <Route path='/Education' exact component={Education}></Route>
          </Routes>
        </div>
      </Router>
       <Slide bottom>
         <Experience></Experience>
       </Slide>
       <div className='ed-about'>
        <Slide bottom>
          <Education></Education>
        </Slide>
        <Slide right>
         <Skills></Skills>
        </Slide>
       </div>
       <Slide bottom>
          <AboutMe></AboutMe>
       </Slide>
       
    </>
  );
}

export default App;
