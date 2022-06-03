import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar.js'
import Welcome from './components/Welcome/Welcome';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Education from './components/Education/Education';
import Experience from './components/Experience/Experience';
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
       <Education></Education>
       <Experience></Experience>
    </>
  );
}

export default App;
