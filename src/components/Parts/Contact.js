import React from 'react';
import './Icon.css';
import ContactIcon from '@mui/icons-material/Email';
import ContactForm from './ContactForm';

const Contact = () => {
  return (
    <div className="part-content">
        <div className="icon-circle-part">
            <ContactIcon className='social-icon' style={{ color: 'rgb(232, 226, 225, 0.7)' }} />
            <p>About</p>
        </div>
      <h2 className="part-header-small">Let's Work <span>Together!</span></h2>
      <ContactForm />
    </div>
  );
};

export default Contact;
