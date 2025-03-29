import React from 'react';
import { Link } from 'react-router-dom';
import './Services.scss';

const Services = () => {
  return (
    <div className="services">
      <h1>Our Services</h1>
      <div className="services-grid">
        <div className="service-card">
          <h3>Digital Marketing Strategy</h3>
          <p>Customized marketing solutions to boost your online presence</p>
        </div>
        <div className="service-card">
          <h3>SEO Optimization</h3>
          <p>Improve your search engine rankings and visibility</p>
        </div>
        <div className="service-card">
          <h3>Social Media Marketing</h3>
          <p>Engage with your audience across social platforms</p>
        </div>
        <Link to="/services/email-marketing" className="service-link">
          <div className="service-card">
            <h3>Email Marketing</h3>
            <p>Drive conversions with targeted email campaigns</p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Services;