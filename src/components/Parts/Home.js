import React from 'react';
import './Icon.css';
import './Home.css';
import HomeIcon from '@mui/icons-material/Home';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

const Home = ({ scrollToServices }) => {
  return (
    <div className="part-content">
        <div className="icon-circle-part">
            <HomeIcon className='social-icon' style={{ color: 'rgb(232, 226, 225, 0.7)' }} />
            <p>Home</p>
        </div>
        <h2 className="part-header">Hi from Suraj,<br />Web and Software <br /> Developer</h2>
        <p className='part-desc'>A tech enthusiast who just loves programming and always keen on learning something new. <br />Just as simple as that.</p>
        <div className="project-btn">
            <h1 className='project-btn-h1'>2 <br /><span className='h1-span'>Years of <br /> experience</span></h1>
            <h1 className='project-btn-h1'>2 <br /><span className='h1-span'>Projects</span></h1>
            <div className="circle-container" onClick={scrollToServices}>
                <h1><ArrowDownwardIcon /> <br />Projects</h1>
            </div>
        </div>
    </div>
  );
};

export default Home;
