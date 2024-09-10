import React from 'react';
import { motion } from 'framer-motion';
import { FaBeer, FaCoffee, FaApple } from 'react-icons/fa';


const HomePage = ({ darkMode }) => {
  return (
    <div className={`home-container ${darkMode ? 'dark-mode' : ''}`}>
      <header className="home-header">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="home-title"
        >
          Welcome to My Portfolio
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="home-subtitle"
        >
          I am a Web Developer with a passion for creating beautiful and interactive web experiences.
        </motion.p>
      </header>

      <section className="home-services">
        <motion.div
          className="service-item"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          whileHover={{ scale: 1.05 }}
        >
          <FaBeer className="service-icon" />
          <h3 className="service-title">Craftsmanship</h3>
          <p className="service-description">I bring a high level of craftsmanship to all my projects, ensuring quality and attention to detail.</p>
        </motion.div>

        <motion.div
          className="service-item"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
          whileHover={{ scale: 1.05 }}
        >
          <FaCoffee className="service-icon" />
          <h3 className="service-title">Creativity</h3>
          <p className="service-description">My creative approach helps me solve complex problems with innovative solutions.</p>
        </motion.div>

        <motion.div
          className="service-item"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 1.5 }}
          whileHover={{ scale: 1.05 }}
        >
          <FaApple className="service-icon" />
          <h3 className="service-title">Technology</h3>
          <p className="service-description">I stay updated with the latest technologies to deliver modern and efficient solutions.</p>
        </motion.div>
      </section>

      <motion.footer
        className="home-footer"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 2 }}
      >
      </motion.footer>
    </div>
  );
};

export default HomePage;
