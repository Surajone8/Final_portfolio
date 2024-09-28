import React, { useRef, useState, useEffect } from 'react';
import './BackgroundVideo.css';
import backgroundVideo from '../assets/background.mp4';
import FirstSection from './FirstSection';
import SecondSection from './SecondSection';
import FloatingNavbar from './FloatingNavbar';

const BackgroundWithSections = () => {
  const [activePartIndex, setActivePartIndex] = useState(0); // Default to 'Home' (index 0)

  // Create refs directly for each section
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const resumeRef = useRef(null);
  const servicesRef = useRef(null);
  const skillsRef = useRef(null);
  const contactRef = useRef(null);

  // Store refs in an array (useRef keeps the refs stable across renders)
  const partRefs = useRef([homeRef, aboutRef, resumeRef, servicesRef, skillsRef, contactRef]);

  const handleScrollToPart = (partIndex) => {
    if (partRefs.current[partIndex].current) {
      partRefs.current[partIndex].current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.dataset.index);
            setActivePartIndex(index);
          }
        });
      },
      { threshold: 0.5 } // Adjust threshold as needed
    );

    // Attach observer to each ref individually
    partRefs.current.forEach((ref) => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, []); // No dependencies needed because partRefs is stable

  return (
    <div className="page-container">
      {/* Background Video */}
      <div className="video-container">
        <video autoPlay loop muted className="background-video">
          <source src={backgroundVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Horizontal Sections */}
      <div className="horizontal-sections">
        <FirstSection sectionRefs={partRefs.current} /> {/* No changes here as requested */}
        <SecondSection sectionRefs={partRefs.current} /> {/* This will include the sections with scrolling */}
      </div>

      {/* Floating Navbar */}
      <FloatingNavbar handleScrollToPart={handleScrollToPart} activePartIndex={activePartIndex} />
    </div>
  );
};

export default BackgroundWithSections;
