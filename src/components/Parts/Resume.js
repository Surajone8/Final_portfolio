import React from 'react';
import './Icon.css';
import ResumeIcon from '@mui/icons-material/Description';
import './Resume.css'

const Resume = () => {
  return (
    <div className="part-content">
        <div className="icon-circle-part">
            <ResumeIcon className='social-icon' style={{ color: 'rgb(232, 226, 225, 0.7)' }} />
            <p>Resume</p>
        </div>
      <h2 className="part-header-small">Education & <span>Experience</span></h2>
      <div className="timeline">
      <div className="timeline-item">
        <div className="timeline-dot"></div>
        <div className="timeline-content">
          <p>June 2024 - july 2024</p>
          <h3 className='timeline-head'>Machine learning Intern</h3>
          <span>NullClass, Remote</span>
        </div>
      </div>

      <div className="timeline-item">
        <div className="timeline-dot"></div>
        <div className="timeline-content">
          <p>2023 - 2025</p>
          <h3 className='timeline-head'>Master Of Computer Applications</h3>
          <span>Modern college of Business studies, Nigdi,Pune</span>
        </div>
      </div>

      <div className="timeline-item">
        <div className="timeline-dot"></div>
        <div className="timeline-content">
          <p>November 2022 - December 2022</p>
          <h3 className='timeline-head'>Web Development Intern</h3>
          <span>Vanilla Cart</span>
        </div>
      </div>

      <div className="timeline-item">
        <div className="timeline-dot"></div>
        <div className="timeline-content">
          <p>2020 - 2023</p>
          <h3 className='timeline-head'>Bachelors Of Science in Computer Science</h3>
          <span>Dhempe college of Arts and Science, Miramar, Goa</span>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Resume;
