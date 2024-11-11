import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from 'react-icons/fa';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/portfolio">AK</Link>
      </div>
      
      <ul className="nav-links">
        <li><Link to="/experience">Experience</Link></li>
        <li><Link to="/projects">Projects</Link></li>
        <li><Link to="/academics">Academics</Link></li>
      </ul>

      <div className="social-links">
        <a href="https://github.com/kalraanshika" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
        <a href="https://www.linkedin.com/in/anshika-kalra" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
        <a href="mailto:akanshikakalra@gmail.com">
          <FaEnvelope />
        </a>
        <a href="tel:+1234567890">
          <FaPhone />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
