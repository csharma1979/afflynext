import React from 'react';
import './About.scss';

const About = () => {
  return (
    <div className="about">
      <div className="about-content">
        <h1>About AfflyNext</h1>
        <p>We are a results-driven digital marketing agency dedicated to helping businesses thrive in the digital world. Our team of experts combines creativity with data-driven strategies to deliver exceptional results.</p>
        <div className="mission-vision">
          <div className="mission">
            <h2>Our Mission</h2>
            <p>To empower businesses with innovative digital solutions that drive growth and success.</p>
          </div>
          <div className="vision">
            <h2>Our Vision</h2>
            <p>To be the leading digital marketing partner for businesses seeking sustainable online growth.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;