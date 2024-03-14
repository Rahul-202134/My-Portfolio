import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import image from './bg5.webp';


const Navbar = (props) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

 
  return (
    <div className='justify-content-center'>
      <div className='justify-content-center'>
        <div className=''>
          <nav className="navbar navbar-expand-lg" style={{ backgroundImage: `url(${image})` }}>
            <div className="container">
              <button className="navbar-toggler" type="button" onClick={toggleMenu}>
                <span className="navbar-toggler-icon"></span>
                <span style={{ marginLeft: '30px' }}>𝓡𝓪𝓱𝓾𝓵 𝓚𝓾𝓶𝓪𝓻</span>
              </button>
              <div className={`collapse navbar-collapse  ${isMenuOpen ? 'show' : ''}`}>
                <ul className="navbar-nav">
                  <li className="text-center">
                    <div className="border-5 rounded-full overflow-hidden bg-circle">
                      <img src={props.logo} alt='' className="object-cover fit-image" />
                    </div>
                  </li>
                  <li className='nav-item text-white text-center'>
                    <p className="text-font">𝓡𝓪𝓱𝓾𝓵 𝓚𝓾𝓶𝓪𝓻</p>
                    <p style={{ fontSize: '20px' }}>(Software Engineer)</p>
                  </li>
                </ul>
                <ul className="navbar-nav ms-auto d-flex nav-p">
                  <li className="nav-item text-white text-center">
                    <Link className="nav-link text-white" to="/">Home</Link>
                  </li>
                  <li className="nav-item text-white text-center">
                    <Link className="nav-link text-white" to="/about">About</Link>
                  </li>
                  <li className="nav-item text-white text-center">
                    <Link className="nav-link text-white" to="/skills">Skills</Link>
                  </li>
                  <li className="nav-item text-white text-center">
                    <Link className="nav-link text-white" to="/contact">Contact</Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
      
        <br />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
