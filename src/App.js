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
          <Navbar />
          <Routes>
            <Route path='/' exact></Route>
            <Route path='/Education' component={Education}></Route>
            <Route path='/Experience' component={Experience}></Route>
          </Routes>
      </Router>
       <Welcome></Welcome>
       <Fade duration={3000}>
         <Education></Education>
       </Fade>
       <Fade duration={3000}>
         <Experience></Experience>
       </Fade>
       
    </>
  );
}

export default App;
