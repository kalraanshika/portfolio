import React from 'react';
import './experience.css';
import proctur from '../../assets/proctur_logo.png';
import cetpa from '../../assets/cetpa_logo.png';

const experience = () => {
  return (
    <div className="experience-container">
      <div className="experience-content">
        <h2 className="section-heading">Experience</h2>
        <div className="section-line"></div>
        
        <div className="experience-card">
          <div className="experience-image">
            {/* Replace with your experience image */}
            <img src={proctur}
            alt="experience" />
          </div>
          <div className="experience-info">
            <h3 className="experience-title">React-Trainee</h3>
            <ul className="experience-tech-list">
              <li>June 2024</li>
              <li className="divider">•</li>
              <li>Present</li>
              <li className="divider">•</li>
              <li>6 Months</li>
            </ul>
            <p className="experience-description">
            Proctur: Simplifying Education Management,Ground Floor, H-146 & 147, Sector 63 Rd, Noida, Uttar Pradesh 201301
            </p>
          </div>
        </div>
        <div className="experience-card">
          <div className="experience-image">
            {/* Replace with your experience image */}
            <img src={cetpa}
             alt="experience" />
          </div>
          <div className="experience-info">
            <h3 className="experience-title">Front End Developer Intern</h3>
            <ul className="experience-tech-list">
              <li>January 2024</li>
              <li className="divider">•</li>
              <li>May 2024</li>
              <li className="divider">•</li>
              <li>5 Months</li>
            </ul>
            <p className="experience-description">
            CETPA Infotech Pvt. Ltd.,D-58, Red FM Road, Sector 2, D Block, Sector 2, Noida, Uttar Pradesh 201301
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default experience; 