import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Homepage from './components/homepage/Homepage';
import Projects from './components/projects/Projects';
import Academic from './components/academics/Academics';
import Experience from './components/experience/Experience';
import Contact from './components/contact/Contact';
import Resume from './components/resume/Resume';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/portfolio" element={<Homepage />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/academics" element={<Academic />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/resume" element={<Resume />} />
      </Routes>
    </Router>
  );
}

export default App;
