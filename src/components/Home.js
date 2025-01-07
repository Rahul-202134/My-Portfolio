import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaReact, FaJsSquare, FaHtml5, FaCss3Alt } from 'react-icons/fa';
import Right from './images/2.JPG';

const Home = ({ darkMode }) => {
  const fadeIn = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <div className={`home-container ${darkMode ? 'dark-mode' : ''}`}>
      <div className="container py-2">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="row align-items-center"
        >
          {/* Right Side Content - Image First in Mobile View, Right in Desktop View */}
          <div className="col-12 col-lg-6 text-center order-1 order-lg-2">
            <motion.img
              src={Right}
              alt="Hero"
              className="img-fluid rounded shadow-lg"
              style={{ maxWidth: '70%', height: 'auto' }} // Custom size, maintains responsiveness
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
            />
          </div>

          {/* Left Side Content */}
          <div className="col-12 col-lg-6 text-start text-lg-start order-0 order-lg-1">
            <motion.h1
              className="display-4 fw-bold fs-2 fs-sm-1"
              variants={fadeIn}
              transition={{ duration: 0.8 }}
            >
              Hi, I'm <span className="text-primary">Rahul Kumar</span>
            </motion.h1>
            <motion.p
              className="lead fs-5 fs-sm-3"
              variants={fadeIn}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              A passionate <span className="text-primary">Web Developer</span> skilled in
              building dynamic, responsive, and user-friendly web applications using
              <strong> React, Redux, and JavaScript.</strong>
            </motion.p>
            <motion.ul
              className="list-unstyled"
              variants={fadeIn}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <li><strong>Skills:</strong> React, Redux, JavaScript, Bootstrap, HTML, CSS</li>
              <li><strong>Experience:</strong> 1 year in web development</li>
              <li><strong>Projects:</strong> 10+ completed projects</li>
            </motion.ul>
            <motion.div
              className="d-flex justify-content-center justify-content-lg-start gap-3 mt-3"
              variants={fadeIn}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Link to="/projects">
                <motion.a
                  whileHover={{ scale: 1.1 }}
                  href="#projects"
                  className="btn btn-primary"
                >
                  View Projects
                </motion.a>
              </Link>
              <Link to="/contact">
                <motion.a
                  whileHover={{ scale: 1.1 }}
                  href="#projects"
                  className="btn btn-outline-secondary"
                >
                  Contact Me
                </motion.a>
              </Link>
            </motion.div>
            <motion.div
              className="d-flex gap-4 mt-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.2, delay: 0.5 }}
            >
              <motion.div whileHover={{ scale: 1.2 }} className="text-primary">
                <FaReact size={40} />
              </motion.div>
              <motion.div whileHover={{ scale: 1.2 }} className="text-warning">
                <FaJsSquare size={40} />
              </motion.div>
              <motion.div whileHover={{ scale: 1.2 }} className="text-danger">
                <FaHtml5 size={40} />
              </motion.div>
              <motion.div whileHover={{ scale: 1.2 }} className="text-info">
                <FaCss3Alt size={40} />
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
