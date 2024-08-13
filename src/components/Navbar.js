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
                <span className="navbar-toggler-icon"></span>
                <span style={{ marginLeft: '30px', color: 'black' }}>𝓡𝓪𝓱𝓾𝓵 𝓚𝓾𝓶𝓪𝓻</span>
              </button>
              <div className={`collapse navbar-collapse ${isMenuOpen ? 'show' : ''}`}>
                <ul className="navbar-nav">
                  <li className="text-center logo-res">
                    <div className="border-5 rounded-full overflow-hidden bg-circle">
                      <img src={props.logo} alt='' className="object-cover fit-image" />
                    </div>
                  </li>
                  <li className='nav-item text-center my-name'>
                    <p className="text-font name">𝓡𝓪𝓱𝓾𝓵 𝓚𝓾𝓶𝓪𝓻</p>
                  </li>
                </ul>
                <ul className="navbar-nav ms-auto d-flex nav-p">
                  <li className="nav-item">
                    <Link className="nav-link" to="/">Home</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/about">About</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/skills">Skills</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/contact">Contact</Link>
                  </li>
                  <li className="nav-item">
                    <button className="btn btn-primary">📲9536741161</button>
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
