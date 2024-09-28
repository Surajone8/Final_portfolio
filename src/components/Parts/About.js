import React from 'react';
import './Icon.css';
import AboutIcon from '@mui/icons-material/Person';
import './About.css';

const About = () => {
  return (
    <div className="part-content">
        <div className="icon-circle-part">
            <AboutIcon className='social-icon' style={{ color: 'rgb(232, 226, 225, 0.7)' }} />
            <p>About</p>
        </div>
        <h2 className="part-header-small">Every great design begin with an even <span>better story</span></h2>
        <p className='part-desc'>I started my programming journey 2 years back in the middle of my bachelors degree with C programming, this is when i started to grasp some knowledge about variables, loops, functions and i wanted to find out more about programming that's when i got to know about java and its popularity and i began learning java which was fairly easy this time because of my past C programming experience and i learnt about packages and oops concepts with java and for the rest of my second year in my bachelors i learnt about java and polished my skills in java. <br /> It was in my final year that i got my interest in web development, ever since i worked with the mern stack i was so facinated by the projects i could build with it that i started making small projects like calculator etc that helped me understand javascript very well. <br />
        It was in November 2022 when i did my first web development internship with a compony named Vanilla Cart where i learnt about wordpress technology. <br />
        In my final year of my Postgraduation (MCA) i did my first Machine learning internship at an organization named NullClass where i built 2 ML models one for detecting sleeping driver while driving and the other was an animal emotion detection.</p>
    </div>
  );
};

export default About;
