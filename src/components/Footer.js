import React from 'react'
import pdfFile from './images/New Resume.pdf';
import { FaGithub } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";
function Footer() {
  return (
    <div className='container'>
        <div className='footer text-center d-flex'>
          <div className='text-center btn-cv'>
            <a href={pdfFile} className='text-center btn btn-primary' target="_blank" rel="noreferrer">Download Cv </a>
          </div>
          <div className='text-center follow d-flex'>
            <a href="https://github.com/Rahul-202134" className="social-link"><FaGithub style={{ marginBottom: '35px' }} /></a>
            <a href="https://www.linkedin.com/in/rahulkumar202134" className="social-link"><FaLinkedinIn style={{ marginBottom: '35px' }} /></a>
          </div>
        </div>
      <footer className="portfolio-footer text-center">
            <div className="copyright">
                &copy; {new Date().getFullYear()}. All rights reserved.
            </div>
        </footer>
    </div>
  )
}

export default Footer
