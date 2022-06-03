import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar.js'
import Welcome from './components/Welcome/Welcome';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
function App() {
  return (
    <>
      <Router>
          <Navbar />
          <Routes>
            <Route path='/' exact></Route>
          </Routes>
      </Router>
       <Welcome></Welcome>
    </>
  );
}

export default App;
