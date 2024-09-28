import React from 'react';
import './FirstSection.css';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
// import "../App.css";

const FirstSection = ({sectionRefs}) => {
    const scrollToSection = () => {
        if (sectionRefs[5] && sectionRefs[5].current) {
          sectionRefs[5].current.scrollIntoView({ behavior: 'smooth' });
        }
      };
  return (
    <section className="section first-section">
        <div className="first-section-cont">
            <div className="first-section-cont-line1">
                <h1 className='titleName'>Suraj.</h1>
                <p>Software & Web <br /> Developer</p>
            </div>
            <div className="profile-pic"></div>
            <h2 className='emailDetails'>ysuraj18333@gmail.com <br /> Vasco Da Gama, Goa</h2>
            <p className='copyright'>© 2022 Suraj. All Rights Reserved</p>
            <div className="social-media">
                <a href="https://www.linkedin.com/in/suraj-yadav-8aa167216/">
                    <div className="icon-circle">
                    <TwitterIcon className='social-icon' style={{ color: 'rgb(232, 226, 225, 0.7)' }} />
                    </div>
                </a>
                <a href="https://www.instagram.com/srj_one8/">
                    <div className="icon-circle">
                    <InstagramIcon className='social-icon' style={{ color: 'rgb(232, 226, 225, 0.7)' }} />
                    </div>
                </a>
                <a href="https://www.linkedin.com/in/suraj-yadav-8aa167216/">
                    <div className="icon-circle">
                    <LinkedInIcon className='social-icon' style={{ color: 'rgb(232, 226, 225, 0.7)' }} />
                    </div>
                </a>
                <a href="https://github.com/Surajone8">
                    <div className="icon-circle">
                    <GitHubIcon className='social-icon' style={{ color: 'rgb(232, 226, 225, 0.7)' }} />
                    </div>
                </a>
            </div>

            <button className='contact-btn' onClick={scrollToSection}><MailOutlineIcon className='contact-icon'  /> Contact Me</button>
        </div>
    </section>
  );
};

export default FirstSection;
