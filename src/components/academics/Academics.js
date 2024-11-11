import React from 'react';
import './academics.css';
import sastra from '../../assets/sastra_logo.png';
import amatir from '../../assets/amatir_logo.png';

const Academics = () => {
  return (
    <div className="academics-container">
      <div className="academics-content">
        <h2 className="section-heading">Academics</h2>
        <div className="section-line"></div>
        
        <div className="academic-card">
          <div className="academic-image">
            {/* Replace with your academic image */}
            <img src={sastra} alt="academic" />
          </div>
          <div className="academic-info">
            <h3 className="academic-title">Bachelor of Computer Applications (BCA)</h3>
            <ul className="academic-tech-list">
              <li>July 2022</li>
              <li className="divider">•</li>
              <li>July 2025</li>
              <li className="divider">•</li>
              <li>Final Year</li>
            </ul>
            <p className="academic-description">
            Sastra Deemed University
            </p>
          </div>
        </div>
        <div className="academic-card">
          <div className="academic-image">
            {/* Replace with your academic image */}
            <img src={amatir} alt="academic" />
          </div>
          <div className="academic-info">
            <h3 className="academic-title">Senior Secondary (12th, Commerce) </h3>
            <ul className="academic-tech-list">
              <li>March 2021 </li>
              <li className="divider">•</li>
              <li>May 2022</li>
            </ul>
            <p className="academic-description">
            Kanya Gurukul School Kurukshetra, CBSE Board
            </p>
          </div>
        </div>
        <div className="academic-card">
          <div className="academic-image">
            {/* Replace with your academic image */}
            <img src={amatir} alt="academic" />
          </div>
          <div className="academic-info">
            <h3 className="academic-title">Senior Secondary (10th) </h3>
            <ul className="academic-tech-list">
              <li>March 2019 </li>
              <li className="divider">•</li>
              <li>March 2020</li>
            </ul>
            <p className="academic-description">
            Kanya Gurukul School Kurukshetra, CBSE Board
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Academics; 