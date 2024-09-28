import React from 'react';
import './Part.css'; // Optional: Add CSS for part styling

const Part = ({ title, content }) => {
  return (
    <div className="scroll-content">
      <h2>{title}</h2>
      <p>{content}</p>
    </div>
  );
};

export default Part;
