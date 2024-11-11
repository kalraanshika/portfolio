import React from 'react';
import './projects.css';
import ecom from '../../assets/e_comwebsite.png'
import familygolf from '../../assets/family_golfclone.png';
import myntra from '../../assets/myntra_clone.png';
import carrent from '../../assets/car_rentclone.png';


const Projects = () => {
    return (
        <div className="projects-container">
            <div className="projects-content">
                <h2 className="section-heading">Projects</h2>
                <div className="section-line"></div>

                <div className="project-card">
                    <div className="project-image">
                        {/* Replace with your project image */}
                        <img src={ecom}
                         alt="Project" />
                    </div>
                    <div className="project-info">
                        <h3 className="project-title">E Commerce Website</h3>
                        <ul className="project-tech-list">
                            <li>HTML</li>
                            <li className="divider">•</li>
                            <li>CSS</li>
                            <li className="divider">•</li>
                            <li>JavaScript</li>
                            <li className="divider">•</li>
                            <li>React</li>
                        </ul>
                        <ul className="project-description">
                            <li>Designed an E-commerce website using React.js for the front end.</li>
                            <li>Implemented responsive design techniques to ensure optimal user experience across various devices, including desktops, tablets, and smartphones.</li>
                        </ul>
                    </div>
                </div>
                <div className="project-card">
                    <div className="project-image">
                        {/* Replace with your project image */}
                        <img src={myntra}
                         alt="Project" />
                    </div>
                    <div className="project-info">
                        <h3 className="project-title"> Myntra Clone </h3>
                        <ul className="project-tech-list">
                            <li>HTML</li>
                            <li className="divider">•</li>
                            <li>CSS</li>
                        </ul>
                        <ul className="project-description">
                            <li>Successfully cloned a popular website using HTML, CSS.</li>
                            <li>Developed the website's user interface.</li>
                            <li>Improved my skills in front-end development.</li>
                        </ul>
                    </div>
                </div>
                <div className="project-card">
                    <div className="project-image">
                        {/* Replace with your project image */}
                        <img src={carrent} alt="Project" />
                    </div>
                    <div className="project-info">
                        <h3 className="project-title"> CarRent Clone </h3>
                        <ul className="project-tech-list">
                            <li>HTML</li>
                            <li className="divider">•</li>
                            <li>CSS</li>
                        </ul>
                        <ul className="project-description">
                            <li>Successfully cloned a website using HTML, CSS.</li>
                            <li>Developed the website's user interface.</li>
                            <li>Improved my skills in front-end development.</li>
                        </ul>
                    </div>
                </div>
                <div className="project-card">
                    <div className="project-image">
                        {/* Replace with your project image */}
                        <img src={familygolf} alt="Project" />
                    </div>
                    <div className="project-info">
                        <h3 className="project-title"> FamilyGolf_Clone </h3>
                        <ul className="project-tech-list">
                            <li>HTML</li>
                            <li className="divider">•</li>
                            <li>CSS</li>
                            <li className="divider">•</li>
                            <li>JavaScript</li>
                        </ul>
                        <ul className="project-description">
                            <li>Successfully cloned a popular website using HTML, CSS, JS.</li>
                            <li>Developed the website's user interface</li>
                        </ul>
                    </div>
                </div>
                
            </div>
        </div>
    );
};

export default Projects; 