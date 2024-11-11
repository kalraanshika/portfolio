import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './homepage.css';
import backgroundimg from '../../assets/Screenshot 2024-11-10 154100.png';
const Homepage = () => {
  const navigate = useNavigate();
  const [showMore, setShowMore] = useState(false);

  return (
    <div className="home-container">
      <img 
        src={backgroundimg}
        alt="background" 
        className="background-image"
      />
      <div className="vignette-overlay"></div>
      
      <div className="content-wrapper">
        <h1 className="name-text">Anshika Kalra</h1>
        <p className="intro-text">
          I am Anshika Kalra, a passionate and detail-oriented individual with a recent degree in 
          Computer Applications (BCA). My journey into the world of technology began with a 
          fascination for crafting digital experiences that seamlessly blend form and function.
        </p>
        <ul className="role-list">
          <li>Designer</li>
          <li className="divider">|</li>
          <li>Developer</li>
        </ul>
        <ul className="skills-list">
          <li>HTML</li>
          <li className="divider">•</li>
          <li>CSS</li>
          <li className="divider">•</li>
          <li>JS</li>
          <li className="divider">•</li>
          <li>React</li>
          <li className="divider">•</li>
          <li>Fundamental of Python</li>
          <li className="divider">•</li>
          <li>Fundamental of C</li>
          <li className="divider">•</li>
          <li>Fundamental of C++</li>
        </ul>
        <div className="button-container">
          <button 
            className="action-button hire-me"
            onClick={() => navigate('/contact')}
          >
            Hire Me
          </button>
          <button 
            className="action-button resume-button"
            onClick={() => navigate('/resume')}
          >
           Resume
          </button>
        </div>
      </div>
    </div>
  );
};

export default Homepage;