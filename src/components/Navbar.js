import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = (props) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

 
  return (
    <div className='justify-content-center nav-main'>
      <div className='justify-content-center'>
        <div className=''>
          <nav className="navbar navbar-expand-lg">
            <div className="container">
              <button className="navbar-toggler" type="button" onClick={toggleMenu}>
                <span className="navbar-toggler-icon" style={{color:'white'}}></span>
                <span style={{ marginLeft: '30px',color:'white' }}>𝓡𝓪𝓱𝓾𝓵 𝓚𝓾𝓶𝓪𝓻</span>
              </button>
              <div className={`collapse navbar-collapse  ${isMenuOpen ? 'show' : ''}`}>
                <ul className="navbar-nav">
                  <li className="text-center logo-res">
                    <div className="border-5 rounded-full overflow-hidden bg-circle">
                      <img src={props.logo} alt='' className="object-cover fit-image" />
                    </div>
                  </li>
                  <li className='nav-item text-white text-center my-name'>
                    <p className="text-font name">𝓡𝓪𝓱𝓾𝓵 𝓚𝓾𝓶𝓪𝓻</p>
                    <p style={{ fontSize: '20px' }}>(Software Engineer)</p>
                  </li>
                </ul>
                <ul className="navbar-nav ms-auto d-flex nav-p">
                  <li className="nav-item text-center">
                    <Link className="nav-link text-white" to="/">Home</Link>
                  </li>
                  <li className="nav-item text-center">
                    <Link className="nav-link text-white" to="/about">About</Link>
                  </li>
                  <li className="nav-item text-center">
                    <Link className="nav-link text-white" to="/skills">Skills</Link>
                  </li>
                  <li className="nav-item text-center">
                    <Link className="nav-link text-white" to="/contact">Contact</Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        <hr className="hr" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
