import React from 'react';
import './Icon.css';
import SkillsIcon from '@mui/icons-material/Code';
import reactIcon from './../../assets/reactIcon.png';
import mongodb from './../../assets/mongodb.png';
import nodeJs from './../../assets/NodeJs.png';
import Java from './../../assets/Java.png';
import JavaScript from './../../assets/JavaScript.png';
import python from './../../assets/Python.png';
import html from './../../assets/Html.png';
import css from './../../assets/CSS.png';
import Nextjs from './../../assets/next.png';
import postgresssql from './../../assets/postgresql.png';
import './Skills.css'

const Skills = () => {
  return (
    <div className="part-content">
        <div className="icon-circle-part">
            <SkillsIcon className='social-icon' style={{ color: 'rgb(232, 226, 225, 0.7)' }} />
            <p>Skills</p>
        </div>
      <h2 className="part-header-small">My <span>Advantages</span></h2>
      <div className="skills">
            <div className="icon-circle-skill">
                <img className='skill-logo' src={reactIcon} alt="" />
                <h2 className='timeline-head-skill'>React Js</h2>
            </div>
            <div className="icon-circle-skill">
                <img className='skill-logo' src={mongodb} alt="" />
                <h2 className='timeline-head-skill'>Mongo DB</h2>
            </div>
            <div className="icon-circle-skill">
                <img className='skill-logo' src={nodeJs} alt="" />
                <h2 className='timeline-head-skill'>Node Js</h2>
            </div>
            <div className="icon-circle-skill">
                <img className='skill-logo' src={Java} alt="" />
                <h2 className='timeline-head-skill'>Java</h2>
            </div>
            <div className="icon-circle-skill">
                <img className='skill-logo' src={python} alt="" />
                <h2 className='timeline-head-skill'>Python</h2>
            </div>
            <div className="icon-circle-skill">
                <img className='skill-logo' src={postgresssql} alt="" />
                <h2 className='timeline-head-skill'>PostgresSQL</h2>
            </div>
            <div className="icon-circle-skill">
                <img className='skill-logo' src={Nextjs} alt="" />
                <h2 className='timeline-head-skill'>Next Js</h2>
            </div>
            <div className="icon-circle-skill">
                <img className='skill-logo' src={JavaScript} alt="" />
                <h2 className='timeline-head-skill'>JavaScript</h2>
            </div>
            <div className="icon-circle-skill">
                <img className='skill-logo' src={html} alt="" />
                <h2 className='timeline-head-skill'>Html</h2>
            </div>
            <div className="icon-circle-skill">
                <img className='skill-logo' src={css} alt="" />
                <h2 className='timeline-head-skill'>CSS</h2>
            </div>
      </div>
    </div>
  );
};

export default Skills;
