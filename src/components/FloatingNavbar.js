import React from 'react';
import Tooltip from '@mui/material/Tooltip';
import HomeIcon from '@mui/icons-material/Home';
import AboutIcon from '@mui/icons-material/Person';
import ResumeIcon from '@mui/icons-material/Description';
// import ServicesIcon from '@mui/icons-material/Build';
import WorkIcon from '@mui/icons-material/Work';
import SkillsIcon from '@mui/icons-material/Code';
import ContactIcon from '@mui/icons-material/Email';
import './FloatingNavbar.css';

const FloatingNavbar = ({ handleScrollToPart, activePartIndex }) => {
  return (
    <div className="floating-navbar">
      <Tooltip title="Home" arrow placement="left">
        <div className={`nav-icon-container ${activePartIndex === 0 ? 'active' : ''}`}>
          <HomeIcon className="nav-icon" onClick={() => handleScrollToPart(0)} />
        </div>
      </Tooltip>

      <Tooltip title="About" arrow placement="left">
        <div className={`nav-icon-container ${activePartIndex === 1 ? 'active' : ''}`}>
          <AboutIcon className="nav-icon" onClick={() => handleScrollToPart(1)} />
        </div>
      </Tooltip>

      <Tooltip title="Resume" arrow placement="left">
        <div className={`nav-icon-container ${activePartIndex === 2 ? 'active' : ''}`}>
          <ResumeIcon className="nav-icon" onClick={() => handleScrollToPart(2)} />
        </div>
      </Tooltip>

      <Tooltip title="Projects" arrow placement="left">
        <div className={`nav-icon-container ${activePartIndex === 3 ? 'active' : ''}`}>
          <WorkIcon className="nav-icon" onClick={() => handleScrollToPart(3)} />
        </div>
      </Tooltip>

      <Tooltip title="Skills" arrow placement="left">
        <div className={`nav-icon-container ${activePartIndex === 4 ? 'active' : ''}`}>
          <SkillsIcon className="nav-icon" onClick={() => handleScrollToPart(4)} />
        </div>
      </Tooltip>

      <Tooltip title="Contact" arrow placement="left">
        <div className={`nav-icon-container ${activePartIndex === 5 ? 'active' : ''}`}>
          <ContactIcon className="nav-icon" onClick={() => handleScrollToPart(5)} />
        </div>
      </Tooltip>
    </div>
  );
};

export default FloatingNavbar;
