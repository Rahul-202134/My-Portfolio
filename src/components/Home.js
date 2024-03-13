import React from 'react';
import DailyNews from './news.jpg';
import ecommerce from './e-commerce.jpg';
import farmer from './farmer.jpg';
import git from './github.png';
import linkdin from './linkdin.png';
import pdfFile from './Resume.pdf';

export default function Home() {
  return (
    <div>
      <div className="container text-white">
        <h3 className='text-center'>Projects</h3>
        <div className="row">
          <div className="col-lg-3 pro-div">
            <a href="https://github.com/Rahul-202134/Daily-News"><img src={DailyNews} alt="" /></a>
          </div>
          <div className="col-lg-3 pro-div">
            <a href="https://e-shoping-omega.vercel.app/"><img src={farmer} alt="" /></a>
          </div>
          <div className="col-lg-3 pro-div">
            <a href="https://e-shoping-omega.vercel.app/"><img src={ecommerce} alt=""/></a>
          </div>
          <div className="col-lg-3">
            <div className="slideshow-container">
              <div className="slides">
                <h4>More Projects:</h4>
                <div className="slide">
                  <ol>
                    <li>
                      <a href="https://foodies-tr95.vercel.app/#"><p>Foodies</p></a>
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
            <p className='text-center text-white'>Follow Me On!</p>
            <a href="https://github.com/Rahul-202134"><img src={git} alt="" /></a>
            <a href="https://www.linkedin.com/in/rahulkumar202134"><img src={linkdin} alt="" /></a>
          </div>
        </div>
      </div>
      <br />
      <hr className='hr' />
    </div>
  );
}
