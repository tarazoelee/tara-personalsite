import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar.js'
import Welcome from './components/Welcome/Welcome';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Education from './components/Education/Education';
import Experience from './components/Experience/Experience';
import Fade from 'react-reveal/Fade';

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
       <Fade duration={3000}>
         <Experience></Experience>
       </Fade>
       <Fade duration={3000}>
         <Education></Education>
       </Fade>
    </>
  );
}

export default App;
