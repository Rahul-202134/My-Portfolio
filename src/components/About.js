import React, { useState, useEffect } from 'react';
import about from './images/About.jpg';

export default function About() {
  const [readMore, setReadMore] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const bodyDarkMode = document.body.classList.contains('dark-mode');
    setDarkMode(bodyDarkMode);
  }, []);

  const handleReadMore = () => {
    setReadMore(!readMore);
  };

  return (
    <div className={`container about-container ${darkMode ? 'dark-mode' : ''}`}>
      <div className='row justify-content-center'>
        <div className='col-lg-5 about-content'>
          <h2 className='text-center title'>--About Me--</h2>
          <p className='text-center subtitle'>Let Me Introduce Myself</p>
          <p className='description'>
            As a software developer with experience in the tech industry, I have a 
            strong foundation in software development and a passion for solving complex
             problems. I am eager to apply my skills to innovative projects, leveraging 
             my ability to quickly adapt to new technologies and work flexibly across different tech stacks.

           
          </p>
          {readMore && (
            <p className='description'>
              I am a creative and innovative thinker, always looking for new ideas and finding
               effective solutions to challenging problems. I am excited to contribute to a 
               dynamic team where I can continue learning, growing, and making meaningful contributions.
            </p>
          )}
          <button className='read-more-btn btn btn-primary mb-4' onClick={handleReadMore}>
            {readMore ? 'Read Less' : 'Read More'}
          </button>
        </div>
        <div className='col-lg-5 text-center'>
          <img
            src={about}
            width={300}
            height={300}
            alt="About Me"
            className='about-image animated'
          />
        </div>
      </div>
      <hr />
      <br />
    </div>
  );
}
