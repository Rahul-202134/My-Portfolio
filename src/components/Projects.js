import React, { useState } from 'react';
import DailyNews from './images/news.jpg';
import ecommerce from './images/e-commerce.jpg';
import farmix from './images/farmer.jpg';
import whether from './images/whether.png';
import Todo from './images/Todo.png';
import sps from './images/Sps.jpeg';
import { motion } from 'framer-motion';

const Projects = ({ darkMode }) => {
  const [showReadMore, setShowReadMore] = useState({
    1: false,
    2: false,
    3: false,
    4: false,
    5: false,
    6: false,
  });

  const handleReadMore = (id) => {
    setShowReadMore(prevState => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  };

  
  return (
    <div className={`projects-container ${darkMode ? 'dark-mode' : ''}`}>
      <div className="projects-header">
        <motion.h3
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="projects-title"
        >
          Projects
        </motion.h3>
      </div>
      <div className="projects-grid">
        {[
          { id: 1, name: 'Daily News', image: DailyNews, link: 'https://github.com/Rahul-202134/Daily-News', description: 'Developed a fully functional news website with various features.' },
          { id: 2, name: 'E-Commerce', image: ecommerce, link: 'https://e-shoping-omega.vercel.app/', description: 'Developed a fully functional e-commerce website for men and women.' },
          { id: 3, name: 'Farmix', image: farmix, link: 'https://github.com/Rahul-202134/farmix', description: 'Created a platform for farmers to list crops for sale and buyers to purchase them.' },
          { id: 4, name: 'Whether', image: whether, link: 'https://github.com/Rahul-202134/whetherApp', description: 'Weather app providing current weather information using modern frontend technologies.' },
          { id: 5, name: 'Todo-List', image: Todo, link: 'https://github.com/Rahul-202134/Todo', description: 'A productivity tool for managing tasks efficiently.' },
          { id: 6, name: 'Sciessor-Paper', image: sps, link: 'https://github.com/Rahul-202134/sps-game', description: 'Classic Rock Paper Scissors game with a simple yet entertaining interface.' }
        ].map(project => (
          <div key={project.id} className="project-card">
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              <motion.img
                src={project.image}
                alt={project.name}
                className="project-image"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
              />
            </a>
            <div className="project-info">
              <h4 className="project-name">{project.name}</h4>
              {showReadMore[project.id] && (
                <p className="project-description">
                  {project.description}
                </p>
              )}
              <div className="read-more">
                <button
                  className="btn btn-primary"
                  onClick={() => handleReadMore(project.id)}
                >
                  {showReadMore[project.id] ? 'Show Less' : 'Read More'}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
