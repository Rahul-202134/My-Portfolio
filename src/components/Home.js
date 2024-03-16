import React from 'react';
import DailyNews from './news.jpg';
import ecommerce from './e-commerce.jpg';
import farmix from './farmer.jpg';
import pdfFile from './Resume.pdf';
import { FaGithub } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";
import image from './bgs.jpg'

export default function Home(props) {
  return (
    <div>
      <div className="container text-white">
          <div className="border-7 rounded-full profile-img">
            <span className="object-cover img-logo" ></span>
          </div>
        <h3 className='text-center'>Projects</h3>
        <div className="row">
          <div className="col-lg-3 pro-div">
            <a href="https://github.com/Rahul-202134/Daily-News"><img src={DailyNews} alt="" /></a>
          </div>
          <div className="col-lg-3 pro-div">
            <a href="https://github.com/Rahul-202134/farmix"><img src={farmix} alt="" /></a>
          </div>
          <div className="col-lg-3 pro-div">
            <a href="https://e-shoping-omega.vercel.app/"><img src={ecommerce} alt=""/></a>
          </div>
          <div className="col-lg-3">
            <div className="slideshow-container" style={{ backgroundImage: `url(${image})` }}>
              <div className="slides">
                <h4 style={{position:'absolute'}}>More Projects:</h4>
                <br />
                <div className="slide" style={{position:'relative'}}>
                  <ol>
                    <li>
                      <a href="https://foodies-tr95.vercel.app/#"><p style={{marginTop:'10px'}}>Foodies</p></a>
                    </li>
                    <li>
                      <a href="https://e-shoping-omega.vercel.app/"><p>EShoping</p></a>
                    </li>
                    <li>
                      <a href="https://rahul-202134.github.io/whetherApp/"><p>Whether Application</p></a>
                    </li>
                    <li>
                      <a href="https://todo-table-wine.vercel.app/"><p>Todo List</p></a>
                    </li>
                    <li>
                      <a href=" https://rahul-202134.github.io/Resume/"><p>Resume</p></a>
                    </li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='footer text-center d-flex'>
          <div className='text-center btn-cv'>
            <a href={pdfFile} className='text-center btn btn-primary' target="_blank" rel="noreferrer">Download Cv </a>
          </div>
          <div className='text-center follow d-flex'>
            <a href="https://github.com/Rahul-202134"  className="social-link"><FaGithub style={{marginBottom:'30px'}} /></a>
            <a href="https://www.linkedin.com/in/rahulkumar202134"  className="social-link"><FaLinkedinIn style={{marginBottom:'30px'}} /></a>
          </div>
        </div>
      </div>
      <br />
      <hr className='hr' />
    </div>
  );
}
