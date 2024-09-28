import React from 'react';
import './Icon.css';
import WorkIcon from '@mui/icons-material/Work';
import projectImage from './../../assets/project1.png';
import './Services.css'

const Services = () => {
  return (
    <div className="part-content">
        <div className="icon-circle-part">
            <WorkIcon className='social-icon' style={{ color: 'rgb(232, 226, 225, 0.7)' }} />
            <p>Projects</p>
        </div>
        <h2 className="part-header-small">Featured <span>Projects</span></h2>
        <span className='project-name'>
           <img className='projectImg' src={projectImage} alt="" />
            <h3 className='timeline-head'>Figma Clone</h3>
        </span>

    </div>
  );
};

export default Services;
