import React, { useState } from 'react';
import DailyNews from './news.jpg';
import ecommerce from './e-commerce.jpg';
import farmix from './farmer.jpg';
import whether from './whether.png'
import Todo from './Todo.png'
import sps from './Sps.jpeg';

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
      <div className="container">
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
                  <p>
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
              <a href="https://e-shoping-omega.vercel.app/"><img src={ecommerce} alt="" /></a>
            </div>
            <div className='project-name'>
              E-Commerce
            </div>
            <div>
              {
                showReadMore[3] && (
                  <p>
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
                  <p>
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
              <a href="https://github.com/Rahul-202134/whetherApp"><img src={whether} alt="" /></a>
            </div>
            <div className='project-name'>
              Whether
            </div>
            <div>
              {
                showReadMore[4] && (
                  <p>
                    The Weather App is a user-friendly application designed
                    to provide users with up-to-date weather information for various
                    locations around the world. It offers a seamless experience for
                    users to access current weather conditions and forecasts.

                    The application is built using modern frontend technologies
                    such as React.js, providing a robust and efficient user interface.
                    React.js enables component-based development,
                    making the codebase modular, maintainable, and scalable.
                  </p>
                )
              }
              <div className='read-more'>
                <button className='text-center btn btn-primary mb-4 ' onClick={() => handleReadMore(4)}>Read More</button>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className='pro-div'>
              <a href="https://github.com/Rahul-202134/Todo"><img src={Todo} alt="" /></a>
            </div>
            <div className='project-name'>
              Todo-List
            </div>
            <div>
              {
                showReadMore[5] && (
                  <p>
                    The Todo List Application is a productivity tool
                    designed to help users organize their tasks efficiently and
                    manage their daily activities effectively. It offers a simple
                    yet powerful interface for users to create, prioritize, and track tasks,
                    ensuring better time management and task completion.

                    The application's frontend is built using modern
                    web technologies such as HTML, CSS, and JavaScript.
                    Frameworks like React.js or Vue.js may be utilized
                    to create a dynamic and interactive user
                    interface, enhancing user experience and responsiveness.
                  </p>
                )
              }
              <div className='read-more'>
                <button className='text-center btn btn-primary mb-4 ' onClick={() => handleReadMore(5)}>Read More</button>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className='pro-div'>
              <a href="https://github.com/Rahul-202134/sps-game"><img src={sps} alt="" /></a>
            </div>
            <div className='project-name'>
              Sciessor-Paper
            </div>
            <div>
              {
                showReadMore[6] && (
                  <p>
                    The Scissors Paper Game, also known as Rock
                    Paper Scissors, is a classic hand game played
                    between two participants. It's a simple yet entertaining
                    game that requires quick thinking and strategy.


                  </p>
                )
              }
              <div className='read-more'>
                <button className='text-center btn btn-primary mb-4 ' onClick={() => handleReadMore(6)}>Read More</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br />
    </div>
  );
}
