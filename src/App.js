import React,{useState} from 'react';
import logo from './profile.jpeg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import About from './components/About';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Home from './components/Home';
import Footer from './components/Footer';
function App() {
  const[mode,setmode]=useState('light');
  const toggleMode=()=>{
    if(mode==='light'){
      setmode('dark');
      document.body.style.backgroundColor="black";
      document.body.style.color="white";
      
    }
    else{
      setmode('light');
      document.body.style.backgroundColor="white";
      document.body.style.color="black";
    }
  }
  return (
    <div>
        <Router>
          <Navbar logo={logo} mode={mode} toggleMode={toggleMode} />
          <Routes> 
            <Route exact path='/' element={<Home />} />
            <Route exact path='/about' element={<About />} />
            <Route exact path='/Skills' element={<Skills/> }/>
            <Route exact path='/contact' element={<Contact />} />
          </Routes>
          <Footer/>
        </Router>
    </div>
  );
}

export default App;
