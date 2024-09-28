import React from 'react';
import Home from './Parts/Home'
import About from './Parts/About';
import Services from './Parts/Services';
import Skills from './Parts/Skills';
import Contact from './Parts/Contact';
import './SecondSection.css';
import Resume from './Parts/Resume';

const SecondSection = ({ sectionRefs }) => {
    const scrollToSection = (index) => {
        if (sectionRefs[index] && sectionRefs[index].current) {
          sectionRefs[index].current.scrollIntoView({ behavior: 'smooth' });
        }
      };
  return (
    <section className="second-section">
      <div id='home' className="scroll-content" ref={sectionRefs[0]} data-index={0}>
        <Home scrollToServices={() => scrollToSection(3)} />
      </div>
      <div id='about' className="scroll-content" ref={sectionRefs[1]} data-index={1}>
        <About />
      </div>
      <div id='resume' className="scroll-content" ref={sectionRefs[2]} data-index={2}>
        <Resume />
      </div>
      <div id='projects' className="scroll-content" ref={sectionRefs[3]} data-index={3}>
        <Services />
      </div>
      <div id='skills' className="scroll-content" ref={sectionRefs[4]} data-index={4}>
        <Skills />
      </div>
      <div id='contact' className="scroll-content" ref={sectionRefs[5]} data-index={5}>
        <Contact />
      </div>
    </section>
  );
};

export default SecondSection;
