import React from 'react';
import logo from './R-min.jpeg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import About from './components/About';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Home from './components/Home';
function App() {
  return (
    <div>
        <Router>
          <Navbar logo={logo} />
          <Routes> 
            <Route exact path='/' element={<Home logo={logo} />} />
            <Route exact path='/about' element={<About />} />
            <Route exact path='/Skills' element={<Skills/> }/>
            <Route exact path='/contact' element={<Contact />} />
          </Routes>
        </Router>
    </div>
  );
}

export default App;
