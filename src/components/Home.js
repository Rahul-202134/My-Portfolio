import React from 'react'
import DailyNews from './news.jpg';
import ecommerce from './e-commerce.jpg';
import git from './github.png';
import linkdin from './linkdin.png';
export default function Home() {
  return (
    <div>
      <div className="container text-white">
            <h3 className='text-center'>Projects</h3>
            <div className="row pro-div">
              <div className="col-lg-4">
                <a href="https://github.com/Rahul-202134/Daily-News"><img src={DailyNews} alt="" width={290} height={150} /></a>
                <div className='flex justify-center items-center h-screen bg-white project-div'>
                  <h5 className="text-center text-black ml-2">Daily News</h5>
                </div>
              </div>
              <div className="col-lg-4">
                <a href="https://e-shoping-omega.vercel.app/"><img src={ecommerce} alt="" width={290} height={150} /></a>
                <div className='flex justify-center items-center h-screen bg-white project-div '>
                  <h5 className="text-center text-black ml-2">EShoping</h5>
                </div>
              </div>
              <div className="col-lg-4">
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
                        <li>
                          <p>Farmix</p>
                        </li>
                      </ol>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='footer text-center d-flex'>
              <div className='text-center btn-cv'>
                <button className='text-center btn btn-primary'>Download Cv</button>
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
  )
}
