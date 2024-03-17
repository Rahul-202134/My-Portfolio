import React, { useState } from 'react';
import DailyNews from './news.jpg';
import ecommerce from './e-commerce.jpg';
import farmix from './farmer.jpg';
import pdfFile from './Resume.pdf';
import { FaGithub } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";

export default function Home(props) {
  const [showReadMore, setShowReadMore] = useState({
    1: false,
    2: false,
    3: false
  });

  const handleReadMore = (id) => {
    setShowReadMore(prevState => ({
      ...prevState,
      [id]: !prevState[id]
    }));
  }

  return (
    <div>
      <div className="container text-white">
        <div className="bg-circles">
          <span className="object-cover fit-image" ></span>
        </div>
        <p className='sofE'>(Software Engineer)</p>
        <h3 className='text-center'>Projects</h3>
        <div className="row">
          <div className="col-lg-4">
            <div className='pro-div'>
              <a href="https://github.com/Rahul-202134/Daily-News"><img src={DailyNews} alt="" /></a>
            </div>
            <div className='project-name'>
              Daily News
            </div>
            <div>
              {
                showReadMore[1] && (
                  <p style={{ color: 'white' }} >
                    Developed a fully functional e-commerce website
                    from scratch using HTML, CSS, PHP, and JavaScript.
                    User authentication and registration system.
                    Product catalog with dynamic filtering and search functionality.
                    Responsive design for optimal user experience on desktop and
                    mobile devices.
                    Technologies Used: HTML, CSS, PHP, JavaScript, MySQL
                  </p>
                )
              }
              <div className='read-more'>
                <button className='text-center btn btn-primary mb-4 ' onClick={() => handleReadMore(1)}>Read More</button>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className='pro-div'>
              <a href="https://github.com/Rahul-202134/farmix"><img src={farmix} alt="" /></a>
            </div>
            <div className='project-name'>
              Farmix
            </div>
            <div>
              {
                showReadMore[2] && (
                  <p style={{ color: 'white' }}>
                    I created a website where farmers can list their crops for
                    sale, and buyers can browse and purchase them.
                    Responsive design for optimal user experience on desktop and
                    mobile devices.
                    Use the website on their computers and phones.
                    Technologies Used: HTML, CSS, PHP, JavaScript, MySQL (for
                    storing data), and payment integration.
                  </p>
                )
              }
              <div className='read-more'>
                <button className='text-center btn btn-primary mb-4 ' onClick={() => handleReadMore(2)}>Read More</button>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className='pro-div'>
              <a href="https://e-shoping-omega.vercel.app/"><img src={ecommerce} alt="" /></a>
            </div>
            <div className='project-name'>
              E-Commerce
            </div>
            <div>
              {
                showReadMore[3] && (
                  <p style={{ color: 'white' }}>
                    Developed a fully functional e-commerce website
                    to buy the product for men and women.
                    ·User authentication and registration system.
                    ·Responsive design for optimal user experience on desktop and
                    mobile devices.
                    Technologies Used: HTML, CSS, PHP, JavaScript, MySQL
                  </p>
                )
              }
              <div className='read-more'>
                <button className='text-center btn btn-primary mb-4 ' onClick={() => handleReadMore(3)}>Read More</button>
              </div>
            </div>
          </div>
        </div>
        <div className='footer text-center d-flex'>
          <div className='text-center btn-cv'>
            <a href={pdfFile} className='text-center btn btn-primary' target="_blank" rel="noreferrer">Download Cv </a>
          </div>
          <div className='text-center follow d-flex'>
            <a href="https://github.com/Rahul-202134" className="social-link"><FaGithub style={{ marginBottom: '35px' }} /></a>
            <a href="https://www.linkedin.com/in/rahulkumar202134" className="social-link"><FaLinkedinIn style={{ marginBottom: '35px' }} /></a>
          </div>
        </div>
      </div>
      <br />
    </div>
  );
}
