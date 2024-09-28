import React, { useRef, useState, useEffect } from 'react';
import './BackgroundVideo.css';
import backgroundVideo from '../assets/background.mp4';
import FirstSection from './FirstSection'; // Your provided FirstSection
import SecondSection from './SecondSection'; // This will contain the sections related to the Floating Navbar
import FloatingNavbar from './FloatingNavbar';

const BackgroundWithSections = () => {
  const [activePartIndex, setActivePartIndex] = useState(0); // Default to 'Home' (index 0)

  // Create an array of refs for each part in the SecondSection
  const partRefs = [
    useRef(null), // Home
    useRef(null), // About
    useRef(null), // Resume
    useRef(null), // Services
    useRef(null), // Skills
    useRef(null), // Contact
  ];



  const handleScrollToPart = (partIndex) => {
    if (partRefs[partIndex].current) {
      partRefs[partIndex].current.scrollIntoView({ behavior: 'smooth' });
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

    partRefs.forEach((ref) => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, [partRefs]);

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
        <FirstSection sectionRefs={partRefs} /> {/* No changes here as requested */}
        <SecondSection sectionRefs={partRefs} /> {/* This will include the sections with scrolling */}
      </div>

      {/* Floating Navbar */}
      <FloatingNavbar handleScrollToPart={handleScrollToPart} activePartIndex={activePartIndex} />
    </div>
  );
};

export default BackgroundWithSections;
