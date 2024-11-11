import React from 'react';
import './resume.css';
import resumePDF from '../../assets/AnshikaKalra_Resume.pdf'; // Add your actual resume PDF
import resumeImage from '../../assets/Anshika_Kalraresume.png'; // Add a preview image of your resume

const Resume = () => {
  return (
    <div className="resume-container">
      <div className="resume-preview">
        <img src={resumeImage} alt="Resume Preview" className="resume-img" />
      </div>
      <div className="resume-actions">
        <a 
          href={resumePDF} 
          download="Akanshika_Kalra_Resume.pdf"
          className="download-btn"
        >
          <i className="fas fa-download"></i>
          Download Resume
        </a>
        <a 
          href={resumePDF} 
          target="_blank" 
          rel="noopener noreferrer"
          className="view-btn"
        >
          <i className="fas fa-eye"></i>
          View Resume
        </a>
      </div>
    </div>
  );
};

export default Resume; 